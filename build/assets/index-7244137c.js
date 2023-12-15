function FR(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var vu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function td(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function QE(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var XE={exports:{}},nd={},JE={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ml=Symbol.for("react.element"),zR=Symbol.for("react.portal"),BR=Symbol.for("react.fragment"),HR=Symbol.for("react.strict_mode"),WR=Symbol.for("react.profiler"),qR=Symbol.for("react.provider"),GR=Symbol.for("react.context"),KR=Symbol.for("react.forward_ref"),YR=Symbol.for("react.suspense"),QR=Symbol.for("react.memo"),XR=Symbol.for("react.lazy"),M0=Symbol.iterator;function JR(t){return t===null||typeof t!="object"?null:(t=M0&&t[M0]||t["@@iterator"],typeof t=="function"?t:null)}var ZE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},eS=Object.assign,tS={};function Ns(t,e,n){this.props=t,this.context=e,this.refs=tS,this.updater=n||ZE}Ns.prototype.isReactComponent={};Ns.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ns.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function nS(){}nS.prototype=Ns.prototype;function Yg(t,e,n){this.props=t,this.context=e,this.refs=tS,this.updater=n||ZE}var Qg=Yg.prototype=new nS;Qg.constructor=Yg;eS(Qg,Ns.prototype);Qg.isPureReactComponent=!0;var j0=Array.isArray,rS=Object.prototype.hasOwnProperty,Xg={current:null},iS={key:!0,ref:!0,__self:!0,__source:!0};function oS(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)rS.call(e,r)&&!iS.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ml,type:t,key:o,ref:s,props:i,_owner:Xg.current}}function ZR(t,e){return{$$typeof:Ml,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jg(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ml}function eP(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $0=/\/+/g;function wh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?eP(""+t.key):e.toString(36)}function lc(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Ml:case zR:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+wh(s,0):r,j0(i)?(n="",t!=null&&(n=t.replace($0,"$&/")+"/"),lc(i,e,n,"",function(u){return u})):i!=null&&(Jg(i)&&(i=ZR(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace($0,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",j0(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+wh(o,a);s+=lc(o,e,n,l,i)}else if(l=JR(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+wh(o,a++),s+=lc(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function yu(t,e,n){if(t==null)return t;var r=[],i=0;return lc(t,r,"","",function(o){return e.call(n,o,i++)}),r}function tP(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Dt={current:null},uc={transition:null},nP={ReactCurrentDispatcher:Dt,ReactCurrentBatchConfig:uc,ReactCurrentOwner:Xg};de.Children={map:yu,forEach:function(t,e,n){yu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return yu(t,function(){e++}),e},toArray:function(t){return yu(t,function(e){return e})||[]},only:function(t){if(!Jg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};de.Component=Ns;de.Fragment=BR;de.Profiler=WR;de.PureComponent=Yg;de.StrictMode=HR;de.Suspense=YR;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nP;de.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=eS({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Xg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)rS.call(e,l)&&!iS.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ml,type:t.type,key:i,ref:o,props:r,_owner:s}};de.createContext=function(t){return t={$$typeof:GR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:qR,_context:t},t.Consumer=t};de.createElement=oS;de.createFactory=function(t){var e=oS.bind(null,t);return e.type=t,e};de.createRef=function(){return{current:null}};de.forwardRef=function(t){return{$$typeof:KR,render:t}};de.isValidElement=Jg;de.lazy=function(t){return{$$typeof:XR,_payload:{_status:-1,_result:t},_init:tP}};de.memo=function(t,e){return{$$typeof:QR,type:t,compare:e===void 0?null:e}};de.startTransition=function(t){var e=uc.transition;uc.transition={};try{t()}finally{uc.transition=e}};de.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};de.useCallback=function(t,e){return Dt.current.useCallback(t,e)};de.useContext=function(t){return Dt.current.useContext(t)};de.useDebugValue=function(){};de.useDeferredValue=function(t){return Dt.current.useDeferredValue(t)};de.useEffect=function(t,e){return Dt.current.useEffect(t,e)};de.useId=function(){return Dt.current.useId()};de.useImperativeHandle=function(t,e,n){return Dt.current.useImperativeHandle(t,e,n)};de.useInsertionEffect=function(t,e){return Dt.current.useInsertionEffect(t,e)};de.useLayoutEffect=function(t,e){return Dt.current.useLayoutEffect(t,e)};de.useMemo=function(t,e){return Dt.current.useMemo(t,e)};de.useReducer=function(t,e,n){return Dt.current.useReducer(t,e,n)};de.useRef=function(t){return Dt.current.useRef(t)};de.useState=function(t){return Dt.current.useState(t)};de.useSyncExternalStore=function(t,e,n){return Dt.current.useSyncExternalStore(t,e,n)};de.useTransition=function(){return Dt.current.useTransition()};de.version="18.2.0";JE.exports=de;var A=JE.exports;const Ht=td(A),rP=FR({__proto__:null,default:Ht},[A]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iP=A,oP=Symbol.for("react.element"),sP=Symbol.for("react.fragment"),aP=Object.prototype.hasOwnProperty,lP=iP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,uP={key:!0,ref:!0,__self:!0,__source:!0};function sS(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)aP.call(e,r)&&!uP.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:oP,type:t,key:o,ref:s,props:i,_owner:lP.current}}nd.Fragment=sP;nd.jsx=sS;nd.jsxs=sS;XE.exports=nd;var h=XE.exports,Dp={},aS={exports:{}},Qt={},lS={exports:{}},uS={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,j){var V=I.length;I.push(j);e:for(;0<V;){var K=V-1>>>1,oe=I[K];if(0<i(oe,j))I[K]=j,I[V]=oe,V=K;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var j=I[0],V=I.pop();if(V!==j){I[0]=V;e:for(var K=0,oe=I.length,Ze=oe>>>1;K<Ze;){var Ae=2*(K+1)-1,hn=I[Ae],Mt=Ae+1,Zt=I[Mt];if(0>i(hn,V))Mt<oe&&0>i(Zt,hn)?(I[K]=Zt,I[Mt]=V,K=Mt):(I[K]=hn,I[Ae]=V,K=Ae);else if(Mt<oe&&0>i(Zt,V))I[K]=Zt,I[Mt]=V,K=Mt;else break e}}return j}function i(I,j){var V=I.sortIndex-j.sortIndex;return V!==0?V:I.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,d=3,p=!1,y=!1,_=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=I)r(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function E(I){if(_=!1,v(I),!y)if(n(l)!==null)y=!0,ue(S);else{var j=n(u);j!==null&&x(E,j.startTime-I)}}function S(I,j){y=!1,_&&(_=!1,g(k),k=-1),p=!0;var V=d;try{for(v(j),f=n(l);f!==null&&(!(f.expirationTime>j)||I&&!Q());){var K=f.callback;if(typeof K=="function"){f.callback=null,d=f.priorityLevel;var oe=K(f.expirationTime<=j);j=t.unstable_now(),typeof oe=="function"?f.callback=oe:f===n(l)&&r(l),v(j)}else r(l);f=n(l)}if(f!==null)var Ze=!0;else{var Ae=n(u);Ae!==null&&x(E,Ae.startTime-j),Ze=!1}return Ze}finally{f=null,d=V,p=!1}}var T=!1,b=null,k=-1,R=5,D=-1;function Q(){return!(t.unstable_now()-D<R)}function W(){if(b!==null){var I=t.unstable_now();D=I;var j=!0;try{j=b(!0,I)}finally{j?H():(T=!1,b=null)}}else T=!1}var H;if(typeof m=="function")H=function(){m(W)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,F=q.port2;q.port1.onmessage=W,H=function(){F.postMessage(null)}}else H=function(){w(W,0)};function ue(I){b=I,T||(T=!0,H())}function x(I,j){k=w(function(){I(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,ue(S))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var V=d;d=j;try{return I()}finally{d=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,j){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var V=d;d=I;try{return j()}finally{d=V}},t.unstable_scheduleCallback=function(I,j,V){var K=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?K+V:K):V=K,I){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=V+oe,I={id:c++,callback:j,priorityLevel:I,startTime:V,expirationTime:oe,sortIndex:-1},V>K?(I.sortIndex=V,e(u,I),n(l)===null&&I===n(u)&&(_?(g(k),k=-1):_=!0,x(E,V-K))):(I.sortIndex=oe,e(l,I),y||p||(y=!0,ue(S))),I},t.unstable_shouldYield=Q,t.unstable_wrapCallback=function(I){var j=d;return function(){var V=d;d=j;try{return I.apply(this,arguments)}finally{d=V}}}})(uS);lS.exports=uS;var cP=lS.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cS=A,Kt=cP;function N(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fS=new Set,za={};function fo(t,e){us(t,e),us(t+"Capture",e)}function us(t,e){for(za[t]=e,t=0;t<e.length;t++)fS.add(e[t])}var dr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lp=Object.prototype.hasOwnProperty,fP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,V0={},U0={};function dP(t){return Lp.call(U0,t)?!0:Lp.call(V0,t)?!1:fP.test(t)?U0[t]=!0:(V0[t]=!0,!1)}function hP(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function pP(t,e,n,r){if(e===null||typeof e>"u"||hP(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Lt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ht[t]=new Lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ht[e]=new Lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ht[t]=new Lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ht[t]=new Lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ht[t]=new Lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ht[t]=new Lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ht[t]=new Lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ht[t]=new Lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ht[t]=new Lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zg=/[\-:]([a-z])/g;function ev(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zg,ev);ht[e]=new Lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zg,ev);ht[e]=new Lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zg,ev);ht[e]=new Lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ht[t]=new Lt(t,1,!1,t.toLowerCase(),null,!1,!1)});ht.xlinkHref=new Lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ht[t]=new Lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function tv(t,e,n,r){var i=ht.hasOwnProperty(e)?ht[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(pP(e,n,i,r)&&(n=null),r||i===null?dP(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var br=cS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_u=Symbol.for("react.element"),Po=Symbol.for("react.portal"),Ao=Symbol.for("react.fragment"),nv=Symbol.for("react.strict_mode"),Mp=Symbol.for("react.profiler"),dS=Symbol.for("react.provider"),hS=Symbol.for("react.context"),rv=Symbol.for("react.forward_ref"),jp=Symbol.for("react.suspense"),$p=Symbol.for("react.suspense_list"),iv=Symbol.for("react.memo"),Mr=Symbol.for("react.lazy"),pS=Symbol.for("react.offscreen"),F0=Symbol.iterator;function Qs(t){return t===null||typeof t!="object"?null:(t=F0&&t[F0]||t["@@iterator"],typeof t=="function"?t:null)}var Le=Object.assign,Eh;function la(t){if(Eh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Eh=e&&e[1]||""}return`
`+Eh+t}var Sh=!1;function Th(t,e){if(!t||Sh)return"";Sh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Sh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?la(t):""}function mP(t){switch(t.tag){case 5:return la(t.type);case 16:return la("Lazy");case 13:return la("Suspense");case 19:return la("SuspenseList");case 0:case 2:case 15:return t=Th(t.type,!1),t;case 11:return t=Th(t.type.render,!1),t;case 1:return t=Th(t.type,!0),t;default:return""}}function Vp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ao:return"Fragment";case Po:return"Portal";case Mp:return"Profiler";case nv:return"StrictMode";case jp:return"Suspense";case $p:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case hS:return(t.displayName||"Context")+".Consumer";case dS:return(t._context.displayName||"Context")+".Provider";case rv:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case iv:return e=t.displayName||null,e!==null?e:Vp(t.type)||"Memo";case Mr:e=t._payload,t=t._init;try{return Vp(t(e))}catch{}}return null}function gP(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vp(e);case 8:return e===nv?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ci(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mS(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function vP(t){var e=mS(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function wu(t){t._valueTracker||(t._valueTracker=vP(t))}function gS(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=mS(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Lc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Up(t,e){var n=e.checked;return Le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function z0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ci(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vS(t,e){e=e.checked,e!=null&&tv(t,"checked",e,!1)}function Fp(t,e){vS(t,e);var n=ci(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zp(t,e.type,n):e.hasOwnProperty("defaultValue")&&zp(t,e.type,ci(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function B0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function zp(t,e,n){(e!=="number"||Lc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ua=Array.isArray;function Yo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ci(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Bp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(N(91));return Le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function H0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(N(92));if(ua(n)){if(1<n.length)throw Error(N(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ci(n)}}function yS(t,e){var n=ci(e.value),r=ci(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function W0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function _S(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?_S(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Eu,wS=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Eu=Eu||document.createElement("div"),Eu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Eu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ba(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var wa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yP=["Webkit","ms","Moz","O"];Object.keys(wa).forEach(function(t){yP.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),wa[e]=wa[t]})});function ES(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||wa.hasOwnProperty(t)&&wa[t]?(""+e).trim():e+"px"}function SS(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ES(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var _P=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wp(t,e){if(e){if(_P[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(N(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(N(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(N(61))}if(e.style!=null&&typeof e.style!="object")throw Error(N(62))}}function qp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gp=null;function ov(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Kp=null,Qo=null,Xo=null;function q0(t){if(t=Vl(t)){if(typeof Kp!="function")throw Error(N(280));var e=t.stateNode;e&&(e=ad(e),Kp(t.stateNode,t.type,e))}}function TS(t){Qo?Xo?Xo.push(t):Xo=[t]:Qo=t}function bS(){if(Qo){var t=Qo,e=Xo;if(Xo=Qo=null,q0(t),e)for(t=0;t<e.length;t++)q0(e[t])}}function kS(t,e){return t(e)}function xS(){}var bh=!1;function IS(t,e,n){if(bh)return t(e,n);bh=!0;try{return kS(t,e,n)}finally{bh=!1,(Qo!==null||Xo!==null)&&(xS(),bS())}}function Ha(t,e){var n=t.stateNode;if(n===null)return null;var r=ad(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(N(231,e,typeof n));return n}var Yp=!1;if(dr)try{var Xs={};Object.defineProperty(Xs,"passive",{get:function(){Yp=!0}}),window.addEventListener("test",Xs,Xs),window.removeEventListener("test",Xs,Xs)}catch{Yp=!1}function wP(t,e,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ea=!1,Mc=null,jc=!1,Qp=null,EP={onError:function(t){Ea=!0,Mc=t}};function SP(t,e,n,r,i,o,s,a,l){Ea=!1,Mc=null,wP.apply(EP,arguments)}function TP(t,e,n,r,i,o,s,a,l){if(SP.apply(this,arguments),Ea){if(Ea){var u=Mc;Ea=!1,Mc=null}else throw Error(N(198));jc||(jc=!0,Qp=u)}}function ho(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function CS(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function G0(t){if(ho(t)!==t)throw Error(N(188))}function bP(t){var e=t.alternate;if(!e){if(e=ho(t),e===null)throw Error(N(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return G0(i),t;if(o===r)return G0(i),e;o=o.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?t:e}function RS(t){return t=bP(t),t!==null?PS(t):null}function PS(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=PS(t);if(e!==null)return e;t=t.sibling}return null}var AS=Kt.unstable_scheduleCallback,K0=Kt.unstable_cancelCallback,kP=Kt.unstable_shouldYield,xP=Kt.unstable_requestPaint,Fe=Kt.unstable_now,IP=Kt.unstable_getCurrentPriorityLevel,sv=Kt.unstable_ImmediatePriority,OS=Kt.unstable_UserBlockingPriority,$c=Kt.unstable_NormalPriority,CP=Kt.unstable_LowPriority,NS=Kt.unstable_IdlePriority,rd=null,zn=null;function RP(t){if(zn&&typeof zn.onCommitFiberRoot=="function")try{zn.onCommitFiberRoot(rd,t,void 0,(t.current.flags&128)===128)}catch{}}var Sn=Math.clz32?Math.clz32:OP,PP=Math.log,AP=Math.LN2;function OP(t){return t>>>=0,t===0?32:31-(PP(t)/AP|0)|0}var Su=64,Tu=4194304;function ca(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=ca(a):(o&=s,o!==0&&(r=ca(o)))}else s=n&~i,s!==0?r=ca(s):o!==0&&(r=ca(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Sn(e),i=1<<n,r|=t[n],e&=~i;return r}function NP(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function DP(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Sn(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=NP(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Xp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function DS(){var t=Su;return Su<<=1,!(Su&4194240)&&(Su=64),t}function kh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function jl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Sn(e),t[e]=n}function LP(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Sn(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function av(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Sn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ve=0;function LS(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var MS,lv,jS,$S,VS,Jp=!1,bu=[],Xr=null,Jr=null,Zr=null,Wa=new Map,qa=new Map,Vr=[],MP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Y0(t,e){switch(t){case"focusin":case"focusout":Xr=null;break;case"dragenter":case"dragleave":Jr=null;break;case"mouseover":case"mouseout":Zr=null;break;case"pointerover":case"pointerout":Wa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qa.delete(e.pointerId)}}function Js(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Vl(e),e!==null&&lv(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function jP(t,e,n,r,i){switch(e){case"focusin":return Xr=Js(Xr,t,e,n,r,i),!0;case"dragenter":return Jr=Js(Jr,t,e,n,r,i),!0;case"mouseover":return Zr=Js(Zr,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Wa.set(o,Js(Wa.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,qa.set(o,Js(qa.get(o)||null,t,e,n,r,i)),!0}return!1}function US(t){var e=Ni(t.target);if(e!==null){var n=ho(e);if(n!==null){if(e=n.tag,e===13){if(e=CS(n),e!==null){t.blockedOn=e,VS(t.priority,function(){jS(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Zp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Gp=r,n.target.dispatchEvent(r),Gp=null}else return e=Vl(n),e!==null&&lv(e),t.blockedOn=n,!1;e.shift()}return!0}function Q0(t,e,n){cc(t)&&n.delete(e)}function $P(){Jp=!1,Xr!==null&&cc(Xr)&&(Xr=null),Jr!==null&&cc(Jr)&&(Jr=null),Zr!==null&&cc(Zr)&&(Zr=null),Wa.forEach(Q0),qa.forEach(Q0)}function Zs(t,e){t.blockedOn===e&&(t.blockedOn=null,Jp||(Jp=!0,Kt.unstable_scheduleCallback(Kt.unstable_NormalPriority,$P)))}function Ga(t){function e(i){return Zs(i,t)}if(0<bu.length){Zs(bu[0],t);for(var n=1;n<bu.length;n++){var r=bu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Xr!==null&&Zs(Xr,t),Jr!==null&&Zs(Jr,t),Zr!==null&&Zs(Zr,t),Wa.forEach(e),qa.forEach(e),n=0;n<Vr.length;n++)r=Vr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Vr.length&&(n=Vr[0],n.blockedOn===null);)US(n),n.blockedOn===null&&Vr.shift()}var Jo=br.ReactCurrentBatchConfig,Uc=!0;function VP(t,e,n,r){var i=ve,o=Jo.transition;Jo.transition=null;try{ve=1,uv(t,e,n,r)}finally{ve=i,Jo.transition=o}}function UP(t,e,n,r){var i=ve,o=Jo.transition;Jo.transition=null;try{ve=4,uv(t,e,n,r)}finally{ve=i,Jo.transition=o}}function uv(t,e,n,r){if(Uc){var i=Zp(t,e,n,r);if(i===null)Lh(t,e,r,Fc,n),Y0(t,r);else if(jP(i,t,e,n,r))r.stopPropagation();else if(Y0(t,r),e&4&&-1<MP.indexOf(t)){for(;i!==null;){var o=Vl(i);if(o!==null&&MS(o),o=Zp(t,e,n,r),o===null&&Lh(t,e,r,Fc,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Lh(t,e,r,null,n)}}var Fc=null;function Zp(t,e,n,r){if(Fc=null,t=ov(r),t=Ni(t),t!==null)if(e=ho(t),e===null)t=null;else if(n=e.tag,n===13){if(t=CS(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fc=t,null}function FS(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(IP()){case sv:return 1;case OS:return 4;case $c:case CP:return 16;case NS:return 536870912;default:return 16}default:return 16}}var Wr=null,cv=null,fc=null;function zS(){if(fc)return fc;var t,e=cv,n=e.length,r,i="value"in Wr?Wr.value:Wr.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return fc=i.slice(t,1<r?1-r:void 0)}function dc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ku(){return!0}function X0(){return!1}function Xt(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ku:X0,this.isPropagationStopped=X0,this}return Le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ku)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ku)},persist:function(){},isPersistent:ku}),e}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fv=Xt(Ds),$l=Le({},Ds,{view:0,detail:0}),FP=Xt($l),xh,Ih,ea,id=Le({},$l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dv,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ea&&(ea&&t.type==="mousemove"?(xh=t.screenX-ea.screenX,Ih=t.screenY-ea.screenY):Ih=xh=0,ea=t),xh)},movementY:function(t){return"movementY"in t?t.movementY:Ih}}),J0=Xt(id),zP=Le({},id,{dataTransfer:0}),BP=Xt(zP),HP=Le({},$l,{relatedTarget:0}),Ch=Xt(HP),WP=Le({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),qP=Xt(WP),GP=Le({},Ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),KP=Xt(GP),YP=Le({},Ds,{data:0}),Z0=Xt(YP),QP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},XP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},JP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ZP(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=JP[t])?!!e[t]:!1}function dv(){return ZP}var eA=Le({},$l,{key:function(t){if(t.key){var e=QP[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=dc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?XP[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dv,charCode:function(t){return t.type==="keypress"?dc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),tA=Xt(eA),nA=Le({},id,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),e_=Xt(nA),rA=Le({},$l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dv}),iA=Xt(rA),oA=Le({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),sA=Xt(oA),aA=Le({},id,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lA=Xt(aA),uA=[9,13,27,32],hv=dr&&"CompositionEvent"in window,Sa=null;dr&&"documentMode"in document&&(Sa=document.documentMode);var cA=dr&&"TextEvent"in window&&!Sa,BS=dr&&(!hv||Sa&&8<Sa&&11>=Sa),t_=String.fromCharCode(32),n_=!1;function HS(t,e){switch(t){case"keyup":return uA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function WS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Oo=!1;function fA(t,e){switch(t){case"compositionend":return WS(e);case"keypress":return e.which!==32?null:(n_=!0,t_);case"textInput":return t=e.data,t===t_&&n_?null:t;default:return null}}function dA(t,e){if(Oo)return t==="compositionend"||!hv&&HS(t,e)?(t=zS(),fc=cv=Wr=null,Oo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return BS&&e.locale!=="ko"?null:e.data;default:return null}}var hA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function r_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!hA[t.type]:e==="textarea"}function qS(t,e,n,r){TS(r),e=zc(e,"onChange"),0<e.length&&(n=new fv("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ta=null,Ka=null;function pA(t){rT(t,0)}function od(t){var e=Lo(t);if(gS(e))return t}function mA(t,e){if(t==="change")return e}var GS=!1;if(dr){var Rh;if(dr){var Ph="oninput"in document;if(!Ph){var i_=document.createElement("div");i_.setAttribute("oninput","return;"),Ph=typeof i_.oninput=="function"}Rh=Ph}else Rh=!1;GS=Rh&&(!document.documentMode||9<document.documentMode)}function o_(){Ta&&(Ta.detachEvent("onpropertychange",KS),Ka=Ta=null)}function KS(t){if(t.propertyName==="value"&&od(Ka)){var e=[];qS(e,Ka,t,ov(t)),IS(pA,e)}}function gA(t,e,n){t==="focusin"?(o_(),Ta=e,Ka=n,Ta.attachEvent("onpropertychange",KS)):t==="focusout"&&o_()}function vA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return od(Ka)}function yA(t,e){if(t==="click")return od(e)}function _A(t,e){if(t==="input"||t==="change")return od(e)}function wA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var In=typeof Object.is=="function"?Object.is:wA;function Ya(t,e){if(In(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Lp.call(e,i)||!In(t[i],e[i]))return!1}return!0}function s_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function a_(t,e){var n=s_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=s_(n)}}function YS(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?YS(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function QS(){for(var t=window,e=Lc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Lc(t.document)}return e}function pv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function EA(t){var e=QS(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&YS(n.ownerDocument.documentElement,n)){if(r!==null&&pv(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=a_(n,o);var s=a_(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var SA=dr&&"documentMode"in document&&11>=document.documentMode,No=null,em=null,ba=null,tm=!1;function l_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tm||No==null||No!==Lc(r)||(r=No,"selectionStart"in r&&pv(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ba&&Ya(ba,r)||(ba=r,r=zc(em,"onSelect"),0<r.length&&(e=new fv("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=No)))}function xu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Do={animationend:xu("Animation","AnimationEnd"),animationiteration:xu("Animation","AnimationIteration"),animationstart:xu("Animation","AnimationStart"),transitionend:xu("Transition","TransitionEnd")},Ah={},XS={};dr&&(XS=document.createElement("div").style,"AnimationEvent"in window||(delete Do.animationend.animation,delete Do.animationiteration.animation,delete Do.animationstart.animation),"TransitionEvent"in window||delete Do.transitionend.transition);function sd(t){if(Ah[t])return Ah[t];if(!Do[t])return t;var e=Do[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in XS)return Ah[t]=e[n];return t}var JS=sd("animationend"),ZS=sd("animationiteration"),eT=sd("animationstart"),tT=sd("transitionend"),nT=new Map,u_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wi(t,e){nT.set(t,e),fo(e,[t])}for(var Oh=0;Oh<u_.length;Oh++){var Nh=u_[Oh],TA=Nh.toLowerCase(),bA=Nh[0].toUpperCase()+Nh.slice(1);wi(TA,"on"+bA)}wi(JS,"onAnimationEnd");wi(ZS,"onAnimationIteration");wi(eT,"onAnimationStart");wi("dblclick","onDoubleClick");wi("focusin","onFocus");wi("focusout","onBlur");wi(tT,"onTransitionEnd");us("onMouseEnter",["mouseout","mouseover"]);us("onMouseLeave",["mouseout","mouseover"]);us("onPointerEnter",["pointerout","pointerover"]);us("onPointerLeave",["pointerout","pointerover"]);fo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fo("onBeforeInput",["compositionend","keypress","textInput","paste"]);fo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kA=new Set("cancel close invalid load scroll toggle".split(" ").concat(fa));function c_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,TP(r,e,void 0,t),t.currentTarget=null}function rT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;c_(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;c_(i,a,u),o=l}}}if(jc)throw t=Qp,jc=!1,Qp=null,t}function Ee(t,e){var n=e[sm];n===void 0&&(n=e[sm]=new Set);var r=t+"__bubble";n.has(r)||(iT(e,t,2,!1),n.add(r))}function Dh(t,e,n){var r=0;e&&(r|=4),iT(n,t,r,e)}var Iu="_reactListening"+Math.random().toString(36).slice(2);function Qa(t){if(!t[Iu]){t[Iu]=!0,fS.forEach(function(n){n!=="selectionchange"&&(kA.has(n)||Dh(n,!1,t),Dh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Iu]||(e[Iu]=!0,Dh("selectionchange",!1,e))}}function iT(t,e,n,r){switch(FS(e)){case 1:var i=VP;break;case 4:i=UP;break;default:i=uv}n=i.bind(null,e,n,t),i=void 0,!Yp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Lh(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Ni(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}IS(function(){var u=o,c=ov(n),f=[];e:{var d=nT.get(t);if(d!==void 0){var p=fv,y=t;switch(t){case"keypress":if(dc(n)===0)break e;case"keydown":case"keyup":p=tA;break;case"focusin":y="focus",p=Ch;break;case"focusout":y="blur",p=Ch;break;case"beforeblur":case"afterblur":p=Ch;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=J0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=BP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=iA;break;case JS:case ZS:case eT:p=qP;break;case tT:p=sA;break;case"scroll":p=FP;break;case"wheel":p=lA;break;case"copy":case"cut":case"paste":p=KP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=e_}var _=(e&4)!==0,w=!_&&t==="scroll",g=_?d!==null?d+"Capture":null:d;_=[];for(var m=u,v;m!==null;){v=m;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,g!==null&&(E=Ha(m,g),E!=null&&_.push(Xa(m,E,v)))),w)break;m=m.return}0<_.length&&(d=new p(d,y,null,n,c),f.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Gp&&(y=n.relatedTarget||n.fromElement)&&(Ni(y)||y[hr]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?Ni(y):null,y!==null&&(w=ho(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(_=J0,E="onMouseLeave",g="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(_=e_,E="onPointerLeave",g="onPointerEnter",m="pointer"),w=p==null?d:Lo(p),v=y==null?d:Lo(y),d=new _(E,m+"leave",p,n,c),d.target=w,d.relatedTarget=v,E=null,Ni(c)===u&&(_=new _(g,m+"enter",y,n,c),_.target=v,_.relatedTarget=w,E=_),w=E,p&&y)t:{for(_=p,g=y,m=0,v=_;v;v=wo(v))m++;for(v=0,E=g;E;E=wo(E))v++;for(;0<m-v;)_=wo(_),m--;for(;0<v-m;)g=wo(g),v--;for(;m--;){if(_===g||g!==null&&_===g.alternate)break t;_=wo(_),g=wo(g)}_=null}else _=null;p!==null&&f_(f,d,p,_,!1),y!==null&&w!==null&&f_(f,w,y,_,!0)}}e:{if(d=u?Lo(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var S=mA;else if(r_(d))if(GS)S=_A;else{S=vA;var T=gA}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=yA);if(S&&(S=S(t,u))){qS(f,S,n,c);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&zp(d,"number",d.value)}switch(T=u?Lo(u):window,t){case"focusin":(r_(T)||T.contentEditable==="true")&&(No=T,em=u,ba=null);break;case"focusout":ba=em=No=null;break;case"mousedown":tm=!0;break;case"contextmenu":case"mouseup":case"dragend":tm=!1,l_(f,n,c);break;case"selectionchange":if(SA)break;case"keydown":case"keyup":l_(f,n,c)}var b;if(hv)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Oo?HS(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(BS&&n.locale!=="ko"&&(Oo||k!=="onCompositionStart"?k==="onCompositionEnd"&&Oo&&(b=zS()):(Wr=c,cv="value"in Wr?Wr.value:Wr.textContent,Oo=!0)),T=zc(u,k),0<T.length&&(k=new Z0(k,t,null,n,c),f.push({event:k,listeners:T}),b?k.data=b:(b=WS(n),b!==null&&(k.data=b)))),(b=cA?fA(t,n):dA(t,n))&&(u=zc(u,"onBeforeInput"),0<u.length&&(c=new Z0("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=b))}rT(f,e)})}function Xa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function zc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ha(t,n),o!=null&&r.unshift(Xa(t,o,i)),o=Ha(t,e),o!=null&&r.push(Xa(t,o,i))),t=t.return}return r}function wo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function f_(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ha(n,o),l!=null&&s.unshift(Xa(n,l,a))):i||(l=Ha(n,o),l!=null&&s.push(Xa(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var xA=/\r\n?/g,IA=/\u0000|\uFFFD/g;function d_(t){return(typeof t=="string"?t:""+t).replace(xA,`
`).replace(IA,"")}function Cu(t,e,n){if(e=d_(e),d_(t)!==e&&n)throw Error(N(425))}function Bc(){}var nm=null,rm=null;function im(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var om=typeof setTimeout=="function"?setTimeout:void 0,CA=typeof clearTimeout=="function"?clearTimeout:void 0,h_=typeof Promise=="function"?Promise:void 0,RA=typeof queueMicrotask=="function"?queueMicrotask:typeof h_<"u"?function(t){return h_.resolve(null).then(t).catch(PA)}:om;function PA(t){setTimeout(function(){throw t})}function Mh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ga(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ga(e)}function ei(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function p_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),Mn="__reactFiber$"+Ls,Ja="__reactProps$"+Ls,hr="__reactContainer$"+Ls,sm="__reactEvents$"+Ls,AA="__reactListeners$"+Ls,OA="__reactHandles$"+Ls;function Ni(t){var e=t[Mn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[hr]||n[Mn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=p_(t);t!==null;){if(n=t[Mn])return n;t=p_(t)}return e}t=n,n=t.parentNode}return null}function Vl(t){return t=t[Mn]||t[hr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Lo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(N(33))}function ad(t){return t[Ja]||null}var am=[],Mo=-1;function Ei(t){return{current:t}}function ke(t){0>Mo||(t.current=am[Mo],am[Mo]=null,Mo--)}function _e(t,e){Mo++,am[Mo]=t.current,t.current=e}var fi={},kt=Ei(fi),Ut=Ei(!1),Qi=fi;function cs(t,e){var n=t.type.contextTypes;if(!n)return fi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ft(t){return t=t.childContextTypes,t!=null}function Hc(){ke(Ut),ke(kt)}function m_(t,e,n){if(kt.current!==fi)throw Error(N(168));_e(kt,e),_e(Ut,n)}function oT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(N(108,gP(t)||"Unknown",i));return Le({},n,r)}function Wc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fi,Qi=kt.current,_e(kt,t),_e(Ut,Ut.current),!0}function g_(t,e,n){var r=t.stateNode;if(!r)throw Error(N(169));n?(t=oT(t,e,Qi),r.__reactInternalMemoizedMergedChildContext=t,ke(Ut),ke(kt),_e(kt,t)):ke(Ut),_e(Ut,n)}var er=null,ld=!1,jh=!1;function sT(t){er===null?er=[t]:er.push(t)}function NA(t){ld=!0,sT(t)}function Si(){if(!jh&&er!==null){jh=!0;var t=0,e=ve;try{var n=er;for(ve=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}er=null,ld=!1}catch(i){throw er!==null&&(er=er.slice(t+1)),AS(sv,Si),i}finally{ve=e,jh=!1}}return null}var jo=[],$o=0,qc=null,Gc=0,nn=[],rn=0,Xi=null,rr=1,ir="";function Ri(t,e){jo[$o++]=Gc,jo[$o++]=qc,qc=t,Gc=e}function aT(t,e,n){nn[rn++]=rr,nn[rn++]=ir,nn[rn++]=Xi,Xi=t;var r=rr;t=ir;var i=32-Sn(r)-1;r&=~(1<<i),n+=1;var o=32-Sn(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,rr=1<<32-Sn(e)+i|n<<i|r,ir=o+t}else rr=1<<o|n<<i|r,ir=t}function mv(t){t.return!==null&&(Ri(t,1),aT(t,1,0))}function gv(t){for(;t===qc;)qc=jo[--$o],jo[$o]=null,Gc=jo[--$o],jo[$o]=null;for(;t===Xi;)Xi=nn[--rn],nn[rn]=null,ir=nn[--rn],nn[rn]=null,rr=nn[--rn],nn[rn]=null}var qt=null,Wt=null,Re=!1,yn=null;function lT(t,e){var n=an(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function v_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,qt=t,Wt=ei(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,qt=t,Wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xi!==null?{id:rr,overflow:ir}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=an(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,qt=t,Wt=null,!0):!1;default:return!1}}function lm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function um(t){if(Re){var e=Wt;if(e){var n=e;if(!v_(t,e)){if(lm(t))throw Error(N(418));e=ei(n.nextSibling);var r=qt;e&&v_(t,e)?lT(r,n):(t.flags=t.flags&-4097|2,Re=!1,qt=t)}}else{if(lm(t))throw Error(N(418));t.flags=t.flags&-4097|2,Re=!1,qt=t}}}function y_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;qt=t}function Ru(t){if(t!==qt)return!1;if(!Re)return y_(t),Re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!im(t.type,t.memoizedProps)),e&&(e=Wt)){if(lm(t))throw uT(),Error(N(418));for(;e;)lT(t,e),e=ei(e.nextSibling)}if(y_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(N(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Wt=ei(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Wt=null}}else Wt=qt?ei(t.stateNode.nextSibling):null;return!0}function uT(){for(var t=Wt;t;)t=ei(t.nextSibling)}function fs(){Wt=qt=null,Re=!1}function vv(t){yn===null?yn=[t]:yn.push(t)}var DA=br.ReactCurrentBatchConfig;function mn(t,e){if(t&&t.defaultProps){e=Le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Kc=Ei(null),Yc=null,Vo=null,yv=null;function _v(){yv=Vo=Yc=null}function wv(t){var e=Kc.current;ke(Kc),t._currentValue=e}function cm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Zo(t,e){Yc=t,yv=Vo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Vt=!0),t.firstContext=null)}function cn(t){var e=t._currentValue;if(yv!==t)if(t={context:t,memoizedValue:e,next:null},Vo===null){if(Yc===null)throw Error(N(308));Vo=t,Yc.dependencies={lanes:0,firstContext:t}}else Vo=Vo.next=t;return e}var Di=null;function Ev(t){Di===null?Di=[t]:Di.push(t)}function cT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ev(e)):(n.next=i.next,i.next=n),e.interleaved=n,pr(t,r)}function pr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var jr=!1;function Sv(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function lr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ti(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,pr(t,n)}return i=r.interleaved,i===null?(e.next=e,Ev(r)):(e.next=i.next,i.next=e),r.interleaved=e,pr(t,n)}function hc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,av(t,n)}}function __(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Qc(t,e,n,r){var i=t.updateQueue;jr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(d=e,p=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){f=y.call(p,f,d);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,d=typeof y=="function"?y.call(p,f,d):y,d==null)break e;f=Le({},f,d);break e;case 2:jr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,s|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Zi|=s,t.lanes=s,t.memoizedState=f}}function w_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var dT=new cS.Component().refs;function fm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ud={isMounted:function(t){return(t=t._reactInternals)?ho(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=ri(t),o=lr(r,i);o.payload=e,n!=null&&(o.callback=n),e=ti(t,o,i),e!==null&&(Tn(e,t,i,r),hc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=ri(t),o=lr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=ti(t,o,i),e!==null&&(Tn(e,t,i,r),hc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Nt(),r=ri(t),i=lr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ti(t,i,r),e!==null&&(Tn(e,t,r,n),hc(e,t,r))}};function E_(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Ya(n,r)||!Ya(i,o):!0}function hT(t,e,n){var r=!1,i=fi,o=e.contextType;return typeof o=="object"&&o!==null?o=cn(o):(i=Ft(e)?Qi:kt.current,r=e.contextTypes,o=(r=r!=null)?cs(t,i):fi),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ud,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function S_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ud.enqueueReplaceState(e,e.state,null)}function dm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=dT,Sv(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=cn(o):(o=Ft(e)?Qi:kt.current,i.context=cs(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(fm(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ud.enqueueReplaceState(i,i.state,null),Qc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ta(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===dT&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,t))}return t}function Pu(t,e){throw t=Object.prototype.toString.call(e),Error(N(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function T_(t){var e=t._init;return e(t._payload)}function pT(t){function e(g,m){if(t){var v=g.deletions;v===null?(g.deletions=[m],g.flags|=16):v.push(m)}}function n(g,m){if(!t)return null;for(;m!==null;)e(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=ii(g,m),g.index=0,g.sibling=null,g}function o(g,m,v){return g.index=v,t?(v=g.alternate,v!==null?(v=v.index,v<m?(g.flags|=2,m):v):(g.flags|=2,m)):(g.flags|=1048576,m)}function s(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,m,v,E){return m===null||m.tag!==6?(m=Hh(v,g.mode,E),m.return=g,m):(m=i(m,v),m.return=g,m)}function l(g,m,v,E){var S=v.type;return S===Ao?c(g,m,v.props.children,E,v.key):m!==null&&(m.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Mr&&T_(S)===m.type)?(E=i(m,v.props),E.ref=ta(g,m,v),E.return=g,E):(E=_c(v.type,v.key,v.props,null,g.mode,E),E.ref=ta(g,m,v),E.return=g,E)}function u(g,m,v,E){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Wh(v,g.mode,E),m.return=g,m):(m=i(m,v.children||[]),m.return=g,m)}function c(g,m,v,E,S){return m===null||m.tag!==7?(m=Bi(v,g.mode,E,S),m.return=g,m):(m=i(m,v),m.return=g,m)}function f(g,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Hh(""+m,g.mode,v),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case _u:return v=_c(m.type,m.key,m.props,null,g.mode,v),v.ref=ta(g,null,m),v.return=g,v;case Po:return m=Wh(m,g.mode,v),m.return=g,m;case Mr:var E=m._init;return f(g,E(m._payload),v)}if(ua(m)||Qs(m))return m=Bi(m,g.mode,v,null),m.return=g,m;Pu(g,m)}return null}function d(g,m,v,E){var S=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:a(g,m,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _u:return v.key===S?l(g,m,v,E):null;case Po:return v.key===S?u(g,m,v,E):null;case Mr:return S=v._init,d(g,m,S(v._payload),E)}if(ua(v)||Qs(v))return S!==null?null:c(g,m,v,E,null);Pu(g,v)}return null}function p(g,m,v,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(v)||null,a(m,g,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case _u:return g=g.get(E.key===null?v:E.key)||null,l(m,g,E,S);case Po:return g=g.get(E.key===null?v:E.key)||null,u(m,g,E,S);case Mr:var T=E._init;return p(g,m,v,T(E._payload),S)}if(ua(E)||Qs(E))return g=g.get(v)||null,c(m,g,E,S,null);Pu(m,E)}return null}function y(g,m,v,E){for(var S=null,T=null,b=m,k=m=0,R=null;b!==null&&k<v.length;k++){b.index>k?(R=b,b=null):R=b.sibling;var D=d(g,b,v[k],E);if(D===null){b===null&&(b=R);break}t&&b&&D.alternate===null&&e(g,b),m=o(D,m,k),T===null?S=D:T.sibling=D,T=D,b=R}if(k===v.length)return n(g,b),Re&&Ri(g,k),S;if(b===null){for(;k<v.length;k++)b=f(g,v[k],E),b!==null&&(m=o(b,m,k),T===null?S=b:T.sibling=b,T=b);return Re&&Ri(g,k),S}for(b=r(g,b);k<v.length;k++)R=p(b,g,k,v[k],E),R!==null&&(t&&R.alternate!==null&&b.delete(R.key===null?k:R.key),m=o(R,m,k),T===null?S=R:T.sibling=R,T=R);return t&&b.forEach(function(Q){return e(g,Q)}),Re&&Ri(g,k),S}function _(g,m,v,E){var S=Qs(v);if(typeof S!="function")throw Error(N(150));if(v=S.call(v),v==null)throw Error(N(151));for(var T=S=null,b=m,k=m=0,R=null,D=v.next();b!==null&&!D.done;k++,D=v.next()){b.index>k?(R=b,b=null):R=b.sibling;var Q=d(g,b,D.value,E);if(Q===null){b===null&&(b=R);break}t&&b&&Q.alternate===null&&e(g,b),m=o(Q,m,k),T===null?S=Q:T.sibling=Q,T=Q,b=R}if(D.done)return n(g,b),Re&&Ri(g,k),S;if(b===null){for(;!D.done;k++,D=v.next())D=f(g,D.value,E),D!==null&&(m=o(D,m,k),T===null?S=D:T.sibling=D,T=D);return Re&&Ri(g,k),S}for(b=r(g,b);!D.done;k++,D=v.next())D=p(b,g,k,D.value,E),D!==null&&(t&&D.alternate!==null&&b.delete(D.key===null?k:D.key),m=o(D,m,k),T===null?S=D:T.sibling=D,T=D);return t&&b.forEach(function(W){return e(g,W)}),Re&&Ri(g,k),S}function w(g,m,v,E){if(typeof v=="object"&&v!==null&&v.type===Ao&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case _u:e:{for(var S=v.key,T=m;T!==null;){if(T.key===S){if(S=v.type,S===Ao){if(T.tag===7){n(g,T.sibling),m=i(T,v.props.children),m.return=g,g=m;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Mr&&T_(S)===T.type){n(g,T.sibling),m=i(T,v.props),m.ref=ta(g,T,v),m.return=g,g=m;break e}n(g,T);break}else e(g,T);T=T.sibling}v.type===Ao?(m=Bi(v.props.children,g.mode,E,v.key),m.return=g,g=m):(E=_c(v.type,v.key,v.props,null,g.mode,E),E.ref=ta(g,m,v),E.return=g,g=E)}return s(g);case Po:e:{for(T=v.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(g,m.sibling),m=i(m,v.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else e(g,m);m=m.sibling}m=Wh(v,g.mode,E),m.return=g,g=m}return s(g);case Mr:return T=v._init,w(g,m,T(v._payload),E)}if(ua(v))return y(g,m,v,E);if(Qs(v))return _(g,m,v,E);Pu(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,v),m.return=g,g=m):(n(g,m),m=Hh(v,g.mode,E),m.return=g,g=m),s(g)):n(g,m)}return w}var ds=pT(!0),mT=pT(!1),Ul={},Bn=Ei(Ul),Za=Ei(Ul),el=Ei(Ul);function Li(t){if(t===Ul)throw Error(N(174));return t}function Tv(t,e){switch(_e(el,e),_e(Za,t),_e(Bn,Ul),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Hp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Hp(e,t)}ke(Bn),_e(Bn,e)}function hs(){ke(Bn),ke(Za),ke(el)}function gT(t){Li(el.current);var e=Li(Bn.current),n=Hp(e,t.type);e!==n&&(_e(Za,t),_e(Bn,n))}function bv(t){Za.current===t&&(ke(Bn),ke(Za))}var Ne=Ei(0);function Xc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $h=[];function kv(){for(var t=0;t<$h.length;t++)$h[t]._workInProgressVersionPrimary=null;$h.length=0}var pc=br.ReactCurrentDispatcher,Vh=br.ReactCurrentBatchConfig,Ji=0,De=null,Ke=null,tt=null,Jc=!1,ka=!1,tl=0,LA=0;function pt(){throw Error(N(321))}function xv(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!In(t[n],e[n]))return!1;return!0}function Iv(t,e,n,r,i,o){if(Ji=o,De=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pc.current=t===null||t.memoizedState===null?VA:UA,t=n(r,i),ka){o=0;do{if(ka=!1,tl=0,25<=o)throw Error(N(301));o+=1,tt=Ke=null,e.updateQueue=null,pc.current=FA,t=n(r,i)}while(ka)}if(pc.current=Zc,e=Ke!==null&&Ke.next!==null,Ji=0,tt=Ke=De=null,Jc=!1,e)throw Error(N(300));return t}function Cv(){var t=tl!==0;return tl=0,t}function Dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?De.memoizedState=tt=t:tt=tt.next=t,tt}function fn(){if(Ke===null){var t=De.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var e=tt===null?De.memoizedState:tt.next;if(e!==null)tt=e,Ke=t;else{if(t===null)throw Error(N(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},tt===null?De.memoizedState=tt=t:tt=tt.next=t}return tt}function nl(t,e){return typeof e=="function"?e(t):e}function Uh(t){var e=fn(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=Ke,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Ji&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,De.lanes|=c,Zi|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,In(r,e.memoizedState)||(Vt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,De.lanes|=o,Zi|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Fh(t){var e=fn(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);In(o,e.memoizedState)||(Vt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function vT(){}function yT(t,e){var n=De,r=fn(),i=e(),o=!In(r.memoizedState,i);if(o&&(r.memoizedState=i,Vt=!0),r=r.queue,Rv(ET.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||tt!==null&&tt.memoizedState.tag&1){if(n.flags|=2048,rl(9,wT.bind(null,n,r,i,e),void 0,null),rt===null)throw Error(N(349));Ji&30||_T(n,e,i)}return i}function _T(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function wT(t,e,n,r){e.value=n,e.getSnapshot=r,ST(e)&&TT(t)}function ET(t,e,n){return n(function(){ST(e)&&TT(t)})}function ST(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!In(t,n)}catch{return!0}}function TT(t){var e=pr(t,1);e!==null&&Tn(e,t,1,-1)}function b_(t){var e=Dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nl,lastRenderedState:t},e.queue=t,t=t.dispatch=$A.bind(null,De,t),[e.memoizedState,t]}function rl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function bT(){return fn().memoizedState}function mc(t,e,n,r){var i=Dn();De.flags|=t,i.memoizedState=rl(1|e,n,void 0,r===void 0?null:r)}function cd(t,e,n,r){var i=fn();r=r===void 0?null:r;var o=void 0;if(Ke!==null){var s=Ke.memoizedState;if(o=s.destroy,r!==null&&xv(r,s.deps)){i.memoizedState=rl(e,n,o,r);return}}De.flags|=t,i.memoizedState=rl(1|e,n,o,r)}function k_(t,e){return mc(8390656,8,t,e)}function Rv(t,e){return cd(2048,8,t,e)}function kT(t,e){return cd(4,2,t,e)}function xT(t,e){return cd(4,4,t,e)}function IT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function CT(t,e,n){return n=n!=null?n.concat([t]):null,cd(4,4,IT.bind(null,e,t),n)}function Pv(){}function RT(t,e){var n=fn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&xv(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function PT(t,e){var n=fn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&xv(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function AT(t,e,n){return Ji&21?(In(n,e)||(n=DS(),De.lanes|=n,Zi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Vt=!0),t.memoizedState=n)}function MA(t,e){var n=ve;ve=n!==0&&4>n?n:4,t(!0);var r=Vh.transition;Vh.transition={};try{t(!1),e()}finally{ve=n,Vh.transition=r}}function OT(){return fn().memoizedState}function jA(t,e,n){var r=ri(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},NT(t))DT(e,n);else if(n=cT(t,e,n,r),n!==null){var i=Nt();Tn(n,t,r,i),LT(n,e,r)}}function $A(t,e,n){var r=ri(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(NT(t))DT(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,In(a,s)){var l=e.interleaved;l===null?(i.next=i,Ev(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=cT(t,e,i,r),n!==null&&(i=Nt(),Tn(n,t,r,i),LT(n,e,r))}}function NT(t){var e=t.alternate;return t===De||e!==null&&e===De}function DT(t,e){ka=Jc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function LT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,av(t,n)}}var Zc={readContext:cn,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},VA={readContext:cn,useCallback:function(t,e){return Dn().memoizedState=[t,e===void 0?null:e],t},useContext:cn,useEffect:k_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,mc(4194308,4,IT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return mc(4194308,4,t,e)},useInsertionEffect:function(t,e){return mc(4,2,t,e)},useMemo:function(t,e){var n=Dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Dn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=jA.bind(null,De,t),[r.memoizedState,t]},useRef:function(t){var e=Dn();return t={current:t},e.memoizedState=t},useState:b_,useDebugValue:Pv,useDeferredValue:function(t){return Dn().memoizedState=t},useTransition:function(){var t=b_(!1),e=t[0];return t=MA.bind(null,t[1]),Dn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=De,i=Dn();if(Re){if(n===void 0)throw Error(N(407));n=n()}else{if(n=e(),rt===null)throw Error(N(349));Ji&30||_T(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,k_(ET.bind(null,r,o,t),[t]),r.flags|=2048,rl(9,wT.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Dn(),e=rt.identifierPrefix;if(Re){var n=ir,r=rr;n=(r&~(1<<32-Sn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=tl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=LA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},UA={readContext:cn,useCallback:RT,useContext:cn,useEffect:Rv,useImperativeHandle:CT,useInsertionEffect:kT,useLayoutEffect:xT,useMemo:PT,useReducer:Uh,useRef:bT,useState:function(){return Uh(nl)},useDebugValue:Pv,useDeferredValue:function(t){var e=fn();return AT(e,Ke.memoizedState,t)},useTransition:function(){var t=Uh(nl)[0],e=fn().memoizedState;return[t,e]},useMutableSource:vT,useSyncExternalStore:yT,useId:OT,unstable_isNewReconciler:!1},FA={readContext:cn,useCallback:RT,useContext:cn,useEffect:Rv,useImperativeHandle:CT,useInsertionEffect:kT,useLayoutEffect:xT,useMemo:PT,useReducer:Fh,useRef:bT,useState:function(){return Fh(nl)},useDebugValue:Pv,useDeferredValue:function(t){var e=fn();return Ke===null?e.memoizedState=t:AT(e,Ke.memoizedState,t)},useTransition:function(){var t=Fh(nl)[0],e=fn().memoizedState;return[t,e]},useMutableSource:vT,useSyncExternalStore:yT,useId:OT,unstable_isNewReconciler:!1};function ps(t,e){try{var n="",r=e;do n+=mP(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function zh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var zA=typeof WeakMap=="function"?WeakMap:Map;function MT(t,e,n){n=lr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){tf||(tf=!0,Tm=r),hm(t,e)},n}function jT(t,e,n){n=lr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){hm(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){hm(t,e),typeof r!="function"&&(ni===null?ni=new Set([this]):ni.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function x_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new zA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=n2.bind(null,t,e,n),e.then(t,t))}function I_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function C_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=lr(-1,1),e.tag=2,ti(n,e,1))),n.lanes|=1),t)}var BA=br.ReactCurrentOwner,Vt=!1;function Pt(t,e,n,r){e.child=t===null?mT(e,null,n,r):ds(e,t.child,n,r)}function R_(t,e,n,r,i){n=n.render;var o=e.ref;return Zo(e,i),r=Iv(t,e,n,r,o,i),n=Cv(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,mr(t,e,i)):(Re&&n&&mv(e),e.flags|=1,Pt(t,e,r,i),e.child)}function P_(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!$v(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,$T(t,e,o,r,i)):(t=_c(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ya,n(s,r)&&t.ref===e.ref)return mr(t,e,i)}return e.flags|=1,t=ii(o,r),t.ref=e.ref,t.return=e,e.child=t}function $T(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Ya(o,r)&&t.ref===e.ref)if(Vt=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Vt=!0);else return e.lanes=t.lanes,mr(t,e,i)}return pm(t,e,n,r,i)}function VT(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(Fo,Bt),Bt|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(Fo,Bt),Bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,_e(Fo,Bt),Bt|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,_e(Fo,Bt),Bt|=r;return Pt(t,e,i,n),e.child}function UT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pm(t,e,n,r,i){var o=Ft(n)?Qi:kt.current;return o=cs(e,o),Zo(e,i),n=Iv(t,e,n,r,o,i),r=Cv(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,mr(t,e,i)):(Re&&r&&mv(e),e.flags|=1,Pt(t,e,n,i),e.child)}function A_(t,e,n,r,i){if(Ft(n)){var o=!0;Wc(e)}else o=!1;if(Zo(e,i),e.stateNode===null)gc(t,e),hT(e,n,r),dm(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=cn(u):(u=Ft(n)?Qi:kt.current,u=cs(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&S_(e,s,r,u),jr=!1;var d=e.memoizedState;s.state=d,Qc(e,r,s,i),l=e.memoizedState,a!==r||d!==l||Ut.current||jr?(typeof c=="function"&&(fm(e,n,c,r),l=e.memoizedState),(a=jr||E_(e,n,a,r,d,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,fT(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:mn(e.type,a),s.props=u,f=e.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=cn(l):(l=Ft(n)?Qi:kt.current,l=cs(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||d!==l)&&S_(e,s,r,l),jr=!1,d=e.memoizedState,s.state=d,Qc(e,r,s,i);var y=e.memoizedState;a!==f||d!==y||Ut.current||jr?(typeof p=="function"&&(fm(e,n,p,r),y=e.memoizedState),(u=jr||E_(e,n,u,r,d,y,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return mm(t,e,n,r,o,i)}function mm(t,e,n,r,i,o){UT(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&g_(e,n,!1),mr(t,e,o);r=e.stateNode,BA.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=ds(e,t.child,null,o),e.child=ds(e,null,a,o)):Pt(t,e,a,o),e.memoizedState=r.state,i&&g_(e,n,!0),e.child}function FT(t){var e=t.stateNode;e.pendingContext?m_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&m_(t,e.context,!1),Tv(t,e.containerInfo)}function O_(t,e,n,r,i){return fs(),vv(i),e.flags|=256,Pt(t,e,n,r),e.child}var gm={dehydrated:null,treeContext:null,retryLane:0};function vm(t){return{baseLanes:t,cachePool:null,transitions:null}}function zT(t,e,n){var r=e.pendingProps,i=Ne.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(Ne,i&1),t===null)return um(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=hd(s,r,0,null),t=Bi(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=vm(n),e.memoizedState=gm,t):Av(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return HA(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ii(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=ii(a,o):(o=Bi(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?vm(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=gm,r}return o=t.child,t=o.sibling,r=ii(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Av(t,e){return e=hd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Au(t,e,n,r){return r!==null&&vv(r),ds(e,t.child,null,n),t=Av(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function HA(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=zh(Error(N(422))),Au(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=hd({mode:"visible",children:r.children},i,0,null),o=Bi(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&ds(e,t.child,null,s),e.child.memoizedState=vm(s),e.memoizedState=gm,o);if(!(e.mode&1))return Au(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(N(419)),r=zh(o,r,void 0),Au(t,e,s,r)}if(a=(s&t.childLanes)!==0,Vt||a){if(r=rt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,pr(t,i),Tn(r,t,i,-1))}return jv(),r=zh(Error(N(421))),Au(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=r2.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Wt=ei(i.nextSibling),qt=e,Re=!0,yn=null,t!==null&&(nn[rn++]=rr,nn[rn++]=ir,nn[rn++]=Xi,rr=t.id,ir=t.overflow,Xi=e),e=Av(e,r.children),e.flags|=4096,e)}function N_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),cm(t.return,e,n)}function Bh(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function BT(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Pt(t,e,r.children,n),r=Ne.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&N_(t,n,e);else if(t.tag===19)N_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(Ne,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Xc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Bh(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Xc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Bh(e,!0,n,null,o);break;case"together":Bh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function mr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(N(153));if(e.child!==null){for(t=e.child,n=ii(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ii(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function WA(t,e,n){switch(e.tag){case 3:FT(e),fs();break;case 5:gT(e);break;case 1:Ft(e.type)&&Wc(e);break;case 4:Tv(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(Kc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(Ne,Ne.current&1),e.flags|=128,null):n&e.child.childLanes?zT(t,e,n):(_e(Ne,Ne.current&1),t=mr(t,e,n),t!==null?t.sibling:null);_e(Ne,Ne.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return BT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(Ne,Ne.current),r)break;return null;case 22:case 23:return e.lanes=0,VT(t,e,n)}return mr(t,e,n)}var HT,ym,WT,qT;HT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ym=function(){};WT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Li(Bn.current);var o=null;switch(n){case"input":i=Up(t,i),r=Up(t,r),o=[];break;case"select":i=Le({},i,{value:void 0}),r=Le({},r,{value:void 0}),o=[];break;case"textarea":i=Bp(t,i),r=Bp(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Bc)}Wp(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(za.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(za.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ee("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};qT=function(t,e,n,r){n!==r&&(e.flags|=4)};function na(t,e){if(!Re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function qA(t,e,n){var r=e.pendingProps;switch(gv(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return Ft(e.type)&&Hc(),mt(e),null;case 3:return r=e.stateNode,hs(),ke(Ut),ke(kt),kv(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ru(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,yn!==null&&(xm(yn),yn=null))),ym(t,e),mt(e),null;case 5:bv(e);var i=Li(el.current);if(n=e.type,t!==null&&e.stateNode!=null)WT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(N(166));return mt(e),null}if(t=Li(Bn.current),Ru(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Mn]=e,r[Ja]=o,t=(e.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(i=0;i<fa.length;i++)Ee(fa[i],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":z0(r,o),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ee("invalid",r);break;case"textarea":H0(r,o),Ee("invalid",r)}Wp(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Cu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Cu(r.textContent,a,t),i=["children",""+a]):za.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Ee("scroll",r)}switch(n){case"input":wu(r),B0(r,o,!0);break;case"textarea":wu(r),W0(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Bc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=_S(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Mn]=e,t[Ja]=r,HT(t,e,!1,!1),e.stateNode=t;e:{switch(s=qp(n,r),n){case"dialog":Ee("cancel",t),Ee("close",t),i=r;break;case"iframe":case"object":case"embed":Ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<fa.length;i++)Ee(fa[i],t);i=r;break;case"source":Ee("error",t),i=r;break;case"img":case"image":case"link":Ee("error",t),Ee("load",t),i=r;break;case"details":Ee("toggle",t),i=r;break;case"input":z0(t,r),i=Up(t,r),Ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Le({},r,{value:void 0}),Ee("invalid",t);break;case"textarea":H0(t,r),i=Bp(t,r),Ee("invalid",t);break;default:i=r}Wp(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?SS(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&wS(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ba(t,l):typeof l=="number"&&Ba(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(za.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Ee("scroll",t):l!=null&&tv(t,o,l,s))}switch(n){case"input":wu(t),B0(t,r,!1);break;case"textarea":wu(t),W0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ci(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Yo(t,!!r.multiple,o,!1):r.defaultValue!=null&&Yo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Bc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mt(e),null;case 6:if(t&&e.stateNode!=null)qT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(N(166));if(n=Li(el.current),Li(Bn.current),Ru(e)){if(r=e.stateNode,n=e.memoizedProps,r[Mn]=e,(o=r.nodeValue!==n)&&(t=qt,t!==null))switch(t.tag){case 3:Cu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Cu(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mn]=e,e.stateNode=r}return mt(e),null;case 13:if(ke(Ne),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&Wt!==null&&e.mode&1&&!(e.flags&128))uT(),fs(),e.flags|=98560,o=!1;else if(o=Ru(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(N(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(N(317));o[Mn]=e}else fs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mt(e),o=!1}else yn!==null&&(xm(yn),yn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ne.current&1?Qe===0&&(Qe=3):jv())),e.updateQueue!==null&&(e.flags|=4),mt(e),null);case 4:return hs(),ym(t,e),t===null&&Qa(e.stateNode.containerInfo),mt(e),null;case 10:return wv(e.type._context),mt(e),null;case 17:return Ft(e.type)&&Hc(),mt(e),null;case 19:if(ke(Ne),o=e.memoizedState,o===null)return mt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)na(o,!1);else{if(Qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Xc(t),s!==null){for(e.flags|=128,na(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(Ne,Ne.current&1|2),e.child}t=t.sibling}o.tail!==null&&Fe()>ms&&(e.flags|=128,r=!0,na(o,!1),e.lanes=4194304)}else{if(!r)if(t=Xc(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),na(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Re)return mt(e),null}else 2*Fe()-o.renderingStartTime>ms&&n!==1073741824&&(e.flags|=128,r=!0,na(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Fe(),e.sibling=null,n=Ne.current,_e(Ne,r?n&1|2:n&1),e):(mt(e),null);case 22:case 23:return Mv(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Bt&1073741824&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),null;case 24:return null;case 25:return null}throw Error(N(156,e.tag))}function GA(t,e){switch(gv(e),e.tag){case 1:return Ft(e.type)&&Hc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return hs(),ke(Ut),ke(kt),kv(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return bv(e),null;case 13:if(ke(Ne),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(N(340));fs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ke(Ne),null;case 4:return hs(),null;case 10:return wv(e.type._context),null;case 22:case 23:return Mv(),null;case 24:return null;default:return null}}var Ou=!1,_t=!1,KA=typeof WeakSet=="function"?WeakSet:Set,U=null;function Uo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$e(t,e,r)}else n.current=null}function _m(t,e,n){try{n()}catch(r){$e(t,e,r)}}var D_=!1;function YA(t,e){if(nm=Uc,t=QS(),pv(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var p;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++u===i&&(a=s),d===o&&++c===r&&(l=s),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(rm={focusedElem:t,selectionRange:n},Uc=!1,U=e;U!==null;)if(e=U,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,U=t;else for(;U!==null;){e=U;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,w=y.memoizedState,g=e.stateNode,m=g.getSnapshotBeforeUpdate(e.elementType===e.type?_:mn(e.type,_),w);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(E){$e(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,U=t;break}U=e.return}return y=D_,D_=!1,y}function xa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&_m(e,n,o)}i=i.next}while(i!==r)}}function fd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function wm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function GT(t){var e=t.alternate;e!==null&&(t.alternate=null,GT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Mn],delete e[Ja],delete e[sm],delete e[AA],delete e[OA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function KT(t){return t.tag===5||t.tag===3||t.tag===4}function L_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||KT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Em(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Bc));else if(r!==4&&(t=t.child,t!==null))for(Em(t,e,n),t=t.sibling;t!==null;)Em(t,e,n),t=t.sibling}function Sm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Sm(t,e,n),t=t.sibling;t!==null;)Sm(t,e,n),t=t.sibling}var st=null,vn=!1;function Rr(t,e,n){for(n=n.child;n!==null;)YT(t,e,n),n=n.sibling}function YT(t,e,n){if(zn&&typeof zn.onCommitFiberUnmount=="function")try{zn.onCommitFiberUnmount(rd,n)}catch{}switch(n.tag){case 5:_t||Uo(n,e);case 6:var r=st,i=vn;st=null,Rr(t,e,n),st=r,vn=i,st!==null&&(vn?(t=st,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):st.removeChild(n.stateNode));break;case 18:st!==null&&(vn?(t=st,n=n.stateNode,t.nodeType===8?Mh(t.parentNode,n):t.nodeType===1&&Mh(t,n),Ga(t)):Mh(st,n.stateNode));break;case 4:r=st,i=vn,st=n.stateNode.containerInfo,vn=!0,Rr(t,e,n),st=r,vn=i;break;case 0:case 11:case 14:case 15:if(!_t&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&_m(n,e,s),i=i.next}while(i!==r)}Rr(t,e,n);break;case 1:if(!_t&&(Uo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){$e(n,e,a)}Rr(t,e,n);break;case 21:Rr(t,e,n);break;case 22:n.mode&1?(_t=(r=_t)||n.memoizedState!==null,Rr(t,e,n),_t=r):Rr(t,e,n);break;default:Rr(t,e,n)}}function M_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new KA),e.forEach(function(r){var i=i2.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function pn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:st=a.stateNode,vn=!1;break e;case 3:st=a.stateNode.containerInfo,vn=!0;break e;case 4:st=a.stateNode.containerInfo,vn=!0;break e}a=a.return}if(st===null)throw Error(N(160));YT(o,s,i),st=null,vn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){$e(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)QT(e,t),e=e.sibling}function QT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(pn(e,t),Nn(t),r&4){try{xa(3,t,t.return),fd(3,t)}catch(_){$e(t,t.return,_)}try{xa(5,t,t.return)}catch(_){$e(t,t.return,_)}}break;case 1:pn(e,t),Nn(t),r&512&&n!==null&&Uo(n,n.return);break;case 5:if(pn(e,t),Nn(t),r&512&&n!==null&&Uo(n,n.return),t.flags&32){var i=t.stateNode;try{Ba(i,"")}catch(_){$e(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&vS(i,o),qp(a,s);var u=qp(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?SS(i,f):c==="dangerouslySetInnerHTML"?wS(i,f):c==="children"?Ba(i,f):tv(i,c,f,u)}switch(a){case"input":Fp(i,o);break;case"textarea":yS(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Yo(i,!!o.multiple,p,!1):d!==!!o.multiple&&(o.defaultValue!=null?Yo(i,!!o.multiple,o.defaultValue,!0):Yo(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ja]=o}catch(_){$e(t,t.return,_)}}break;case 6:if(pn(e,t),Nn(t),r&4){if(t.stateNode===null)throw Error(N(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(_){$e(t,t.return,_)}}break;case 3:if(pn(e,t),Nn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ga(e.containerInfo)}catch(_){$e(t,t.return,_)}break;case 4:pn(e,t),Nn(t);break;case 13:pn(e,t),Nn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Dv=Fe())),r&4&&M_(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(_t=(u=_t)||c,pn(e,t),_t=u):pn(e,t),Nn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(U=t,c=t.child;c!==null;){for(f=U=c;U!==null;){switch(d=U,p=d.child,d.tag){case 0:case 11:case 14:case 15:xa(4,d,d.return);break;case 1:Uo(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){$e(r,n,_)}}break;case 5:Uo(d,d.return);break;case 22:if(d.memoizedState!==null){$_(f);continue}}p!==null?(p.return=d,U=p):$_(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ES("display",s))}catch(_){$e(t,t.return,_)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){$e(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:pn(e,t),Nn(t),r&4&&M_(t);break;case 21:break;default:pn(e,t),Nn(t)}}function Nn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(KT(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ba(i,""),r.flags&=-33);var o=L_(t);Sm(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=L_(t);Em(t,a,s);break;default:throw Error(N(161))}}catch(l){$e(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function QA(t,e,n){U=t,XT(t)}function XT(t,e,n){for(var r=(t.mode&1)!==0;U!==null;){var i=U,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ou;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||_t;a=Ou;var u=_t;if(Ou=s,(_t=l)&&!u)for(U=i;U!==null;)s=U,l=s.child,s.tag===22&&s.memoizedState!==null?V_(i):l!==null?(l.return=s,U=l):V_(i);for(;o!==null;)U=o,XT(o),o=o.sibling;U=i,Ou=a,_t=u}j_(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,U=o):j_(t)}}function j_(t){for(;U!==null;){var e=U;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:_t||fd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!_t)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:mn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&w_(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}w_(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ga(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}_t||e.flags&512&&wm(e)}catch(d){$e(e,e.return,d)}}if(e===t){U=null;break}if(n=e.sibling,n!==null){n.return=e.return,U=n;break}U=e.return}}function $_(t){for(;U!==null;){var e=U;if(e===t){U=null;break}var n=e.sibling;if(n!==null){n.return=e.return,U=n;break}U=e.return}}function V_(t){for(;U!==null;){var e=U;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fd(4,e)}catch(l){$e(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){$e(e,i,l)}}var o=e.return;try{wm(e)}catch(l){$e(e,o,l)}break;case 5:var s=e.return;try{wm(e)}catch(l){$e(e,s,l)}}}catch(l){$e(e,e.return,l)}if(e===t){U=null;break}var a=e.sibling;if(a!==null){a.return=e.return,U=a;break}U=e.return}}var XA=Math.ceil,ef=br.ReactCurrentDispatcher,Ov=br.ReactCurrentOwner,un=br.ReactCurrentBatchConfig,pe=0,rt=null,We=null,ct=0,Bt=0,Fo=Ei(0),Qe=0,il=null,Zi=0,dd=0,Nv=0,Ia=null,$t=null,Dv=0,ms=1/0,Jn=null,tf=!1,Tm=null,ni=null,Nu=!1,qr=null,nf=0,Ca=0,bm=null,vc=-1,yc=0;function Nt(){return pe&6?Fe():vc!==-1?vc:vc=Fe()}function ri(t){return t.mode&1?pe&2&&ct!==0?ct&-ct:DA.transition!==null?(yc===0&&(yc=DS()),yc):(t=ve,t!==0||(t=window.event,t=t===void 0?16:FS(t.type)),t):1}function Tn(t,e,n,r){if(50<Ca)throw Ca=0,bm=null,Error(N(185));jl(t,n,r),(!(pe&2)||t!==rt)&&(t===rt&&(!(pe&2)&&(dd|=n),Qe===4&&Ur(t,ct)),zt(t,r),n===1&&pe===0&&!(e.mode&1)&&(ms=Fe()+500,ld&&Si()))}function zt(t,e){var n=t.callbackNode;DP(t,e);var r=Vc(t,t===rt?ct:0);if(r===0)n!==null&&K0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&K0(n),e===1)t.tag===0?NA(U_.bind(null,t)):sT(U_.bind(null,t)),RA(function(){!(pe&6)&&Si()}),n=null;else{switch(LS(r)){case 1:n=sv;break;case 4:n=OS;break;case 16:n=$c;break;case 536870912:n=NS;break;default:n=$c}n=ob(n,JT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function JT(t,e){if(vc=-1,yc=0,pe&6)throw Error(N(327));var n=t.callbackNode;if(es()&&t.callbackNode!==n)return null;var r=Vc(t,t===rt?ct:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=rf(t,r);else{e=r;var i=pe;pe|=2;var o=eb();(rt!==t||ct!==e)&&(Jn=null,ms=Fe()+500,zi(t,e));do try{e2();break}catch(a){ZT(t,a)}while(1);_v(),ef.current=o,pe=i,We!==null?e=0:(rt=null,ct=0,e=Qe)}if(e!==0){if(e===2&&(i=Xp(t),i!==0&&(r=i,e=km(t,i))),e===1)throw n=il,zi(t,0),Ur(t,r),zt(t,Fe()),n;if(e===6)Ur(t,r);else{if(i=t.current.alternate,!(r&30)&&!JA(i)&&(e=rf(t,r),e===2&&(o=Xp(t),o!==0&&(r=o,e=km(t,o))),e===1))throw n=il,zi(t,0),Ur(t,r),zt(t,Fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(N(345));case 2:Pi(t,$t,Jn);break;case 3:if(Ur(t,r),(r&130023424)===r&&(e=Dv+500-Fe(),10<e)){if(Vc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Nt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=om(Pi.bind(null,t,$t,Jn),e);break}Pi(t,$t,Jn);break;case 4:if(Ur(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Sn(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*XA(r/1960))-r,10<r){t.timeoutHandle=om(Pi.bind(null,t,$t,Jn),r);break}Pi(t,$t,Jn);break;case 5:Pi(t,$t,Jn);break;default:throw Error(N(329))}}}return zt(t,Fe()),t.callbackNode===n?JT.bind(null,t):null}function km(t,e){var n=Ia;return t.current.memoizedState.isDehydrated&&(zi(t,e).flags|=256),t=rf(t,e),t!==2&&(e=$t,$t=n,e!==null&&xm(e)),t}function xm(t){$t===null?$t=t:$t.push.apply($t,t)}function JA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!In(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ur(t,e){for(e&=~Nv,e&=~dd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Sn(e),r=1<<n;t[n]=-1,e&=~r}}function U_(t){if(pe&6)throw Error(N(327));es();var e=Vc(t,0);if(!(e&1))return zt(t,Fe()),null;var n=rf(t,e);if(t.tag!==0&&n===2){var r=Xp(t);r!==0&&(e=r,n=km(t,r))}if(n===1)throw n=il,zi(t,0),Ur(t,e),zt(t,Fe()),n;if(n===6)throw Error(N(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Pi(t,$t,Jn),zt(t,Fe()),null}function Lv(t,e){var n=pe;pe|=1;try{return t(e)}finally{pe=n,pe===0&&(ms=Fe()+500,ld&&Si())}}function eo(t){qr!==null&&qr.tag===0&&!(pe&6)&&es();var e=pe;pe|=1;var n=un.transition,r=ve;try{if(un.transition=null,ve=1,t)return t()}finally{ve=r,un.transition=n,pe=e,!(pe&6)&&Si()}}function Mv(){Bt=Fo.current,ke(Fo)}function zi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,CA(n)),We!==null)for(n=We.return;n!==null;){var r=n;switch(gv(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hc();break;case 3:hs(),ke(Ut),ke(kt),kv();break;case 5:bv(r);break;case 4:hs();break;case 13:ke(Ne);break;case 19:ke(Ne);break;case 10:wv(r.type._context);break;case 22:case 23:Mv()}n=n.return}if(rt=t,We=t=ii(t.current,null),ct=Bt=e,Qe=0,il=null,Nv=dd=Zi=0,$t=Ia=null,Di!==null){for(e=0;e<Di.length;e++)if(n=Di[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Di=null}return t}function ZT(t,e){do{var n=We;try{if(_v(),pc.current=Zc,Jc){for(var r=De.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Jc=!1}if(Ji=0,tt=Ke=De=null,ka=!1,tl=0,Ov.current=null,n===null||n.return===null){Qe=1,il=e,We=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=ct,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=I_(s);if(p!==null){p.flags&=-257,C_(p,s,a,o,e),p.mode&1&&x_(o,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){x_(o,u,e),jv();break e}l=Error(N(426))}}else if(Re&&a.mode&1){var w=I_(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),C_(w,s,a,o,e),vv(ps(l,a));break e}}o=l=ps(l,a),Qe!==4&&(Qe=2),Ia===null?Ia=[o]:Ia.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var g=MT(o,l,e);__(o,g);break e;case 1:a=l;var m=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ni===null||!ni.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var E=jT(o,a,e);__(o,E);break e}}o=o.return}while(o!==null)}nb(n)}catch(S){e=S,We===n&&n!==null&&(We=n=n.return);continue}break}while(1)}function eb(){var t=ef.current;return ef.current=Zc,t===null?Zc:t}function jv(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),rt===null||!(Zi&268435455)&&!(dd&268435455)||Ur(rt,ct)}function rf(t,e){var n=pe;pe|=2;var r=eb();(rt!==t||ct!==e)&&(Jn=null,zi(t,e));do try{ZA();break}catch(i){ZT(t,i)}while(1);if(_v(),pe=n,ef.current=r,We!==null)throw Error(N(261));return rt=null,ct=0,Qe}function ZA(){for(;We!==null;)tb(We)}function e2(){for(;We!==null&&!kP();)tb(We)}function tb(t){var e=ib(t.alternate,t,Bt);t.memoizedProps=t.pendingProps,e===null?nb(t):We=e,Ov.current=null}function nb(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=GA(n,e),n!==null){n.flags&=32767,We=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qe=6,We=null;return}}else if(n=qA(n,e,Bt),n!==null){We=n;return}if(e=e.sibling,e!==null){We=e;return}We=e=t}while(e!==null);Qe===0&&(Qe=5)}function Pi(t,e,n){var r=ve,i=un.transition;try{un.transition=null,ve=1,t2(t,e,n,r)}finally{un.transition=i,ve=r}return null}function t2(t,e,n,r){do es();while(qr!==null);if(pe&6)throw Error(N(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(N(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(LP(t,o),t===rt&&(We=rt=null,ct=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Nu||(Nu=!0,ob($c,function(){return es(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=un.transition,un.transition=null;var s=ve;ve=1;var a=pe;pe|=4,Ov.current=null,YA(t,n),QT(n,t),EA(rm),Uc=!!nm,rm=nm=null,t.current=n,QA(n),xP(),pe=a,ve=s,un.transition=o}else t.current=n;if(Nu&&(Nu=!1,qr=t,nf=i),o=t.pendingLanes,o===0&&(ni=null),RP(n.stateNode),zt(t,Fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(tf)throw tf=!1,t=Tm,Tm=null,t;return nf&1&&t.tag!==0&&es(),o=t.pendingLanes,o&1?t===bm?Ca++:(Ca=0,bm=t):Ca=0,Si(),null}function es(){if(qr!==null){var t=LS(nf),e=un.transition,n=ve;try{if(un.transition=null,ve=16>t?16:t,qr===null)var r=!1;else{if(t=qr,qr=null,nf=0,pe&6)throw Error(N(331));var i=pe;for(pe|=4,U=t.current;U!==null;){var o=U,s=o.child;if(U.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(U=u;U!==null;){var c=U;switch(c.tag){case 0:case 11:case 15:xa(8,c,o)}var f=c.child;if(f!==null)f.return=c,U=f;else for(;U!==null;){c=U;var d=c.sibling,p=c.return;if(GT(c),c===u){U=null;break}if(d!==null){d.return=p,U=d;break}U=p}}}var y=o.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var w=_.sibling;_.sibling=null,_=w}while(_!==null)}}U=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,U=s;else e:for(;U!==null;){if(o=U,o.flags&2048)switch(o.tag){case 0:case 11:case 15:xa(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,U=g;break e}U=o.return}}var m=t.current;for(U=m;U!==null;){s=U;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,U=v;else e:for(s=m;U!==null;){if(a=U,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fd(9,a)}}catch(S){$e(a,a.return,S)}if(a===s){U=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,U=E;break e}U=a.return}}if(pe=i,Si(),zn&&typeof zn.onPostCommitFiberRoot=="function")try{zn.onPostCommitFiberRoot(rd,t)}catch{}r=!0}return r}finally{ve=n,un.transition=e}}return!1}function F_(t,e,n){e=ps(n,e),e=MT(t,e,1),t=ti(t,e,1),e=Nt(),t!==null&&(jl(t,1,e),zt(t,e))}function $e(t,e,n){if(t.tag===3)F_(t,t,n);else for(;e!==null;){if(e.tag===3){F_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ni===null||!ni.has(r))){t=ps(n,t),t=jT(e,t,1),e=ti(e,t,1),t=Nt(),e!==null&&(jl(e,1,t),zt(e,t));break}}e=e.return}}function n2(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Nt(),t.pingedLanes|=t.suspendedLanes&n,rt===t&&(ct&n)===n&&(Qe===4||Qe===3&&(ct&130023424)===ct&&500>Fe()-Dv?zi(t,0):Nv|=n),zt(t,e)}function rb(t,e){e===0&&(t.mode&1?(e=Tu,Tu<<=1,!(Tu&130023424)&&(Tu=4194304)):e=1);var n=Nt();t=pr(t,e),t!==null&&(jl(t,e,n),zt(t,n))}function r2(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),rb(t,n)}function i2(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(e),rb(t,n)}var ib;ib=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ut.current)Vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Vt=!1,WA(t,e,n);Vt=!!(t.flags&131072)}else Vt=!1,Re&&e.flags&1048576&&aT(e,Gc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;gc(t,e),t=e.pendingProps;var i=cs(e,kt.current);Zo(e,n),i=Iv(null,e,r,t,i,n);var o=Cv();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ft(r)?(o=!0,Wc(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sv(e),i.updater=ud,e.stateNode=i,i._reactInternals=e,dm(e,r,t,n),e=mm(null,e,r,!0,o,n)):(e.tag=0,Re&&o&&mv(e),Pt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(gc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=s2(r),t=mn(r,t),i){case 0:e=pm(null,e,r,t,n);break e;case 1:e=A_(null,e,r,t,n);break e;case 11:e=R_(null,e,r,t,n);break e;case 14:e=P_(null,e,r,mn(r.type,t),n);break e}throw Error(N(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),pm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),A_(t,e,r,i,n);case 3:e:{if(FT(e),t===null)throw Error(N(387));r=e.pendingProps,o=e.memoizedState,i=o.element,fT(t,e),Qc(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=ps(Error(N(423)),e),e=O_(t,e,r,n,i);break e}else if(r!==i){i=ps(Error(N(424)),e),e=O_(t,e,r,n,i);break e}else for(Wt=ei(e.stateNode.containerInfo.firstChild),qt=e,Re=!0,yn=null,n=mT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fs(),r===i){e=mr(t,e,n);break e}Pt(t,e,r,n)}e=e.child}return e;case 5:return gT(e),t===null&&um(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,im(r,i)?s=null:o!==null&&im(r,o)&&(e.flags|=32),UT(t,e),Pt(t,e,s,n),e.child;case 6:return t===null&&um(e),null;case 13:return zT(t,e,n);case 4:return Tv(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ds(e,null,r,n):Pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),R_(t,e,r,i,n);case 7:return Pt(t,e,e.pendingProps,n),e.child;case 8:return Pt(t,e,e.pendingProps.children,n),e.child;case 12:return Pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,_e(Kc,r._currentValue),r._currentValue=s,o!==null)if(In(o.value,s)){if(o.children===i.children&&!Ut.current){e=mr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=lr(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),cm(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(N(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),cm(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Zo(e,n),i=cn(i),r=r(i),e.flags|=1,Pt(t,e,r,n),e.child;case 14:return r=e.type,i=mn(r,e.pendingProps),i=mn(r.type,i),P_(t,e,r,i,n);case 15:return $T(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),gc(t,e),e.tag=1,Ft(r)?(t=!0,Wc(e)):t=!1,Zo(e,n),hT(e,r,i),dm(e,r,i,n),mm(null,e,r,!0,t,n);case 19:return BT(t,e,n);case 22:return VT(t,e,n)}throw Error(N(156,e.tag))};function ob(t,e){return AS(t,e)}function o2(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(t,e,n,r){return new o2(t,e,n,r)}function $v(t){return t=t.prototype,!(!t||!t.isReactComponent)}function s2(t){if(typeof t=="function")return $v(t)?1:0;if(t!=null){if(t=t.$$typeof,t===rv)return 11;if(t===iv)return 14}return 2}function ii(t,e){var n=t.alternate;return n===null?(n=an(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function _c(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")$v(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Ao:return Bi(n.children,i,o,e);case nv:s=8,i|=8;break;case Mp:return t=an(12,n,e,i|2),t.elementType=Mp,t.lanes=o,t;case jp:return t=an(13,n,e,i),t.elementType=jp,t.lanes=o,t;case $p:return t=an(19,n,e,i),t.elementType=$p,t.lanes=o,t;case pS:return hd(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case dS:s=10;break e;case hS:s=9;break e;case rv:s=11;break e;case iv:s=14;break e;case Mr:s=16,r=null;break e}throw Error(N(130,t==null?t:typeof t,""))}return e=an(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Bi(t,e,n,r){return t=an(7,t,r,e),t.lanes=n,t}function hd(t,e,n,r){return t=an(22,t,r,e),t.elementType=pS,t.lanes=n,t.stateNode={isHidden:!1},t}function Hh(t,e,n){return t=an(6,t,null,e),t.lanes=n,t}function Wh(t,e,n){return e=an(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function a2(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kh(0),this.expirationTimes=kh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vv(t,e,n,r,i,o,s,a,l){return t=new a2(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=an(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sv(o),t}function l2(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Po,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function sb(t){if(!t)return fi;t=t._reactInternals;e:{if(ho(t)!==t||t.tag!==1)throw Error(N(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(N(171))}if(t.tag===1){var n=t.type;if(Ft(n))return oT(t,n,e)}return e}function ab(t,e,n,r,i,o,s,a,l){return t=Vv(n,r,!0,t,i,o,s,a,l),t.context=sb(null),n=t.current,r=Nt(),i=ri(n),o=lr(r,i),o.callback=e??null,ti(n,o,i),t.current.lanes=i,jl(t,i,r),zt(t,r),t}function pd(t,e,n,r){var i=e.current,o=Nt(),s=ri(i);return n=sb(n),e.context===null?e.context=n:e.pendingContext=n,e=lr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ti(i,e,s),t!==null&&(Tn(t,i,s,o),hc(t,i,s)),s}function of(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function z_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Uv(t,e){z_(t,e),(t=t.alternate)&&z_(t,e)}function u2(){return null}var lb=typeof reportError=="function"?reportError:function(t){console.error(t)};function Fv(t){this._internalRoot=t}md.prototype.render=Fv.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(N(409));pd(t,e,null,null)};md.prototype.unmount=Fv.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;eo(function(){pd(null,t,null,null)}),e[hr]=null}};function md(t){this._internalRoot=t}md.prototype.unstable_scheduleHydration=function(t){if(t){var e=$S();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vr.length&&e!==0&&e<Vr[n].priority;n++);Vr.splice(n,0,t),n===0&&US(t)}};function zv(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function B_(){}function c2(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=of(s);o.call(u)}}var s=ab(e,r,t,0,null,!1,!1,"",B_);return t._reactRootContainer=s,t[hr]=s.current,Qa(t.nodeType===8?t.parentNode:t),eo(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=of(l);a.call(u)}}var l=Vv(t,0,!1,null,null,!1,!1,"",B_);return t._reactRootContainer=l,t[hr]=l.current,Qa(t.nodeType===8?t.parentNode:t),eo(function(){pd(e,l,n,r)}),l}function vd(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=of(s);a.call(l)}}pd(e,s,t,i)}else s=c2(n,e,t,i,r);return of(s)}MS=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ca(e.pendingLanes);n!==0&&(av(e,n|1),zt(e,Fe()),!(pe&6)&&(ms=Fe()+500,Si()))}break;case 13:eo(function(){var r=pr(t,1);if(r!==null){var i=Nt();Tn(r,t,1,i)}}),Uv(t,1)}};lv=function(t){if(t.tag===13){var e=pr(t,134217728);if(e!==null){var n=Nt();Tn(e,t,134217728,n)}Uv(t,134217728)}};jS=function(t){if(t.tag===13){var e=ri(t),n=pr(t,e);if(n!==null){var r=Nt();Tn(n,t,e,r)}Uv(t,e)}};$S=function(){return ve};VS=function(t,e){var n=ve;try{return ve=t,e()}finally{ve=n}};Kp=function(t,e,n){switch(e){case"input":if(Fp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ad(r);if(!i)throw Error(N(90));gS(r),Fp(r,i)}}}break;case"textarea":yS(t,n);break;case"select":e=n.value,e!=null&&Yo(t,!!n.multiple,e,!1)}};kS=Lv;xS=eo;var f2={usingClientEntryPoint:!1,Events:[Vl,Lo,ad,TS,bS,Lv]},ra={findFiberByHostInstance:Ni,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},d2={bundleType:ra.bundleType,version:ra.version,rendererPackageName:ra.rendererPackageName,rendererConfig:ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:br.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=RS(t),t===null?null:t.stateNode},findFiberByHostInstance:ra.findFiberByHostInstance||u2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Du=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Du.isDisabled&&Du.supportsFiber)try{rd=Du.inject(d2),zn=Du}catch{}}Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f2;Qt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zv(e))throw Error(N(200));return l2(t,e,null,n)};Qt.createRoot=function(t,e){if(!zv(t))throw Error(N(299));var n=!1,r="",i=lb;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Vv(t,1,!1,null,null,n,!1,r,i),t[hr]=e.current,Qa(t.nodeType===8?t.parentNode:t),new Fv(e)};Qt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(N(188)):(t=Object.keys(t).join(","),Error(N(268,t)));return t=RS(e),t=t===null?null:t.stateNode,t};Qt.flushSync=function(t){return eo(t)};Qt.hydrate=function(t,e,n){if(!gd(e))throw Error(N(200));return vd(null,t,e,!0,n)};Qt.hydrateRoot=function(t,e,n){if(!zv(t))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=lb;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=ab(e,null,t,1,n??null,i,!1,o,s),t[hr]=e.current,Qa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new md(e)};Qt.render=function(t,e,n){if(!gd(e))throw Error(N(200));return vd(null,t,e,!1,n)};Qt.unmountComponentAtNode=function(t){if(!gd(t))throw Error(N(40));return t._reactRootContainer?(eo(function(){vd(null,null,t,!1,function(){t._reactRootContainer=null,t[hr]=null})}),!0):!1};Qt.unstable_batchedUpdates=Lv;Qt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!gd(n))throw Error(N(200));if(t==null||t._reactInternals===void 0)throw Error(N(38));return vd(t,e,n,!1,r)};Qt.version="18.2.0-next-9e3b772b8-20220608";function ub(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ub)}catch(t){console.error(t)}}ub(),aS.exports=Qt;var cb=aS.exports,H_=cb;Dp.createRoot=H_.createRoot,Dp.hydrateRoot=H_.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},h2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},db={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=o>>2,f=(o&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,s||(d=64)),r.push(n[c],n[f],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fb(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):h2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||u==null||f==null)throw new p2;const d=o<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class p2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const m2=function(t){const e=fb(t);return db.encodeByteArray(e,!0)},sf=function(t){return m2(t).replace(/\./g,"")},hb=function(t){try{return db.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function af(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!g2(n)||(t[n]=af(t[n],e[n]));return t}function g2(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2=()=>v2().__FIREBASE_DEFAULTS__,_2=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},w2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hb(t[1]);return e&&JSON.parse(e)},Bv=()=>{try{return y2()||_2()||w2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pb=t=>{var e,n;return(n=(e=Bv())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},E2=t=>{const e=pb(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},mb=()=>{var t;return(t=Bv())===null||t===void 0?void 0:t.config},gb=t=>{var e;return(e=Bv())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[sf(JSON.stringify(n)),sf(JSON.stringify(s)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function T2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xt())}function b2(){return typeof self=="object"&&self.self===self}function k2(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function x2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function I2(){const t=xt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function C2(){try{return typeof indexedDB=="object"}catch{return!1}}function R2(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2="FirebaseError";class Pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=P2,Object.setPrototypeOf(this,Pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,po.prototype.create)}}class po{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?A2(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Pn(i,a,r)}}function A2(t,e){return t.replace(O2,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const O2=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function N2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function lf(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(q_(o)&&q_(s)){if(!lf(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function q_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function da(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function ha(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function yb(t,e){const n=new D2(t,e);return n.subscribe.bind(n)}class D2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");L2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=qh),i.error===void 0&&(i.error=qh),i.complete===void 0&&(i.complete=qh);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function L2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t){return t&&t._delegate?t._delegate:t}class Yn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new S2;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($2(e))try{this.getOrInitializeService({instanceIdentifier:Ai})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Ai){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ai){return this.instances.has(e)}getOptions(e=Ai){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:j2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ai){return this.component?this.component.multipleInstances?e:Ai:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function j2(t){return t===Ai?void 0:t}function $2(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new M2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=[];var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const _b={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},U2=ce.INFO,F2={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},z2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=F2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yd{constructor(e){this.name=e,this._logLevel=U2,this._logHandler=z2,this._userLogHandler=null,Hv.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_b[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}function B2(t){Hv.forEach(e=>{e.setLogLevel(t)})}function H2(t,e){for(const n of Hv){let r=null;e&&e.level&&(r=_b[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,o,...s)=>{const a=s.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");o>=(r??i.logLevel)&&t({level:ce[o].toLowerCase(),message:a,args:s,type:i.name})}}}const W2=(t,e)=>e.some(n=>t instanceof n);let G_,K_;function q2(){return G_||(G_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function G2(){return K_||(K_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wb=new WeakMap,Im=new WeakMap,Eb=new WeakMap,Gh=new WeakMap,Wv=new WeakMap;function K2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(oi(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&wb.set(n,t)}).catch(()=>{}),Wv.set(e,t),e}function Y2(t){if(Im.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Im.set(t,e)}let Cm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Im.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Eb.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return oi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Q2(t){Cm=t(Cm)}function X2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Kh(this),e,...n);return Eb.set(r,e.sort?e.sort():[e]),oi(r)}:G2().includes(t)?function(...e){return t.apply(Kh(this),e),oi(wb.get(this))}:function(...e){return oi(t.apply(Kh(this),e))}}function J2(t){return typeof t=="function"?X2(t):(t instanceof IDBTransaction&&Y2(t),W2(t,q2())?new Proxy(t,Cm):t)}function oi(t){if(t instanceof IDBRequest)return K2(t);if(Gh.has(t))return Gh.get(t);const e=J2(t);return e!==t&&(Gh.set(t,e),Wv.set(e,t)),e}const Kh=t=>Wv.get(t);function Z2(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=oi(s);return r&&s.addEventListener("upgradeneeded",l=>{r(oi(s.result),l.oldVersion,l.newVersion,oi(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const eO=["get","getKey","getAll","getAllKeys","count"],tO=["put","add","delete","clear"],Yh=new Map;function Y_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yh.get(e))return Yh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=tO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||eO.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Yh.set(e,o),o}Q2(t=>({...t,get:(e,n,r)=>Y_(e,n)||t.get(e,n,r),has:(e,n)=>!!Y_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rm="@firebase/app",Q_="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=new yd("@firebase/app"),iO="@firebase/app-compat",oO="@firebase/analytics-compat",sO="@firebase/analytics",aO="@firebase/app-check-compat",lO="@firebase/app-check",uO="@firebase/auth",cO="@firebase/auth-compat",fO="@firebase/database",dO="@firebase/database-compat",hO="@firebase/functions",pO="@firebase/functions-compat",mO="@firebase/installations",gO="@firebase/installations-compat",vO="@firebase/messaging",yO="@firebase/messaging-compat",_O="@firebase/performance",wO="@firebase/performance-compat",EO="@firebase/remote-config",SO="@firebase/remote-config-compat",TO="@firebase/storage",bO="@firebase/storage-compat",kO="@firebase/firestore",xO="@firebase/firestore-compat",IO="firebase",CO="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di="[DEFAULT]",RO={[Rm]:"fire-core",[iO]:"fire-core-compat",[sO]:"fire-analytics",[oO]:"fire-analytics-compat",[lO]:"fire-app-check",[aO]:"fire-app-check-compat",[uO]:"fire-auth",[cO]:"fire-auth-compat",[fO]:"fire-rtdb",[dO]:"fire-rtdb-compat",[hO]:"fire-fn",[pO]:"fire-fn-compat",[mO]:"fire-iid",[gO]:"fire-iid-compat",[vO]:"fire-fcm",[yO]:"fire-fcm-compat",[_O]:"fire-perf",[wO]:"fire-perf-compat",[EO]:"fire-rc",[SO]:"fire-rc-compat",[TO]:"fire-gcs",[bO]:"fire-gcs-compat",[kO]:"fire-fst",[xO]:"fire-fst-compat","fire-js":"fire-js",[IO]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=new Map,ol=new Map;function uf(t,e){try{t.container.addComponent(e)}catch(n){to.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Sb(t,e){t.container.addOrOverwriteComponent(e)}function gr(t){const e=t.name;if(ol.has(e))return to.debug(`There were multiple attempts to register component ${e}.`),!1;ol.set(e,t);for(const n of hi.values())uf(n,t);return!0}function zl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function PO(t,e,n=di){zl(t,e).clearInstance(n)}function AO(){ol.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ur=new po("app","Firebase",OO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let NO=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ur.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=CO;function Bl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:di,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ur.create("bad-app-name",{appName:String(i)});if(n||(n=mb()),!n)throw ur.create("no-options");const o=hi.get(i);if(o){if(lf(n,o.options)&&lf(r,o.config))return o;throw ur.create("duplicate-app",{appName:i})}const s=new V2(i);for(const l of ol.values())s.addComponent(l);const a=new NO(n,r,s);return hi.set(i,a),a}function qv(t=di){const e=hi.get(t);if(!e&&t===di&&mb())return Bl();if(!e)throw ur.create("no-app",{appName:t});return e}function DO(){return Array.from(hi.values())}async function Tb(t){const e=t.name;hi.has(e)&&(hi.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Gt(t,e,n){var r;let i=(r=RO[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),to.warn(a.join(" "));return}gr(new Yn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function bb(t,e){if(t!==null&&typeof t!="function")throw ur.create("invalid-log-argument");H2(t,e)}function kb(t){B2(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LO="firebase-heartbeat-database",MO=1,sl="firebase-heartbeat-store";let Qh=null;function xb(){return Qh||(Qh=Z2(LO,MO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(sl)}}}).catch(t=>{throw ur.create("idb-open",{originalErrorMessage:t.message})})),Qh}async function jO(t){try{return await(await xb()).transaction(sl).objectStore(sl).get(Ib(t))}catch(e){if(e instanceof Pn)to.warn(e.message);else{const n=ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});to.warn(n.message)}}}async function X_(t,e){try{const r=(await xb()).transaction(sl,"readwrite");await r.objectStore(sl).put(e,Ib(t)),await r.done}catch(n){if(n instanceof Pn)to.warn(n.message);else{const r=ur.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});to.warn(r.message)}}}function Ib(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O=1024,VO=30*24*60*60*1e3;class UO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=J_();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=VO}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=J_(),{heartbeatsToSend:r,unsentEntries:i}=FO(this._heartbeatsCache.heartbeats),o=sf(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function J_(){return new Date().toISOString().substring(0,10)}function FO(t,e=$O){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Z_(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Z_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return C2()?R2().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return X_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return X_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Z_(t){return sf(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BO(t){gr(new Yn("platform-logger",e=>new nO(e),"PRIVATE")),gr(new Yn("heartbeat",e=>new UO(e),"PRIVATE")),Gt(Rm,Q_,t),Gt(Rm,Q_,"esm2017"),Gt("fire-js","")}BO("");const HO=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Pn,SDK_VERSION:kr,_DEFAULT_ENTRY_NAME:di,_addComponent:uf,_addOrOverwriteComponent:Sb,_apps:hi,_clearComponents:AO,_components:ol,_getProvider:zl,_registerComponent:gr,_removeServiceInstance:PO,deleteApp:Tb,getApp:qv,getApps:DO,initializeApp:Bl,onLog:bb,registerVersion:Gt,setLogLevel:kb},Symbol.toStringTag,{value:"Module"}));var WO="firebase",qO="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt(WO,qO,"app");var Et=function(){return Et=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Et.apply(this,arguments)};function Gv(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function al(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}function Cb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const GO=Cb,Rb=new po("auth","Firebase",Cb());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf=new yd("@firebase/auth");function KO(t,...e){cf.logLevel<=ce.WARN&&cf.warn(`Auth (${kr}): ${t}`,...e)}function wc(t,...e){cf.logLevel<=ce.ERROR&&cf.error(`Auth (${kr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t,...e){throw Kv(t,...e)}function Hn(t,...e){return Kv(t,...e)}function YO(t,e,n){const r=Object.assign(Object.assign({},GO()),{[e]:n});return new po("auth","Firebase",r).create(e,{appName:t.name})}function Kv(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Rb.create(t,...e)}function J(t,e,...n){if(!t)throw Kv(e,...n)}function or(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wc(e),new Error(e)}function vr(t,e){t||or(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function QO(){return ew()==="http:"||ew()==="https:"}function ew(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(QO()||k2()||"connection"in navigator)?navigator.onLine:!0}function JO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n){this.shortDelay=e,this.longDelay=n,vr(n>e,"Short delay should be less than long delay!"),this.isMobile=T2()||x2()}get(){return XO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(t,e){vr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;or("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;or("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;or("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN=new Hl(3e4,6e4);function Ti(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function bi(t,e,n,r,i={}){return Ab(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=Fl(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Pb.fetch()(Ob(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function Ab(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ZO),e);try{const i=new nN(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Lu(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lu(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Lu(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw Lu(t,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw YO(t,c,u);Cn(t,c)}}catch(i){if(i instanceof Pn)throw i;Cn(t,"network-request-failed",{message:String(i)})}}async function Wl(t,e,n,r,i={}){const o=await bi(t,e,n,r,i);return"mfaPendingCredential"in o&&Cn(t,"multi-factor-auth-required",{_serverResponse:o}),o}function Ob(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Yv(t.config,i):`${t.config.apiScheme}://${i}`}function tN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class nN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Hn(this.auth,"network-request-failed")),eN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Lu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Hn(t,e,r);return i.customData._tokenResponse=n,i}function tw(t){return t!==void 0&&t.enterprise!==void 0}class rN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return tN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function iN(t,e){return bi(t,"GET","/v2/recaptchaConfig",Ti(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oN(t,e){return bi(t,"POST","/v1/accounts:delete",e)}async function sN(t,e){return bi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function aN(t,e=!1){const n=Ge(t),r=await n.getIdToken(e),i=Qv(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Ra(Xh(i.auth_time)),issuedAtTime:Ra(Xh(i.iat)),expirationTime:Ra(Xh(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Xh(t){return Number(t)*1e3}function Qv(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wc("JWT malformed, contained fewer than 3 sections"),null;try{const i=hb(n);return i?JSON.parse(i):(wc("Failed to decode base64 JWT payload"),null)}catch(i){return wc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function lN(t){const e=Qv(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ll(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pn&&uN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ra(this.lastLoginAt),this.creationTime=Ra(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ff(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ll(t,sN(n,{idToken:r}));J(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?hN(o.providerUserInfo):[],a=dN(t.providerData,s),l=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Nb(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function fN(t){const e=Ge(t);await ff(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function hN(t){return t.map(e=>{var{providerId:n}=e,r=Gv(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pN(t,e){const n=await Ab(t,{},async()=>{const r=Fl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=Ob(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Pb.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mN(t,e){return bi(t,"POST","/v2/accounts:revokeToken",Ti(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return J(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await pN(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new ul;return r&&(J(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(J(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ul,this.toJSON())}_performRefresh(){return or("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Hi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=Gv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Nb(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await ll(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return aN(this,e)}reload(){return fN(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Hi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ff(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ll(this,oN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,y=(s=n.photoURL)!==null&&s!==void 0?s:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:E,isAnonymous:S,providerData:T,stsTokenManager:b}=n;J(v&&b,e,"internal-error");const k=ul.fromJSON(this.name,b);J(typeof v=="string",e,"internal-error"),Pr(f,e.name),Pr(d,e.name),J(typeof E=="boolean",e,"internal-error"),J(typeof S=="boolean",e,"internal-error"),Pr(p,e.name),Pr(y,e.name),Pr(_,e.name),Pr(w,e.name),Pr(g,e.name),Pr(m,e.name);const R=new Hi({uid:v,auth:e,email:d,emailVerified:E,displayName:f,isAnonymous:S,photoURL:y,phoneNumber:p,tenantId:_,stsTokenManager:k,createdAt:g,lastLoginAt:m});return T&&Array.isArray(T)&&(R.providerData=T.map(D=>Object.assign({},D))),w&&(R._redirectEventId=w),R}static async _fromIdTokenResponse(e,n,r=!1){const i=new ul;i.updateFromServerResponse(n);const o=new Hi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ff(o),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw=new Map;function sr(t){vr(t instanceof Function,"Expected a class definition");let e=nw.get(t);return e?(vr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,nw.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Db.type="NONE";const rw=Db;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(t,e,n){return`firebase:${t}:${e}:${n}`}class ts{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Ec(this.userKey,i.apiKey,o),this.fullPersistenceKey=Ec("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Hi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ts(sr(rw),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||sr(rw);const s=Ec(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const f=Hi._fromJSON(e,c);u!==o&&(a=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new ts(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new ts(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Lb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vb(e))return"Blackberry";if(Ub(e))return"Webos";if(Xv(e))return"Safari";if((e.includes("chrome/")||Mb(e))&&!e.includes("edge/"))return"Chrome";if($b(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Lb(t=xt()){return/firefox\//i.test(t)}function Xv(t=xt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mb(t=xt()){return/crios\//i.test(t)}function jb(t=xt()){return/iemobile/i.test(t)}function $b(t=xt()){return/android/i.test(t)}function Vb(t=xt()){return/blackberry/i.test(t)}function Ub(t=xt()){return/webos/i.test(t)}function _d(t=xt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gN(t=xt()){var e;return _d(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vN(){return I2()&&document.documentMode===10}function Fb(t=xt()){return _d(t)||$b(t)||Ub(t)||Vb(t)||/windows phone/i.test(t)||jb(t)}function yN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(t,e=[]){let n;switch(t){case"Browser":n=iw(xt());break;case"Worker":n=`${iw(xt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${kr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wN(t,e={}){return bi(t,"GET","/v2/passwordPolicy",Ti(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EN=6;class SN{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:EN,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ow(this),this.idTokenSubscription=new ow(this),this.beforeStateQueue=new _N(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=sr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ts.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ff(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=JO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ge(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(sr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wN(this),n=new SN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new po("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await mN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&sr(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await ts.create(this,[sr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=e.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&KO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function mo(t){return Ge(t)}class ow{constructor(e){this.auth=e,this.observer=null,this.addObserver=yb(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Bb(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=Hn("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",bN().appendChild(r)})}function kN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const xN="https://www.google.com/recaptcha/enterprise.js?render=",IN="recaptcha-enterprise",CN="NO_RECAPTCHA";class RN{constructor(e){this.type=IN,this.auth=mo(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{iN(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new rN(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;tw(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(u=>{s(u)}).catch(()=>{s(CN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&tw(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}Bb(xN+a).then(()=>{i(a,o,s)}).catch(l=>{s(l)})}}).catch(a=>{s(a)})})}}async function sw(t,e,n,r=!1){const i=new RN(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Am(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await sw(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await sw(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PN(t,e){const n=zl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(lf(o,e??{}))return i;Cn(i,"already-initialized")}return n.initialize({options:e})}function AN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(sr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ON(t,e,n){const r=mo(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=Hb(e),{host:s,port:a}=NN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||DN()}function Hb(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function NN(t){const e=Hb(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:aw(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:aw(s)}}}function aw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function DN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return or("not implemented")}_getIdTokenResponse(e){return or("not implemented")}_linkToIdToken(e,n){return or("not implemented")}_getReauthenticationResolver(e){return or("not implemented")}}async function LN(t,e){return bi(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MN(t,e){return Wl(t,"POST","/v1/accounts:signInWithPassword",Ti(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jN(t,e){return Wl(t,"POST","/v1/accounts:signInWithEmailLink",Ti(t,e))}async function $N(t,e){return Wl(t,"POST","/v1/accounts:signInWithEmailLink",Ti(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl extends Jv{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new cl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new cl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Am(e,n,"signInWithPassword",MN);case"emailLink":return jN(e,{email:this._email,oobCode:this._password});default:Cn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Am(e,r,"signUpPassword",LN);case"emailLink":return $N(e,{idToken:n,email:this._email,oobCode:this._password});default:Cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ns(t,e){return Wl(t,"POST","/v1/accounts:signInWithIdp",Ti(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN="http://localhost";class no extends Jv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new no(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=Gv(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new no(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return ns(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ns(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ns(e,n)}buildRequest(){const e={requestUri:VN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FN(t){const e=da(ha(t)).link,n=e?da(ha(e)).deep_link_id:null,r=da(ha(t)).deep_link_id;return(r?da(ha(r)).link:null)||r||n||e||t}class Zv{constructor(e){var n,r,i,o,s,a;const l=da(ha(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=UN((i=l.mode)!==null&&i!==void 0?i:null);J(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=FN(e);try{return new Zv(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.providerId=Ms.PROVIDER_ID}static credential(e,n){return cl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Zv.parseLink(n);return J(r,"argument-error"),cl._fromEmailAndCode(e,r.code,r.tenantId)}}Ms.PROVIDER_ID="password";Ms.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ms.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql extends Wb{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends ql{constructor(){super("facebook.com")}static credential(e){return no._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fr.credentialFromTaggedObject(e)}static credentialFromError(e){return Fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fr.credential(e.oauthAccessToken)}catch{return null}}}Fr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr extends ql{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return no._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return zr.credentialFromTaggedObject(e)}static credentialFromError(e){return zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return zr.credential(n,r)}catch{return null}}}zr.GOOGLE_SIGN_IN_METHOD="google.com";zr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends ql{constructor(){super("github.com")}static credential(e){return no._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Br.credential(e.oauthAccessToken)}catch{return null}}}Br.GITHUB_SIGN_IN_METHOD="github.com";Br.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends ql{constructor(){super("twitter.com")}static credential(e,n){return no._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Hr.credential(n,r)}catch{return null}}}Hr.TWITTER_SIGN_IN_METHOD="twitter.com";Hr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zN(t,e){return Wl(t,"POST","/v1/accounts:signUp",Ti(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await Hi._fromIdTokenResponse(e,r,i),s=lw(r);return new ro({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=lw(r);return new ro({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function lw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df extends Pn{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,df.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new df(e,n,r,i)}}function qb(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?df._fromErrorAndOperation(t,o,e,r):o})}async function BN(t,e,n=!1){const r=await ll(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ro._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HN(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await ll(t,qb(r,i,e,t),n);J(o.idToken,r,"internal-error");const s=Qv(o.idToken);J(s,r,"internal-error");const{sub:a}=s;return J(t.uid===a,r,"user-mismatch"),ro._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Cn(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gb(t,e,n=!1){const r="signIn",i=await qb(t,r,e),o=await ro._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function WN(t,e){return Gb(mo(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kb(t){const e=mo(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function qN(t,e,n){const r=mo(t),s=await Am(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",zN).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Kb(t),l}),a=await ro._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function GN(t,e,n){return WN(Ge(t),Ms.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Kb(t),r})}function KN(t,e,n,r){return Ge(t).onIdTokenChanged(e,n,r)}function YN(t,e,n){return Ge(t).beforeAuthStateChanged(e,n)}const hf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hf,"1"),this.storage.removeItem(hf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QN(){const t=xt();return Xv(t)||_d(t)}const XN=1e3,JN=10;class Qb extends Yb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=QN()&&yN(),this.fallbackToPolling=Fb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);vN()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,JN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},XN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qb.type="LOCAL";const ZN=Qb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb extends Yb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Xb.type="SESSION";const Jb=Xb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new wd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await eD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=ey("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(d.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(){return window}function nD(t){Wn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zb(){return typeof Wn().WorkerGlobalScope<"u"&&typeof Wn().importScripts=="function"}async function rD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function oD(){return Zb()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek="firebaseLocalStorageDb",sD=1,pf="firebaseLocalStorage",tk="fbase_key";class Gl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ed(t,e){return t.transaction([pf],e?"readwrite":"readonly").objectStore(pf)}function aD(){const t=indexedDB.deleteDatabase(ek);return new Gl(t).toPromise()}function Om(){const t=indexedDB.open(ek,sD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(pf,{keyPath:tk})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(pf)?e(r):(r.close(),await aD(),e(await Om()))})})}async function uw(t,e,n){const r=Ed(t,!0).put({[tk]:e,value:n});return new Gl(r).toPromise()}async function lD(t,e){const n=Ed(t,!1).get(e),r=await new Gl(n).toPromise();return r===void 0?null:r.value}function cw(t,e){const n=Ed(t,!0).delete(e);return new Gl(n).toPromise()}const uD=800,cD=3;class nk{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Om(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>cD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wd._getInstance(oD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rD(),!this.activeServiceWorker)return;this.sender=new tD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Om();return await uw(e,hf,"1"),await cw(e,hf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>uw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Ed(i,!1).getAll();return new Gl(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nk.type="LOCAL";const fD=nk;new Hl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dD(t,e){return e?sr(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty extends Jv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hD(t){return Gb(t.auth,new ty(t),t.bypassAuthState)}function pD(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),HN(n,new ty(t),t.bypassAuthState)}async function mD(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),BN(n,new ty(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hD;case"linkViaPopup":case"linkViaRedirect":return mD;case"reauthViaPopup":case"reauthViaRedirect":return pD;default:Cn(this.auth,"internal-error")}}resolve(e){vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD=new Hl(2e3,1e4);class zo extends rk{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,zo.currentPopupAction&&zo.currentPopupAction.cancel(),zo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){vr(this.filter.length===1,"Popup operations only handle one event");const e=ey();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gD.get())};e()}}zo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD="pendingRedirect",Sc=new Map;class yD extends rk{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Sc.get(this.auth._key());if(!e){try{const r=await _D(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Sc.set(this.auth._key(),e)}return this.bypassAuthState||Sc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _D(t,e){const n=SD(e),r=ED(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function wD(t,e){Sc.set(t._key(),e)}function ED(t){return sr(t._redirectPersistence)}function SD(t){return Ec(vD,t.config.apiKey,t.name)}async function TD(t,e,n=!1){const r=mo(t),i=dD(r,e),s=await new yD(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bD=10*60*1e3;class kD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ik(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Hn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bD&&this.cachedEventUids.clear(),this.cachedEventUids.has(fw(e))}saveEventToCache(e){this.cachedEventUids.add(fw(e)),this.lastProcessedEventTime=Date.now()}}function fw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ik({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ik(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ID(t,e={}){return bi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RD=/^https?/;async function PD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ID(t);for(const n of e)try{if(AD(n))return}catch{}Cn(t,"unauthorized-domain")}function AD(t){const e=Pm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!RD.test(n))return!1;if(CD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD=new Hl(3e4,6e4);function dw(){const t=Wn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ND(t){return new Promise((e,n)=>{var r,i,o;function s(){dw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dw(),n(Hn(t,"network-request-failed"))},timeout:OD.get()})}if(!((i=(r=Wn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Wn().gapi)===null||o===void 0)&&o.load)s();else{const a=kN("iframefcb");return Wn()[a]=()=>{gapi.load?s():n(Hn(t,"network-request-failed"))},Bb(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Tc=null,e})}let Tc=null;function DD(t){return Tc=Tc||ND(t),Tc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD=new Hl(5e3,15e3),MD="__/auth/iframe",jD="emulator/auth/iframe",$D={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UD(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yv(e,jD):`https://${t.config.authDomain}/${MD}`,r={apiKey:e.apiKey,appName:t.name,v:kr},i=VD.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Fl(r).slice(1)}`}async function FD(t){const e=await DD(t),n=Wn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:UD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$D,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Hn(t,"network-request-failed"),a=Wn().setTimeout(()=>{o(s)},LD.get());function l(){Wn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BD=500,HD=600,WD="_blank",qD="http://localhost";class hw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GD(t,e,n,r=BD,i=HD){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},zD),{width:r.toString(),height:i.toString(),top:o,left:s}),u=xt().toLowerCase();n&&(a=Mb(u)?WD:n),Lb(u)&&(e=e||qD,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(gN(u)&&a!=="_self")return KD(e||"",a),new hw(null);const f=window.open(e||"",a,c);J(f,t,"popup-blocked");try{f.focus()}catch{}return new hw(f)}function KD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YD="__/auth/handler",QD="emulator/auth/handler",XD=encodeURIComponent("fac");async function pw(t,e,n,r,i,o){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:kr,eventId:i};if(e instanceof Wb){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",N2(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,f]of Object.entries(o||{}))s[c]=f}if(e instanceof ql){const c=e.getScopes().filter(f=>f!=="");c.length>0&&(s.scopes=c.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${XD}=${encodeURIComponent(l)}`:"";return`${JD(t)}?${Fl(a).slice(1)}${u}`}function JD({config:t}){return t.emulator?Yv(t,QD):`https://${t.authDomain}/${YD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="webStorageSupport";class ZD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jb,this._completeRedirectFn=TD,this._overrideRedirectResult=wD}async _openPopup(e,n,r,i){var o;vr((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await pw(e,n,r,Pm(),i);return GD(e,s,ey())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await pw(e,n,r,Pm(),i);return nD(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(vr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await FD(e),r=new kD(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jh,{type:Jh},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Jh];s!==void 0&&n(!!s),Cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=PD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Fb()||Xv()||_d()}}const eL=ZD;var mw="@firebase/auth",gw="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function rL(t){gr(new Yn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;J(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zb(t)},u=new TN(r,i,o,l);return AN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),gr(new Yn("auth-internal",e=>{const n=mo(e.getProvider("auth").getImmediate());return(r=>new tL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(mw,gw,nL(t)),Gt(mw,gw,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iL=5*60,oL=gb("authIdTokenMaxAge")||iL;let vw=null;const sL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oL)return;const i=n==null?void 0:n.token;vw!==i&&(vw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function aL(t=qv()){const e=zl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=PN(t,{popupRedirectResolver:eL,persistence:[fD,ZN,Jb]}),r=gb("authTokenSyncURL");if(r){const o=sL(r);YN(n,o,()=>o(n.currentUser)),KN(n,s=>o(s))}const i=pb("auth");return i&&ON(n,`http://${i}`),n}rL("Browser");const lL={apiKey:"AIzaSyAu1pu4r4m_kJLEyeL7Jgc6tWz94Upzk98",authDomain:"book-review-a7be9.firebaseapp.com",projectId:"book-review-a7be9",storageBucket:"book-review-a7be9.appspot.com",messagingSenderId:"905824431279",appId:"1:905824431279:web:f56fdfc06bc60dd733785a",measurementId:"G-L9QXD3H138"},uL=Bl(lL),yw=aL(uL);/**
 * @remix-run/router v1.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fl(){return fl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fl.apply(this,arguments)}var Gr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Gr||(Gr={}));const _w="popstate";function cL(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return Nm("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:mf(i)}return dL(e,n,null,t)}function qe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ny(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function fL(){return Math.random().toString(36).substr(2,8)}function ww(t,e){return{usr:t.state,key:t.key,idx:e}}function Nm(t,e,n,r){return n===void 0&&(n=null),fl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?js(e):e,{state:n,key:e&&e.key||r||fL()})}function mf(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function js(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function dL(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Gr.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(fl({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function f(){a=Gr.Pop;let w=c(),g=w==null?null:w-u;u=w,l&&l({action:a,location:_.location,delta:g})}function d(w,g){a=Gr.Push;let m=Nm(_.location,w,g);n&&n(m,w),u=c()+1;let v=ww(m,u),E=_.createHref(m);try{s.pushState(v,"",E)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(E)}o&&l&&l({action:a,location:_.location,delta:1})}function p(w,g){a=Gr.Replace;let m=Nm(_.location,w,g);n&&n(m,w),u=c();let v=ww(m,u),E=_.createHref(m);s.replaceState(v,"",E),o&&l&&l({action:a,location:_.location,delta:0})}function y(w){let g=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof w=="string"?w:mf(w);return qe(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let _={get action(){return a},get location(){return t(i,s)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(_w,f),l=w,()=>{i.removeEventListener(_w,f),l=null}},createHref(w){return e(i,w)},createURL:y,encodeLocation(w){let g=y(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:d,replace:p,go(w){return s.go(w)}};return _}var Ew;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ew||(Ew={}));function hL(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?js(e):e,i=ry(r.pathname||"/",n);if(i==null)return null;let o=ok(t);pL(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=TL(o[a],xL(i));return s}function ok(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(qe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=si([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(qe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),ok(o.children,e,c,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:EL(u,o.index),routesMeta:c})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of sk(o.path))i(o,s,l)}),e}function sk(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=sk(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function pL(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:SL(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const mL=/^:\w+$/,gL=3,vL=2,yL=1,_L=10,wL=-2,Sw=t=>t==="*";function EL(t,e){let n=t.split("/"),r=n.length;return n.some(Sw)&&(r+=wL),e&&(r+=vL),n.filter(i=>!Sw(i)).reduce((i,o)=>i+(mL.test(o)?gL:o===""?yL:_L),r)}function SL(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function TL(t,e){let{routesMeta:n}=t,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=bL({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;o.push({params:r,pathname:si([i,c.pathname]),pathnameBase:PL(si([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=si([i,c.pathnameBase]))}return o}function bL(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=kL(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{let{paramName:d,isOptional:p}=c;if(d==="*"){let _=a[f]||"";s=o.slice(0,o.length-_.length).replace(/(.)\/+$/,"$1")}const y=a[f];return p&&!y?u[d]=void 0:u[d]=IL(y||"",d),u},{}),pathname:o,pathnameBase:s,pattern:t}}function kL(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ny(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function xL(t){try{return decodeURI(t)}catch(e){return ny(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function IL(t,e){try{return decodeURIComponent(t)}catch(n){return ny(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function ry(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function CL(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?js(t):t;return{pathname:n?n.startsWith("/")?n:RL(n,e):e,search:AL(r),hash:OL(i)}}function RL(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Zh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ak(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function lk(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=js(t):(i=fl({},t),qe(!i.pathname||!i.pathname.includes("?"),Zh("?","pathname","search",i)),qe(!i.pathname||!i.pathname.includes("#"),Zh("#","pathname","hash",i)),qe(!i.search||!i.search.includes("#"),Zh("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else if(r){let f=e[e.length-1].replace(/^\//,"").split("/");if(s.startsWith("..")){let d=s.split("/");for(;d[0]==="..";)d.shift(),f.pop();i.pathname=d.join("/")}a="/"+f.join("/")}else{let f=e.length-1;if(s.startsWith("..")){let d=s.split("/");for(;d[0]==="..";)d.shift(),f-=1;i.pathname=d.join("/")}a=f>=0?e[f]:"/"}let l=CL(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const si=t=>t.join("/").replace(/\/\/+/g,"/"),PL=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),AL=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,OL=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function NL(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const uk=["post","put","patch","delete"];new Set(uk);const DL=["get",...uk];new Set(DL);/**
 * React Router v6.20.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gf(){return gf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},gf.apply(this,arguments)}const iy=A.createContext(null),LL=A.createContext(null),$s=A.createContext(null),Sd=A.createContext(null),go=A.createContext({outlet:null,matches:[],isDataRoute:!1}),ck=A.createContext(null);function ML(t,e){let{relative:n}=e===void 0?{}:e;Kl()||qe(!1);let{basename:r,navigator:i}=A.useContext($s),{hash:o,pathname:s,search:a}=dk(t,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:si([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Kl(){return A.useContext(Sd)!=null}function Td(){return Kl()||qe(!1),A.useContext(Sd).location}function fk(t){A.useContext($s).static||A.useLayoutEffect(t)}function oy(){let{isDataRoute:t}=A.useContext(go);return t?YL():jL()}function jL(){Kl()||qe(!1);let t=A.useContext(iy),{basename:e,navigator:n}=A.useContext($s),{matches:r}=A.useContext(go),{pathname:i}=Td(),o=JSON.stringify(ak(r).map(l=>l.pathnameBase)),s=A.useRef(!1);return fk(()=>{s.current=!0}),A.useCallback(function(l,u){if(u===void 0&&(u={}),!s.current)return;if(typeof l=="number"){n.go(l);return}let c=lk(l,JSON.parse(o),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:si([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,o,i,t])}function dk(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=A.useContext(go),{pathname:i}=Td(),o=JSON.stringify(ak(r).map(s=>s.pathnameBase));return A.useMemo(()=>lk(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function $L(t,e){return VL(t,e)}function VL(t,e,n){Kl()||qe(!1);let{navigator:r}=A.useContext($s),{matches:i}=A.useContext(go),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=Td(),u;if(e){var c;let _=typeof e=="string"?js(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||qe(!1),u=_}else u=l;let f=u.pathname||"/",d=a==="/"?f:f.slice(a.length)||"/",p=hL(t,{pathname:d}),y=HL(p&&p.map(_=>Object.assign({},_,{params:Object.assign({},s,_.params),pathname:si([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:si([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&y?A.createElement(Sd.Provider,{value:{location:gf({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Gr.Pop}},y):y}function UL(){let t=KL(),e=NL(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},e),n?A.createElement("pre",{style:i},n):null,o)}const FL=A.createElement(UL,null);class zL extends A.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?A.createElement(go.Provider,{value:this.props.routeContext},A.createElement(ck.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function BL(t){let{routeContext:e,match:n,children:r}=t,i=A.useContext(iy);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),A.createElement(go.Provider,{value:e},r)}function HL(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let o=t,s=(r=n)==null?void 0:r.errors;if(s!=null){let a=o.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id]));a>=0||qe(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,l,u)=>{let c=l.route.id?s==null?void 0:s[l.route.id]:null,f=null;n&&(f=l.route.errorElement||FL);let d=e.concat(o.slice(0,u+1)),p=()=>{let y;return c?y=f:l.route.Component?y=A.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,A.createElement(BL,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?A.createElement(zL,{location:n.location,revalidation:n.revalidation,component:f,error:c,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var hk=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(hk||{}),vf=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(vf||{});function WL(t){let e=A.useContext(iy);return e||qe(!1),e}function qL(t){let e=A.useContext(LL);return e||qe(!1),e}function GL(t){let e=A.useContext(go);return e||qe(!1),e}function pk(t){let e=GL(),n=e.matches[e.matches.length-1];return n.route.id||qe(!1),n.route.id}function KL(){var t;let e=A.useContext(ck),n=qL(vf.UseRouteError),r=pk(vf.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function YL(){let{router:t}=WL(hk.UseNavigateStable),e=pk(vf.UseNavigateStable),n=A.useRef(!1);return fk(()=>{n.current=!0}),A.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,gf({fromRouteId:e},o)))},[t,e])}function Dr(t){qe(!1)}function QL(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Gr.Pop,navigator:o,static:s=!1}=t;Kl()&&qe(!1);let a=e.replace(/^\/*/,"/"),l=A.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=js(r));let{pathname:u="/",search:c="",hash:f="",state:d=null,key:p="default"}=r,y=A.useMemo(()=>{let _=ry(u,a);return _==null?null:{location:{pathname:_,search:c,hash:f,state:d,key:p},navigationType:i}},[a,u,c,f,d,p,i]);return y==null?null:A.createElement($s.Provider,{value:l},A.createElement(Sd.Provider,{children:n,value:y}))}function XL(t){let{children:e,location:n}=t;return $L(Dm(e),n)}new Promise(()=>{});function Dm(t,e){e===void 0&&(e=[]);let n=[];return A.Children.forEach(t,(r,i)=>{if(!A.isValidElement(r))return;let o=[...e,i];if(r.type===A.Fragment){n.push.apply(n,Dm(r.props.children,o));return}r.type!==Dr&&qe(!1),!r.props.index||!r.props.children||qe(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Dm(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.20.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lm(){return Lm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Lm.apply(this,arguments)}function JL(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function ZL(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function eM(t,e){return t.button===0&&(!e||e==="_self")&&!ZL(t)}const tM=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],nM="startTransition",Tw=rP[nM];function rM(t){let{basename:e,children:n,future:r,window:i}=t,o=A.useRef();o.current==null&&(o.current=cL({window:i,v5Compat:!0}));let s=o.current,[a,l]=A.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=A.useCallback(f=>{u&&Tw?Tw(()=>l(f)):l(f)},[l,u]);return A.useLayoutEffect(()=>s.listen(c),[s,c]),A.createElement(QL,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s})}const iM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",oM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_n=A.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:f}=e,d=JL(e,tM),{basename:p}=A.useContext($s),y,_=!1;if(typeof u=="string"&&oM.test(u)&&(y=u,iM))try{let v=new URL(window.location.href),E=u.startsWith("//")?new URL(v.protocol+u):new URL(u),S=ry(E.pathname,p);E.origin===v.origin&&S!=null?u=S+E.search+E.hash:_=!0}catch{}let w=ML(u,{relative:i}),g=sM(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:f});function m(v){r&&r(v),v.defaultPrevented||g(v)}return A.createElement("a",Lm({},d,{href:y||w,onClick:_||o?r:m,ref:n,target:l}))});var bw;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(bw||(bw={}));var kw;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(kw||(kw={}));function sM(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a}=e===void 0?{}:e,l=oy(),u=Td(),c=dk(t,{relative:s});return A.useCallback(f=>{if(eM(f,n)){f.preventDefault();let d=r!==void 0?r:mf(u)===mf(c);l(t,{replace:d,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,o,s,a])}var Se="-ms-",Pa="-moz-",ge="-webkit-",mk="comm",bd="rule",sy="decl",aM="@import",gk="@keyframes",lM="@layer",uM=Math.abs,ay=String.fromCharCode,Mm=Object.assign;function cM(t,e){return nt(t,0)^45?(((e<<2^nt(t,0))<<2^nt(t,1))<<2^nt(t,2))<<2^nt(t,3):0}function vk(t){return t.trim()}function Zn(t,e){return(t=e.exec(t))?t[0]:t}function ie(t,e,n){return t.replace(e,n)}function bc(t,e){return t.indexOf(e)}function nt(t,e){return t.charCodeAt(e)|0}function gs(t,e,n){return t.slice(e,n)}function Ln(t){return t.length}function yk(t){return t.length}function pa(t,e){return e.push(t),t}function fM(t,e){return t.map(e).join("")}function xw(t,e){return t.filter(function(n){return!Zn(n,e)})}var kd=1,vs=1,_k=0,dn=0,He=0,Vs="";function xd(t,e,n,r,i,o,s,a){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:kd,column:vs,length:s,return:"",siblings:a}}function Lr(t,e){return Mm(xd("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Eo(t){for(;t.root;)t=Lr(t.root,{children:[t]});pa(t,t.siblings)}function dM(){return He}function hM(){return He=dn>0?nt(Vs,--dn):0,vs--,He===10&&(vs=1,kd--),He}function bn(){return He=dn<_k?nt(Vs,dn++):0,vs++,He===10&&(vs=1,kd++),He}function Wi(){return nt(Vs,dn)}function kc(){return dn}function Id(t,e){return gs(Vs,t,e)}function jm(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function pM(t){return kd=vs=1,_k=Ln(Vs=t),dn=0,[]}function mM(t){return Vs="",t}function ep(t){return vk(Id(dn-1,$m(t===91?t+2:t===40?t+1:t)))}function gM(t){for(;(He=Wi())&&He<33;)bn();return jm(t)>2||jm(He)>3?"":" "}function vM(t,e){for(;--e&&bn()&&!(He<48||He>102||He>57&&He<65||He>70&&He<97););return Id(t,kc()+(e<6&&Wi()==32&&bn()==32))}function $m(t){for(;bn();)switch(He){case t:return dn;case 34:case 39:t!==34&&t!==39&&$m(He);break;case 40:t===41&&$m(t);break;case 92:bn();break}return dn}function yM(t,e){for(;bn()&&t+He!==47+10;)if(t+He===42+42&&Wi()===47)break;return"/*"+Id(e,dn-1)+"*"+ay(t===47?t:bn())}function _M(t){for(;!jm(Wi());)bn();return Id(t,dn)}function wM(t){return mM(xc("",null,null,null,[""],t=pM(t),0,[0],t))}function xc(t,e,n,r,i,o,s,a,l){for(var u=0,c=0,f=s,d=0,p=0,y=0,_=1,w=1,g=1,m=0,v="",E=i,S=o,T=r,b=v;w;)switch(y=m,m=bn()){case 40:if(y!=108&&nt(b,f-1)==58){bc(b+=ie(ep(m),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:b+=ep(m);break;case 9:case 10:case 13:case 32:b+=gM(y);break;case 92:b+=vM(kc()-1,7);continue;case 47:switch(Wi()){case 42:case 47:pa(EM(yM(bn(),kc()),e,n,l),l);break;default:b+="/"}break;case 123*_:a[u++]=Ln(b)*g;case 125*_:case 59:case 0:switch(m){case 0:case 125:w=0;case 59+c:g==-1&&(b=ie(b,/\f/g,"")),p>0&&Ln(b)-f&&pa(p>32?Cw(b+";",r,n,f-1,l):Cw(ie(b," ","")+";",r,n,f-2,l),l);break;case 59:b+=";";default:if(pa(T=Iw(b,e,n,u,c,i,a,v,E=[],S=[],f,o),o),m===123)if(c===0)xc(b,e,T,T,E,o,f,a,S);else switch(d===99&&nt(b,3)===110?100:d){case 100:case 108:case 109:case 115:xc(t,T,T,r&&pa(Iw(t,T,T,0,0,i,a,v,i,E=[],f,S),S),i,S,f,a,r?E:S);break;default:xc(b,T,T,T,[""],S,0,a,S)}}u=c=p=0,_=g=1,v=b="",f=s;break;case 58:f=1+Ln(b),p=y;default:if(_<1){if(m==123)--_;else if(m==125&&_++==0&&hM()==125)continue}switch(b+=ay(m),m*_){case 38:g=c>0?1:(b+="\f",-1);break;case 44:a[u++]=(Ln(b)-1)*g,g=1;break;case 64:Wi()===45&&(b+=ep(bn())),d=Wi(),c=f=Ln(v=b+=_M(kc())),m++;break;case 45:y===45&&Ln(b)==2&&(_=0)}}return o}function Iw(t,e,n,r,i,o,s,a,l,u,c,f){for(var d=i-1,p=i===0?o:[""],y=yk(p),_=0,w=0,g=0;_<r;++_)for(var m=0,v=gs(t,d+1,d=uM(w=s[_])),E=t;m<y;++m)(E=vk(w>0?p[m]+" "+v:ie(v,/&\f/g,p[m])))&&(l[g++]=E);return xd(t,e,n,i===0?bd:a,l,u,c,f)}function EM(t,e,n,r){return xd(t,e,n,mk,ay(dM()),gs(t,2,-2),0,r)}function Cw(t,e,n,r,i){return xd(t,e,n,sy,gs(t,0,r),gs(t,r+1,-1),r,i)}function wk(t,e,n){switch(cM(t,e)){case 5103:return ge+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ge+t+t;case 4789:return Pa+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ge+t+Pa+t+Se+t+t;case 5936:switch(nt(t,e+11)){case 114:return ge+t+Se+ie(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ge+t+Se+ie(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ge+t+Se+ie(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ge+t+Se+t+t;case 6165:return ge+t+Se+"flex-"+t+t;case 5187:return ge+t+ie(t,/(\w+).+(:[^]+)/,ge+"box-$1$2"+Se+"flex-$1$2")+t;case 5443:return ge+t+Se+"flex-item-"+ie(t,/flex-|-self/g,"")+(Zn(t,/flex-|baseline/)?"":Se+"grid-row-"+ie(t,/flex-|-self/g,""))+t;case 4675:return ge+t+Se+"flex-line-pack"+ie(t,/align-content|flex-|-self/g,"")+t;case 5548:return ge+t+Se+ie(t,"shrink","negative")+t;case 5292:return ge+t+Se+ie(t,"basis","preferred-size")+t;case 6060:return ge+"box-"+ie(t,"-grow","")+ge+t+Se+ie(t,"grow","positive")+t;case 4554:return ge+ie(t,/([^-])(transform)/g,"$1"+ge+"$2")+t;case 6187:return ie(ie(ie(t,/(zoom-|grab)/,ge+"$1"),/(image-set)/,ge+"$1"),t,"")+t;case 5495:case 3959:return ie(t,/(image-set\([^]*)/,ge+"$1$`$1");case 4968:return ie(ie(t,/(.+:)(flex-)?(.*)/,ge+"box-pack:$3"+Se+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ge+t+t;case 4200:if(!Zn(t,/flex-|baseline/))return Se+"grid-column-align"+gs(t,e)+t;break;case 2592:case 3360:return Se+ie(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Zn(r.props,/grid-\w+-end/)})?~bc(t+(n=n[e].value),"span")?t:Se+ie(t,"-start","")+t+Se+"grid-row-span:"+(~bc(n,"span")?Zn(n,/\d+/):+Zn(n,/\d+/)-+Zn(t,/\d+/))+";":Se+ie(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Zn(r.props,/grid-\w+-start/)})?t:Se+ie(ie(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ie(t,/(.+)-inline(.+)/,ge+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ln(t)-1-e>6)switch(nt(t,e+1)){case 109:if(nt(t,e+4)!==45)break;case 102:return ie(t,/(.+:)(.+)-([^]+)/,"$1"+ge+"$2-$3$1"+Pa+(nt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~bc(t,"stretch")?wk(ie(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ie(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return Se+i+":"+o+u+(s?Se+i+"-span:"+(a?l:+l-+o)+u:"")+t});case 4949:if(nt(t,e+6)===121)return ie(t,":",":"+ge)+t;break;case 6444:switch(nt(t,nt(t,14)===45?18:11)){case 120:return ie(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ge+(nt(t,14)===45?"inline-":"")+"box$3$1"+ge+"$2$3$1"+Se+"$2box$3")+t;case 100:return ie(t,":",":"+Se)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ie(t,"scroll-","scroll-snap-")+t}return t}function yf(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function SM(t,e,n,r){switch(t.type){case lM:if(t.children.length)break;case aM:case sy:return t.return=t.return||t.value;case mk:return"";case gk:return t.return=t.value+"{"+yf(t.children,r)+"}";case bd:if(!Ln(t.value=t.props.join(",")))return""}return Ln(n=yf(t.children,r))?t.return=t.value+"{"+n+"}":""}function TM(t){var e=yk(t);return function(n,r,i,o){for(var s="",a=0;a<e;a++)s+=t[a](n,r,i,o)||"";return s}}function bM(t){return function(e){e.root||(e=e.return)&&t(e)}}function kM(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case sy:t.return=wk(t.value,t.length,n);return;case gk:return yf([Lr(t,{value:ie(t.value,"@","@"+ge)})],r);case bd:if(t.length)return fM(n=t.props,function(i){switch(Zn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Eo(Lr(t,{props:[ie(i,/:(read-\w+)/,":"+Pa+"$1")]})),Eo(Lr(t,{props:[i]})),Mm(t,{props:xw(n,r)});break;case"::placeholder":Eo(Lr(t,{props:[ie(i,/:(plac\w+)/,":"+ge+"input-$1")]})),Eo(Lr(t,{props:[ie(i,/:(plac\w+)/,":"+Pa+"$1")]})),Eo(Lr(t,{props:[ie(i,/:(plac\w+)/,Se+"input-$1")]})),Eo(Lr(t,{props:[i]})),Mm(t,{props:xw(n,r)});break}return""})}}var xM={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ys=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ly=typeof window<"u"&&"HTMLElement"in window,IM=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),CM={},Cd=Object.freeze([]),_s=Object.freeze({});function Ek(t,e,n){return n===void 0&&(n=_s),t.theme!==n.theme&&t.theme||e||n.theme}var Sk=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),RM=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,PM=/(^-|-$)/g;function Rw(t){return t.replace(RM,"-").replace(PM,"")}var AM=/(a)(d)/gi,Pw=function(t){return String.fromCharCode(t+(t>25?39:97))};function Vm(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=Pw(e%52)+n;return(Pw(e%52)+n).replace(AM,"$1-$2")}var tp,Bo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},Tk=function(t){return Bo(5381,t)};function bk(t){return Vm(Tk(t)>>>0)}function OM(t){return t.displayName||t.name||"Component"}function np(t){return typeof t=="string"&&!0}var kk=typeof Symbol=="function"&&Symbol.for,xk=kk?Symbol.for("react.memo"):60115,NM=kk?Symbol.for("react.forward_ref"):60112,DM={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},LM={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ik={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},MM=((tp={})[NM]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},tp[xk]=Ik,tp);function Aw(t){return("type"in(e=t)&&e.type.$$typeof)===xk?Ik:"$$typeof"in t?MM[t.$$typeof]:DM;var e}var jM=Object.defineProperty,$M=Object.getOwnPropertyNames,Ow=Object.getOwnPropertySymbols,VM=Object.getOwnPropertyDescriptor,UM=Object.getPrototypeOf,Nw=Object.prototype;function Ck(t,e,n){if(typeof e!="string"){if(Nw){var r=UM(e);r&&r!==Nw&&Ck(t,r,n)}var i=$M(e);Ow&&(i=i.concat(Ow(e)));for(var o=Aw(t),s=Aw(e),a=0;a<i.length;++a){var l=i[a];if(!(l in LM||n&&n[l]||s&&l in s||o&&l in o)){var u=VM(e,l);try{jM(t,l,u)}catch{}}}}return t}function ws(t){return typeof t=="function"}function uy(t){return typeof t=="object"&&"styledComponentId"in t}function Mi(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Um(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function dl(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Fm(t,e,n){if(n===void 0&&(n=!1),!n&&!dl(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Fm(t[r],e[r]);else if(dl(e))for(var r in e)t[r]=Fm(t[r],e[r]);return t}function cy(t,e){Object.defineProperty(t,"toString",{value:e})}function Yl(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var FM=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw Yl(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);return n},t}(),Ic=new Map,_f=new Map,Cc=1,Mu=function(t){if(Ic.has(t))return Ic.get(t);for(;_f.has(Cc);)Cc++;var e=Cc++;return Ic.set(t,e),_f.set(e,t),e},zM=function(t,e){Cc=e+1,Ic.set(t,e),_f.set(e,t)},BM="style[".concat(ys,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),HM=new RegExp("^".concat(ys,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),WM=function(t,e,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&t.registerName(e,r)},qM=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(HM);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(zM(c,u),WM(t,c,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function GM(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Rk=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(ys,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ys,"active"),r.setAttribute("data-styled-version","6.1.1");var s=GM();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},KM=function(){function t(e){this.element=Rk(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Yl(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),YM=function(){function t(e){this.element=Rk(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),QM=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Dw=ly,XM={isServer:!ly,useCSSOMInjection:!IM},wf=function(){function t(e,n,r){e===void 0&&(e=_s),n===void 0&&(n={});var i=this;this.options=Et(Et({},XM),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&ly&&Dw&&(Dw=!1,function(o){for(var s=document.querySelectorAll(BM),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(ys)!=="active"&&(qM(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),cy(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(f){var d=function(g){return _f.get(g)}(f);if(d===void 0)return"continue";var p=o.names.get(d),y=s.getGroup(f);if(p===void 0||y.length===0)return"continue";var _="".concat(ys,".g").concat(f,'[id="').concat(d,'"]'),w="";p!==void 0&&p.forEach(function(g){g.length>0&&(w+="".concat(g,","))}),l+="".concat(y).concat(_,'{content:"').concat(w,'"}').concat(`/*!sc*/
`)},c=0;c<a;c++)u(c);return l}(i)})}return t.registerId=function(e){return Mu(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Et(Et({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new QM(i):r?new KM(i):new YM(i)}(this.options),new FM(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Mu(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Mu(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Mu(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),JM=/&/g,ZM=/^\s*\/\/.*$/gm;function Pk(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Pk(n.children,e)),n})}function e4(t){var e,n,r,i=t===void 0?_s:t,o=i.options,s=o===void 0?_s:o,a=i.plugins,l=a===void 0?Cd:a,u=function(d,p,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(e):d},c=l.slice();c.push(function(d){d.type===bd&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(JM,n).replace(r,u))}),s.prefix&&c.push(kM),c.push(SM);var f=function(d,p,y,_){p===void 0&&(p=""),y===void 0&&(y=""),_===void 0&&(_="&"),e=_,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var w=d.replace(ZM,""),g=wM(y||p?"".concat(y," ").concat(p," { ").concat(w," }"):w);s.namespace&&(g=Pk(g,s.namespace));var m=[];return yf(g,TM(c.concat(bM(function(v){return m.push(v)})))),m};return f.hash=l.length?l.reduce(function(d,p){return p.name||Yl(15),Bo(d,p.name)},5381).toString():"",f}var t4=new wf,zm=e4(),Ak=Ht.createContext({shouldForwardProp:void 0,styleSheet:t4,stylis:zm});Ak.Consumer;Ht.createContext(void 0);function Bm(){return A.useContext(Ak)}var n4=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=zm);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,cy(this,function(){throw Yl(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=zm),this.name+e.hash},t}(),r4=function(t){return t>="A"&&t<="Z"};function Lw(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;r4(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var Ok=function(t){return t==null||t===!1||t===""},Nk=function(t){var e,n,r=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!Ok(o)&&(Array.isArray(o)&&o.isCss||ws(o)?r.push("".concat(Lw(i),":"),o,";"):dl(o)?r.push.apply(r,al(al(["".concat(i," {")],Nk(o),!1),["}"],!1)):r.push("".concat(Lw(i),": ").concat((e=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in xM||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ai(t,e,n,r){if(Ok(t))return[];if(uy(t))return[".".concat(t.styledComponentId)];if(ws(t)){if(!ws(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return ai(i,e,n,r)}var o;return t instanceof n4?n?(t.inject(n,r),[t.getName(r)]):[t]:dl(t)?Nk(t):Array.isArray(t)?Array.prototype.concat.apply(Cd,t.map(function(s){return ai(s,e,n,r)})):[t.toString()]}function Dk(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ws(n)&&!uy(n))return!1}return!0}var i4=Tk("6.1.1"),o4=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Dk(e),this.componentId=n,this.baseHash=Bo(i4,n),this.baseStyle=r,wf.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Mi(i,this.staticRulesId);else{var o=Um(ai(this.rules,e,n,r)),s=Vm(Bo(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=Mi(i,s),this.staticRulesId=s}else{for(var l=Bo(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")u+=f;else if(f){var d=Um(ai(f,e,n,r));l=Bo(l,d+c),u+=d}}if(u){var p=Vm(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(u,".".concat(p),void 0,this.componentId)),i=Mi(i,p)}}return i},t}(),fy=Ht.createContext(void 0);fy.Consumer;var rp={};function s4(t,e,n){var r=uy(t),i=t,o=!np(t),s=e.attrs,a=s===void 0?Cd:s,l=e.componentId,u=l===void 0?function(E,S){var T=typeof E!="string"?"sc":Rw(E);rp[T]=(rp[T]||0)+1;var b="".concat(T,"-").concat(bk("6.1.1"+T+rp[T]));return S?"".concat(S,"-").concat(b):b}(e.displayName,e.parentComponentId):l,c=e.displayName,f=c===void 0?function(E){return np(E)?"styled.".concat(E):"Styled(".concat(OM(E),")")}(t):c,d=e.displayName&&e.componentId?"".concat(Rw(e.displayName),"-").concat(e.componentId):e.componentId||u,p=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=e.shouldForwardProp;if(r&&i.shouldForwardProp){var _=i.shouldForwardProp;if(e.shouldForwardProp){var w=e.shouldForwardProp;y=function(E,S){return _(E,S)&&w(E,S)}}else y=_}var g=new o4(n,d,r?i.componentStyle:void 0);function m(E,S){return function(T,b,k){var R=T.attrs,D=T.componentStyle,Q=T.defaultProps,W=T.foldedComponentIds,H=T.styledComponentId,q=T.target,F=Ht.useContext(fy),ue=Bm(),x=T.shouldForwardProp||ue.shouldForwardProp,I=function(Ae,hn,Mt){for(var Zt,Ci=Et(Et({},hn),{className:void 0,theme:Mt}),_h=0;_h<Ae.length;_h+=1){var gu=ws(Zt=Ae[_h])?Zt(Ci):Zt;for(var Cr in gu)Ci[Cr]=Cr==="className"?Mi(Ci[Cr],gu[Cr]):Cr==="style"?Et(Et({},Ci[Cr]),gu[Cr]):gu[Cr]}return hn.className&&(Ci.className=Mi(Ci.className,hn.className)),Ci}(R,b,Ek(b,F,Q)||_s),j=I.as||q,V={};for(var K in I)I[K]===void 0||K[0]==="$"||K==="as"||K==="theme"||(K==="forwardedAs"?V.as=I.forwardedAs:x&&!x(K,j)||(V[K]=I[K]));var oe=function(Ae,hn){var Mt=Bm(),Zt=Ae.generateAndInjectStyles(hn,Mt.styleSheet,Mt.stylis);return Zt}(D,I),Ze=Mi(W,H);return oe&&(Ze+=" "+oe),I.className&&(Ze+=" "+I.className),V[np(j)&&!Sk.has(j)?"class":"className"]=Ze,V.ref=k,A.createElement(j,V)}(v,E,S)}m.displayName=f;var v=Ht.forwardRef(m);return v.attrs=p,v.componentStyle=g,v.displayName=f,v.shouldForwardProp=y,v.foldedComponentIds=r?Mi(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=d,v.target=r?i.target:t,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=r?function(S){for(var T=[],b=1;b<arguments.length;b++)T[b-1]=arguments[b];for(var k=0,R=T;k<R.length;k++)Fm(S,R[k],!0);return S}({},i.defaultProps,E):E}}),cy(v,function(){return".".concat(v.styledComponentId)}),o&&Ck(v,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Mw(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var jw=function(t){return Object.assign(t,{isCss:!0})};function Lk(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(ws(t)||dl(t)){var r=t;return jw(ai(Mw(Cd,al([r],e,!0))))}var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?ai(i):jw(ai(Mw(i,e)))}function Hm(t,e,n){if(n===void 0&&(n=_s),!e)throw Yl(1,e);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,Lk.apply(void 0,al([i],o,!1)))};return r.attrs=function(i){return Hm(t,e,Et(Et({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Hm(t,e,Et(Et({},n),i))},r}var Mk=function(t){return Hm(s4,t)},C=Mk;Sk.forEach(function(t){C[t]=Mk(t)});var a4=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=Dk(e),wf.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var o=i(Um(ai(this.rules,n,r,i)),""),s=this.componentId+e;r.insertRules(s,s,o)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&wf.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function l4(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Lk.apply(void 0,al([t],e,!1)),i="sc-global-".concat(bk(JSON.stringify(r))),o=new a4(r,i),s=function(l){var u=Bm(),c=Ht.useContext(fy),f=Ht.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(f,l,u.styleSheet,c,u.stylis),Ht.useLayoutEffect(function(){if(!u.styleSheet.server)return a(f,l,u.styleSheet,c,u.stylis),function(){return o.removeStyles(f,u.styleSheet)}},[f,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,f,d){if(o.isStatic)o.renderStyles(l,CM,c,d);else{var p=Et(Et({},u),{theme:Ek(u,f,s.defaultProps)});o.renderStyles(l,p,c,d)}}return Ht.memo(s)}const u4="/assets/deco-2047a9ee.png";var jk={},$k={},Rd={},Vk={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},n=e;t.default=n})(Vk);var c4="Expected a function",$w=0/0,f4="[object Symbol]",d4=/^\s+|\s+$/g,h4=/^[-+]0x[0-9a-f]+$/i,p4=/^0b[01]+$/i,m4=/^0o[0-7]+$/i,g4=parseInt,v4=typeof vu=="object"&&vu&&vu.Object===Object&&vu,y4=typeof self=="object"&&self&&self.Object===Object&&self,_4=v4||y4||Function("return this")(),w4=Object.prototype,E4=w4.toString,S4=Math.max,T4=Math.min,ip=function(){return _4.Date.now()};function b4(t,e,n){var r,i,o,s,a,l,u=0,c=!1,f=!1,d=!0;if(typeof t!="function")throw new TypeError(c4);e=Vw(e)||0,Wm(n)&&(c=!!n.leading,f="maxWait"in n,o=f?S4(Vw(n.maxWait)||0,e):o,d="trailing"in n?!!n.trailing:d);function p(T){var b=r,k=i;return r=i=void 0,u=T,s=t.apply(k,b),s}function y(T){return u=T,a=setTimeout(g,e),c?p(T):s}function _(T){var b=T-l,k=T-u,R=e-b;return f?T4(R,o-k):R}function w(T){var b=T-l,k=T-u;return l===void 0||b>=e||b<0||f&&k>=o}function g(){var T=ip();if(w(T))return m(T);a=setTimeout(g,_(T))}function m(T){return a=void 0,d&&r?p(T):(r=i=void 0,s)}function v(){a!==void 0&&clearTimeout(a),u=0,r=l=i=a=void 0}function E(){return a===void 0?s:m(ip())}function S(){var T=ip(),b=w(T);if(r=arguments,i=this,l=T,b){if(a===void 0)return y(l);if(f)return a=setTimeout(g,e),p(l)}return a===void 0&&(a=setTimeout(g,e)),s}return S.cancel=v,S.flush=E,S}function Wm(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function k4(t){return!!t&&typeof t=="object"}function x4(t){return typeof t=="symbol"||k4(t)&&E4.call(t)==f4}function Vw(t){if(typeof t=="number")return t;if(x4(t))return $w;if(Wm(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Wm(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(d4,"");var n=p4.test(t);return n||m4.test(t)?g4(t.slice(2),n?2:8):h4.test(t)?$w:+t}var I4=b4,Uk={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var s=typeof o;if(s==="string"||s==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var a=n.apply(null,o);a&&r.push(a)}}else if(s==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var l in o)e.call(o,l)&&o[l]&&r.push(l)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(Uk);var Pd=Uk.exports,M={};Object.defineProperty(M,"__esModule",{value:!0});M.checkSpecKeys=M.checkNavigable=M.changeSlide=M.canUseDOM=M.canGoNext=void 0;M.clamp=Fk;M.swipeStart=M.swipeMove=M.swipeEnd=M.slidesOnRight=M.slidesOnLeft=M.slideHandler=M.siblingDirection=M.safePreventDefault=M.lazyStartIndex=M.lazySlidesOnRight=M.lazySlidesOnLeft=M.lazyEndIndex=M.keyHandler=M.initializedState=M.getWidth=M.getTrackLeft=M.getTrackCSS=M.getTrackAnimateCSS=M.getTotalSlides=M.getSwipeDirection=M.getSlideCount=M.getRequiredLazySlides=M.getPreClones=M.getPostClones=M.getOnDemandLazySlides=M.getNavigableIndexes=M.getHeight=M.extractObject=void 0;var C4=R4(A);function R4(t){return t&&t.__esModule?t:{default:t}}function Uw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ce(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Uw(Object(n),!0).forEach(function(r){P4(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Uw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function P4(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Fk(t,e,n){return Math.max(e,Math.min(t,n))}var qi=function(e){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(e._reactName)||e.preventDefault()};M.safePreventDefault=qi;var dy=function(e){for(var n=[],r=hy(e),i=py(e),o=r;o<i;o++)e.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};M.getOnDemandLazySlides=dy;var A4=function(e){for(var n=[],r=hy(e),i=py(e),o=r;o<i;o++)n.push(o);return n};M.getRequiredLazySlides=A4;var hy=function(e){return e.currentSlide-zk(e)};M.lazyStartIndex=hy;var py=function(e){return e.currentSlide+Bk(e)};M.lazyEndIndex=py;var zk=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0};M.lazySlidesOnLeft=zk;var Bk=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow};M.lazySlidesOnRight=Bk;var Ef=function(e){return e&&e.offsetWidth||0};M.getWidth=Ef;var my=function(e){return e&&e.offsetHeight||0};M.getHeight=my;var gy=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,s;return r=e.startX-e.curX,i=e.startY-e.curY,o=Math.atan2(i,r),s=Math.round(o*180/Math.PI),s<0&&(s=360-Math.abs(s)),s<=45&&s>=0||s<=360&&s>=315?"left":s>=135&&s<=225?"right":n===!0?s>=35&&s<=135?"up":"down":"vertical"};M.getSwipeDirection=gy;var vy=function(e){var n=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(n=!1),n};M.canGoNext=vy;var O4=function(e,n){var r={};return n.forEach(function(i){return r[i]=e[i]}),r};M.extractObject=O4;var N4=function(e){var n=C4.default.Children.count(e.children),r=e.listRef,i=Math.ceil(Ef(r)),o=e.trackRef&&e.trackRef.node,s=Math.ceil(Ef(o)),a;if(e.vertical)a=i;else{var l=e.centerMode&&parseInt(e.centerPadding)*2;typeof e.centerPadding=="string"&&e.centerPadding.slice(-1)==="%"&&(l*=i/100),a=Math.ceil((i-l)/e.slidesToShow)}var u=r&&my(r.querySelector('[data-index="0"]')),c=u*e.slidesToShow,f=e.currentSlide===void 0?e.initialSlide:e.currentSlide;e.rtl&&e.currentSlide===void 0&&(f=n-1-e.initialSlide);var d=e.lazyLoadedList||[],p=dy(Ce(Ce({},e),{},{currentSlide:f,lazyLoadedList:d}));d=d.concat(p);var y={slideCount:n,slideWidth:a,listWidth:i,trackWidth:s,currentSlide:f,slideHeight:u,listHeight:c,lazyLoadedList:d};return e.autoplaying===null&&e.autoplay&&(y.autoplaying="playing"),y};M.initializedState=N4;var D4=function(e){var n=e.waitForAnimate,r=e.animating,i=e.fade,o=e.infinite,s=e.index,a=e.slideCount,l=e.lazyLoad,u=e.currentSlide,c=e.centerMode,f=e.slidesToScroll,d=e.slidesToShow,p=e.useCSS,y=e.lazyLoadedList;if(n&&r)return{};var _=s,w,g,m,v={},E={},S=o?s:Fk(s,0,a-1);if(i){if(!o&&(s<0||s>=a))return{};s<0?_=s+a:s>=a&&(_=s-a),l&&y.indexOf(_)<0&&(y=y.concat(_)),v={animating:!0,currentSlide:_,lazyLoadedList:y,targetSlide:_},E={animating:!1,targetSlide:_}}else w=_,_<0?(w=_+a,o?a%f!==0&&(w=a-a%f):w=0):!vy(e)&&_>u?_=w=u:c&&_>=a?(_=o?a:a-1,w=o?0:a-1):_>=a&&(w=_-a,o?a%f!==0&&(w=0):w=a-d),!o&&_+d>=a&&(w=a-d),g=pl(Ce(Ce({},e),{},{slideIndex:_})),m=pl(Ce(Ce({},e),{},{slideIndex:w})),o||(g===m&&(_=w),g=m),l&&(y=y.concat(dy(Ce(Ce({},e),{},{currentSlide:_})))),p?(v={animating:!0,currentSlide:w,trackStyle:yy(Ce(Ce({},e),{},{left:g})),lazyLoadedList:y,targetSlide:S},E={animating:!1,currentSlide:w,trackStyle:hl(Ce(Ce({},e),{},{left:m})),swipeLeft:null,targetSlide:S}):v={currentSlide:w,trackStyle:hl(Ce(Ce({},e),{},{left:m})),lazyLoadedList:y,targetSlide:S};return{state:v,nextState:E}};M.slideHandler=D4;var L4=function(e,n){var r,i,o,s,a,l=e.slidesToScroll,u=e.slidesToShow,c=e.slideCount,f=e.currentSlide,d=e.targetSlide,p=e.lazyLoad,y=e.infinite;if(s=c%l!==0,r=s?0:(c-f)%l,n.message==="previous")o=r===0?l:u-r,a=f-o,p&&!y&&(i=f-o,a=i===-1?c-1:i),y||(a=d-l);else if(n.message==="next")o=r===0?l:r,a=f+o,p&&!y&&(a=(f+l)%c+r),y||(a=d+l);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,y){var _=Gk(Ce(Ce({},e),{},{targetSlide:a}));a>n.currentSlide&&_==="left"?a=a-c:a<n.currentSlide&&_==="right"&&(a=a+c)}}else n.message==="index"&&(a=Number(n.index));return a};M.changeSlide=L4;var M4=function(e,n,r){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":e.keyCode===37?r?"next":"previous":e.keyCode===39?r?"previous":"next":""};M.keyHandler=M4;var j4=function(e,n,r){return e.target.tagName==="IMG"&&qi(e),!n||!r&&e.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}};M.swipeStart=j4;var $4=function(e,n){var r=n.scrolling,i=n.animating,o=n.vertical,s=n.swipeToSlide,a=n.verticalSwiping,l=n.rtl,u=n.currentSlide,c=n.edgeFriction,f=n.edgeDragged,d=n.onEdge,p=n.swiped,y=n.swiping,_=n.slideCount,w=n.slidesToScroll,g=n.infinite,m=n.touchObject,v=n.swipeEvent,E=n.listHeight,S=n.listWidth;if(!r){if(i)return qi(e);o&&s&&a&&qi(e);var T,b={},k=pl(n);m.curX=e.touches?e.touches[0].pageX:e.clientX,m.curY=e.touches?e.touches[0].pageY:e.clientY,m.swipeLength=Math.round(Math.sqrt(Math.pow(m.curX-m.startX,2)));var R=Math.round(Math.sqrt(Math.pow(m.curY-m.startY,2)));if(!a&&!y&&R>10)return{scrolling:!0};a&&(m.swipeLength=R);var D=(l?-1:1)*(m.curX>m.startX?1:-1);a&&(D=m.curY>m.startY?1:-1);var Q=Math.ceil(_/w),W=gy(n.touchObject,a),H=m.swipeLength;return g||(u===0&&(W==="right"||W==="down")||u+1>=Q&&(W==="left"||W==="up")||!vy(n)&&(W==="left"||W==="up"))&&(H=m.swipeLength*c,f===!1&&d&&(d(W),b.edgeDragged=!0)),!p&&v&&(v(W),b.swiped=!0),o?T=k+H*(E/S)*D:l?T=k-H*D:T=k+H*D,a&&(T=k+H*D),b=Ce(Ce({},b),{},{touchObject:m,swipeLeft:T,trackStyle:hl(Ce(Ce({},n),{},{left:T}))}),Math.abs(m.curX-m.startX)<Math.abs(m.curY-m.startY)*.8||m.swipeLength>10&&(b.swiping=!0,qi(e)),b}};M.swipeMove=$4;var V4=function(e,n){var r=n.dragging,i=n.swipe,o=n.touchObject,s=n.listWidth,a=n.touchThreshold,l=n.verticalSwiping,u=n.listHeight,c=n.swipeToSlide,f=n.scrolling,d=n.onSwipe,p=n.targetSlide,y=n.currentSlide,_=n.infinite;if(!r)return i&&qi(e),{};var w=l?u/a:s/a,g=gy(o,l),m={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(f||!o.swipeLength)return m;if(o.swipeLength>w){qi(e),d&&d(g);var v,E,S=_?y:p;switch(g){case"left":case"up":E=S+Gm(n),v=c?qm(n,E):E,m.currentDirection=0;break;case"right":case"down":E=S-Gm(n),v=c?qm(n,E):E,m.currentDirection=1;break;default:v=S}m.triggerSlideHandler=v}else{var T=pl(n);m.trackStyle=yy(Ce(Ce({},n),{},{left:T}))}return m};M.swipeEnd=V4;var Hk=function(e){for(var n=e.infinite?e.slideCount*2:e.slideCount,r=e.infinite?e.slidesToShow*-1:0,i=e.infinite?e.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+e.slidesToScroll,i+=Math.min(e.slidesToScroll,e.slidesToShow);return o};M.getNavigableIndexes=Hk;var qm=function(e,n){var r=Hk(e),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n};M.checkNavigable=qm;var Gm=function(e){var n=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var r,i=e.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(l){if(e.vertical){if(l.offsetTop+my(l)/2>e.swipeLeft*-1)return r=l,!1}else if(l.offsetLeft-n+Ef(l)/2>e.swipeLeft*-1)return r=l,!1;return!0}),!r)return 0;var s=e.rtl===!0?e.slideCount-e.currentSlide:e.currentSlide,a=Math.abs(r.dataset.index-s)||1;return a}else return e.slidesToScroll};M.getSlideCount=Gm;var Ad=function(e,n){return n.reduce(function(r,i){return r&&e.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",e)};M.checkSpecKeys=Ad;var hl=function(e){Ad(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=e.slideCount+2*e.slidesToShow;e.vertical?r=i*e.slideHeight:n=qk(e)*e.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var s=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",a=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",l=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";o=Ce(Ce({},o),{},{WebkitTransform:s,transform:a,msTransform:l})}else e.vertical?o.top=e.left:o.left=e.left;return e.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?o.marginTop=e.left+"px":o.marginLeft=e.left+"px"),o};M.getTrackCSS=hl;var yy=function(e){Ad(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=hl(e);return e.useTransform?(n.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,n.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?n.transition="top "+e.speed+"ms "+e.cssEase:n.transition="left "+e.speed+"ms "+e.cssEase,n};M.getTrackAnimateCSS=yy;var pl=function(e){if(e.unslick)return 0;Ad(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=e.slideIndex,r=e.trackRef,i=e.infinite,o=e.centerMode,s=e.slideCount,a=e.slidesToShow,l=e.slidesToScroll,u=e.slideWidth,c=e.listWidth,f=e.variableWidth,d=e.slideHeight,p=e.fade,y=e.vertical,_=0,w,g,m=0;if(p||e.slideCount===1)return 0;var v=0;if(i?(v=-Aa(e),s%l!==0&&n+l>s&&(v=-(n>s?a-(n-s):s%l)),o&&(v+=parseInt(a/2))):(s%l!==0&&n+l>s&&(v=a-s%l),o&&(v=parseInt(a/2))),_=v*u,m=v*d,y?w=n*d*-1+m:w=n*u*-1+_,f===!0){var E,S=r&&r.node;if(E=n+Aa(e),g=S&&S.childNodes[E],w=g?g.offsetLeft*-1:0,o===!0){E=i?n+Aa(e):n,g=S&&S.children[E],w=0;for(var T=0;T<E;T++)w-=S&&S.children[T]&&S.children[T].offsetWidth;w-=parseInt(e.centerPadding),w+=g&&(c-g.offsetWidth)/2}}return w};M.getTrackLeft=pl;var Aa=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)};M.getPreClones=Aa;var Wk=function(e){return e.unslick||!e.infinite?0:e.slideCount};M.getPostClones=Wk;var qk=function(e){return e.slideCount===1?1:Aa(e)+e.slideCount+Wk(e)};M.getTotalSlides=qk;var Gk=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+Kk(e)?"left":"right":e.targetSlide<e.currentSlide-Yk(e)?"right":"left"};M.siblingDirection=Gk;var Kk=function(e){var n=e.slidesToShow,r=e.centerMode,i=e.rtl,o=e.centerPadding;if(r){var s=(n-1)/2+1;return parseInt(o)>0&&(s+=1),i&&n%2===0&&(s+=1),s}return i?0:n-1};M.slidesOnRight=Kk;var Yk=function(e){var n=e.slidesToShow,r=e.centerMode,i=e.rtl,o=e.centerPadding;if(r){var s=(n-1)/2+1;return parseInt(o)>0&&(s+=1),!i&&n%2===0&&(s+=1),s}return i?n-1:0};M.slidesOnLeft=Yk;var U4=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};M.canUseDOM=U4;var Od={};function Km(t){"@babel/helpers - typeof";return Km=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Km(t)}Object.defineProperty(Od,"__esModule",{value:!0});Od.Track=void 0;var $r=Qk(A),op=Qk(Pd),sp=M;function Qk(t){return t&&t.__esModule?t:{default:t}}function Ym(){return Ym=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ym.apply(this,arguments)}function F4(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Fw(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function z4(t,e,n){return e&&Fw(t.prototype,e),n&&Fw(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function B4(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Qm(t,e)}function Qm(t,e){return Qm=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Qm(t,e)}function H4(t){var e=q4();return function(){var r=Sf(t),i;if(e){var o=Sf(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return W4(this,i)}}function W4(t,e){if(e&&(Km(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Xm(t)}function Xm(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function q4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Sf(t){return Sf=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Sf(t)}function zw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function jt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?zw(Object(n),!0).forEach(function(r){Jm(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):zw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Jm(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var ap=function(e){var n,r,i,o,s;e.rtl?s=e.slideCount-1-e.index:s=e.index,i=s<0||s>=e.slideCount,e.centerMode?(o=Math.floor(e.slidesToShow/2),r=(s-e.currentSlide)%e.slideCount===0,s>e.currentSlide-o-1&&s<=e.currentSlide+o&&(n=!0)):n=e.currentSlide<=s&&s<e.currentSlide+e.slidesToShow;var a;e.targetSlide<0?a=e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?a=e.targetSlide-e.slideCount:a=e.targetSlide;var l=s===a;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":l}},G4=function(e){var n={};return(e.variableWidth===void 0||e.variableWidth===!1)&&(n.width=e.slideWidth),e.fade&&(n.position="relative",e.vertical?n.top=-e.index*parseInt(e.slideHeight):n.left=-e.index*parseInt(e.slideWidth),n.opacity=e.currentSlide===e.index?1:0,e.useCSS&&(n.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),n},lp=function(e,n){return e.key||n},K4=function(e){var n,r=[],i=[],o=[],s=$r.default.Children.count(e.children),a=(0,sp.lazyStartIndex)(e),l=(0,sp.lazyEndIndex)(e);return $r.default.Children.forEach(e.children,function(u,c){var f,d={message:"children",index:c,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(c)>=0?f=u:f=$r.default.createElement("div",null);var p=G4(jt(jt({},e),{},{index:c})),y=f.props.className||"",_=ap(jt(jt({},e),{},{index:c}));if(r.push($r.default.cloneElement(f,{key:"original"+lp(f,c),"data-index":c,className:(0,op.default)(_,y),tabIndex:"-1","aria-hidden":!_["slick-active"],style:jt(jt({outline:"none"},f.props.style||{}),p),onClick:function(m){f.props&&f.props.onClick&&f.props.onClick(m),e.focusOnSelect&&e.focusOnSelect(d)}})),e.infinite&&e.fade===!1){var w=s-c;w<=(0,sp.getPreClones)(e)&&s!==e.slidesToShow&&(n=-w,n>=a&&(f=u),_=ap(jt(jt({},e),{},{index:n})),i.push($r.default.cloneElement(f,{key:"precloned"+lp(f,n),"data-index":n,tabIndex:"-1",className:(0,op.default)(_,y),"aria-hidden":!_["slick-active"],style:jt(jt({},f.props.style||{}),p),onClick:function(m){f.props&&f.props.onClick&&f.props.onClick(m),e.focusOnSelect&&e.focusOnSelect(d)}}))),s!==e.slidesToShow&&(n=s+c,n<l&&(f=u),_=ap(jt(jt({},e),{},{index:n})),o.push($r.default.cloneElement(f,{key:"postcloned"+lp(f,n),"data-index":n,tabIndex:"-1",className:(0,op.default)(_,y),"aria-hidden":!_["slick-active"],style:jt(jt({},f.props.style||{}),p),onClick:function(m){f.props&&f.props.onClick&&f.props.onClick(m),e.focusOnSelect&&e.focusOnSelect(d)}})))}}),e.rtl?i.concat(r,o).reverse():i.concat(r,o)},Y4=function(t){B4(n,t);var e=H4(n);function n(){var r;F4(this,n);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return r=e.call.apply(e,[this].concat(o)),Jm(Xm(r),"node",null),Jm(Xm(r),"handleRef",function(a){r.node=a}),r}return z4(n,[{key:"render",value:function(){var i=K4(this.props),o=this.props,s=o.onMouseEnter,a=o.onMouseOver,l=o.onMouseLeave,u={onMouseEnter:s,onMouseOver:a,onMouseLeave:l};return $r.default.createElement("div",Ym({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}($r.default.PureComponent);Od.Track=Y4;var Nd={};function Zm(t){"@babel/helpers - typeof";return Zm=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Zm(t)}Object.defineProperty(Nd,"__esModule",{value:!0});Nd.Dots=void 0;var ju=Xk(A),Q4=Xk(Pd),Bw=M;function Xk(t){return t&&t.__esModule?t:{default:t}}function Hw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function X4(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Hw(Object(n),!0).forEach(function(r){J4(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Hw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function J4(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Z4(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ww(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ej(t,e,n){return e&&Ww(t.prototype,e),n&&Ww(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function tj(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&eg(t,e)}function eg(t,e){return eg=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},eg(t,e)}function nj(t){var e=oj();return function(){var r=Tf(t),i;if(e){var o=Tf(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return rj(this,i)}}function rj(t,e){if(e&&(Zm(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ij(t)}function ij(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function oj(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Tf(t){return Tf=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Tf(t)}var sj=function(e){var n;return e.infinite?n=Math.ceil(e.slideCount/e.slidesToScroll):n=Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,n},aj=function(t){tj(n,t);var e=nj(n);function n(){return Z4(this,n),e.apply(this,arguments)}return ej(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,s=i.onMouseOver,a=i.onMouseLeave,l=i.infinite,u=i.slidesToScroll,c=i.slidesToShow,f=i.slideCount,d=i.currentSlide,p=sj({slideCount:f,slidesToScroll:u,slidesToShow:c,infinite:l}),y={onMouseEnter:o,onMouseOver:s,onMouseLeave:a},_=[],w=0;w<p;w++){var g=(w+1)*u-1,m=l?g:(0,Bw.clamp)(g,0,f-1),v=m-(u-1),E=l?v:(0,Bw.clamp)(v,0,f-1),S=(0,Q4.default)({"slick-active":l?d>=E&&d<=m:d===E}),T={message:"dots",index:w,slidesToScroll:u,currentSlide:d},b=this.clickHandler.bind(this,T);_=_.concat(ju.default.createElement("li",{key:w,className:S},ju.default.cloneElement(this.props.customPaging(w),{onClick:b})))}return ju.default.cloneElement(this.props.appendDots(_),X4({className:this.props.dotsClass},y))}}]),n}(ju.default.PureComponent);Nd.Dots=aj;var Es={};function tg(t){"@babel/helpers - typeof";return tg=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},tg(t)}Object.defineProperty(Es,"__esModule",{value:!0});Es.PrevArrow=Es.NextArrow=void 0;var rs=Zk(A),Jk=Zk(Pd),lj=M;function Zk(t){return t&&t.__esModule?t:{default:t}}function bf(){return bf=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},bf.apply(this,arguments)}function qw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function kf(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?qw(Object(n),!0).forEach(function(r){uj(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):qw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function uj(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ex(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Gw(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function tx(t,e,n){return e&&Gw(t.prototype,e),n&&Gw(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function nx(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&ng(t,e)}function ng(t,e){return ng=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},ng(t,e)}function rx(t){var e=dj();return function(){var r=xf(t),i;if(e){var o=xf(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return cj(this,i)}}function cj(t,e){if(e&&(tg(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return fj(t)}function fj(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function dj(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function xf(t){return xf=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},xf(t)}var hj=function(t){nx(n,t);var e=rx(n);function n(){return ex(this,n),e.apply(this,arguments)}return tx(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var s={key:"0","data-role":"none",className:(0,Jk.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.prevArrow?l=rs.default.cloneElement(this.props.prevArrow,kf(kf({},s),a)):l=rs.default.createElement("button",bf({key:"0",type:"button"},s)," ","Previous"),l}}]),n}(rs.default.PureComponent);Es.PrevArrow=hj;var pj=function(t){nx(n,t);var e=rx(n);function n(){return ex(this,n),e.apply(this,arguments)}return tx(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,lj.canGoNext)(this.props)||(i["slick-disabled"]=!0,o=null);var s={key:"1","data-role":"none",className:(0,Jk.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.nextArrow?l=rs.default.cloneElement(this.props.nextArrow,kf(kf({},s),a)):l=rs.default.createElement("button",bf({key:"1",type:"button"},s)," ","Next"),l}}]),n}(rs.default.PureComponent);Es.NextArrow=pj;var ix=function(){if(typeof Map<"u")return Map;function t(e,n){var r=-1;return e.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(n){var r=t(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},e.prototype.set=function(n,r){var i=t(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},e.prototype.delete=function(n){var r=this.__entries__,i=t(r,n);~i&&r.splice(i,1)},e.prototype.has=function(n){return!!~t(this.__entries__,n)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var s=o[i];n.call(r,s[1],s[0])}},e}()}(),rg=typeof window<"u"&&typeof document<"u"&&window.document===document,If=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),mj=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(If):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),gj=2;function vj(t,e){var n=!1,r=!1,i=0;function o(){n&&(n=!1,t()),r&&a()}function s(){mj(o)}function a(){var l=Date.now();if(n){if(l-i<gj)return;r=!0}else n=!0,r=!1,setTimeout(s,e);i=l}return a}var yj=20,_j=["top","right","bottom","left","width","height","size","weight"],wj=typeof MutationObserver<"u",Ej=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=vj(this.refresh.bind(this),yj)}return t.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},t.prototype.removeObserver=function(e){var n=this.observers_,r=n.indexOf(e);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},t.prototype.updateObservers_=function(){var e=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return e.forEach(function(n){return n.broadcastActive()}),e.length>0},t.prototype.connect_=function(){!rg||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),wj?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){!rg||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(e){var n=e.propertyName,r=n===void 0?"":n,i=_j.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),ox=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},Ss=function(t){var e=t&&t.ownerDocument&&t.ownerDocument.defaultView;return e||If},sx=Dd(0,0,0,0);function Cf(t){return parseFloat(t)||0}function Kw(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(r,i){var o=t["border-"+i+"-width"];return r+Cf(o)},0)}function Sj(t){for(var e=["top","right","bottom","left"],n={},r=0,i=e;r<i.length;r++){var o=i[r],s=t["padding-"+o];n[o]=Cf(s)}return n}function Tj(t){var e=t.getBBox();return Dd(0,0,e.width,e.height)}function bj(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return sx;var r=Ss(t).getComputedStyle(t),i=Sj(r),o=i.left+i.right,s=i.top+i.bottom,a=Cf(r.width),l=Cf(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+o)!==e&&(a-=Kw(r,"left","right")+o),Math.round(l+s)!==n&&(l-=Kw(r,"top","bottom")+s)),!xj(t)){var u=Math.round(a+o)-e,c=Math.round(l+s)-n;Math.abs(u)!==1&&(a-=u),Math.abs(c)!==1&&(l-=c)}return Dd(i.left,i.top,a,l)}var kj=function(){return typeof SVGGraphicsElement<"u"?function(t){return t instanceof Ss(t).SVGGraphicsElement}:function(t){return t instanceof Ss(t).SVGElement&&typeof t.getBBox=="function"}}();function xj(t){return t===Ss(t).document.documentElement}function Ij(t){return rg?kj(t)?Tj(t):bj(t):sx}function Cj(t){var e=t.x,n=t.y,r=t.width,i=t.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,s=Object.create(o.prototype);return ox(s,{x:e,y:n,width:r,height:i,top:n,right:e+r,bottom:i+n,left:e}),s}function Dd(t,e,n,r){return{x:t,y:e,width:n,height:r}}var Rj=function(){function t(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Dd(0,0,0,0),this.target=e}return t.prototype.isActive=function(){var e=Ij(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},t}(),Pj=function(){function t(e,n){var r=Cj(n);ox(this,{target:e,contentRect:r})}return t}(),Aj=function(){function t(e,n,r){if(this.activeObservations_=[],this.observations_=new ix,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=n,this.callbackCtx_=r}return t.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof Ss(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)||(n.set(e,new Rj(e)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof Ss(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)&&(n.delete(e),n.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&e.activeObservations_.push(n)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new Pj(r.target,r.broadcastRect())});this.callback_.call(e,n,e),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),ax=typeof WeakMap<"u"?new WeakMap:new ix,lx=function(){function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=Ej.getInstance(),r=new Aj(e,n,this);ax.set(this,r)}return t}();["observe","unobserve","disconnect"].forEach(function(t){lx.prototype[t]=function(){var e;return(e=ax.get(this))[t].apply(e,arguments)}});var Oj=function(){return typeof If.ResizeObserver<"u"?If.ResizeObserver:lx}();const Nj=Object.freeze(Object.defineProperty({__proto__:null,default:Oj},Symbol.toStringTag,{value:"Module"})),Dj=QE(Nj);Object.defineProperty(Rd,"__esModule",{value:!0});Rd.InnerSlider=void 0;var Ct=Ql(A),Lj=Ql(Vk),Mj=Ql(I4),jj=Ql(Pd),Oe=M,$j=Od,Vj=Nd,Yw=Es,Uj=Ql(Dj);function Ql(t){return t&&t.__esModule?t:{default:t}}function Rf(t){"@babel/helpers - typeof";return Rf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Rf(t)}function Pf(){return Pf=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Pf.apply(this,arguments)}function Fj(t,e){if(t==null)return{};var n=zj(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function zj(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Qw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function X(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Qw(Object(n),!0).forEach(function(r){le(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Qw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Bj(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Xw(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Hj(t,e,n){return e&&Xw(t.prototype,e),n&&Xw(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Wj(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&ig(t,e)}function ig(t,e){return ig=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},ig(t,e)}function qj(t){var e=Kj();return function(){var r=Af(t),i;if(e){var o=Af(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Gj(this,i)}}function Gj(t,e){if(e&&(Rf(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ae(t)}function ae(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Kj(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Af(t){return Af=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Af(t)}function le(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Yj=function(t){Wj(n,t);var e=qj(n);function n(r){var i;Bj(this,n),i=e.call(this,r),le(ae(i),"listRefHandler",function(s){return i.list=s}),le(ae(i),"trackRefHandler",function(s){return i.track=s}),le(ae(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var s=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,Oe.getHeight)(s)+"px"}}),le(ae(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var s=(0,Oe.getOnDemandLazySlides)(X(X({},i.props),i.state));s.length>0&&(i.setState(function(l){return{lazyLoadedList:l.lazyLoadedList.concat(s)}}),i.props.onLazyLoad&&i.props.onLazyLoad(s))}var a=X({listRef:i.list,trackRef:i.track},i.props);i.updateState(a,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new Uj.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(l){l.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,l.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),le(ae(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(s){return clearTimeout(s)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),le(ae(i),"componentDidUpdate",function(s){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var a=(0,Oe.getOnDemandLazySlides)(X(X({},i.props),i.state));a.length>0&&(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}i.adaptHeight();var l=X(X({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(s);u&&i.updateState(l,u,function(){i.state.currentSlide>=Ct.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Ct.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),le(ae(i),"onWindowResized",function(s){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,Mj.default)(function(){return i.resizeWindow(s)},50),i.debouncedResize()}),le(ae(i),"resizeWindow",function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=!!(i.track&&i.track.node);if(a){var l=X(X({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(l,s,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),le(ae(i),"updateState",function(s,a,l){var u=(0,Oe.initializedState)(s);s=X(X(X({},s),u),{},{slideIndex:u.currentSlide});var c=(0,Oe.getTrackLeft)(s);s=X(X({},s),{},{left:c});var f=(0,Oe.getTrackCSS)(s);(a||Ct.default.Children.count(i.props.children)!==Ct.default.Children.count(s.children))&&(u.trackStyle=f),i.setState(u,l)}),le(ae(i),"ssrInit",function(){if(i.props.variableWidth){var s=0,a=0,l=[],u=(0,Oe.getPreClones)(X(X(X({},i.props),i.state),{},{slideCount:i.props.children.length})),c=(0,Oe.getPostClones)(X(X(X({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(b){l.push(b.props.style.width),s+=b.props.style.width});for(var f=0;f<u;f++)a+=l[l.length-1-f],s+=l[l.length-1-f];for(var d=0;d<c;d++)s+=l[d];for(var p=0;p<i.state.currentSlide;p++)a+=l[p];var y={width:s+"px",left:-a+"px"};if(i.props.centerMode){var _="".concat(l[i.state.currentSlide],"px");y.left="calc(".concat(y.left," + (100% - ").concat(_,") / 2 ) ")}return{trackStyle:y}}var w=Ct.default.Children.count(i.props.children),g=X(X(X({},i.props),i.state),{},{slideCount:w}),m=(0,Oe.getPreClones)(g)+(0,Oe.getPostClones)(g)+w,v=100/i.props.slidesToShow*m,E=100/m,S=-E*((0,Oe.getPreClones)(g)+i.state.currentSlide)*v/100;i.props.centerMode&&(S+=(100-E*v/100)/2);var T={width:v+"%",left:S+"%"};return{slideWidth:E+"%",trackStyle:T}}),le(ae(i),"checkImagesLoad",function(){var s=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],a=s.length,l=0;Array.prototype.forEach.call(s,function(u){var c=function(){return++l&&l>=a&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var f=u.onclick;u.onclick=function(){f(),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=c,u.onerror=function(){c(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),le(ae(i),"progressiveLazyLoad",function(){for(var s=[],a=X(X({},i.props),i.state),l=i.state.currentSlide;l<i.state.slideCount+(0,Oe.getPostClones)(a);l++)if(i.state.lazyLoadedList.indexOf(l)<0){s.push(l);break}for(var u=i.state.currentSlide-1;u>=-(0,Oe.getPreClones)(a);u--)if(i.state.lazyLoadedList.indexOf(u)<0){s.push(u);break}s.length>0?(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(s)}}),i.props.onLazyLoad&&i.props.onLazyLoad(s)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),le(ae(i),"slideHandler",function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=i.props,u=l.asNavFor,c=l.beforeChange,f=l.onLazyLoad,d=l.speed,p=l.afterChange,y=i.state.currentSlide,_=(0,Oe.slideHandler)(X(X(X({index:s},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!a})),w=_.state,g=_.nextState;if(w){c&&c(y,w.currentSlide);var m=w.lazyLoadedList.filter(function(v){return i.state.lazyLoadedList.indexOf(v)<0});f&&m.length>0&&f(m),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),p&&p(y),delete i.animationEndCallback),i.setState(w,function(){u&&i.asNavForIndex!==s&&(i.asNavForIndex=s,u.innerSlider.slideHandler(s)),g&&(i.animationEndCallback=setTimeout(function(){var v=g.animating,E=Fj(g,["animating"]);i.setState(E,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:v})},10)),p&&p(w.currentSlide),delete i.animationEndCallback})},d))})}}),le(ae(i),"changeSlide",function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=X(X({},i.props),i.state),u=(0,Oe.changeSlide)(l,s);if(!(u!==0&&!u)&&(a===!0?i.slideHandler(u,a):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var c=i.list.querySelectorAll(".slick-current");c[0]&&c[0].focus()}}),le(ae(i),"clickHandler",function(s){i.clickable===!1&&(s.stopPropagation(),s.preventDefault()),i.clickable=!0}),le(ae(i),"keyHandler",function(s){var a=(0,Oe.keyHandler)(s,i.props.accessibility,i.props.rtl);a!==""&&i.changeSlide({message:a})}),le(ae(i),"selectHandler",function(s){i.changeSlide(s)}),le(ae(i),"disableBodyScroll",function(){var s=function(l){l=l||window.event,l.preventDefault&&l.preventDefault(),l.returnValue=!1};window.ontouchmove=s}),le(ae(i),"enableBodyScroll",function(){window.ontouchmove=null}),le(ae(i),"swipeStart",function(s){i.props.verticalSwiping&&i.disableBodyScroll();var a=(0,Oe.swipeStart)(s,i.props.swipe,i.props.draggable);a!==""&&i.setState(a)}),le(ae(i),"swipeMove",function(s){var a=(0,Oe.swipeMove)(s,X(X(X({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));a&&(a.swiping&&(i.clickable=!1),i.setState(a))}),le(ae(i),"swipeEnd",function(s){var a=(0,Oe.swipeEnd)(s,X(X(X({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(a){var l=a.triggerSlideHandler;delete a.triggerSlideHandler,i.setState(a),l!==void 0&&(i.slideHandler(l),i.props.verticalSwiping&&i.enableBodyScroll())}}),le(ae(i),"touchEnd",function(s){i.swipeEnd(s),i.clickable=!0}),le(ae(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),le(ae(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),le(ae(i),"slickGoTo",function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(s=Number(s),isNaN(s))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:s,currentSlide:i.state.currentSlide},a)},0))}),le(ae(i),"play",function(){var s;if(i.props.rtl)s=i.state.currentSlide-i.props.slidesToScroll;else if((0,Oe.canGoNext)(X(X({},i.props),i.state)))s=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(s)}),le(ae(i),"autoPlay",function(s){i.autoplayTimer&&clearInterval(i.autoplayTimer);var a=i.state.autoplaying;if(s==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(s==="leave"){if(a==="paused"||a==="focused")return}else if(s==="blur"&&(a==="paused"||a==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),le(ae(i),"pause",function(s){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var a=i.state.autoplaying;s==="paused"?i.setState({autoplaying:"paused"}):s==="focused"?(a==="hovered"||a==="playing")&&i.setState({autoplaying:"focused"}):a==="playing"&&i.setState({autoplaying:"hovered"})}),le(ae(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),le(ae(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),le(ae(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),le(ae(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),le(ae(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),le(ae(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),le(ae(i),"render",function(){var s=(0,jj.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),a=X(X({},i.props),i.state),l=(0,Oe.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;l=X(X({},l),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var c;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var f=(0,Oe.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),d=i.props.pauseOnDotsHover;f=X(X({},f),{},{clickHandler:i.changeSlide,onMouseEnter:d?i.onDotsLeave:null,onMouseOver:d?i.onDotsOver:null,onMouseLeave:d?i.onDotsLeave:null}),c=Ct.default.createElement(Vj.Dots,f)}var p,y,_=(0,Oe.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);_.clickHandler=i.changeSlide,i.props.arrows&&(p=Ct.default.createElement(Yw.PrevArrow,_),y=Ct.default.createElement(Yw.NextArrow,_));var w=null;i.props.vertical&&(w={height:i.state.listHeight});var g=null;i.props.vertical===!1?i.props.centerMode===!0&&(g={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(g={padding:i.props.centerPadding+" 0px"});var m=X(X({},w),g),v=i.props.touchMove,E={className:"slick-list",style:m,onClick:i.clickHandler,onMouseDown:v?i.swipeStart:null,onMouseMove:i.state.dragging&&v?i.swipeMove:null,onMouseUp:v?i.swipeEnd:null,onMouseLeave:i.state.dragging&&v?i.swipeEnd:null,onTouchStart:v?i.swipeStart:null,onTouchMove:i.state.dragging&&v?i.swipeMove:null,onTouchEnd:v?i.touchEnd:null,onTouchCancel:i.state.dragging&&v?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},S={className:s,dir:"ltr",style:i.props.style};return i.props.unslick&&(E={className:"slick-list"},S={className:s}),Ct.default.createElement("div",S,i.props.unslick?"":p,Ct.default.createElement("div",Pf({ref:i.listRefHandler},E),Ct.default.createElement($j.Track,Pf({ref:i.trackRefHandler},l),i.props.children)),i.props.unslick?"":y,i.props.unslick?"":c)}),i.list=null,i.track=null,i.state=X(X({},Lj.default),{},{currentSlide:i.props.initialSlide,slideCount:Ct.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=X(X({},i.state),o),i}return Hj(n,[{key:"didPropsChange",value:function(i){for(var o=!1,s=0,a=Object.keys(this.props);s<a.length;s++){var l=a[s];if(!i.hasOwnProperty(l)){o=!0;break}if(!(Rf(i[l])==="object"||typeof i[l]=="function")&&i[l]!==this.props[l]){o=!0;break}}return o||Ct.default.Children.count(this.props.children)!==Ct.default.Children.count(i.children)}}]),n}(Ct.default.Component);Rd.InnerSlider=Yj;var Qj=function(t){return t.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()},Xj=Qj,Jj=Xj,Zj=function(t){var e=/[height|width]$/;return e.test(t)},Jw=function(t){var e="",n=Object.keys(t);return n.forEach(function(r,i){var o=t[r];r=Jj(r),Zj(r)&&typeof o=="number"&&(o=o+"px"),o===!0?e+=r:o===!1?e+="not "+r:e+="("+r+": "+o+")",i<n.length-1&&(e+=" and ")}),e},e3=function(t){var e="";return typeof t=="string"?t:t instanceof Array?(t.forEach(function(n,r){e+=Jw(n),r<t.length-1&&(e+=", ")}),e):Jw(t)},t3=e3,ux={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(A);function n(o){return o&&o.__esModule?o:{default:o}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(s){return e.default.createElement("ul",{style:{display:"block"}},s)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(s){return e.default.createElement("button",null,s+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},i=r;t.default=i})(ux);var up,Zw;function n3(){if(Zw)return up;Zw=1;function t(e){this.options=e,!e.deferSetup&&this.setup()}return t.prototype={constructor:t,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},up=t,up}var cp,e1;function cx(){if(e1)return cp;e1=1;function t(r,i){var o=0,s=r.length,a;for(o;o<s&&(a=i(r[o],o),a!==!1);o++);}function e(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return cp={isFunction:n,isArray:e,each:t},cp}var fp,t1;function r3(){if(t1)return fp;t1=1;var t=n3(),e=cx().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var o=this;this.listener=function(s){o.mql=s.currentTarget||s,o.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new t(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;e(i,function(o,s){if(o.equals(r))return o.destroy(),!i.splice(s,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){e(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";e(this.handlers,function(i){i[r]()})}},fp=n,fp}var dp,n1;function i3(){if(n1)return dp;n1=1;var t=r3(),e=cx(),n=e.each,r=e.isFunction,i=e.isArray;function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(s,a,l){var u=this.queries,c=l&&this.browserIsIncapable;return u[s]||(u[s]=new t(s,c)),r(a)&&(a={match:a}),i(a)||(a=[a]),n(a,function(f){r(f)&&(f={match:f}),u[s].addHandler(f)}),this},unregister:function(s,a){var l=this.queries[s];return l&&(a?l.removeHandler(a):(l.clear(),delete this.queries[s])),this}},dp=o,dp}var hp,r1;function o3(){if(r1)return hp;r1=1;var t=i3();return hp=new t,hp}(function(t){function e(k){"@babel/helpers - typeof";return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(R){return typeof R}:function(R){return R&&typeof Symbol=="function"&&R.constructor===Symbol&&R!==Symbol.prototype?"symbol":typeof R},e(k)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(A),r=Rd,i=a(t3),o=a(ux),s=M;function a(k){return k&&k.__esModule?k:{default:k}}function l(){return l=Object.assign||function(k){for(var R=1;R<arguments.length;R++){var D=arguments[R];for(var Q in D)Object.prototype.hasOwnProperty.call(D,Q)&&(k[Q]=D[Q])}return k},l.apply(this,arguments)}function u(k,R){var D=Object.keys(k);if(Object.getOwnPropertySymbols){var Q=Object.getOwnPropertySymbols(k);R&&(Q=Q.filter(function(W){return Object.getOwnPropertyDescriptor(k,W).enumerable})),D.push.apply(D,Q)}return D}function c(k){for(var R=1;R<arguments.length;R++){var D=arguments[R]!=null?arguments[R]:{};R%2?u(Object(D),!0).forEach(function(Q){S(k,Q,D[Q])}):Object.getOwnPropertyDescriptors?Object.defineProperties(k,Object.getOwnPropertyDescriptors(D)):u(Object(D)).forEach(function(Q){Object.defineProperty(k,Q,Object.getOwnPropertyDescriptor(D,Q))})}return k}function f(k,R){if(!(k instanceof R))throw new TypeError("Cannot call a class as a function")}function d(k,R){for(var D=0;D<R.length;D++){var Q=R[D];Q.enumerable=Q.enumerable||!1,Q.configurable=!0,"value"in Q&&(Q.writable=!0),Object.defineProperty(k,Q.key,Q)}}function p(k,R,D){return R&&d(k.prototype,R),D&&d(k,D),Object.defineProperty(k,"prototype",{writable:!1}),k}function y(k,R){if(typeof R!="function"&&R!==null)throw new TypeError("Super expression must either be null or a function");k.prototype=Object.create(R&&R.prototype,{constructor:{value:k,writable:!0,configurable:!0}}),Object.defineProperty(k,"prototype",{writable:!1}),R&&_(k,R)}function _(k,R){return _=Object.setPrototypeOf||function(Q,W){return Q.__proto__=W,Q},_(k,R)}function w(k){var R=v();return function(){var Q=E(k),W;if(R){var H=E(this).constructor;W=Reflect.construct(Q,arguments,H)}else W=Q.apply(this,arguments);return g(this,W)}}function g(k,R){if(R&&(e(R)==="object"||typeof R=="function"))return R;if(R!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return m(k)}function m(k){if(k===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return k}function v(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function E(k){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(D){return D.__proto__||Object.getPrototypeOf(D)},E(k)}function S(k,R,D){return R in k?Object.defineProperty(k,R,{value:D,enumerable:!0,configurable:!0,writable:!0}):k[R]=D,k}var T=(0,s.canUseDOM)()&&o3(),b=function(k){y(D,k);var R=w(D);function D(Q){var W;return f(this,D),W=R.call(this,Q),S(m(W),"innerSliderRefHandler",function(H){return W.innerSlider=H}),S(m(W),"slickPrev",function(){return W.innerSlider.slickPrev()}),S(m(W),"slickNext",function(){return W.innerSlider.slickNext()}),S(m(W),"slickGoTo",function(H){var q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return W.innerSlider.slickGoTo(H,q)}),S(m(W),"slickPause",function(){return W.innerSlider.pause("paused")}),S(m(W),"slickPlay",function(){return W.innerSlider.autoPlay("play")}),W.state={breakpoint:null},W._responsiveMediaHandlers=[],W}return p(D,[{key:"media",value:function(W,H){T.register(W,H),this._responsiveMediaHandlers.push({query:W,handler:H})}},{key:"componentDidMount",value:function(){var W=this;if(this.props.responsive){var H=this.props.responsive.map(function(F){return F.breakpoint});H.sort(function(F,ue){return F-ue}),H.forEach(function(F,ue){var x;ue===0?x=(0,i.default)({minWidth:0,maxWidth:F}):x=(0,i.default)({minWidth:H[ue-1]+1,maxWidth:F}),(0,s.canUseDOM)()&&W.media(x,function(){W.setState({breakpoint:F})})});var q=(0,i.default)({minWidth:H.slice(-1)[0]});(0,s.canUseDOM)()&&this.media(q,function(){W.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(W){T.unregister(W.query,W.handler)})}},{key:"render",value:function(){var W=this,H,q;this.state.breakpoint?(q=this.props.responsive.filter(function(Ae){return Ae.breakpoint===W.state.breakpoint}),H=q[0].settings==="unslick"?"unslick":c(c(c({},o.default),this.props),q[0].settings)):H=c(c({},o.default),this.props),H.centerMode&&(H.slidesToScroll>1,H.slidesToScroll=1),H.fade&&(H.slidesToShow>1,H.slidesToScroll>1,H.slidesToShow=1,H.slidesToScroll=1);var F=n.default.Children.toArray(this.props.children);F=F.filter(function(Ae){return typeof Ae=="string"?!!Ae.trim():!!Ae}),H.variableWidth&&(H.rows>1||H.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),H.variableWidth=!1);for(var ue=[],x=null,I=0;I<F.length;I+=H.rows*H.slidesPerRow){for(var j=[],V=I;V<I+H.rows*H.slidesPerRow;V+=H.slidesPerRow){for(var K=[],oe=V;oe<V+H.slidesPerRow&&(H.variableWidth&&F[oe].props.style&&(x=F[oe].props.style.width),!(oe>=F.length));oe+=1)K.push(n.default.cloneElement(F[oe],{key:100*I+10*V+oe,tabIndex:-1,style:{width:"".concat(100/H.slidesPerRow,"%"),display:"inline-block"}}));j.push(n.default.createElement("div",{key:10*I+V},K))}H.variableWidth?ue.push(n.default.createElement("div",{key:I,style:{width:x}},j)):ue.push(n.default.createElement("div",{key:I},j))}if(H==="unslick"){var Ze="regular slider "+(this.props.className||"");return n.default.createElement("div",{className:Ze},F)}else ue.length<=H.slidesToShow&&(H.unslick=!0);return n.default.createElement(r.InnerSlider,l({style:this.props.style,ref:this.innerSliderRefHandler},H),ue)}}]),D}(n.default.Component);t.default=b})($k);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n($k);function n(i){return i&&i.__esModule?i:{default:i}}var r=e.default;t.default=r})(jk);const s3=td(jk);const a3="/assets/test1-c5f7b743.jpg",l3="/assets/test2-cccd072b.jpg",u3="/assets/test3-8c0b4350.jpg",c3="/assets/test4-14f97765.jpg",en="/assets/test5-311b9053.jpg";function f3(){const t={dots:!0,infinite:!0,speed:30,slidesToShow:1,slidesToScroll:1,autoplay:!0,fade:!0,arrows:!1,pauseOnFocus:!0,pauseOnHover:!0,centerMode:!0};return h.jsx(d3,{children:h.jsx(h3,{children:h.jsxs(s3,{...t,children:[h.jsxs(So,{children:[h.jsxs(To,{children:[h.jsx("h2",{children:"광고 메인"}),h.jsx("h3",{children:"여기슨 광고판 설명하는 부분입니다. 쓰고 싶은 내용 데이터로 받아와서 쓰면 될 것입니다."})]}),h.jsx(bo,{src:a3})]}),h.jsxs(So,{children:[h.jsxs(To,{children:[h.jsx("h2",{children:"광고 메인"}),h.jsx("h3",{children:"여기슨 광고판 설명하는 부분입니다. 쓰고 싶은 내용 데이터로 받아와서 쓰면 될 것입니다."})]}),h.jsx(bo,{src:l3})]}),h.jsxs(So,{children:[h.jsxs(To,{children:[h.jsx("h2",{children:"광고 메인"}),h.jsx("h3",{children:"여기슨 광고판 설명하는 부분입니다. 쓰고 싶은 내용 데이터로 받아와서 쓰면 될 것입니다."})]}),h.jsx(bo,{src:u3})]}),h.jsxs(So,{children:[h.jsxs(To,{children:[h.jsx("h2",{children:"광고 메인"}),h.jsx("h3",{children:"여기슨 광고판 설명하는 부분입니다. 쓰고 싶은 내용 데이터로 받아와서 쓰면 될 것입니다."})]}),h.jsx(bo,{src:c3})]}),h.jsxs(So,{children:[h.jsxs(To,{children:[h.jsx("h2",{children:"광고 메인"}),h.jsx("h3",{children:"여기슨 광고판 설명하는 부분입니다. 쓰고 싶은 내용 데이터로 받아와서 쓰면 될 것입니다."})]}),h.jsx(bo,{src:en})]}),h.jsxs(So,{children:[h.jsxs(To,{children:[h.jsx("h2",{children:"광고 메인"}),h.jsx("h3",{children:"여기슨 광고판 설명하는 부분입니다. 쓰고 싶은 내용 데이터로 받아와서 쓰면 될 것입니다."})]}),h.jsx(bo,{src:en})]})]})})})}const d3=C.div`
  width: 100%;
  margin-bottom: 100px;
  align-items: center;
  justify-self: center;
  display: flex;
`,h3=C.div`
  margin: auto;
  margin-top: 50px;

  width: 1400px;
  @media (max-width: 1380px) {
    width: 80%;
  }
`,So=C.div`
  margin-left: auto;
  width: 100%;
  height: 600px;
  overflow: hidden;
`,To=C.div`
  justify-content: center;
  align-items: center;
  z-index: 100;
  position: absolute;
  width: 40%;
  color: white;
  h2 {
    position: relative;
    top: 150px;
    left: 100px;
    font-size: 2.3em;
  }
  h3 {
    position: relative;
    top: 200px;
    left: 100px;
    font-size: 1.5em;
  }

  @media (max-width: 1380px) {
    h2 {
      font-size: 2em;
    }
    h3 {
      font-size: 1.5em;
    }
  }
`,bo=C.img`
  max-width: 100%;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 25px;
`,p3="/assets/cover-a9f367e4.jpg",m3="/assets/side-f444f4c8.jpg",g3="/assets/back-b5ebd160.jpg";function v3(){return h.jsx(y3,{children:h.jsxs(_3,{children:[h.jsx(w3,{src:m3}),h.jsx(E3,{src:g3}),h.jsx(S3,{src:p3,alt:"Book"})]})})}const y3=C.section`
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  perspective: 1000px;
`,_3=C.div`
  position: relative;
  width: 200px;
  height: 300px;
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  transition: transform 0.5s;

  &:hover {
    transform: rotateY(35deg);
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: rotateY(180deg);
  }
`,w3=C.img`
  position: absolute;
  width: 60px;
  height: 100%;
  transform-origin: left;
  background-position: center;
  transform: rotateY(90deg);
`,E3=C.img`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: center;
  background-position: center;
  transform: rotateY(180deg) translateZ(60px);
`,S3=C.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,T3="/assets/cover1-62730251.jpg",b3="/assets/side1-cb6d900a.jpg",k3="/assets/back1-01a8b9e1.jpg";function x3(){return h.jsx(I3,{children:h.jsxs(C3,{children:[h.jsx(R3,{src:b3}),h.jsx(P3,{src:k3}),h.jsx(A3,{src:T3,alt:"Book"})]})})}const I3=C.section`
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  perspective: 1000px;
`,C3=C.div`
  position: relative;
  width: 200px;
  height: 300px;
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  transition: transform 0.5s;

  &:hover {
    transform: rotateY(35deg);
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: rotateY(180deg);
  }
`,R3=C.img`
  position: absolute;
  width: 60px;
  height: 100%;
  transform-origin: left;
  background-position: center;
  transform: rotateY(90deg);
`,P3=C.img`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: center;
  background-position: center;
  transform: rotateY(180deg) translateZ(60px);
`,A3=C.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,O3="/assets/cover2-c4c52d76.jpg",N3="/assets/side2-af7d9bc7.jpg",D3="/assets/back2-a0b0061e.jpg";function L3(){return h.jsx(M3,{children:h.jsxs(j3,{children:[h.jsx($3,{src:N3}),h.jsx(V3,{src:D3}),h.jsx(U3,{src:O3,alt:"Book"})]})})}const M3=C.section`
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  perspective: 1000px;
`,j3=C.div`
  position: relative;
  width: 200px;
  height: 300px;
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  transition: transform 0.5s;

  &:hover {
    transform: rotateY(35deg);
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: rotateY(180deg);
  }
`,$3=C.img`
  position: absolute;
  width: 60px;
  height: 100%;
  transform-origin: left;
  background-position: center;
  transform: rotateY(90deg);
`,V3=C.img`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: center;
  background-position: center;
  transform: rotateY(180deg) translateZ(60px);
`,U3=C.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,F3="/assets/cover3-8f2913ff.jpg",z3="/assets/side3-08f0bfd7.jpg",B3="/assets/back3-7061c352.jpg";function H3(){return h.jsx(W3,{children:h.jsxs(q3,{children:[h.jsx(G3,{src:z3}),h.jsx(K3,{src:B3}),h.jsx(Y3,{src:F3,alt:"Book"})]})})}const W3=C.section`
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  perspective: 1000px;
`,q3=C.div`
  position: relative;
  width: 200px;
  height: 300px;
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  transition: transform 0.5s;

  &:hover {
    transform: rotateY(35deg);
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: rotateY(180deg);
  }
`,G3=C.img`
  position: absolute;
  width: 60px;
  height: 100%;
  transform-origin: left;
  background-position: center;
  transform: rotateY(90deg);
`,K3=C.img`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: center;
  background-position: center;
  transform: rotateY(180deg) translateZ(60px);
`,Y3=C.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Q3="/assets/cover4-16c55e4f.jpg",X3="/assets/side4-cb8560da.jpg",J3="/assets/back4-b1f44cfd.jpg";function Z3(){return h.jsx(e$,{children:h.jsxs(t$,{children:[h.jsx(n$,{src:X3}),h.jsx(r$,{src:J3}),h.jsx(i$,{src:Q3,alt:"Book"})]})})}const e$=C.section`
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  perspective: 1000px;
`,t$=C.div`
  position: relative;
  width: 200px;
  height: 300px;
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  transition: transform 0.5s;

  &:hover {
    transform: rotateY(35deg);
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: rotateY(180deg);
  }
`,n$=C.img`
  position: absolute;
  width: 60px;
  height: 100%;
  transform-origin: left;
  background-position: center;
  transform: rotateY(90deg);
`,r$=C.img`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: center;
  background-position: center;
  transform: rotateY(180deg) translateZ(60px);
`,i$=C.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,o$="/assets/cover5-ddbde329.jpg",s$="/assets/side5-f7252691.jpg",a$="/assets/back5-ddea1cac.jpg";function l$(){return h.jsx(u$,{children:h.jsxs(c$,{children:[h.jsx(f$,{src:s$}),h.jsx(d$,{src:a$}),h.jsx(h$,{src:o$,alt:"Book"})]})})}const u$=C.section`
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  perspective: 1000px;
`,c$=C.div`
  position: relative;
  width: 200px;
  height: 300px;
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  transition: transform 0.5s;

  &:hover {
    transform: rotateY(35deg);
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: rotateY(180deg);
  }
`,f$=C.img`
  position: absolute;
  width: 60px;
  height: 100%;
  transform-origin: left;
  background-position: center;
  transform: rotateY(90deg);
`,d$=C.img`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: center;
  background-position: center;
  transform: rotateY(180deg) translateZ(60px);
`,h$=C.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;function p$(){return h.jsx(m$,{children:h.jsxs(g$,{children:[h.jsx(v3,{}),h.jsx(x3,{}),h.jsx(L3,{}),h.jsx(H3,{}),h.jsx(Z3,{}),h.jsx(l$,{})]})})}const m$=C.section`
    display: flex;
    justify-content: center;
    padding: 10px;
    margin: 100px;
`,g$=C.div`
    display: flex;
    gap: 20px;
    padding: 10px;
    @media screen and (max-width: 700px) {
        flex-direction: column;
        align-items: center;
    }
    @media screen and (max-width: 1300px) {
        & > *:nth-child(n + 6){
            display: none;}
    }

    @media screen and (max-width: 1200px) {
        & > *:nth-child(n + 5){
            display: none;}
    }
    @media screen and (max-width: 1000px) {
        & > *:nth-child(n + 4){
            display: none;}
    }
`;function v$(){return h.jsxs("div",{children:[h.jsx(f3,{}),h.jsx(p$,{})]})}const y$="/assets/github-1138210f.svg",_$="/assets/blog-1e121120.svg";function w$(){return h.jsx(E$,{children:h.jsxs(S$,{children:[h.jsxs(T$,{children:[h.jsx(b$,{children:h.jsxs("ul",{children:[h.jsx("li",{children:h.jsx(_n,{to:"/",children:"메인 페이지"})}),h.jsx("li",{children:"|"}),h.jsx("li",{children:h.jsx(_n,{to:"/List",children:"책 목록"})}),h.jsx("li",{children:"|"}),h.jsx("li",{children:h.jsx(_n,{to:"/Board",children:"커뮤니티"})}),h.jsx("li",{children:"|"}),h.jsx("li",{children:h.jsx(_n,{to:"/Mypage",children:"마이페이지"})})]})}),h.jsxs(k$,{children:[h.jsxs("div",{className:"first-row",children:[h.jsx(i1,{src:y$}),h.jsx("span",{children:h.jsx("a",{href:"https://github.com/KittelLee",children:"이진욱"})}),h.jsx("span",{children:h.jsx("a",{href:"https://github.com/heriondb",children:"강수진"})}),h.jsx("span",{children:h.jsx("a",{href:"https://github.com/withsjb",children:"손진빈"})})]}),h.jsxs("div",{className:"second-row",children:[h.jsx(i1,{src:_$}),h.jsx("span",{children:h.jsx("a",{href:"https://projectlog.tistory.com/",children:"이진욱"})}),h.jsx("span",{children:h.jsx("a",{href:"https://pozip.tistory.com/",children:"강수진"})}),h.jsx("span",{children:h.jsx("a",{href:"#",children:"손진빈"})})]})]})]}),h.jsxs(x$,{children:[h.jsx("h3",{children:"BOOK-REVIEW"}),h.jsx("p",{children:"개발자: 이진욱 강수진 손진빈"}),h.jsxs("p",{children:["레포지토리 주소:"," ",h.jsx("a",{href:"https://github.com/KittelLee/book-review",children:"github.com/KittelLee/book-review"})]}),h.jsx("p",{children:"개발기간: 2023.12.6 ~ 2023.12.20"}),h.jsx("p",{children:"COPYRIGHT © 2023 ALL RIGHTS RESERVED"})]})]})})}const E$=C.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: rgb(251, 251, 251);
`,S$=C.div`
  display: flex;
  width: 70%;
  padding: 12px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`,T$=C.div`
  width: 70%;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`,b$=C.div`
  ul li {
    display: inline;
    margin-left: 10px;
  }
  ul li a {
    text-decoration: none;
    color: black;
  }
  ul li a:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 600px) {
    ul li {
      margin: 0 2px;
      font-size: 0.9rem;
    }
    ul li a {
      font-size: 0.9rem;
    }
  }
`,k$=C.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  @media screen and (max-width: 600px) {
    text-align: center;
    margin-left: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: #f43530;
      font-weight: 500;
    }
  }
  span {
    padding: 0.2rem;
  }
  .first-row,
  .second-row {
    font-weight: 500;
    font-size: 1.1em;
  }
`,i1=C.img`
  width: 2rem;
  height: 2rem;
`,x$=C.div`
  width: 30%;
  @media screen and (max-width: 600px) {
    margin-top: 20px;
    width: 100%;
    h3,
    p,
    a {
      text-align: center;
    }
    a {
      font-size: 0.72rem;
    }
  }
  p {
    line-height: 0.5;
    font-family: Arial;
    font-size: 0.8rem;
  }
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    color: red;
  }
`;function o1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function $(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?o1(Object(n),!0).forEach(function(r){Je(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Of(t){"@babel/helpers - typeof";return Of=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Of(t)}function I$(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s1(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function C$(t,e,n){return e&&s1(t.prototype,e),n&&s1(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Je(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _y(t,e){return P$(t)||O$(t,e)||fx(t,e)||D$()}function Xl(t){return R$(t)||A$(t)||fx(t)||N$()}function R$(t){if(Array.isArray(t))return og(t)}function P$(t){if(Array.isArray(t))return t}function A$(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function O$(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,a;try{for(n=n.call(t);!(i=(s=n.next()).done)&&(r.push(s.value),!(e&&r.length===e));i=!0);}catch(l){o=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw a}}return r}}function fx(t,e){if(t){if(typeof t=="string")return og(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return og(t,e)}}function og(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function N$(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a1=function(){},wy={},dx={},hx=null,px={mark:a1,measure:a1};try{typeof window<"u"&&(wy=window),typeof document<"u"&&(dx=document),typeof MutationObserver<"u"&&(hx=MutationObserver),typeof performance<"u"&&(px=performance)}catch{}var L$=wy.navigator||{},l1=L$.userAgent,u1=l1===void 0?"":l1,pi=wy,xe=dx,c1=hx,$u=px;pi.document;var xr=!!xe.documentElement&&!!xe.head&&typeof xe.addEventListener=="function"&&typeof xe.createElement=="function",mx=~u1.indexOf("MSIE")||~u1.indexOf("Trident/"),Vu,Uu,Fu,zu,Bu,yr="___FONT_AWESOME___",sg=16,gx="fa",vx="svg-inline--fa",io="data-fa-i2svg",ag="data-fa-pseudo-element",M$="data-fa-pseudo-element-pending",Ey="data-prefix",Sy="data-icon",f1="fontawesome-i2svg",j$="async",$$=["HTML","HEAD","STYLE","SCRIPT"],yx=function(){try{return!0}catch{return!1}}(),Te="classic",Ve="sharp",Ty=[Te,Ve];function Jl(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Te]}})}var ml=Jl((Vu={},Je(Vu,Te,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Je(Vu,Ve,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Vu)),gl=Jl((Uu={},Je(Uu,Te,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Je(Uu,Ve,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Uu)),vl=Jl((Fu={},Je(Fu,Te,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Je(Fu,Ve,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Fu)),V$=Jl((zu={},Je(zu,Te,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Je(zu,Ve,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),zu)),U$=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,_x="fa-layers-text",F$=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,z$=Jl((Bu={},Je(Bu,Te,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Je(Bu,Ve,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Bu)),wx=[1,2,3,4,5,6,7,8,9,10],B$=wx.concat([11,12,13,14,15,16,17,18,19,20]),H$=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ji={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},yl=new Set;Object.keys(gl[Te]).map(yl.add.bind(yl));Object.keys(gl[Ve]).map(yl.add.bind(yl));var W$=[].concat(Ty,Xl(yl),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ji.GROUP,ji.SWAP_OPACITY,ji.PRIMARY,ji.SECONDARY]).concat(wx.map(function(t){return"".concat(t,"x")})).concat(B$.map(function(t){return"w-".concat(t)})),Oa=pi.FontAwesomeConfig||{};function q$(t){var e=xe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function G$(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(xe&&typeof xe.querySelector=="function"){var K$=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];K$.forEach(function(t){var e=_y(t,2),n=e[0],r=e[1],i=G$(q$(n));i!=null&&(Oa[r]=i)})}var Ex={styleDefault:"solid",familyDefault:"classic",cssPrefix:gx,replacementClass:vx,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Oa.familyPrefix&&(Oa.cssPrefix=Oa.familyPrefix);var Ts=$($({},Ex),Oa);Ts.autoReplaceSvg||(Ts.observeMutations=!1);var B={};Object.keys(Ex).forEach(function(t){Object.defineProperty(B,t,{enumerable:!0,set:function(n){Ts[t]=n,Na.forEach(function(r){return r(B)})},get:function(){return Ts[t]}})});Object.defineProperty(B,"familyPrefix",{enumerable:!0,set:function(e){Ts.cssPrefix=e,Na.forEach(function(n){return n(B)})},get:function(){return Ts.cssPrefix}});pi.FontAwesomeConfig=B;var Na=[];function Y$(t){return Na.push(t),function(){Na.splice(Na.indexOf(t),1)}}var Ar=sg,Vn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Q$(t){if(!(!t||!xr)){var e=xe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=xe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return xe.head.insertBefore(e,r),t}}var X$="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function _l(){for(var t=12,e="";t-- >0;)e+=X$[Math.random()*62|0];return e}function Us(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function by(t){return t.classList?Us(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Sx(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function J$(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Sx(t[n]),'" ')},"").trim()}function Ld(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ky(t){return t.size!==Vn.size||t.x!==Vn.x||t.y!==Vn.y||t.rotate!==Vn.rotate||t.flipX||t.flipY}function Z$(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function eV(t){var e=t.transform,n=t.width,r=n===void 0?sg:n,i=t.height,o=i===void 0?sg:i,s=t.startCentered,a=s===void 0?!1:s,l="";return a&&mx?l+="translate(".concat(e.x/Ar-r/2,"em, ").concat(e.y/Ar-o/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Ar,"em), calc(-50% + ").concat(e.y/Ar,"em)) "):l+="translate(".concat(e.x/Ar,"em, ").concat(e.y/Ar,"em) "),l+="scale(".concat(e.size/Ar*(e.flipX?-1:1),", ").concat(e.size/Ar*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var tV=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Tx(){var t=gx,e=vx,n=B.cssPrefix,r=B.replacementClass,i=tV;if(n!==t||r!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var d1=!1;function pp(){B.autoAddCss&&!d1&&(Q$(Tx()),d1=!0)}var nV={mixout:function(){return{dom:{css:Tx,insertCss:pp}}},hooks:function(){return{beforeDOMElementCreation:function(){pp()},beforeI2svg:function(){pp()}}}},_r=pi||{};_r[yr]||(_r[yr]={});_r[yr].styles||(_r[yr].styles={});_r[yr].hooks||(_r[yr].hooks={});_r[yr].shims||(_r[yr].shims=[]);var wn=_r[yr],bx=[],rV=function t(){xe.removeEventListener("DOMContentLoaded",t),Nf=1,bx.map(function(e){return e()})},Nf=!1;xr&&(Nf=(xe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(xe.readyState),Nf||xe.addEventListener("DOMContentLoaded",rV));function iV(t){xr&&(Nf?setTimeout(t,0):bx.push(t))}function Zl(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,o=i===void 0?[]:i;return typeof t=="string"?Sx(t):"<".concat(e," ").concat(J$(r),">").concat(o.map(Zl).join(""),"</").concat(e,">")}function h1(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var oV=function(e,n){return function(r,i,o,s){return e.call(n,r,i,o,s)}},mp=function(e,n,r,i){var o=Object.keys(e),s=o.length,a=i!==void 0?oV(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[o[0]]):(l=0,c=r);l<s;l++)u=o[l],c=a(c,e[u],u,e);return c};function sV(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=t.charCodeAt(n++);(o&64512)==56320?e.push(((i&1023)<<10)+(o&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function lg(t){var e=sV(t);return e.length===1?e[0].toString(16):null}function aV(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function p1(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function ug(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=p1(e);typeof wn.hooks.addPack=="function"&&!i?wn.hooks.addPack(t,p1(e)):wn.styles[t]=$($({},wn.styles[t]||{}),o),t==="fas"&&ug("fa",e)}var Hu,Wu,qu,Ho=wn.styles,lV=wn.shims,uV=(Hu={},Je(Hu,Te,Object.values(vl[Te])),Je(Hu,Ve,Object.values(vl[Ve])),Hu),xy=null,kx={},xx={},Ix={},Cx={},Rx={},cV=(Wu={},Je(Wu,Te,Object.keys(ml[Te])),Je(Wu,Ve,Object.keys(ml[Ve])),Wu);function fV(t){return~W$.indexOf(t)}function dV(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!fV(i)?i:null}var Px=function(){var e=function(o){return mp(Ho,function(s,a,l){return s[l]=mp(a,o,{}),s},{})};kx=e(function(i,o,s){if(o[3]&&(i[o[3]]=s),o[2]){var a=o[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=s})}return i}),xx=e(function(i,o,s){if(i[s]=s,o[2]){var a=o[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=s})}return i}),Rx=e(function(i,o,s){var a=o[2];return i[s]=s,a.forEach(function(l){i[l]=s}),i});var n="far"in Ho||B.autoFetchSvg,r=mp(lV,function(i,o){var s=o[0],a=o[1],l=o[2];return a==="far"&&!n&&(a="fas"),typeof s=="string"&&(i.names[s]={prefix:a,iconName:l}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});Ix=r.names,Cx=r.unicodes,xy=Md(B.styleDefault,{family:B.familyDefault})};Y$(function(t){xy=Md(t.styleDefault,{family:B.familyDefault})});Px();function Iy(t,e){return(kx[t]||{})[e]}function hV(t,e){return(xx[t]||{})[e]}function $i(t,e){return(Rx[t]||{})[e]}function Ax(t){return Ix[t]||{prefix:null,iconName:null}}function pV(t){var e=Cx[t],n=Iy("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function mi(){return xy}var Cy=function(){return{prefix:null,iconName:null,rest:[]}};function Md(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Te:n,i=ml[r][t],o=gl[r][t]||gl[r][i],s=t in wn.styles?t:null;return o||s||null}var m1=(qu={},Je(qu,Te,Object.keys(vl[Te])),Je(qu,Ve,Object.keys(vl[Ve])),qu);function jd(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(e={},Je(e,Te,"".concat(B.cssPrefix,"-").concat(Te)),Je(e,Ve,"".concat(B.cssPrefix,"-").concat(Ve)),e),s=null,a=Te;(t.includes(o[Te])||t.some(function(u){return m1[Te].includes(u)}))&&(a=Te),(t.includes(o[Ve])||t.some(function(u){return m1[Ve].includes(u)}))&&(a=Ve);var l=t.reduce(function(u,c){var f=dV(B.cssPrefix,c);if(Ho[c]?(c=uV[a].includes(c)?V$[a][c]:c,s=c,u.prefix=c):cV[a].indexOf(c)>-1?(s=c,u.prefix=Md(c,{family:a})):f?u.iconName=f:c!==B.replacementClass&&c!==o[Te]&&c!==o[Ve]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var d=s==="fa"?Ax(u.iconName):{},p=$i(u.prefix,u.iconName);d.prefix&&(s=null),u.iconName=d.iconName||p||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!Ho.far&&Ho.fas&&!B.autoFetchSvg&&(u.prefix="fas")}return u},Cy());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Ve&&(Ho.fass||B.autoFetchSvg)&&(l.prefix="fass",l.iconName=$i(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=mi()||"fas"),l}var mV=function(){function t(){I$(this,t),this.definitions={}}return C$(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(a){n.definitions[a]=$($({},n.definitions[a]||{}),s[a]),ug(a,s[a]);var l=vl[Te][a];l&&ug(l,s[a]),Px()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var s=i[o],a=s.prefix,l=s.iconName,u=s.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),t}(),g1=[],Wo={},is={},gV=Object.keys(is);function vV(t,e){var n=e.mixoutsTo;return g1=t,Wo={},Object.keys(is).forEach(function(r){gV.indexOf(r)===-1&&delete is[r]}),g1.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),Of(i[s])==="object"&&Object.keys(i[s]).forEach(function(a){n[s]||(n[s]={}),n[s][a]=i[s][a]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(s){Wo[s]||(Wo[s]=[]),Wo[s].push(o[s])})}r.provides&&r.provides(is)}),n}function cg(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=Wo[t]||[];return o.forEach(function(s){e=s.apply(null,[e].concat(r))}),e}function oo(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Wo[t]||[];i.forEach(function(o){o.apply(null,n)})}function wr(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return is[t]?is[t].apply(null,e):void 0}function fg(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||mi();if(e)return e=$i(n,e)||e,h1(Ox.definitions,n,e)||h1(wn.styles,n,e)}var Ox=new mV,yV=function(){B.autoReplaceSvg=!1,B.observeMutations=!1,oo("noAuto")},_V={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return xr?(oo("beforeI2svg",e),wr("pseudoElements2svg",e),wr("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;B.autoReplaceSvg===!1&&(B.autoReplaceSvg=!0),B.observeMutations=!0,iV(function(){EV({autoReplaceSvgRoot:n}),oo("watch",e)})}},wV={icon:function(e){if(e===null)return null;if(Of(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:$i(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Md(e[0]);return{prefix:r,iconName:$i(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(B.cssPrefix,"-"))>-1||e.match(U$))){var i=jd(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||mi(),iconName:$i(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var o=mi();return{prefix:o,iconName:$i(o,e)||e}}}},Jt={noAuto:yV,config:B,dom:_V,parse:wV,library:Ox,findIconDefinition:fg,toHtml:Zl},EV=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?xe:n;(Object.keys(wn.styles).length>0||B.autoFetchSvg)&&xr&&B.autoReplaceSvg&&Jt.dom.i2svg({node:r})};function $d(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Zl(r)})}}),Object.defineProperty(t,"node",{get:function(){if(xr){var r=xe.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function SV(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,o=t.styles,s=t.transform;if(ky(s)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Ld($($({},o),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function TV(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,o=t.symbol,s=o===!0?"".concat(e,"-").concat(B.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:$($({},i),{},{id:s}),children:r}]}]}function Ry(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,o=t.iconName,s=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,f=t.extra,d=t.watchable,p=d===void 0?!1:d,y=r.found?r:n,_=y.width,w=y.height,g=i==="fak",m=[B.replacementClass,o?"".concat(B.cssPrefix,"-").concat(o):""].filter(function(R){return f.classes.indexOf(R)===-1}).filter(function(R){return R!==""||!!R}).concat(f.classes).join(" "),v={children:[],attributes:$($({},f.attributes),{},{"data-prefix":i,"data-icon":o,class:m,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(w)})},E=g&&!~f.classes.indexOf("fa-fw")?{width:"".concat(_/w*16*.0625,"em")}:{};p&&(v.attributes[io]=""),l&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(c||_l())},children:[l]}),delete v.attributes.title);var S=$($({},v),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:s,symbol:a,styles:$($({},E),f.styles)}),T=r.found&&n.found?wr("generateAbstractMask",S)||{children:[],attributes:{}}:wr("generateAbstractIcon",S)||{children:[],attributes:{}},b=T.children,k=T.attributes;return S.children=b,S.attributes=k,a?TV(S):SV(S)}function v1(t){var e=t.content,n=t.width,r=t.height,i=t.transform,o=t.title,s=t.extra,a=t.watchable,l=a===void 0?!1:a,u=$($($({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});l&&(u[io]="");var c=$({},s.styles);ky(i)&&(c.transform=eV({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=Ld(c);f.length>0&&(u.style=f);var d=[];return d.push({tag:"span",attributes:u,children:[e]}),o&&d.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),d}function bV(t){var e=t.content,n=t.title,r=t.extra,i=$($($({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=Ld(r.styles);o.length>0&&(i.style=o);var s=[];return s.push({tag:"span",attributes:i,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var gp=wn.styles;function dg(t){var e=t[0],n=t[1],r=t.slice(4),i=_y(r,1),o=i[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(B.cssPrefix,"-").concat(ji.GROUP)},children:[{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(ji.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(ji.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:s}}var kV={found:!1,width:512,height:512};function xV(t,e){!yx&&!B.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function hg(t,e){var n=e;return e==="fa"&&B.styleDefault!==null&&(e=mi()),new Promise(function(r,i){if(wr("missingIconAbstract"),n==="fa"){var o=Ax(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&gp[e]&&gp[e][t]){var s=gp[e][t];return r(dg(s))}xV(t,e),r($($({},kV),{},{icon:B.showMissingIcons&&t?wr("missingIconAbstract")||{}:{}}))})}var y1=function(){},pg=B.measurePerformance&&$u&&$u.mark&&$u.measure?$u:{mark:y1,measure:y1},ma='FA "6.5.1"',IV=function(e){return pg.mark("".concat(ma," ").concat(e," begins")),function(){return Nx(e)}},Nx=function(e){pg.mark("".concat(ma," ").concat(e," ends")),pg.measure("".concat(ma," ").concat(e),"".concat(ma," ").concat(e," begins"),"".concat(ma," ").concat(e," ends"))},Py={begin:IV,end:Nx},Rc=function(){};function _1(t){var e=t.getAttribute?t.getAttribute(io):null;return typeof e=="string"}function CV(t){var e=t.getAttribute?t.getAttribute(Ey):null,n=t.getAttribute?t.getAttribute(Sy):null;return e&&n}function RV(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(B.replacementClass)}function PV(){if(B.autoReplaceSvg===!0)return Pc.replace;var t=Pc[B.autoReplaceSvg];return t||Pc.replace}function AV(t){return xe.createElementNS("http://www.w3.org/2000/svg",t)}function OV(t){return xe.createElement(t)}function Dx(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?AV:OV:n;if(typeof t=="string")return xe.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(s){i.setAttribute(s,t.attributes[s])});var o=t.children||[];return o.forEach(function(s){i.appendChild(Dx(s,{ceFn:r}))}),i}function NV(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Pc={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(Dx(i),n)}),n.getAttribute(io)===null&&B.keepOriginalSource){var r=xe.createComment(NV(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~by(n).indexOf(B.replacementClass))return Pc.replace(e);var i=new RegExp("".concat(B.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(a,l){return l===B.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var s=r.map(function(a){return Zl(a)}).join(`
`);n.setAttribute(io,""),n.innerHTML=s}};function w1(t){t()}function Lx(t,e){var n=typeof e=="function"?e:Rc;if(t.length===0)n();else{var r=w1;B.mutateApproach===j$&&(r=pi.requestAnimationFrame||w1),r(function(){var i=PV(),o=Py.begin("mutate");t.map(i),o(),n()})}}var Ay=!1;function Mx(){Ay=!0}function mg(){Ay=!1}var Df=null;function E1(t){if(c1&&B.observeMutations){var e=t.treeCallback,n=e===void 0?Rc:e,r=t.nodeCallback,i=r===void 0?Rc:r,o=t.pseudoElementsCallback,s=o===void 0?Rc:o,a=t.observeMutationsRoot,l=a===void 0?xe:a;Df=new c1(function(u){if(!Ay){var c=mi();Us(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!_1(f.addedNodes[0])&&(B.searchPseudoElements&&s(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&B.searchPseudoElements&&s(f.target.parentNode),f.type==="attributes"&&_1(f.target)&&~H$.indexOf(f.attributeName))if(f.attributeName==="class"&&CV(f.target)){var d=jd(by(f.target)),p=d.prefix,y=d.iconName;f.target.setAttribute(Ey,p||c),y&&f.target.setAttribute(Sy,y)}else RV(f.target)&&i(f.target)})}}),xr&&Df.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function DV(){Df&&Df.disconnect()}function LV(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var o=i.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(r[s]=a.join(":").trim()),r},{})),n}function MV(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=jd(by(t));return i.prefix||(i.prefix=mi()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=hV(i.prefix,t.innerText)||Iy(i.prefix,lg(t.innerText))),!i.iconName&&B.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function jV(t){var e=Us(t.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return B.autoA11y&&(n?e["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(r||_l()):(e["aria-hidden"]="true",e.focusable="false")),e}function $V(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Vn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function S1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=MV(t),r=n.iconName,i=n.prefix,o=n.rest,s=jV(t),a=cg("parseNodeAttributes",{},t),l=e.styleParser?LV(t):[];return $({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Vn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:s}},a)}var VV=wn.styles;function jx(t){var e=B.autoReplaceSvg==="nest"?S1(t,{styleParser:!1}):S1(t);return~e.extra.classes.indexOf(_x)?wr("generateLayersText",t,e):wr("generateSvgReplacementMutation",t,e)}var gi=new Set;Ty.map(function(t){gi.add("fa-".concat(t))});Object.keys(ml[Te]).map(gi.add.bind(gi));Object.keys(ml[Ve]).map(gi.add.bind(gi));gi=Xl(gi);function T1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!xr)return Promise.resolve();var n=xe.documentElement.classList,r=function(f){return n.add("".concat(f1,"-").concat(f))},i=function(f){return n.remove("".concat(f1,"-").concat(f))},o=B.autoFetchSvg?gi:Ty.map(function(c){return"fa-".concat(c)}).concat(Object.keys(VV));o.includes("fa")||o.push("fa");var s=[".".concat(_x,":not([").concat(io,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(io,"])")})).join(", ");if(s.length===0)return Promise.resolve();var a=[];try{a=Us(t.querySelectorAll(s))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Py.begin("onTree"),u=a.reduce(function(c,f){try{var d=jx(f);d&&c.push(d)}catch(p){yx||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(d){Lx(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(d){l(),f(d)})})}function UV(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;jx(t).then(function(n){n&&Lx([n],e)})}function FV(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:fg(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:fg(i||{})),t(r,$($({},n),{},{mask:i}))}}var zV=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Vn:r,o=n.symbol,s=o===void 0?!1:o,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,d=f===void 0?null:f,p=n.titleId,y=p===void 0?null:p,_=n.classes,w=_===void 0?[]:_,g=n.attributes,m=g===void 0?{}:g,v=n.styles,E=v===void 0?{}:v;if(e){var S=e.prefix,T=e.iconName,b=e.icon;return $d($({type:"icon"},e),function(){return oo("beforeDOMElementCreation",{iconDefinition:e,params:n}),B.autoA11y&&(d?m["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(y||_l()):(m["aria-hidden"]="true",m.focusable="false")),Ry({icons:{main:dg(b),mask:l?dg(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:T,transform:$($({},Vn),i),symbol:s,title:d,maskId:c,titleId:y,extra:{attributes:m,styles:E,classes:w}})})}},BV={mixout:function(){return{icon:FV(zV)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=T1,n.nodeCallback=UV,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?xe:r,o=n.callback,s=o===void 0?function(){}:o;return T1(i,s)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,s=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,d=r.extra;return new Promise(function(p,y){Promise.all([hg(i,a),c.iconName?hg(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var w=_y(_,2),g=w[0],m=w[1];p([n,Ry({icons:{main:g,mask:m},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:o,titleId:s,extra:d,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.transform,a=n.styles,l=Ld(a);l.length>0&&(i.style=l);var u;return ky(s)&&(u=wr("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:i}}}},HV={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return $d({type:"layer"},function(){oo("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(a){Array.isArray(a)?a.map(function(l){s=s.concat(l.abstract)}):s=s.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(B.cssPrefix,"-layers")].concat(Xl(o)).join(" ")},children:s}]})}}}},WV={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,s=r.classes,a=s===void 0?[]:s,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return $d({type:"counter",content:n},function(){return oo("beforeDOMElementCreation",{content:n,params:r}),bV({content:n.toString(),title:o,extra:{attributes:u,styles:f,classes:["".concat(B.cssPrefix,"-layers-counter")].concat(Xl(a))}})})}}}},qV={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?Vn:i,s=r.title,a=s===void 0?null:s,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,d=r.styles,p=d===void 0?{}:d;return $d({type:"text",content:n},function(){return oo("beforeDOMElementCreation",{content:n,params:r}),v1({content:n,transform:$($({},Vn),o),title:a,extra:{attributes:f,styles:p,classes:["".concat(B.cssPrefix,"-layers-text")].concat(Xl(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,o=r.transform,s=r.extra,a=null,l=null;if(mx){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return B.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,v1({content:n.innerHTML,width:a,height:l,transform:o,title:i,extra:s,watchable:!0})])}}},GV=new RegExp('"',"ug"),b1=[1105920,1112319];function KV(t){var e=t.replace(GV,""),n=aV(e,0),r=n>=b1[0]&&n<=b1[1],i=e.length===2?e[0]===e[1]:!1;return{value:lg(i?e[0]:e),isSecondary:r||i}}function k1(t,e){var n="".concat(M$).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var o=Us(t.children),s=o.filter(function(b){return b.getAttribute(ag)===e})[0],a=pi.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(F$),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(s&&!l)return t.removeChild(s),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?Ve:Te,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?gl[d][l[2].toLowerCase()]:z$[d][u],y=KV(f),_=y.value,w=y.isSecondary,g=l[0].startsWith("FontAwesome"),m=Iy(p,_),v=m;if(g){var E=pV(_);E.iconName&&E.prefix&&(m=E.iconName,p=E.prefix)}if(m&&!w&&(!s||s.getAttribute(Ey)!==p||s.getAttribute(Sy)!==v)){t.setAttribute(n,v),s&&t.removeChild(s);var S=$V(),T=S.extra;T.attributes[ag]=e,hg(m,p).then(function(b){var k=Ry($($({},S),{},{icons:{main:b,mask:Cy()},prefix:p,iconName:v,extra:T,watchable:!0})),R=xe.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(R,t.firstChild):t.appendChild(R),R.outerHTML=k.map(function(D){return Zl(D)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function YV(t){return Promise.all([k1(t,"::before"),k1(t,"::after")])}function QV(t){return t.parentNode!==document.head&&!~$$.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ag)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function x1(t){if(xr)return new Promise(function(e,n){var r=Us(t.querySelectorAll("*")).filter(QV).map(YV),i=Py.begin("searchPseudoElements");Mx(),Promise.all(r).then(function(){i(),mg(),e()}).catch(function(){i(),mg(),n()})})}var XV={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=x1,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?xe:r;B.searchPseudoElements&&x1(i)}}},I1=!1,JV={mixout:function(){return{dom:{unwatch:function(){Mx(),I1=!0}}}},hooks:function(){return{bootstrap:function(){E1(cg("mutationObserverCallbacks",{}))},noAuto:function(){DV()},watch:function(n){var r=n.observeMutationsRoot;I1?mg():E1(cg("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},C1=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),s=o[0],a=o.slice(1).join("-");if(s&&a==="h")return r.flipX=!0,r;if(s&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(s){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},ZV={mixout:function(){return{parse:{transform:function(n){return C1(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=C1(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,s=n.iconWidth,a={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},d={transform:"translate(".concat(s/2*-1," -256)")},p={outer:a,inner:f,path:d};return{tag:"g",attributes:$({},p.outer),children:[{tag:"g",attributes:$({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:$($({},r.icon.attributes),p.path)}]}]}}}},vp={x:0,y:0,width:"100%",height:"100%"};function R1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function e5(t){return t.tag==="g"?t.children:[t]}var t5={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?jd(i.split(" ").map(function(s){return s.trim()})):Cy();return o.prefix||(o.prefix=mi()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.mask,a=n.maskId,l=n.transform,u=o.width,c=o.icon,f=s.width,d=s.icon,p=Z$({transform:l,containerWidth:f,iconWidth:u}),y={tag:"rect",attributes:$($({},vp),{},{fill:"white"})},_=c.children?{children:c.children.map(R1)}:{},w={tag:"g",attributes:$({},p.inner),children:[R1($({tag:c.tag,attributes:$($({},c.attributes),p.path)},_))]},g={tag:"g",attributes:$({},p.outer),children:[w]},m="mask-".concat(a||_l()),v="clip-".concat(a||_l()),E={tag:"mask",attributes:$($({},vp),{},{id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,g]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:e5(d)},E]};return r.push(S,{tag:"rect",attributes:$({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(m,")")},vp)}),{children:r,attributes:i}}}},n5={provides:function(e){var n=!1;pi.matchMedia&&(n=pi.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:$($({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=$($({},o),{},{attributeName:"opacity"}),a={tag:"circle",attributes:$($({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:$($({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:$($({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:$($({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:$($({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:$($({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:$($({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},r5={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},i5=[nV,BV,HV,WV,qV,XV,JV,ZV,t5,n5,r5];vV(i5,{mixoutsTo:Jt});Jt.noAuto;Jt.config;Jt.library;Jt.dom;var gg=Jt.parse;Jt.findIconDefinition;Jt.toHtml;var o5=Jt.icon;Jt.layer;Jt.text;Jt.counter;var $x={exports:{}},s5="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",a5=s5,l5=a5;function Vx(){}function Ux(){}Ux.resetWarningCache=Vx;var u5=function(){function t(r,i,o,s,a,l){if(l!==l5){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Ux,resetWarningCache:Vx};return n.PropTypes=n,n};$x.exports=u5();var Oy=$x.exports;const se=td(Oy);function P1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Kr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?P1(Object(n),!0).forEach(function(r){qo(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Lf(t){"@babel/helpers - typeof";return Lf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Lf(t)}function qo(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c5(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function f5(t,e){if(t==null)return{};var n=c5(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function vg(t){return d5(t)||h5(t)||p5(t)||m5()}function d5(t){if(Array.isArray(t))return yg(t)}function h5(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function p5(t,e){if(t){if(typeof t=="string")return yg(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return yg(t,e)}}function yg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function m5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g5(t){var e,n=t.beat,r=t.fade,i=t.beatFade,o=t.bounce,s=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,f=t.pulse,d=t.fixedWidth,p=t.inverse,y=t.border,_=t.listItem,w=t.flip,g=t.size,m=t.rotation,v=t.pull,E=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":d,"fa-inverse":p,"fa-border":y,"fa-li":_,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},qo(e,"fa-".concat(g),typeof g<"u"&&g!==null),qo(e,"fa-rotate-".concat(m),typeof m<"u"&&m!==null&&m!==0),qo(e,"fa-pull-".concat(v),typeof v<"u"&&v!==null),qo(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(S){return E[S]?S:null}).filter(function(S){return S})}function v5(t){return t=t-0,t===t}function Fx(t){return v5(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var y5=["style"];function _5(t){return t.charAt(0).toUpperCase()+t.slice(1)}function w5(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=Fx(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?e[_5(i)]=o:e[i]=o,e},{})}function zx(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return zx(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=w5(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[Fx(u)]=c}return l},{attrs:{}}),o=n.style,s=o===void 0?{}:o,a=f5(n,y5);return i.attrs.style=Kr(Kr({},i.attrs.style),s),t.apply(void 0,[e.tag,Kr(Kr({},i.attrs),a)].concat(vg(r)))}var Bx=!1;try{Bx=!0}catch{}function E5(){if(!Bx&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function A1(t){if(t&&Lf(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(gg.icon)return gg.icon(t);if(t===null)return null;if(t&&Lf(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function yp(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?qo({},t,e):{}}var tr=Ht.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,o=t.className,s=t.title,a=t.titleId,l=t.maskId,u=A1(n),c=yp("classes",[].concat(vg(g5(t)),vg(o.split(" ")))),f=yp("transform",typeof t.transform=="string"?gg.transform(t.transform):t.transform),d=yp("mask",A1(r)),p=o5(u,Kr(Kr(Kr(Kr({},c),f),d),{},{symbol:i,title:s,titleId:a,maskId:l}));if(!p)return E5("Could not find icon",u),null;var y=p.abstract,_={ref:e};return Object.keys(t).forEach(function(w){tr.defaultProps.hasOwnProperty(w)||(_[w]=t[w])}),S5(y[0],_)});tr.displayName="FontAwesomeIcon";tr.propTypes={beat:se.bool,border:se.bool,beatFade:se.bool,bounce:se.bool,className:se.string,fade:se.bool,flash:se.bool,mask:se.oneOfType([se.object,se.array,se.string]),maskId:se.string,fixedWidth:se.bool,inverse:se.bool,flip:se.oneOf([!0,!1,"horizontal","vertical","both"]),icon:se.oneOfType([se.object,se.array,se.string]),listItem:se.bool,pull:se.oneOf(["right","left"]),pulse:se.bool,rotation:se.oneOf([0,90,180,270]),shake:se.bool,size:se.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:se.bool,spinPulse:se.bool,spinReverse:se.bool,symbol:se.oneOfType([se.bool,se.string]),title:se.string,titleId:se.string,transform:se.oneOfType([se.string,se.object]),swapOpacity:se.bool};tr.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var S5=zx.bind(null,Ht.createElement),T5={prefix:"fas",iconName:"clipboard-list",icon:[384,512,[],"f46d","M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16z"]},b5={prefix:"fas",iconName:"lock",icon:[448,512,[128274],"f023","M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"]},k5={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},x5={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},I5={prefix:"fas",iconName:"book",icon:[448,512,[128212],"f02d","M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]};function C5(){return h.jsx(R5,{children:h.jsxs(P5,{children:[h.jsxs(_n,{to:"/",className:"sub-list",children:[h.jsx(tr,{icon:x5,id:"icon-color1"}),h.jsx("span",{children:"Home"})]}),h.jsxs(_n,{to:"/List",className:"sub-list",children:[h.jsx(tr,{icon:I5,id:"icon-color2"}),h.jsx("span",{children:"BookList"})]}),h.jsxs(_n,{to:"/Board",className:"sub-list",children:[h.jsx(tr,{icon:T5,id:"icon-color3"}),h.jsx("span",{children:"Board"})]}),h.jsxs(_n,{to:"/MyPage",className:"sub-list",children:[h.jsx(tr,{icon:k5,id:"icon-color4"}),h.jsx("span",{children:"MyPage"})]}),h.jsxs(_n,{to:"/Login",className:"sub-list",children:[h.jsx(tr,{icon:b5,id:"icon-color5"}),h.jsx("span",{children:"Login"})]})]})})}const R5=C.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: rgb(251, 251, 251);
  position: sticky;
  top: 0;
  z-index: 9999;
`,P5=C.div`
  position: relative;
  margin: 10px;
  .sub-list {
    text-decoration: none;
    color: black;
    position: relative;
    z-index: 1;
    margin: 0 20px;
    font-size: 36px;
    @media screen and (max-width: 600px) {
      font-size: 20px;
    }

    span {
      display: none;
    }
    #icon-color1 {
      color: red;
    }
    #icon-color2 {
      color: orange;
    }
    #icon-color3 {
      color: green;
    }
    #icon-color4 {
      color: blue;
    }
    #icon-color5 {
      color: purple;
    }
  }
`;function A5(){const[t,e]=A.useState(""),[n,r]=A.useState(""),[i,o]=A.useState(""),[s,a]=A.useState(null),[l,u]=A.useState(!1),c=async p=>{p.preventDefault();try{const y=await GN(yw,t,n);a(y),console.log("Login successful!",y)}catch(y){y instanceof Error?o(y.message):o("An unknown error occurred")}},f=async p=>{p.preventDefault();try{const y=await qN(yw,t,n);a(y)}catch(y){y instanceof Error?o(y.message):o("An unknown error occurred")}},d=()=>{u(!l)};return h.jsx(O5,{showForm:l,children:h.jsxs(N5,{children:[h.jsxs(D5,{children:[h.jsxs(L5,{children:[h.jsx("h2",{children:"Already have an Account?"}),h.jsx(O1,{onClick:d,children:"로그인"})]}),h.jsxs(M5,{children:[h.jsx("h2",{children:"Don`t Already have an Account?"}),h.jsx(O1,{onClick:()=>u(!1),children:"회원가입"})]})]}),h.jsxs(j5,{showForm:l,children:[h.jsxs($5,{showForm:l,children:[h.jsxs("form",{onSubmit:c,children:[h.jsx("h3",{children:"Sign In"}),h.jsx("input",{type:"email",value:t,onChange:p=>e(p.target.value),placeholder:"Email"}),h.jsx("input",{type:"password",value:n,onChange:p=>r(p.target.value),placeholder:"Password"}),h.jsx("button",{type:"submit",children:"Login"}),h.jsx(_n,{to:"#",className:"forgot",children:"Forgot Password"})]}),i&&h.jsxs("p",{children:["Error: ",i]}),s&&h.jsxs("div",{children:["Welcome back, ",s.user.email,"!"]})," "]}),h.jsxs(V5,{showForm:l,children:[h.jsxs("form",{onSubmit:f,children:[h.jsx("h3",{children:"Sign UP"}),h.jsx("input",{type:"email",value:t,onChange:p=>e(p.target.value),placeholder:"Email"}),h.jsx("input",{type:"password",value:n,onChange:p=>r(p.target.value),placeholder:"Password"}),h.jsx("button",{type:"submit",children:"Sign Up"})]}),s&&h.jsxs("div",{children:["Welcome, ",s.user.email,"!"]})]})]})]})})}const O5=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: ${t=>t.showForm?"#03a9f4":"#f43648;"};
  transition: 0.5s;
`,N5=C.div`
  position: relative;
  width: 800px;
  height: 500px;
  margin: 20px;

  @media (max-width: 1024px) {
    max-width: 400px;
    height: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0%;
  }
`,D5=C.div`
  position: absolute;
  top: 40px;
  width: 100%;
  height: 420px;
  display: flex;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.15);

  @media (max-width: 1024px) {
    top: 0%;
    height: 100%;
  }
`,L5=C.div`
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    color: #fff;
    font-size: 1.2em;
    font-weight: 500;
    margin-bottom: 10px;
  }

  @media (max-width: 1024px) {
    position: absolute;
    width: 100%;
    height: 150px;
    top: 0;
  }
`,M5=C.div`
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    color: #fff;
    font-size: 1.2em;
    font-weight: 500;
    margin-bottom: 10px;
  }

  @media (max-width: 1024px) {
    position: absolute;
    width: 100%;
    height: 150px;
    bottom: 0;
  }
`,O1=C.button`
  cursor: pointer;
  padding: 10px 20px;
  background: #fff;
  color: #333;
  font-size: 16px;
  font-weight: 500;
  border: none;
`,j5=C.div`
  position: absolute;
  top: 0;
  left: ${t=>t.showForm?"0":"400px"};
  width: 50%;
  height: 100%;
  background: #fff;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.25);
  transition: 0.5s ease-in-out;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 100%;
    height: 500px;

    box-shadow: none;
    left: 0;
    top: ${t=>t.showForm?"0":"150px"};
  }
`,$5=C.div`
  position: absolute;
  left: ${t=>t.showForm?"0":"-100%"};
  top: ${t=>t.showForm?"0":"150px"};

  width: 100%;
  padding: 50px;
  transition: 0.5s;
  transition-delay: 0.25s;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .forgot {
    color: #333;
  }

  h3 {
    font-size: 1.5em;
    color: #333;
    margin-bottom: 20px;
    font-weight: 500;
  }

  input {
    width: 70%;
    margin-bottom: 20px;
    padding: 10px;
    outline: 10px;
    font-size: 16px;
    border: 1px solid #333;
  }

  button[type="submit"] {
    width: 70%;
    margin-bottom: 20px;
    padding: 10px;
    outline: 10px;
    font-size: 16px;
    border: 1px solid #333;
    background: #03a9f4;
    border: none;
    color: #fff;
    max-width: 100px;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    form {
      top: 0;
    }
  }
`,V5=C.div`
  position: absolute;
  left: ${t=>t.showForm?"100%":"0"};
  width: 100%;
  padding: 50px;
  transition: 0.5s;
  transition-delay: 0.25s;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .forgot {
    color: #333;
  }

  h3 {
    font-size: 1.5em;
    color: #333;
    margin-bottom: 20px;
    font-weight: 500;
  }

  input {
    width: 70%;
    margin-bottom: 20px;
    padding: 10px;
    outline: 10px;
    font-size: 16px;
    border: 1px solid #333;
  }

  button[type="submit"] {
    width: 70%;
    margin-bottom: 20px;
    padding: 10px;
    outline: 10px;
    font-size: 16px;
    border: 1px solid #333;
    background: #f43648;
    border: none;
    color: #fff;
    max-width: 100px;
    cursor: pointer;
  }
`;var U5=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,Ny=Ny||{},ee=U5||self;function Vd(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function eu(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function F5(t){return Object.prototype.hasOwnProperty.call(t,_p)&&t[_p]||(t[_p]=++z5)}var _p="closure_uid_"+(1e9*Math.random()>>>0),z5=0;function B5(t,e,n){return t.call.apply(t.bind,arguments)}function H5(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Tt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Tt=B5:Tt=H5,Tt.apply(null,arguments)}function Gu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ot(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,o){for(var s=Array(arguments.length-2),a=2;a<arguments.length;a++)s[a-2]=arguments[a];return e.prototype[i].apply(r,s)}}function ki(){this.s=this.s,this.o=this.o}var W5=0;ki.prototype.s=!1;ki.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),W5!=0)&&F5(this)};ki.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Hx=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Dy(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function N1(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Vd(r)){const i=t.length||0,o=r.length||0;t.length=i+o;for(let s=0;s<o;s++)t[i+s]=r[s]}else t.push(r)}}function bt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}bt.prototype.h=function(){this.defaultPrevented=!0};var q5=function(){if(!ee.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};ee.addEventListener("test",n,e),ee.removeEventListener("test",n,e)}catch{}return t}();function wl(t){return/^[\s\xa0]*$/.test(t)}function Ud(){var t=ee.navigator;return t&&(t=t.userAgent)?t:""}function jn(t){return Ud().indexOf(t)!=-1}function Ly(t){return Ly[" "](t),t}Ly[" "]=function(){};function G5(t,e){var n=VU;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var K5=jn("Opera"),bs=jn("Trident")||jn("MSIE"),Wx=jn("Edge"),_g=Wx||bs,qx=jn("Gecko")&&!(Ud().toLowerCase().indexOf("webkit")!=-1&&!jn("Edge"))&&!(jn("Trident")||jn("MSIE"))&&!jn("Edge"),Y5=Ud().toLowerCase().indexOf("webkit")!=-1&&!jn("Edge");function Gx(){var t=ee.document;return t?t.documentMode:void 0}var wg;e:{var wp="",Ep=function(){var t=Ud();if(qx)return/rv:([^\);]+)(\)|;)/.exec(t);if(Wx)return/Edge\/([\d\.]+)/.exec(t);if(bs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Y5)return/WebKit\/(\S+)/.exec(t);if(K5)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ep&&(wp=Ep?Ep[1]:""),bs){var Sp=Gx();if(Sp!=null&&Sp>parseFloat(wp)){wg=String(Sp);break e}}wg=wp}var Eg;if(ee.document&&bs){var D1=Gx();Eg=D1||parseInt(wg,10)||void 0}else Eg=void 0;var Q5=Eg;function El(t,e){if(bt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(qx){e:{try{Ly(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:X5[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&El.$.h.call(this)}}ot(El,bt);var X5={2:"touch",3:"pen",4:"mouse"};El.prototype.h=function(){El.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var tu="closure_listenable_"+(1e6*Math.random()|0),J5=0;function Z5(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++J5,this.fa=this.ia=!1}function Fd(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function My(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function eU(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Kx(t){const e={};for(const n in t)e[n]=t[n];return e}const L1="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Yx(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let o=0;o<L1.length;o++)n=L1[o],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function zd(t){this.src=t,this.g={},this.h=0}zd.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=Tg(t,e,r,i);return-1<s?(e=t[s],n||(e.ia=!1)):(e=new Z5(e,this.src,o,!!r,i),e.ia=n,t.push(e)),e};function Sg(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Hx(r,e),o;(o=0<=i)&&Array.prototype.splice.call(r,i,1),o&&(Fd(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Tg(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.fa&&o.listener==e&&o.capture==!!n&&o.la==r)return i}return-1}var jy="closure_lm_"+(1e6*Math.random()|0),Tp={};function Qx(t,e,n,r,i){if(r&&r.once)return Jx(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)Qx(t,e[o],n,r,i);return null}return n=Uy(n),t&&t[tu]?t.O(e,n,eu(r)?!!r.capture:!!r,i):Xx(t,e,n,!1,r,i)}function Xx(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=eu(i)?!!i.capture:!!i,a=Vy(t);if(a||(t[jy]=a=new zd(t)),n=a.add(e,n,r,s,o),n.proxy)return n;if(r=tU(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)q5||(i=s),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(eI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function tU(){function t(n){return e.call(t.src,t.listener,n)}const e=nU;return t}function Jx(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)Jx(t,e[o],n,r,i);return null}return n=Uy(n),t&&t[tu]?t.P(e,n,eu(r)?!!r.capture:!!r,i):Xx(t,e,n,!0,r,i)}function Zx(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)Zx(t,e[o],n,r,i);else r=eu(r)?!!r.capture:!!r,n=Uy(n),t&&t[tu]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=Tg(o,n,r,i),-1<n&&(Fd(o[n]),Array.prototype.splice.call(o,n,1),o.length==0&&(delete t.g[e],t.h--)))):t&&(t=Vy(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Tg(e,n,r,i)),(n=-1<t?e[t]:null)&&$y(n))}function $y(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[tu])Sg(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(eI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Vy(e))?(Sg(n,t),n.h==0&&(n.src=null,e[jy]=null)):Fd(t)}}}function eI(t){return t in Tp?Tp[t]:Tp[t]="on"+t}function nU(t,e){if(t.fa)t=!0;else{e=new El(e,this);var n=t.listener,r=t.la||t.src;t.ia&&$y(t),t=n.call(r,e)}return t}function Vy(t){return t=t[jy],t instanceof zd?t:null}var bp="__closure_events_fn_"+(1e9*Math.random()>>>0);function Uy(t){return typeof t=="function"?t:(t[bp]||(t[bp]=function(e){return t.handleEvent(e)}),t[bp])}function it(){ki.call(this),this.i=new zd(this),this.S=this,this.J=null}ot(it,ki);it.prototype[tu]=!0;it.prototype.removeEventListener=function(t,e,n,r){Zx(this,t,e,n,r)};function ft(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new bt(e,t);else if(e instanceof bt)e.target=e.target||t;else{var i=e;e=new bt(r,t),Yx(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=Ku(s,r,!0,e)&&i}if(s=e.g=t,i=Ku(s,r,!0,e)&&i,i=Ku(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=Ku(s,r,!1,e)&&i}it.prototype.N=function(){if(it.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Fd(n[r]);delete t.g[e],t.h--}}this.J=null};it.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};it.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ku(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.fa&&s.capture==n){var a=s.listener,l=s.la||s.src;s.ia&&Sg(t.i,s),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Fy=ee.JSON.stringify;class rU{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function iU(){var t=zy;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class oU{constructor(){this.h=this.g=null}add(e,n){const r=tI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var tI=new rU(()=>new sU,t=>t.reset());class sU{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function aU(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function lU(t){ee.setTimeout(()=>{throw t},0)}let Sl,Tl=!1,zy=new oU,nI=()=>{const t=ee.Promise.resolve(void 0);Sl=()=>{t.then(uU)}};var uU=()=>{for(var t;t=iU();){try{t.h.call(t.g)}catch(n){lU(n)}var e=tI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Tl=!1};function Bd(t,e){it.call(this),this.h=t||1,this.g=e||ee,this.j=Tt(this.qb,this),this.l=Date.now()}ot(Bd,it);L=Bd.prototype;L.ga=!1;L.T=null;L.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ft(this,"tick"),this.ga&&(By(this),this.start()))}};L.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function By(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}L.N=function(){Bd.$.N.call(this),By(this),delete this.g};function Hy(t,e,n){if(typeof t=="function")n&&(t=Tt(t,n));else if(t&&typeof t.handleEvent=="function")t=Tt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ee.setTimeout(t,e||0)}function rI(t){t.g=Hy(()=>{t.g=null,t.i&&(t.i=!1,rI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class cU extends ki{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:rI(this)}N(){super.N(),this.g&&(ee.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bl(t){ki.call(this),this.h=t,this.g={}}ot(bl,ki);var M1=[];function iI(t,e,n,r){Array.isArray(n)||(n&&(M1[0]=n.toString()),n=M1);for(var i=0;i<n.length;i++){var o=Qx(e,n[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function oI(t){My(t.g,function(e,n){this.g.hasOwnProperty(n)&&$y(e)},t),t.g={}}bl.prototype.N=function(){bl.$.N.call(this),oI(this)};bl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Hd(){this.g=!0}Hd.prototype.Ea=function(){this.g=!1};function fU(t,e,n,r,i,o){t.info(function(){if(t.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");s=2<=f.length&&f[1]=="type"?s+(c+"="+u+"&"):s+(c+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+s})}function dU(t,e,n,r,i,o,s){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+o+" "+s})}function Go(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+pU(t,n)+(r?" "+r:"")})}function hU(t,e){t.info(function(){return"TIMEOUT: "+e})}Hd.prototype.info=function(){};function pU(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if(o!="noop"&&o!="stop"&&o!="close")for(var s=1;s<i.length;s++)i[s]=""}}}}return Fy(n)}catch{return e}}var vo={},j1=null;function Wd(){return j1=j1||new it}vo.Ta="serverreachability";function sI(t){bt.call(this,vo.Ta,t)}ot(sI,bt);function kl(t){const e=Wd();ft(e,new sI(e))}vo.STAT_EVENT="statevent";function aI(t,e){bt.call(this,vo.STAT_EVENT,t),this.stat=e}ot(aI,bt);function Ot(t){const e=Wd();ft(e,new aI(e,t))}vo.Ua="timingevent";function lI(t,e){bt.call(this,vo.Ua,t),this.size=e}ot(lI,bt);function nu(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ee.setTimeout(function(){t()},e)}var qd={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},uI={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Wy(){}Wy.prototype.h=null;function $1(t){return t.h||(t.h=t.i())}function cI(){}var ru={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function qy(){bt.call(this,"d")}ot(qy,bt);function Gy(){bt.call(this,"c")}ot(Gy,bt);var bg;function Gd(){}ot(Gd,Wy);Gd.prototype.g=function(){return new XMLHttpRequest};Gd.prototype.i=function(){return{}};bg=new Gd;function iu(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new bl(this),this.P=mU,t=_g?125:void 0,this.V=new Bd(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new fI}function fI(){this.i=null,this.g="",this.h=!1}var mU=45e3,dI={},kg={};L=iu.prototype;L.setTimeout=function(t){this.P=t};function xg(t,e,n){t.L=1,t.A=Yd(Er(e)),t.u=n,t.S=!0,hI(t,null)}function hI(t,e){t.G=Date.now(),ou(t),t.B=Er(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),EI(n.i,"t",r),t.o=0,n=t.l.J,t.h=new fI,t.g=zI(t.l,n?e:null,!t.u),0<t.O&&(t.M=new cU(Tt(t.Pa,t,t.g),t.O)),iI(t.U,t.g,"readystatechange",t.nb),e=t.I?Kx(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),kl(),fU(t.j,t.v,t.B,t.m,t.W,t.u)}L.nb=function(t){t=t.target;const e=this.M;e&&Un(t)==3?e.l():this.Pa(t)};L.Pa=function(t){try{if(t==this.g)e:{const c=Un(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>c)&&(c!=3||_g||this.g&&(this.h.h||this.g.ja()||z1(this.g)))){this.J||c!=4||e==7||(e==8||0>=f?kl(3):kl(2)),Kd(this);var n=this.g.da();this.ca=n;t:if(pI(this)){var r=z1(this.g);t="";var i=r.length,o=Un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vi(this),Da(this);var s="";break t}this.h.i=new ee.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:o&&e==i-1});r.length=0,this.h.g+=t,this.o=0,s=this.h.g}else s=this.g.ja();if(this.i=n==200,dU(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!wl(a)){var u=a;break t}}u=null}if(n=u)Go(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ig(this,n);else{this.i=!1,this.s=3,Ot(12),Vi(this),Da(this);break e}}this.S?(mI(this,c,s),_g&&this.i&&c==3&&(iI(this.U,this.V,"tick",this.mb),this.V.start())):(Go(this.j,this.m,s,null),Ig(this,s)),c==4&&Vi(this),this.i&&!this.J&&(c==4?$I(this.l,this):(this.i=!1,ou(this)))}else MU(this.g),n==400&&0<s.indexOf("Unknown SID")?(this.s=3,Ot(12)):(this.s=0,Ot(13)),Vi(this),Da(this)}}}catch{}finally{}};function pI(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function mI(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=gU(t,n),i==kg){e==4&&(t.s=4,Ot(14),r=!1),Go(t.j,t.m,null,"[Incomplete Response]");break}else if(i==dI){t.s=4,Ot(15),Go(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Go(t.j,t.m,i,null),Ig(t,i);pI(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Ot(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Zy(e),e.M=!0,Ot(11))):(Go(t.j,t.m,n,"[Invalid Chunked Response]"),Vi(t),Da(t))}L.mb=function(){if(this.g){var t=Un(this.g),e=this.g.ja();this.o<e.length&&(Kd(this),mI(this,t,e),this.i&&t!=4&&ou(this))}};function gU(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?kg:(n=Number(e.substring(n,r)),isNaN(n)?dI:(r+=1,r+n>e.length?kg:(e=e.slice(r,r+n),t.o=r+n,e)))}L.cancel=function(){this.J=!0,Vi(this)};function ou(t){t.Y=Date.now()+t.P,gI(t,t.P)}function gI(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=nu(Tt(t.lb,t),e)}function Kd(t){t.C&&(ee.clearTimeout(t.C),t.C=null)}L.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(hU(this.j,this.B),this.L!=2&&(kl(),Ot(17)),Vi(this),this.s=2,Da(this)):gI(this,this.Y-t)};function Da(t){t.l.H==0||t.J||$I(t.l,t)}function Vi(t){Kd(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,By(t.V),oI(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ig(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Cg(n.i,t))){if(!t.K&&Cg(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)$f(n),Zd(n);else break e;Jy(n),Ot(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=nu(Tt(n.ib,n),6e3));if(1>=bI(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ui(n,11)}else if((t.K||n.g==t)&&$f(n),!wl(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const f=u[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var o=r.i;o.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(o.j=o.l,o.g=new Set,o.h&&(Ky(o,o.h),o.h=null))}if(r.F){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,be(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var s=t;if(r.wa=FI(r,r.J?r.pa:null,r.Y),s.K){kI(r.i,s);var a=s,l=r.L;l&&a.setTimeout(l),a.C&&(Kd(a),ou(a)),r.g=s}else MI(r);0<n.j.length&&eh(n)}else u[0]!="stop"&&u[0]!="close"||Ui(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ui(n,7):Xy(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}kl(4)}catch{}}function vU(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Vd(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function yU(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Vd(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function vI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Vd(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=yU(t),r=vU(t),i=r.length,o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}var yI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _U(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Gi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Gi){this.h=t.h,Mf(this,t.j),this.s=t.s,this.g=t.g,jf(this,t.m),this.l=t.l;var e=t.i,n=new xl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),V1(this,n),this.o=t.o}else t&&(e=String(t).match(yI))?(this.h=!1,Mf(this,e[1]||"",!0),this.s=ga(e[2]||""),this.g=ga(e[3]||"",!0),jf(this,e[4]),this.l=ga(e[5]||"",!0),V1(this,e[6]||"",!0),this.o=ga(e[7]||"")):(this.h=!1,this.i=new xl(null,this.h))}Gi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(va(e,U1,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(va(e,U1,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(va(n,n.charAt(0)=="/"?SU:EU,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",va(n,bU)),t.join("")};function Er(t){return new Gi(t)}function Mf(t,e,n){t.j=n?ga(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function jf(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function V1(t,e,n){e instanceof xl?(t.i=e,kU(t.i,t.h)):(n||(e=va(e,TU)),t.i=new xl(e,t.h))}function be(t,e,n){t.i.set(e,n)}function Yd(t){return be(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ga(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function va(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,wU),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function wU(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var U1=/[#\/\?@]/g,EU=/[#\?:]/g,SU=/[#\?]/g,TU=/[#\?@]/g,bU=/#/g;function xl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function xi(t){t.g||(t.g=new Map,t.h=0,t.i&&_U(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=xl.prototype;L.add=function(t,e){xi(this),this.i=null,t=Fs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function _I(t,e){xi(t),e=Fs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function wI(t,e){return xi(t),e=Fs(t,e),t.g.has(e)}L.forEach=function(t,e){xi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};L.ta=function(){xi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let o=0;o<i.length;o++)n.push(e[r])}return n};L.Z=function(t){xi(this);let e=[];if(typeof t=="string")wI(this,t)&&(e=e.concat(this.g.get(Fs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return xi(this),this.i=null,t=Fs(this,t),wI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function EI(t,e,n){_I(t,e),0<n.length&&(t.i=null,t.g.set(Fs(t,e),Dy(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const o=encodeURIComponent(String(r)),s=this.Z(r);for(r=0;r<s.length;r++){var i=o;s[r]!==""&&(i+="="+encodeURIComponent(String(s[r]))),t.push(i)}}return this.i=t.join("&")};function Fs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function kU(t,e){e&&!t.j&&(xi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(_I(this,r),EI(this,i,n))},t)),t.j=e}var xU=class{constructor(t,e){this.g=t,this.map=e}};function SI(t){this.l=t||IU,ee.PerformanceNavigationTiming?(t=ee.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ee.g&&ee.g.Ka&&ee.g.Ka()&&ee.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var IU=10;function TI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function bI(t){return t.h?1:t.g?t.g.size:0}function Cg(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ky(t,e){t.g?t.g.add(e):t.h=e}function kI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}SI.prototype.cancel=function(){if(this.i=xI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function xI(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Dy(t.i)}var CU=class{stringify(t){return ee.JSON.stringify(t,void 0)}parse(t){return ee.JSON.parse(t,void 0)}};function RU(){this.g=new CU}function PU(t,e,n){const r=n||"";try{vI(t,function(i,o){let s=i;eu(i)&&(s=Fy(i)),e.push(r+o+"="+encodeURIComponent(s))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function AU(t,e){const n=new Hd;if(ee.Image){const r=new Image;r.onload=Gu(Yu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Gu(Yu,n,r,"TestLoadImage: error",!1,e),r.onabort=Gu(Yu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Gu(Yu,n,r,"TestLoadImage: timeout",!1,e),ee.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Yu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Qd(t){this.l=t.ec||null,this.j=t.ob||!1}ot(Qd,Wy);Qd.prototype.g=function(){return new Xd(this.l,this.j)};Qd.prototype.i=function(t){return function(){return t}}({});function Xd(t,e){it.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Yy,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ot(Xd,it);var Yy=0;L=Xd.prototype;L.open=function(t,e){if(this.readyState!=Yy)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Il(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ee).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,su(this)),this.readyState=Yy};L.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Il(this)),this.g&&(this.readyState=3,Il(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ee.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;II(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function II(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}L.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?su(this):Il(this),this.readyState==3&&II(this)}};L.Za=function(t){this.g&&(this.response=this.responseText=t,su(this))};L.Ya=function(t){this.g&&(this.response=t,su(this))};L.ka=function(){this.g&&su(this)};function su(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Il(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Il(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Xd.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var OU=ee.JSON.parse;function Ue(t){it.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=CI,this.L=this.M=!1}ot(Ue,it);var CI="",NU=/^https?$/i,DU=["POST","PUT"];L=Ue.prototype;L.Oa=function(t){this.M=t};L.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():bg.g(),this.C=this.u?$1(this.u):$1(bg),this.g.onreadystatechange=Tt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(o){F1(this,o);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const o of r.keys())n.set(o,r.get(o));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(o=>o.toLowerCase()=="content-type"),i=ee.FormData&&t instanceof ee.FormData,!(0<=Hx(DU,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,s]of n)this.g.setRequestHeader(o,s);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{AI(this),0<this.B&&((this.L=LU(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Tt(this.ua,this)):this.A=Hy(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(o){F1(this,o)}};function LU(t){return bs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.ua=function(){typeof Ny<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ft(this,"timeout"),this.abort(8))};function F1(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,RI(t),Jd(t)}function RI(t){t.F||(t.F=!0,ft(t,"complete"),ft(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ft(this,"complete"),ft(this,"abort"),Jd(this))};L.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Jd(this,!0)),Ue.$.N.call(this)};L.La=function(){this.s||(this.G||this.v||this.l?PI(this):this.kb())};L.kb=function(){PI(this)};function PI(t){if(t.h&&typeof Ny<"u"&&(!t.C[1]||Un(t)!=4||t.da()!=2)){if(t.v&&Un(t)==4)Hy(t.La,0,t);else if(ft(t,"readystatechange"),Un(t)==4){t.h=!1;try{const s=t.da();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=s===0){var i=String(t.I).match(yI)[1]||null;!i&&ee.self&&ee.self.location&&(i=ee.self.location.protocol.slice(0,-1)),r=!NU.test(i?i.toLowerCase():"")}n=r}if(n)ft(t,"complete"),ft(t,"success");else{t.m=6;try{var o=2<Un(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",RI(t)}}finally{Jd(t)}}}}function Jd(t,e){if(t.g){AI(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ft(t,"ready");try{n.onreadystatechange=r}catch{}}}function AI(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ee.clearTimeout(t.A),t.A=null)}L.isActive=function(){return!!this.g};function Un(t){return t.g?t.g.readyState:0}L.da=function(){try{return 2<Un(this)?this.g.status:-1}catch{return-1}};L.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),OU(e)}};function z1(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case CI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function MU(t){const e={};t=(t.g&&2<=Un(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(wl(t[r]))continue;var n=aU(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const o=e[i]||[];e[i]=o,o.push(n)}eU(e,function(r){return r.join(", ")})}L.Ia=function(){return this.m};L.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function OI(t){let e="";return My(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Qy(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=OI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):be(t,e,n))}function ia(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function NI(t){this.Ga=0,this.j=[],this.l=new Hd,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ia("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ia("baseRetryDelayMs",5e3,t),this.hb=ia("retryDelaySeedMs",1e4,t),this.eb=ia("forwardChannelMaxRetries",2,t),this.xa=ia("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new SI(t&&t.concurrentRequestLimit),this.Ja=new RU,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}L=NI.prototype;L.ra=8;L.H=1;function Xy(t){if(DI(t),t.H==3){var e=t.W++,n=Er(t.I);if(be(n,"SID",t.K),be(n,"RID",e),be(n,"TYPE","terminate"),au(t,n),e=new iu(t,t.l,e),e.L=2,e.A=Yd(Er(n)),n=!1,ee.navigator&&ee.navigator.sendBeacon)try{n=ee.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&ee.Image&&(new Image().src=e.A,n=!0),n||(e.g=zI(e.l,null),e.g.ha(e.A)),e.G=Date.now(),ou(e)}UI(t)}function Zd(t){t.g&&(Zy(t),t.g.cancel(),t.g=null)}function DI(t){Zd(t),t.u&&(ee.clearTimeout(t.u),t.u=null),$f(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ee.clearTimeout(t.m),t.m=null)}function eh(t){if(!TI(t.i)&&!t.m){t.m=!0;var e=t.Na;Sl||nI(),Tl||(Sl(),Tl=!0),zy.add(e,t),t.C=0}}function jU(t,e){return bI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=nu(Tt(t.Na,t,e),VI(t,t.C)),t.C++,!0)}L.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new iu(this,this.l,t);let o=this.s;if(this.U&&(o?(o=Kx(o),Yx(o,this.U)):o=this.U),this.o!==null||this.O||(i.I=o,o=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=LI(this,i,e),n=Er(this.I),be(n,"RID",t),be(n,"CVER",22),this.F&&be(n,"X-HTTP-Session-Id",this.F),au(this,n),o&&(this.O?e="headers="+encodeURIComponent(String(OI(o)))+"&"+e:this.o&&Qy(n,this.o,o)),Ky(this.i,i),this.bb&&be(n,"TYPE","init"),this.P?(be(n,"$req",e),be(n,"SID","null"),i.aa=!0,xg(i,n,null)):xg(i,n,e),this.H=2}}else this.H==3&&(t?B1(this,t):this.j.length==0||TI(this.i)||B1(this))};function B1(t,e){var n;e?n=e.m:n=t.W++;const r=Er(t.I);be(r,"SID",t.K),be(r,"RID",n),be(r,"AID",t.V),au(t,r),t.o&&t.s&&Qy(r,t.o,t.s),n=new iu(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=LI(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ky(t.i,n),xg(n,r,e)}function au(t,e){t.na&&My(t.na,function(n,r){be(e,r,n)}),t.h&&vI({},function(n,r){be(e,r,n)})}function LI(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Tt(t.h.Va,t.h,t):null;e:{var i=t.j;let o=-1;for(;;){const s=["count="+n];o==-1?0<n?(o=i[0].g,s.push("ofs="+o)):o=0:s.push("ofs="+o);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=o,0>u)o=Math.max(0,i[l].g-100),a=!1;else try{PU(c,s,"req"+u+"_")}catch{r&&r(c)}}if(a){r=s.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function MI(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Sl||nI(),Tl||(Sl(),Tl=!0),zy.add(e,t),t.A=0}}function Jy(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=nu(Tt(t.Ma,t),VI(t,t.A)),t.A++,!0)}L.Ma=function(){if(this.u=null,jI(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=nu(Tt(this.jb,this),t)}};L.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ot(10),Zd(this),jI(this))};function Zy(t){t.B!=null&&(ee.clearTimeout(t.B),t.B=null)}function jI(t){t.g=new iu(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Er(t.wa);be(e,"RID","rpc"),be(e,"SID",t.K),be(e,"AID",t.V),be(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&be(e,"TO",t.qa),be(e,"TYPE","xmlhttp"),au(t,e),t.o&&t.s&&Qy(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Yd(Er(e)),n.u=null,n.S=!0,hI(n,t)}L.ib=function(){this.v!=null&&(this.v=null,Zd(this),Jy(this),Ot(19))};function $f(t){t.v!=null&&(ee.clearTimeout(t.v),t.v=null)}function $I(t,e){var n=null;if(t.g==e){$f(t),Zy(t),t.g=null;var r=2}else if(Cg(t.i,e))n=e.F,kI(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=Wd(),ft(r,new lI(r,n)),eh(t)}else MI(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&jU(t,e)||r==2&&Jy(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Ui(t,5);break;case 4:Ui(t,10);break;case 3:Ui(t,6);break;default:Ui(t,2)}}}function VI(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ui(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Tt(t.pb,t);n||(n=new Gi("//www.google.com/images/cleardot.gif"),ee.location&&ee.location.protocol=="http"||Mf(n,"https"),Yd(n)),AU(n.toString(),r)}else Ot(2);t.H=0,t.h&&t.h.za(e),UI(t),DI(t)}L.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ot(2)):(this.l.info("Failed to ping google.com"),Ot(1))};function UI(t){if(t.H=0,t.ma=[],t.h){const e=xI(t.i);(e.length!=0||t.j.length!=0)&&(N1(t.ma,e),N1(t.ma,t.j),t.i.i.length=0,Dy(t.j),t.j.length=0),t.h.ya()}}function FI(t,e,n){var r=n instanceof Gi?Er(n):new Gi(n);if(r.g!="")e&&(r.g=e+"."+r.g),jf(r,r.m);else{var i=ee.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var o=new Gi(null);r&&Mf(o,r),e&&(o.g=e),i&&jf(o,i),n&&(o.l=n),r=o}return n=t.F,e=t.Da,n&&e&&be(r,n,e),be(r,"VER",t.ra),au(t,r),r}function zI(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Ue(new Qd({ob:n})):new Ue(t.va),e.Oa(t.J),e}L.isActive=function(){return!!this.h&&this.h.isActive(this)};function BI(){}L=BI.prototype;L.Ba=function(){};L.Aa=function(){};L.za=function(){};L.ya=function(){};L.isActive=function(){return!0};L.Va=function(){};function Vf(){if(bs&&!(10<=Number(Q5)))throw Error("Environmental error: no available transport.")}Vf.prototype.g=function(t,e){return new Yt(t,e)};function Yt(t,e){it.call(this),this.g=new NI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!wl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!wl(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new zs(this)}ot(Yt,it);Yt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ot(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=FI(t,null,t.Y),eh(t)};Yt.prototype.close=function(){Xy(this.g)};Yt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Fy(t),t=n);e.j.push(new xU(e.fb++,t)),e.H==3&&eh(e)};Yt.prototype.N=function(){this.g.h=null,delete this.j,Xy(this.g),delete this.g,Yt.$.N.call(this)};function HI(t){qy.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ot(HI,qy);function WI(){Gy.call(this),this.status=1}ot(WI,Gy);function zs(t){this.g=t}ot(zs,BI);zs.prototype.Ba=function(){ft(this.g,"a")};zs.prototype.Aa=function(t){ft(this.g,new HI(t))};zs.prototype.za=function(t){ft(this.g,new WI)};zs.prototype.ya=function(){ft(this.g,"b")};function $U(){this.blockSize=-1}function Rn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ot(Rn,$U);Rn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function kp(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var o=t.g[3],s=e+(o^n&(i^o))+r[0]+3614090360&4294967295;e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[1]+3905402710&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[2]+606105819&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[3]+3250441966&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[4]+4118548399&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[5]+1200080426&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[6]+2821735955&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[7]+4249261313&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[8]+1770035416&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[9]+2336552879&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[10]+4294925233&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[11]+2304563134&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[12]+1804603682&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[13]+4254626195&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[14]+2792965006&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[15]+1236535329&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(i^o&(n^i))+r[1]+4129170786&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[6]+3225465664&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[11]+643717713&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[0]+3921069994&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[5]+3593408605&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[10]+38016083&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[15]+3634488961&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[4]+3889429448&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[9]+568446438&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[14]+3275163606&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[3]+4107603335&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[8]+1163531501&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[13]+2850285829&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[2]+4243563512&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[7]+1735328473&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[12]+2368359562&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(n^i^o)+r[5]+4294588738&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[8]+2272392833&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[11]+1839030562&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[14]+4259657740&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[1]+2763975236&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[4]+1272893353&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[7]+4139469664&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[10]+3200236656&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[13]+681279174&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[0]+3936430074&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[3]+3572445317&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[6]+76029189&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[9]+3654602809&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[12]+3873151461&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[15]+530742520&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[2]+3299628645&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(i^(n|~o))+r[0]+4096336452&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[7]+1126891415&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[14]+2878612391&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[5]+4237533241&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[12]+1700485571&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[3]+2399980690&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[10]+4293915773&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[1]+2240044497&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[8]+1873313359&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[15]+4264355552&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[6]+2734768916&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[13]+1309151649&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[4]+4149444226&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[11]+3174756917&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[2]+718787259&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+o&4294967295}Rn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,o=0;o<e;){if(i==0)for(;o<=n;)kp(this,t,o),o+=this.blockSize;if(typeof t=="string"){for(;o<e;)if(r[i++]=t.charCodeAt(o++),i==this.blockSize){kp(this,r),i=0;break}}else for(;o<e;)if(r[i++]=t[o++],i==this.blockSize){kp(this,r),i=0;break}}this.h=i,this.i+=e};Rn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ye(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var o=t[i]|0;r&&o==e||(n[i]=o,r=!1)}this.g=n}var VU={};function e0(t){return-128<=t&&128>t?G5(t,function(e){return new ye([e|0],0>e?-1:0)}):new ye([t|0],0>t?-1:0)}function Fn(t){if(isNaN(t)||!isFinite(t))return os;if(0>t)return lt(Fn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Rg;return new ye(e,0)}function qI(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return lt(qI(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Fn(Math.pow(e,8)),r=os,i=0;i<t.length;i+=8){var o=Math.min(8,t.length-i),s=parseInt(t.substring(i,i+o),e);8>o?(o=Fn(Math.pow(e,o)),r=r.R(o).add(Fn(s))):(r=r.R(n),r=r.add(Fn(s)))}return r}var Rg=4294967296,os=e0(0),Pg=e0(1),H1=e0(16777216);L=ye.prototype;L.ea=function(){if(on(this))return-lt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Rg+r)*e,e*=Rg}return t};L.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(ar(this))return"0";if(on(this))return"-"+lt(this).toString(t);for(var e=Fn(Math.pow(t,6)),n=this,r="";;){var i=Ff(n,e).g;n=Uf(n,i.R(e));var o=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,ar(n))return o+r;for(;6>o.length;)o="0"+o;r=o+r}};L.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function ar(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function on(t){return t.h==-1}L.X=function(t){return t=Uf(this,t),on(t)?-1:ar(t)?0:1};function lt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ye(n,~t.h).add(Pg)}L.abs=function(){return on(this)?lt(this):this};L.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var o=r+(this.D(i)&65535)+(t.D(i)&65535),s=(o>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=s>>>16,o&=65535,s&=65535,n[i]=s<<16|o}return new ye(n,n[n.length-1]&-2147483648?-1:0)};function Uf(t,e){return t.add(lt(e))}L.R=function(t){if(ar(this)||ar(t))return os;if(on(this))return on(t)?lt(this).R(lt(t)):lt(lt(this).R(t));if(on(t))return lt(this.R(lt(t)));if(0>this.X(H1)&&0>t.X(H1))return Fn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var o=this.D(r)>>>16,s=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=s*l,Qu(n,2*r+2*i),n[2*r+2*i+1]+=o*l,Qu(n,2*r+2*i+1),n[2*r+2*i+1]+=s*a,Qu(n,2*r+2*i+1),n[2*r+2*i+2]+=o*a,Qu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ye(n,0)};function Qu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function oa(t,e){this.g=t,this.h=e}function Ff(t,e){if(ar(e))throw Error("division by zero");if(ar(t))return new oa(os,os);if(on(t))return e=Ff(lt(t),e),new oa(lt(e.g),lt(e.h));if(on(e))return e=Ff(t,lt(e)),new oa(lt(e.g),e.h);if(30<t.g.length){if(on(t)||on(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Pg,r=e;0>=r.X(t);)n=W1(n),r=W1(r);var i=ko(n,1),o=ko(r,1);for(r=ko(r,2),n=ko(n,2);!ar(r);){var s=o.add(r);0>=s.X(t)&&(i=i.add(n),o=s),r=ko(r,1),n=ko(n,1)}return e=Uf(t,i.R(e)),new oa(i,e)}for(i=os;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),o=Fn(n),s=o.R(e);on(s)||0<s.X(t);)n-=r,o=Fn(n),s=o.R(e);ar(o)&&(o=Pg),i=i.add(o),t=Uf(t,s)}return new oa(i,t)}L.gb=function(t){return Ff(this,t).h};L.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ye(n,this.h&t.h)};L.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ye(n,this.h|t.h)};L.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ye(n,this.h^t.h)};function W1(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ye(n,t.h)}function ko(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],o=0;o<r;o++)i[o]=0<e?t.D(o+n)>>>e|t.D(o+n+1)<<32-e:t.D(o+n);return new ye(i,t.h)}Vf.prototype.createWebChannel=Vf.prototype.g;Yt.prototype.send=Yt.prototype.u;Yt.prototype.open=Yt.prototype.m;Yt.prototype.close=Yt.prototype.close;qd.NO_ERROR=0;qd.TIMEOUT=8;qd.HTTP_ERROR=6;uI.COMPLETE="complete";cI.EventType=ru;ru.OPEN="a";ru.CLOSE="b";ru.ERROR="c";ru.MESSAGE="d";it.prototype.listen=it.prototype.O;Ue.prototype.listenOnce=Ue.prototype.P;Ue.prototype.getLastError=Ue.prototype.Sa;Ue.prototype.getLastErrorCode=Ue.prototype.Ia;Ue.prototype.getStatus=Ue.prototype.da;Ue.prototype.getResponseJson=Ue.prototype.Wa;Ue.prototype.getResponseText=Ue.prototype.ja;Ue.prototype.send=Ue.prototype.ha;Ue.prototype.setWithCredentials=Ue.prototype.Oa;Rn.prototype.digest=Rn.prototype.l;Rn.prototype.reset=Rn.prototype.reset;Rn.prototype.update=Rn.prototype.j;ye.prototype.add=ye.prototype.add;ye.prototype.multiply=ye.prototype.R;ye.prototype.modulo=ye.prototype.gb;ye.prototype.compare=ye.prototype.X;ye.prototype.toNumber=ye.prototype.ea;ye.prototype.toString=ye.prototype.toString;ye.prototype.getBits=ye.prototype.D;ye.fromNumber=Fn;ye.fromString=qI;var UU=function(){return new Vf},FU=function(){return Wd()},xp=qd,zU=uI,BU=vo,q1={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Xu=cI,HU=Ue,WU=Rn,ss=ye;const G1="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bs="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=new yd("@firebase/firestore");function sa(){return so.logLevel}function z(t,...e){if(so.logLevel<=ce.DEBUG){const n=e.map(t0);so.debug(`Firestore (${Bs}): ${t}`,...n)}}function Sr(t,...e){if(so.logLevel<=ce.ERROR){const n=e.map(t0);so.error(`Firestore (${Bs}): ${t}`,...n)}}function ks(t,...e){if(so.logLevel<=ce.WARN){const n=e.map(t0);so.warn(`Firestore (${Bs}): ${t}`,...n)}}function t0(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${Bs}) INTERNAL ASSERTION FAILED: `+t;throw Sr(e),new Error(e)}function we(t,e){t||Z()}function re(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qU{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class GU{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class KU{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let o=new li;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new li,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const l=o;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new li)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string"),new GI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string"),new yt(e)}}class YU{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class QU{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new YU(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class XU{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class JU{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=o=>{o.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,z("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(we(typeof n.token=="string"),this.R=n.token,new XU(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZU(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=ZU(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function me(t,e){return t<e?-1:t>e?1:0}function xs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ne(e)}static min(){return new ne(new Xe(0,0))}static max(){return new ne(new Xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Cl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Cl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Pe extends Cl{construct(e,n,r){return new Pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Pe(n)}static emptyPath(){return new Pe([])}}const eF=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Cl{construct(e,n,r){return new ut(e,n,r)}static isValidIdentifier(e){return eF.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new G(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new G(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new G(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new G(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Pe.fromString(e))}static fromName(e){return new Y(Pe.fromString(e).popFirst(5))}static empty(){return new Y(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Pe(e.slice()))}}function tF(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ne.fromTimestamp(r===1e9?new Xe(n+1,0):new Xe(n,r));return new vi(i,Y.empty(),e)}function nF(t){return new vi(t.readTime,t.key,-1)}class vi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new vi(ne.min(),Y.empty(),-1)}static max(){return new vi(ne.max(),Y.empty(),-1)}}function rF(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iF="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oF{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lu(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==iF)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,r)=>{n(e)})}static reject(e){return new P((n,r)=>{r(e)})}static waitFor(e){return new P((n,r)=>{let i=0,o=0,s=!1;e.forEach(a=>{++i,a.next(()=>{++o,s&&o===i&&n()},l=>r(l))}),s=!0,o===i&&n()})}static or(e){let n=P.resolve(!1);for(const r of e)n=n.next(i=>i?P.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new P((r,i)=>{const o=e.length,s=new Array(o);let a=0;for(let l=0;l<o;l++){const u=l;n(e[u]).next(c=>{s[u]=c,++a,a===o&&r(s)},c=>i(c))}})}static doWhile(e,n){return new P((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function uu(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}n0._e=-1;function th(t){return t==null}function zf(t){return t===0&&1/t==-1/0}function sF(t){return typeof t=="number"&&Number.isInteger(t)&&!zf(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Hs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function YI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ju(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ju(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ju(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ju(this.root,e,this.comparator,!0)}}class Ju{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??at.RED,this.left=i??at.EMPTY,this.right=o??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new at(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,i,o){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Y1(this.data.getIterator())}getIteratorFrom(e){return new Y1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof dt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new dt(this.comparator);return n.data=e,n}}class Y1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new En([])}unionWith(e){let n=new dt(ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new En(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new QI("Invalid base64 string: "+o):o}}(e);return new It(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new It(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const aF=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yi(t){if(we(!!t),typeof t=="string"){let e=0;const n=aF.exec(t);if(we(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ao(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function i0(t){const e=t.mapValue.fields.__previous_value__;return r0(e)?i0(e):e}function Rl(t){const e=yi(t.mapValue.fields.__local_write_time__.timestampValue);return new Xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lF{constructor(e,n,r,i,o,s,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Pl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Pl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Pl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function lo(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?r0(t)?4:uF(t)?9007199254740991:10:Z()}function Qn(t,e){if(t===e)return!0;const n=lo(t);if(n!==lo(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Rl(t).isEqual(Rl(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=yi(i.timestampValue),a=yi(o.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return ao(i.bytesValue).isEqual(ao(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return Be(i.geoPointValue.latitude)===Be(o.geoPointValue.latitude)&&Be(i.geoPointValue.longitude)===Be(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Be(i.integerValue)===Be(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=Be(i.doubleValue),a=Be(o.doubleValue);return s===a?zf(s)===zf(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return xs(t.arrayValue.values||[],e.arrayValue.values||[],Qn);case 10:return function(i,o){const s=i.mapValue.fields||{},a=o.mapValue.fields||{};if(K1(s)!==K1(a))return!1;for(const l in s)if(s.hasOwnProperty(l)&&(a[l]===void 0||!Qn(s[l],a[l])))return!1;return!0}(t,e);default:return Z()}}function Al(t,e){return(t.values||[]).find(n=>Qn(n,e))!==void 0}function Is(t,e){if(t===e)return 0;const n=lo(t),r=lo(e);if(n!==r)return me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(o,s){const a=Be(o.integerValue||o.doubleValue),l=Be(s.integerValue||s.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Q1(t.timestampValue,e.timestampValue);case 4:return Q1(Rl(t),Rl(e));case 5:return me(t.stringValue,e.stringValue);case 6:return function(o,s){const a=ao(o),l=ao(s);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const a=o.split("/"),l=s.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=me(a[u],l[u]);if(c!==0)return c}return me(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const a=me(Be(o.latitude),Be(s.latitude));return a!==0?a:me(Be(o.longitude),Be(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(o,s){const a=o.values||[],l=s.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Is(a[u],l[u]);if(c)return c}return me(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(o,s){if(o===Zu.mapValue&&s===Zu.mapValue)return 0;if(o===Zu.mapValue)return 1;if(s===Zu.mapValue)return-1;const a=o.fields||{},l=Object.keys(a),u=s.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let f=0;f<l.length&&f<c.length;++f){const d=me(l[f],c[f]);if(d!==0)return d;const p=Is(a[l[f]],u[c[f]]);if(p!==0)return p}return me(l.length,c.length)}(t.mapValue,e.mapValue);default:throw Z()}}function Q1(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=yi(t),r=yi(e),i=me(n.seconds,r.seconds);return i!==0?i:me(n.nanos,r.nanos)}function Cs(t){return Ag(t)}function Ag(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=yi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ao(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=Ag(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${Ag(n.fields[s])}`;return i+"}"}(t.mapValue):Z()}function Og(t){return!!t&&"integerValue"in t}function o0(t){return!!t&&"arrayValue"in t}function X1(t){return!!t&&"nullValue"in t}function J1(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ac(t){return!!t&&"mapValue"in t}function La(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Hs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=La(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=La(t.arrayValue.values[n]);return e}return Object.assign({},t)}function uF(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.value=e}static empty(){return new sn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ac(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=La(n)}setAll(e){let n=ut.emptyPath(),r={},i=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=La(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());Ac(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Qn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ac(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Hs(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new sn(La(this.value))}}function XI(t){const e=[];return Hs(t.fields,(n,r)=>{const i=new ut([n]);if(Ac(r)){const o=XI(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new En(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n,r,i,o,s,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(e){return new wt(e,0,ne.min(),ne.min(),ne.min(),sn.empty(),0)}static newFoundDocument(e,n,r,i){return new wt(e,1,n,ne.min(),r,i,0)}static newNoDocument(e,n){return new wt(e,2,n,ne.min(),ne.min(),sn.empty(),0)}static newUnknownDocument(e,n){return new wt(e,3,n,ne.min(),ne.min(),sn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=sn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e,n){this.position=e,this.inclusive=n}}function Z1(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=Y.comparator(Y.fromName(s.referenceValue),n.key):r=Is(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function eE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Qn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,n="asc"){this.field=e,this.dir=n}}function cF(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{}class Ye extends JI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new dF(e,n,r):n==="array-contains"?new mF(e,r):n==="in"?new gF(e,r):n==="not-in"?new vF(e,r):n==="array-contains-any"?new yF(e,r):new Ye(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new hF(e,r):new pF(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Is(n,this.value)):n!==null&&lo(this.value)===lo(n)&&this.matchesComparison(Is(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xn extends JI{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Xn(e,n)}matches(e){return ZI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function ZI(t){return t.op==="and"}function eC(t){return fF(t)&&ZI(t)}function fF(t){for(const e of t.filters)if(e instanceof Xn)return!1;return!0}function Ng(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+Cs(t.value);if(eC(t))return t.filters.map(e=>Ng(e)).join(",");{const e=t.filters.map(n=>Ng(n)).join(",");return`${t.op}(${e})`}}function tC(t,e){return t instanceof Ye?function(r,i){return i instanceof Ye&&r.op===i.op&&r.field.isEqual(i.field)&&Qn(r.value,i.value)}(t,e):t instanceof Xn?function(r,i){return i instanceof Xn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,a)=>o&&tC(s,i.filters[a]),!0):!1}(t,e):void Z()}function nC(t){return t instanceof Ye?function(n){return`${n.field.canonicalString()} ${n.op} ${Cs(n.value)}`}(t):t instanceof Xn?function(n){return n.op.toString()+" {"+n.getFilters().map(nC).join(" ,")+"}"}(t):"Filter"}class dF extends Ye{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class hF extends Ye{constructor(e,n){super(e,"in",n),this.keys=rC("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class pF extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=rC("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function rC(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class mF extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return o0(n)&&Al(n.arrayValue,this.value)}}class gF extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Al(this.value.arrayValue,n)}}class vF extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Al(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Al(this.value.arrayValue,n)}}class yF extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!o0(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Al(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _F{constructor(e,n=null,r=[],i=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.ce=null}}function tE(t,e=null,n=[],r=[],i=null,o=null,s=null){return new _F(t,e,n,r,i,o,s)}function s0(t){const e=re(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ng(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),th(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Cs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Cs(r)).join(",")),e.ce=n}return e.ce}function a0(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!cF(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!tC(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!eE(t.startAt,e.startAt)&&eE(t.endAt,e.endAt)}function Dg(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,n=null,r=[],i=[],o=null,s="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function wF(t,e,n,r,i,o,s,a){return new nh(t,e,n,r,i,o,s,a)}function iC(t){return new nh(t)}function nE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function EF(t){return t.collectionGroup!==null}function Ma(t){const e=re(t);if(e.le===null){e.le=[];const n=new Set;for(const o of e.explicitOrderBy)e.le.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new dt(ut.comparator);return s.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.le.push(new Hf(o,r))}),n.has(ut.keyField().canonicalString())||e.le.push(new Hf(ut.keyField(),r))}return e.le}function qn(t){const e=re(t);return e.he||(e.he=SF(e,Ma(t))),e.he}function SF(t,e){if(t.limitType==="F")return tE(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Hf(i.field,o)});const n=t.endAt?new Bf(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Bf(t.startAt.position,t.startAt.inclusive):null;return tE(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Lg(t,e,n){return new nh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function rh(t,e){return a0(qn(t),qn(e))&&t.limitType===e.limitType}function oC(t){return`${s0(qn(t))}|lt:${t.limitType}`}function Io(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>nC(i)).join(", ")}]`),th(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Cs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Cs(i)).join(",")),`Target(${r})`}(qn(t))}; limitType=${t.limitType})`}function ih(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):Y.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of Ma(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,a,l){const u=Z1(s,a,l);return s.inclusive?u<=0:u<0}(r.startAt,Ma(r),i)||r.endAt&&!function(s,a,l){const u=Z1(s,a,l);return s.inclusive?u>=0:u>0}(r.endAt,Ma(r),i))}(t,e)}function TF(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function sC(t){return(e,n)=>{let r=!1;for(const i of Ma(t)){const o=bF(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function bF(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(o,s,a){const l=s.data.field(o),u=a.data.field(o);return l!==null&&u!==null?Is(l,u):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Hs(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return YI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kF=new Me(Y.comparator);function Tr(){return kF}const aC=new Me(Y.comparator);function ya(...t){let e=aC;for(const n of t)e=e.insert(n.key,n);return e}function lC(t){let e=aC;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Fi(){return ja()}function uC(){return ja()}function ja(){return new Ws(t=>t.toString(),(t,e)=>t.isEqual(e))}const xF=new Me(Y.comparator),IF=new dt(Y.comparator);function fe(...t){let e=IF;for(const n of t)e=e.add(n);return e}const CF=new dt(me);function RF(){return CF}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zf(e)?"-0":e}}function fC(t){return{integerValue:""+t}}function PF(t,e){return sF(e)?fC(e):cC(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(){this._=void 0}}function AF(t,e,n){return t instanceof Wf?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&r0(o)&&(o=i0(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof Ol?hC(t,e):t instanceof Nl?pC(t,e):function(i,o){const s=dC(i,o),a=rE(s)+rE(i.Ie);return Og(s)&&Og(i.Ie)?fC(a):cC(i.serializer,a)}(t,e)}function OF(t,e,n){return t instanceof Ol?hC(t,e):t instanceof Nl?pC(t,e):n}function dC(t,e){return t instanceof qf?function(r){return Og(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Wf extends oh{}class Ol extends oh{constructor(e){super(),this.elements=e}}function hC(t,e){const n=mC(e);for(const r of t.elements)n.some(i=>Qn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Nl extends oh{constructor(e){super(),this.elements=e}}function pC(t,e){let n=mC(e);for(const r of t.elements)n=n.filter(i=>!Qn(i,r));return{arrayValue:{values:n}}}class qf extends oh{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function rE(t){return Be(t.integerValue||t.doubleValue)}function mC(t){return o0(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function NF(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ol&&i instanceof Ol||r instanceof Nl&&i instanceof Nl?xs(r.elements,i.elements,Qn):r instanceof qf&&i instanceof qf?Qn(r.Ie,i.Ie):r instanceof Wf&&i instanceof Wf}(t.transform,e.transform)}class DF{constructor(e,n){this.version=e,this.transformResults=n}}class cr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new cr}static exists(e){return new cr(void 0,e)}static updateTime(e){return new cr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Oc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class sh{}function gC(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new yC(t.key,cr.none()):new cu(t.key,t.data,cr.none());{const n=t.data,r=sn.empty();let i=new dt(ut.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new yo(t.key,r,new En(i.toArray()),cr.none())}}function LF(t,e,n){t instanceof cu?function(i,o,s){const a=i.value.clone(),l=oE(i.fieldTransforms,o,s.transformResults);a.setAll(l),o.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):t instanceof yo?function(i,o,s){if(!Oc(i.precondition,o))return void o.convertToUnknownDocument(s.version);const a=oE(i.fieldTransforms,o,s.transformResults),l=o.data;l.setAll(vC(i)),l.setAll(a),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function $a(t,e,n,r){return t instanceof cu?function(o,s,a,l){if(!Oc(o.precondition,s))return a;const u=o.value.clone(),c=sE(o.fieldTransforms,l,s);return u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof yo?function(o,s,a,l){if(!Oc(o.precondition,s))return a;const u=sE(o.fieldTransforms,l,s),c=s.data;return c.setAll(vC(o)),c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),a===null?null:a.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(o,s,a){return Oc(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(t,e,n)}function MF(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=dC(r.transform,i||null);o!=null&&(n===null&&(n=sn.empty()),n.set(r.field,o))}return n||null}function iE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&xs(r,i,(o,s)=>NF(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class cu extends sh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class yo extends sh{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function vC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function oE(t,e,n){const r=new Map;we(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,OF(s,a,n[i]))}return r}function sE(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,AF(o,s,e))}return r}class yC extends sh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jF extends sh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $F{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&LF(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=$a(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=$a(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=uC();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(i.key)?null:a;const l=gC(s,a);l!==null&&r.set(i.key,l),s.isValidDocument()||s.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&xs(this.mutations,e.mutations,(n,r)=>iE(n,r))&&xs(this.baseMutations,e.baseMutations,(n,r)=>iE(n,r))}}class l0{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){we(e.mutations.length===r.length);let i=function(){return xF}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new l0(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VF{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UF{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,he;function FF(t){switch(t){default:return Z();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function _C(t){if(t===void 0)return Sr("GRPC error has no .code"),O.UNKNOWN;switch(t){case ze.OK:return O.OK;case ze.CANCELLED:return O.CANCELLED;case ze.UNKNOWN:return O.UNKNOWN;case ze.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case ze.INTERNAL:return O.INTERNAL;case ze.UNAVAILABLE:return O.UNAVAILABLE;case ze.UNAUTHENTICATED:return O.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case ze.NOT_FOUND:return O.NOT_FOUND;case ze.ALREADY_EXISTS:return O.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return O.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case ze.ABORTED:return O.ABORTED;case ze.OUT_OF_RANGE:return O.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return O.UNIMPLEMENTED;case ze.DATA_LOSS:return O.DATA_LOSS;default:return Z()}}(he=ze||(ze={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zF(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BF=new ss([4294967295,4294967295],0);function aE(t){const e=zF().encode(t),n=new WU;return n.update(e),new Uint8Array(n.digest())}function lE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new ss([n,r],0),new ss([i,o],0)]}class u0{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new _a(`Invalid padding: ${n}`);if(r<0)throw new _a(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new _a(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new _a(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=ss.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(ss.fromNumber(r)));return i.compare(BF)===1&&(i=new ss([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=aE(e),[r,i]=lE(n);for(let o=0;o<this.hashCount;o++){const s=this.de(r,i,o);if(!this.Ae(s))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new u0(o,i,n);return r.forEach(a=>s.insert(a)),s}insert(e){if(this.Te===0)return;const n=aE(e),[r,i]=lE(n);for(let o=0;o<this.hashCount;o++){const s=this.de(r,i,o);this.Re(s)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class _a extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,fu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ah(ne.min(),i,new Me(me),Tr(),fe())}}class fu{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new fu(r,n,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class wC{constructor(e,n){this.targetId=e,this.fe=n}}class EC{constructor(e,n,r=It.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class uE{constructor(){this.ge=0,this.pe=fE(),this.ye=It.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=fe(),n=fe(),r=fe();return this.pe.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Z()}}),new fu(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=fE()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,we(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class HF{constructor(e){this.Le=e,this.ke=new Map,this.qe=Tr(),this.Qe=cE(),this.Ke=new Me(me)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const o=i.target;if(Dg(o))if(r===0){const s=new Y(o.path);this.We(n,s,wt.newNoDocument(s,ne.min()))}else we(r===1);else{const s=this.Ze(n);if(s!==r){const a=this.Xe(e),l=a?this.et(a,e,s):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let s,a;try{s=ao(r).toUint8Array()}catch(l){if(l instanceof QI)return ks("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new u0(s,i,o)}catch(l){return ks(l instanceof _a?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const s=this.Le.nt(),a=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(a)||(this.We(n,o,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((o,s)=>{const a=this.Ye(s);if(a){if(o.current&&Dg(a.target)){const l=new Y(a.target.path);this.qe.get(l)!==null||this.st(s,l)||this.We(s,l,wt.newNoDocument(l,e))}o.De&&(n.set(s,o.ve()),o.Fe())}});let r=fe();this.Qe.forEach((o,s)=>{let a=!0;s.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(o))}),this.qe.forEach((o,s)=>s.setReadTime(e));const i=new ah(e,n,this.Ke,this.qe,r);return this.qe=Tr(),this.Qe=cE(),this.Ke=new Me(me),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new uE,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new dt(me),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new uE),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function cE(){return new Me(Y.comparator)}function fE(){return new Me(Y.comparator)}const WF=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),qF=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),GF=(()=>({and:"AND",or:"OR"}))();class KF{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Mg(t,e){return t.useProto3Json||th(e)?e:{value:e}}function Gf(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function SC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function YF(t,e){return Gf(t,e.toTimestamp())}function Gn(t){return we(!!t),ne.fromTimestamp(function(n){const r=yi(n);return new Xe(r.seconds,r.nanos)}(t))}function c0(t,e){return function(r){return new Pe(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function TC(t){const e=Pe.fromString(t);return we(IC(e)),e}function jg(t,e){return c0(t.databaseId,e.path)}function Ip(t,e){const n=TC(e);if(n.get(1)!==t.databaseId.projectId)throw new G(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(bC(n))}function $g(t,e){return c0(t.databaseId,e)}function QF(t){const e=TC(t);return e.length===4?Pe.emptyPath():bC(e)}function Vg(t){return new Pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bC(t){return we(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function dE(t,e,n){return{name:jg(t,e),fields:n.value.mapValue.fields}}function XF(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(u,c){return u.useProto3Json?(we(c===void 0||typeof c=="string"),It.fromBase64String(c||"")):(we(c===void 0||c instanceof Uint8Array),It.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(u){const c=u.code===void 0?O.UNKNOWN:_C(u.code);return new G(c,u.message||"")}(s);n=new EC(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ip(t,r.document.name),o=Gn(r.document.updateTime),s=r.document.createTime?Gn(r.document.createTime):ne.min(),a=new sn({mapValue:{fields:r.document.fields}}),l=wt.newFoundDocument(i,o,s,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Nc(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ip(t,r.document),o=r.readTime?Gn(r.readTime):ne.min(),s=wt.newNoDocument(i,o),a=r.removedTargetIds||[];n=new Nc([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ip(t,r.document),o=r.removedTargetIds||[];n=new Nc([],o,i,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,s=new UF(i,o),a=r.targetId;n=new wC(a,s)}}return n}function JF(t,e){let n;if(e instanceof cu)n={update:dE(t,e.key,e.value)};else if(e instanceof yC)n={delete:jg(t,e.key)};else if(e instanceof yo)n={update:dE(t,e.key,e.data),updateMask:a6(e.fieldMask)};else{if(!(e instanceof jF))return Z();n={verify:jg(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const a=s.transform;if(a instanceof Wf)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ol)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Nl)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof qf)return{fieldPath:s.field.canonicalString(),increment:a.Ie};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:YF(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:Z()}(t,e.precondition)),n}function ZF(t,e){return t&&t.length>0?(we(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?Gn(i.updateTime):Gn(o);return s.isEqual(ne.min())&&(s=Gn(o)),new DF(s,i.transformResults||[])}(n,e))):[]}function e6(t,e){return{documents:[$g(t,e.path)]}}function t6(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=$g(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=$g(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return xC(Xn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:Co(f.field),direction:i6(f.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const s=Mg(t,e.limit);return s!==null&&(n.structuredQuery.limit=s),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function n6(t){let e=QF(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){we(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let o=[];n.where&&(o=function(f){const d=kC(f);return d instanceof Xn&&eC(d)?d.getFilters():[d]}(n.where));let s=[];n.orderBy&&(s=function(f){return f.map(d=>function(y){return new Hf(Ro(y.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(f){let d;return d=typeof f=="object"?f.value:f,th(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(f){const d=!!f.before,p=f.values||[];return new Bf(p,d)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const d=!f.before,p=f.values||[];return new Bf(p,d)}(n.endAt)),wF(e,i,s,o,a,"F",l,u)}function r6(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function kC(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ro(n.unaryFilter.field);return Ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ro(n.unaryFilter.field);return Ye.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ro(n.unaryFilter.field);return Ye.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ro(n.unaryFilter.field);return Ye.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return Ye.create(Ro(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Xn.create(n.compositeFilter.filters.map(r=>kC(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function i6(t){return WF[t]}function o6(t){return qF[t]}function s6(t){return GF[t]}function Co(t){return{fieldPath:t.canonicalString()}}function Ro(t){return ut.fromServerFormat(t.fieldPath)}function xC(t){return t instanceof Ye?function(n){if(n.op==="=="){if(J1(n.value))return{unaryFilter:{field:Co(n.field),op:"IS_NAN"}};if(X1(n.value))return{unaryFilter:{field:Co(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(J1(n.value))return{unaryFilter:{field:Co(n.field),op:"IS_NOT_NAN"}};if(X1(n.value))return{unaryFilter:{field:Co(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Co(n.field),op:o6(n.op),value:n.value}}}(t):t instanceof Xn?function(n){const r=n.getFilters().map(i=>xC(i));return r.length===1?r[0]:{compositeFilter:{op:s6(n.op),filters:r}}}(t):Z()}function a6(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function IC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n,r,i,o=ne.min(),s=ne.min(),a=It.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Yr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l6{constructor(e){this.ut=e}}function u6(t){const e=n6({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Lg(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c6{constructor(){this.on=new f6}addToCollectionParentIndex(e,n){return this.on.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(vi.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(vi.min())}updateCollectionGroup(e,n,r){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}class f6{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new dt(Pe.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new dt(Pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Rs(0)}static Nn(){return new Rs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d6{constructor(){this.changes=new Ws(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,wt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?P.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h6{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p6{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&$a(r.mutation,i,En.empty(),Xe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=fe()){const i=Fi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=ya();return o.forEach((a,l)=>{s=s.insert(a,l.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=Fi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,fe()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(e,n,r,i){let o=Tr();const s=ja(),a=function(){return ja()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof yo)?o=o.insert(u.key,u):c!==void 0?(s.set(u.key,c.mutation.getFieldMask()),$a(c.mutation,u,c.mutation.getFieldMask(),Xe.now())):s.set(u.key,En.empty())}),this.recalculateAndSaveOverlays(e,o).next(l=>(l.forEach((u,c)=>s.set(u,c)),n.forEach((u,c)=>{var f;return a.set(u,new h6(c,(f=s.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ja();let i=new Me((s,a)=>s-a),o=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const a of s)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||En.empty();c=a.applyToLocalView(u,c),r.set(l,c);const f=(i.get(a.batchId)||fe()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,f=uC();c.forEach(d=>{if(!o.has(d)){const p=gC(n.get(d),r.get(d));p!==null&&f.set(d,p),o=o.add(d)}}),s.push(this.documentOverlayCache.saveOverlays(e,u,f))}return P.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return Y.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):EF(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):P.resolve(Fi());let a=-1,l=o;return s.next(u=>P.forEach(u,(c,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),o.get(c)?P.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,o)).next(()=>this.computeViews(e,l,u,fe())).next(c=>({batchId:a,changes:lC(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let i=ya();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=ya();return this.indexManager.getCollectionParents(e,o).next(a=>P.forEach(a,l=>{const u=function(f,d){return new nh(d,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(o));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((f,d)=>{s=s.insert(f,d)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((l,u)=>{const c=u.getKey();s.get(c)===null&&(s=s.insert(c,wt.newInvalidDocument(c)))});let a=ya();return s.forEach((l,u)=>{const c=o.get(l);c!==void 0&&$a(c.mutation,u,En.empty(),Xe.now()),ih(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m6{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return P.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Gn(i.createTime)}}(n)),P.resolve()}getNamedQuery(e,n){return P.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:u6(i.bundledQuery),readTime:Gn(i.readTime)}}(n)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g6{constructor(){this.overlays=new Me(Y.comparator),this.lr=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fi();return P.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.lt(e,n,o)}),P.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.lr.delete(r)),P.resolve()}getOverlaysForCollection(e,n,r){const i=Fi(),o=n.length+1,s=new Y(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===o&&l.largestBatchId>r&&i.set(l.getKey(),l)}return P.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new Me((u,c)=>u-c);const s=this.overlays.getIterator();for(;s.hasNext();){const u=s.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=o.get(u.largestBatchId);c===null&&(c=Fi(),o=o.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Fi(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return P.resolve(a)}lt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new VF(n,r));let o=this.lr.get(n);o===void 0&&(o=fe(),this.lr.set(n,o)),this.lr.set(n,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(){this.hr=new dt(et.Pr),this.Ir=new dt(et.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new et(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new et(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new Y(new Pe([])),r=new et(n,e),i=new et(n,e+1),o=[];return this.Ir.forEachInRange([r,i],s=>{this.dr(s),o.push(s.key)}),o}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new Y(new Pe([])),r=new et(n,e),i=new et(n,e+1);let o=fe();return this.Ir.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new et(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class et{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return Y.comparator(e.key,n.key)||me(e.gr,n.gr)}static Tr(e,n){return me(e.gr,n.gr)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v6{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new dt(et.Pr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new $F(o,n,r,i);this.mutationQueue.push(s);for(const a of i)this.yr=this.yr.add(new et(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(s)}lookupMutationBatch(e,n){return P.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),o=i<0?0:i;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new et(n,0),i=new et(n,Number.POSITIVE_INFINITY),o=[];return this.yr.forEachInRange([r,i],s=>{const a=this.wr(s.gr);o.push(a)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new dt(me);return n.forEach(i=>{const o=new et(i,0),s=new et(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([o,s],a=>{r=r.add(a.gr)})}),P.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;Y.isDocumentKey(o)||(o=o.child(""));const s=new et(new Y(o),0);let a=new dt(me);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},s),P.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){we(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return P.forEach(n.mutations,i=>{const o=new et(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new et(n,0),i=this.yr.firstAfterOrEqual(r);return P.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y6{constructor(e){this.Cr=e,this.docs=function(){return new Me(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return P.resolve(r?r.document.mutableCopy():wt.newInvalidDocument(n))}getEntries(e,n){let r=Tr();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():wt.newInvalidDocument(i))}),P.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=Tr();const s=n.path,a=new Y(s.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!s.isPrefixOf(u.path))break;u.path.length>s.length+1||rF(nF(c),r)<=0||(i.has(c.key)||ih(n,c))&&(o=o.insert(c.key,c.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(e,n,r,i){Z()}vr(e,n){return P.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new _6(this)}getSize(e){return P.resolve(this.size)}}class _6 extends d6{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),P.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w6{constructor(e){this.persistence=e,this.Fr=new Ws(n=>s0(n),a0),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.Mr=0,this.Or=new f0,this.targetCount=0,this.Nr=Rs.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),P.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Rs(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.kn(n),P.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Fr.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),P.waitFor(o).next(()=>i)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return P.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),P.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),P.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),P.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return P.resolve(r)}containsKey(e,n){return P.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E6{constructor(e,n){this.Br={},this.overlays={},this.Lr=new n0(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new w6(this),this.indexManager=new c6,this.remoteDocumentCache=function(i){return new y6(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new l6(n),this.Kr=new m6(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new g6,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new v6(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){z("MemoryPersistence","Starting transaction:",e);const i=new S6(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(o=>this.referenceDelegate.Ur(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Wr(e,n){return P.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class S6 extends oF{constructor(e){super(),this.currentSequenceNumber=e}}class d0{constructor(e){this.persistence=e,this.Gr=new f0,this.zr=null}static jr(e){return new d0(e)}get Hr(){if(this.zr)return this.zr;throw Z()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),P.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),P.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Hr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Hr,r=>{const i=Y.fromPath(r);return this.Jr(e,i).next(o=>{o||n.removeEntry(i,ne.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return P.or([()=>P.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=fe(),i=fe();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new h0(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T6{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b6{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.zi(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.ji(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new T6;return this.Hi(e,n,s).next(a=>{if(o.result=a,this.$i)return this.Ji(e,n,s,a.size)})}).next(()=>o.result)}Ji(e,n,r,i){return r.documentReadCount<this.Ui?(sa()<=ce.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",Io(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),P.resolve()):(sa()<=ce.DEBUG&&z("QueryEngine","Query:",Io(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(sa()<=ce.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",Io(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,qn(n))):P.resolve())}zi(e,n){if(nE(n))return P.resolve(null);let r=qn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Lg(n,null,"F"),r=qn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=fe(...o);return this.Gi.getDocuments(e,s).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,s,l.readTime)?this.zi(e,Lg(n,null,"F")):this.Xi(e,u,n,l)}))})))}ji(e,n,r,i){return nE(n)||i.isEqual(ne.min())?P.resolve(null):this.Gi.getDocuments(e,r).next(o=>{const s=this.Yi(n,o);return this.Zi(n,s,r,i)?P.resolve(null):(sa()<=ce.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Io(n)),this.Xi(e,s,n,tF(i,-1)).next(a=>a))})}Yi(e,n){let r=new dt(sC(e));return n.forEach((i,o)=>{ih(e,o)&&(r=r.add(o))}),r}Zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Hi(e,n,r){return sa()<=ce.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Io(n)),this.Gi.getDocumentsMatchingQuery(e,n,vi.min(),r)}Xi(e,n,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k6{constructor(e,n,r,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new Me(me),this.ns=new Ws(o=>s0(o),a0),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new p6(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function x6(t,e,n,r){return new k6(t,e,n,r)}async function CC(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],a=[];let l=fe();for(const u of i){s.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of o){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:s,addedBatchIds:a}))})})}function I6(t,e){const n=re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const f=u.batch,d=f.keys();let p=P.resolve();return d.forEach(y=>{p=p.next(()=>c.getEntry(l,y)).next(_=>{const w=u.docVersions.get(y);we(w!==null),_.version.compareTo(w)<0&&(f.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=fe();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function RC(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function C6(t,e){const n=re(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((c,f)=>{const d=i.get(f);if(!d)return;a.push(n.qr.removeMatchingKeys(o,c.removedDocuments,f).next(()=>n.qr.addMatchingKeys(o,c.addedDocuments,f)));let p=d.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(f)!==null?p=p.withResumeToken(It.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(f,p),function(_,w,g){return _.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(d,p,c)&&a.push(n.qr.updateTargetData(o,p))});let l=Tr(),u=fe();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,c))}),a.push(R6(o,s,e.documentUpdates).next(c=>{l=c.us,u=c.cs})),!r.isEqual(ne.min())){const c=n.qr.getLastRemoteSnapshotVersion(o).next(f=>n.qr.setTargetsMetadata(o,o.currentSequenceNumber,r));a.push(c)}return P.waitFor(a).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,l,u)).next(()=>l)}).then(o=>(n.ts=i,o))}function R6(t,e,n){let r=fe(),i=fe();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let s=Tr();return n.forEach((a,l)=>{const u=o.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ne.min())?(e.removeEntry(a,l.readTime),s=s.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),s=s.insert(a,l)):z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:s,cs:i}})}function P6(t,e){const n=re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function A6(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(o=>o?(i=o,P.resolve(i)):n.qr.allocateTargetId(r).next(s=>(i=new Yr(e,s,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function Ug(t,e,n){const r=re(t),i=r.ts.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!uu(s))throw s;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function hE(t,e,n){const r=re(t);let i=ne.min(),o=fe();return r.persistence.runTransaction("Execute query","readwrite",s=>function(l,u,c){const f=re(l),d=f.ns.get(c);return d!==void 0?P.resolve(f.ts.get(d)):f.qr.getTargetData(u,c)}(r,s,qn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(s,a.targetId).next(l=>{o=l})}).next(()=>r.es.getDocumentsMatchingQuery(s,e,n?i:ne.min(),n?o:fe())).next(a=>(O6(r,TF(e),a),{documents:a,ls:o})))}function O6(t,e,n){let r=t.rs.get(e)||ne.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.rs.set(e,r)}class pE{constructor(){this.activeTargetIds=RF()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class N6{constructor(){this.eo=new pE,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new pE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D6{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ec=null;function Cp(){return ec===null?ec=function(){return 268435456+Math.round(2147483648*Math.random())}():ec++,"0x"+ec.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L6={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M6{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection";class j6 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${o}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get yo(){return!1}wo(n,r,i,o,s){const a=Cp(),l=this.So(n,r);z("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,o,s),this.Do(n,l,u,i).then(c=>(z("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw ks("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Co(n,r,i,o,s,a){return this.wo(n,r,i,o,s)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}So(n,r){const i=L6[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,i){const o=Cp();return new Promise((s,a)=>{const l=new HU;l.setWithCredentials(!0),l.listenOnce(zU.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case xp.NO_ERROR:const c=l.getResponseJson();z(gt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(c)),s(c);break;case xp.TIMEOUT:z(gt,`RPC '${e}' ${o} timed out`),a(new G(O.DEADLINE_EXCEEDED,"Request time out"));break;case xp.HTTP_ERROR:const f=l.getStatus();if(z(gt,`RPC '${e}' ${o} failed with status:`,f,"response text:",l.getResponseText()),f>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const y=function(w){const g=w.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(g)>=0?g:O.UNKNOWN}(p.status);a(new G(y,p.message))}else a(new G(O.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new G(O.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{z(gt,`RPC '${e}' ${o} completed.`)}});const u=JSON.stringify(i);z(gt,`RPC '${e}' ${o} sending request:`,i),l.send(n,"POST",u,r,15)})}vo(e,n,r){const i=Cp(),o=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=UU(),a=FU(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=o.join("");z(gt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const f=s.createWebChannel(c,l);let d=!1,p=!1;const y=new M6({co:w=>{p?z(gt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(d||(z(gt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),d=!0),z(gt,`RPC '${e}' stream ${i} sending:`,w),f.send(w))},lo:()=>f.close()}),_=(w,g,m)=>{w.listen(g,v=>{try{m(v)}catch(E){setTimeout(()=>{throw E},0)}})};return _(f,Xu.EventType.OPEN,()=>{p||z(gt,`RPC '${e}' stream ${i} transport opened.`)}),_(f,Xu.EventType.CLOSE,()=>{p||(p=!0,z(gt,`RPC '${e}' stream ${i} transport closed`),y.Ro())}),_(f,Xu.EventType.ERROR,w=>{p||(p=!0,ks(gt,`RPC '${e}' stream ${i} transport errored:`,w),y.Ro(new G(O.UNAVAILABLE,"The operation could not be completed")))}),_(f,Xu.EventType.MESSAGE,w=>{var g;if(!p){const m=w.data[0];we(!!m);const v=m,E=v.error||((g=v[0])===null||g===void 0?void 0:g.error);if(E){z(gt,`RPC '${e}' stream ${i} received error:`,E);const S=E.status;let T=function(R){const D=ze[R];if(D!==void 0)return _C(D)}(S),b=E.message;T===void 0&&(T=O.INTERNAL,b="Unknown error status: "+S+" with message "+E.message),p=!0,y.Ro(new G(T,b)),f.close()}else z(gt,`RPC '${e}' stream ${i} received:`,m),y.Vo(m)}}),_(a,BU.STAT_EVENT,w=>{w.stat===q1.PROXY?z(gt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===q1.NOPROXY&&z(gt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Ao()},0),y}}function Rp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(t){return new KF(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e,n,r=1e3,i=1.5,o=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=o,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e,n,r,i,o,s,a,l){this.si=e,this.Ko=r,this.$o=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new PC(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(Sr(n.toString()),Sr("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{e(()=>{const i=new G(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $6 extends AC{constructor(e,n,r,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=XF(this.serializer,e),r=function(o){if(!("targetChange"in o))return ne.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?ne.min():s.readTime?Gn(s.readTime):ne.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=Vg(this.serializer),n.addTarget=function(o,s){let a;const l=s.target;if(a=Dg(l)?{documents:e6(o,l)}:{query:t6(o,l)},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){a.resumeToken=SC(o,s.resumeToken);const u=Mg(o,s.expectedCount);u!==null&&(a.expectedCount=u)}else if(s.snapshotVersion.compareTo(ne.min())>0){a.readTime=Gf(o,s.snapshotVersion.toTimestamp());const u=Mg(o,s.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=r6(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=Vg(this.serializer),n.removeTarget=e,this.e_(n)}}class V6 extends AC{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(we(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=ZF(e.writeResults,e.commitTime),r=Gn(e.commitTime);return this.listener.I_(r,n)}return we(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Vg(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>JF(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U6 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new G(O.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.wo(e,n,r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(O.UNKNOWN,i.toString())})}Co(e,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Co(e,n,r,o,s,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(O.UNKNOWN,o.toString())})}terminate(){this.d_=!0}}class F6{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Sr(n),this.f_=!1):z("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z6{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=o,this.F_.ro(s=>{r.enqueueAndForget(async()=>{_o(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=re(l);u.C_.add(4),await du(u),u.M_.set("Unknown"),u.C_.delete(4),await uh(u)}(this))})}),this.M_=new F6(r,i)}}async function uh(t){if(_o(t))for(const e of t.v_)await e(!0)}async function du(t){for(const e of t.v_)await e(!1)}function OC(t,e){const n=re(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),g0(n)?m0(n):qs(n).Ho()&&p0(n,e))}function NC(t,e){const n=re(t),r=qs(n);n.D_.delete(e),r.Ho()&&DC(n,e),n.D_.size===0&&(r.Ho()?r.Zo():_o(n)&&n.M_.set("Unknown"))}function p0(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}qs(t).u_(e)}function DC(t,e){t.x_.Oe(e),qs(t).c_(e)}function m0(t){t.x_=new HF({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),qs(t).start(),t.M_.g_()}function g0(t){return _o(t)&&!qs(t).jo()&&t.D_.size>0}function _o(t){return re(t).C_.size===0}function LC(t){t.x_=void 0}async function B6(t){t.D_.forEach((e,n)=>{p0(t,e)})}async function H6(t,e){LC(t),g0(t)?(t.M_.w_(e),m0(t)):t.M_.set("Unknown")}async function W6(t,e,n){if(t.M_.set("Online"),e instanceof EC&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const a of o.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,s),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(r){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Kf(t,r)}else if(e instanceof Nc?t.x_.$e(e):e instanceof wC?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(ne.min()))try{const r=await RC(t.localStore);n.compareTo(r)>=0&&await function(o,s){const a=o.x_.it(s);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=o.D_.get(u);c&&o.D_.set(u,c.withResumeToken(l.resumeToken,s))}}),a.targetMismatches.forEach((l,u)=>{const c=o.D_.get(l);if(!c)return;o.D_.set(l,c.withResumeToken(It.EMPTY_BYTE_STRING,c.snapshotVersion)),DC(o,l);const f=new Yr(c.target,l,u,c.sequenceNumber);p0(o,f)}),o.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){z("RemoteStore","Failed to raise snapshot:",r),await Kf(t,r)}}async function Kf(t,e,n){if(!uu(e))throw e;t.C_.add(1),await du(t),t.M_.set("Offline"),n||(n=()=>RC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await uh(t)})}function MC(t,e){return e().catch(n=>Kf(t,n,e))}async function ch(t){const e=re(t),n=_i(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;q6(e);)try{const i=await P6(e.localStore,r);if(i===null){e.b_.length===0&&n.Zo();break}r=i.batchId,G6(e,i)}catch(i){await Kf(e,i)}jC(e)&&$C(e)}function q6(t){return _o(t)&&t.b_.length<10}function G6(t,e){t.b_.push(e);const n=_i(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function jC(t){return _o(t)&&!_i(t).jo()&&t.b_.length>0}function $C(t){_i(t).start()}async function K6(t){_i(t).E_()}async function Y6(t){const e=_i(t);for(const n of t.b_)e.P_(n.mutations)}async function Q6(t,e,n){const r=t.b_.shift(),i=l0.from(r,e,n);await MC(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ch(t)}async function X6(t,e){e&&_i(t).h_&&await async function(r,i){if(function(s){return FF(s)&&s!==O.ABORTED}(i.code)){const o=r.b_.shift();_i(r).Yo(),await MC(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await ch(r)}}(t,e),jC(t)&&$C(t)}async function gE(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const r=_o(n);n.C_.add(3),await du(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await uh(n)}async function J6(t,e){const n=re(t);e?(n.C_.delete(2),await uh(n)):e||(n.C_.add(2),await du(n),n.M_.set("Unknown"))}function qs(t){return t.O_||(t.O_=function(n,r,i){const o=re(n);return o.A_(),new $6(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{ho:B6.bind(null,t),Io:H6.bind(null,t),a_:W6.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),g0(t)?m0(t):t.M_.set("Unknown")):(await t.O_.stop(),LC(t))})),t.O_}function _i(t){return t.N_||(t.N_=function(n,r,i){const o=re(n);return o.A_(),new V6(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{ho:K6.bind(null,t),Io:X6.bind(null,t),T_:Y6.bind(null,t),I_:Q6.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await ch(t)):(await t.N_.stop(),t.b_.length>0&&(z("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new li,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,a=new v0(e,n,s,i,o);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function y0(t,e){if(Sr("AsyncQueue",`${e}: ${t}`),uu(t))return new G(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=ya(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new as(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof as)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new as;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(){this.B_=new Me(Y.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):Z():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ps{constructor(e,n,r,i,o,s,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,o){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new Ps(e,n,as.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z6{constructor(){this.k_=void 0,this.listeners=[]}}class e9{constructor(){this.queries=new Ws(e=>oC(e),rh),this.onlineState="Unknown",this.q_=new Set}}async function t9(t,e){const n=re(t),r=e.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new Z6),i)try{o.k_=await n.onListen(r)}catch(s){const a=y0(s,`Initialization of query '${Io(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,o),o.listeners.push(e),e.Q_(n.onlineState),o.k_&&e.K_(o.k_)&&_0(n)}async function n9(t,e){const n=re(t),r=e.query;let i=!1;const o=n.queries.get(r);if(o){const s=o.listeners.indexOf(e);s>=0&&(o.listeners.splice(s,1),i=o.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function r9(t,e){const n=re(t);let r=!1;for(const i of e){const o=i.query,s=n.queries.get(o);if(s){for(const a of s.listeners)a.K_(i)&&(r=!0);s.k_=i}}r&&_0(n)}function i9(t,e,n){const r=re(t),i=r.queries.get(e);if(i)for(const o of i.listeners)o.onError(n);r.queries.delete(e)}function _0(t){t.q_.forEach(e=>{e.next()})}class o9{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ps(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=Ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e){this.key=e}}class UC{constructor(e){this.key=e}}class s9{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=fe(),this.mutatedKeys=fe(),this._a=sC(e),this.aa=new as(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new vE,i=n?n.aa:this.aa;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,f)=>{const d=i.get(c),p=ih(this.query,f)?f:null,y=!!d&&this.mutatedKeys.has(d.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;d&&p?d.data.isEqual(p.data)?y!==_&&(r.track({type:3,doc:p}),w=!0):this.ha(d,p)||(r.track({type:2,doc:p}),w=!0,(l&&this._a(p,l)>0||u&&this._a(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),w=!0):d&&!p&&(r.track({type:1,doc:d}),w=!0,(l||u)&&(a=!0)),w&&(p?(s=s.add(p),o=_?o.add(c):o.delete(c)):(s=s.delete(c),o=o.delete(c)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const c=this.query.limitType==="F"?s.last():s.first();s=s.delete(c.key),o=o.delete(c.key),r.track({type:1,doc:c})}return{aa:s,la:r,Zi:a,mutatedKeys:o}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const o=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const s=e.la.L_();s.sort((c,f)=>function(p,y){const _=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return _(p)-_(y)}(c.type,f.type)||this._a(c.doc,f.doc)),this.Pa(r),i=i!=null&&i;const a=n&&!i?this.Ia():[],l=this.oa.size===0&&this.current&&!i?1:0,u=l!==this.sa;return this.sa=l,s.length!==0||u?{snapshot:new Ps(this.query,e.aa,o,s,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new vE,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=fe(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new UC(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new VC(r))}),n}da(e){this.ia=e.ls,this.oa=fe();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return Ps.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class a9{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class l9{constructor(e){this.key=e,this.Ra=!1}}class u9{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Va={},this.ma=new Ws(a=>oC(a),rh),this.fa=new Map,this.ga=new Set,this.pa=new Me(Y.comparator),this.ya=new Map,this.wa=new f0,this.Sa={},this.ba=new Map,this.Da=Rs.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function c9(t,e){const n=w9(t);let r,i;const o=n.ma.get(e);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.Aa();else{const s=await A6(n.localStore,qn(e)),a=n.sharedClientState.addLocalQueryTarget(s.targetId);r=s.targetId,i=await f9(n,e,r,a==="current",s.resumeToken),n.isPrimaryClient&&OC(n.remoteStore,s)}return i}async function f9(t,e,n,r,i){t.va=(f,d,p)=>async function(_,w,g,m){let v=w.view.ca(g);v.Zi&&(v=await hE(_.localStore,w.query,!1).then(({documents:b})=>w.view.ca(b,v)));const E=m&&m.targetChanges.get(w.targetId),S=m&&m.targetMismatches.get(w.targetId)!=null,T=w.view.applyChanges(v,_.isPrimaryClient,E,S);return _E(_,w.targetId,T.Ta),T.snapshot}(t,f,d,p);const o=await hE(t.localStore,e,!0),s=new s9(e,o.ls),a=s.ca(o.documents),l=fu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=s.applyChanges(a,t.isPrimaryClient,l);_E(t,n,u.Ta);const c=new a9(e,n,s);return t.ma.set(e,c),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}async function d9(t,e){const n=re(t),r=n.ma.get(e),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(o=>!rh(o,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ug(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),NC(n.remoteStore,r.targetId),Fg(n,r.targetId)}).catch(lu)):(Fg(n,r.targetId),await Ug(n.localStore,r.targetId,!0))}async function h9(t,e,n){const r=E9(t);try{const i=await function(s,a){const l=re(s),u=Xe.now(),c=a.reduce((p,y)=>p.add(y.key),fe());let f,d;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let y=Tr(),_=fe();return l.ss.getEntries(p,c).next(w=>{y=w,y.forEach((g,m)=>{m.isValidDocument()||(_=_.add(g))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,y)).next(w=>{f=w;const g=[];for(const m of a){const v=MF(m,f.get(m.key).overlayedDocument);v!=null&&g.push(new yo(m.key,v,XI(v.value.mapValue),cr.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,g,a)}).next(w=>{d=w;const g=w.applyToLocalDocumentSet(f,_);return l.documentOverlayCache.saveOverlays(p,w.batchId,g)})}).then(()=>({batchId:d.batchId,changes:lC(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,a,l){let u=s.Sa[s.currentUser.toKey()];u||(u=new Me(me)),u=u.insert(a,l),s.Sa[s.currentUser.toKey()]=u}(r,i.batchId,n),await hu(r,i.changes),await ch(r.remoteStore)}catch(i){const o=y0(i,"Failed to persist write");n.reject(o)}}async function FC(t,e){const n=re(t);try{const r=await C6(n.localStore,e);e.targetChanges.forEach((i,o)=>{const s=n.ya.get(o);s&&(we(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.Ra=!0:i.modifiedDocuments.size>0?we(s.Ra):i.removedDocuments.size>0&&(we(s.Ra),s.Ra=!1))}),await hu(n,r,e)}catch(r){await lu(r)}}function yE(t,e,n){const r=re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((o,s)=>{const a=s.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(s,a){const l=re(s);l.onlineState=a;let u=!1;l.queries.forEach((c,f)=>{for(const d of f.listeners)d.Q_(a)&&(u=!0)}),u&&_0(l)}(r.eventManager,e),i.length&&r.Va.a_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function p9(t,e,n){const r=re(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ya.get(e),o=i&&i.key;if(o){let s=new Me(Y.comparator);s=s.insert(o,wt.newNoDocument(o,ne.min()));const a=fe().add(o),l=new ah(ne.min(),new Map,new Me(me),s,a);await FC(r,l),r.pa=r.pa.remove(o),r.ya.delete(e),w0(r)}else await Ug(r.localStore,e,!1).then(()=>Fg(r,e,n)).catch(lu)}async function m9(t,e){const n=re(t),r=e.batch.batchId;try{const i=await I6(n.localStore,e);BC(n,r,null),zC(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await hu(n,i)}catch(i){await lu(i)}}async function g9(t,e,n){const r=re(t);try{const i=await function(s,a){const l=re(s);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>(we(f!==null),c=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);BC(r,e,n),zC(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await hu(r,i)}catch(i){await lu(i)}}function zC(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function BC(t,e,n){const r=re(t);let i=r.Sa[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function Fg(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||HC(t,r)})}function HC(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(NC(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),w0(t))}function _E(t,e,n){for(const r of n)r instanceof VC?(t.wa.addReference(r.key,e),v9(t,r)):r instanceof UC?(z("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||HC(t,r.key)):Z()}function v9(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(z("SyncEngine","New document in limbo: "+n),t.ga.add(r),w0(t))}function w0(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new Y(Pe.fromString(e)),r=t.Da.next();t.ya.set(r,new l9(n)),t.pa=t.pa.insert(n,r),OC(t.remoteStore,new Yr(qn(iC(n.path)),r,"TargetPurposeLimboResolution",n0._e))}}async function hu(t,e,n){const r=re(t),i=[],o=[],s=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{s.push(r.va(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=h0.Qi(l.targetId,u);o.push(c)}}))}),await Promise.all(s),r.Va.a_(i),await async function(l,u){const c=re(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>P.forEach(u,d=>P.forEach(d.ki,p=>c.persistence.referenceDelegate.addReference(f,d.targetId,p)).next(()=>P.forEach(d.qi,p=>c.persistence.referenceDelegate.removeReference(f,d.targetId,p)))))}catch(f){if(!uu(f))throw f;z("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const d=f.targetId;if(!f.fromCache){const p=c.ts.get(d),y=p.snapshotVersion,_=p.withLastLimboFreeSnapshotVersion(y);c.ts=c.ts.insert(d,_)}}}(r.localStore,o))}async function y9(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const r=await CC(n.localStore,e);n.currentUser=e,function(o,s){o.ba.forEach(a=>{a.forEach(l=>{l.reject(new G(O.CANCELLED,s))})}),o.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await hu(n,r._s)}}function _9(t,e){const n=re(t),r=n.ya.get(e);if(r&&r.Ra)return fe().add(r.key);{let i=fe();const o=n.fa.get(e);if(!o)return i;for(const s of o){const a=n.ma.get(s);i=i.unionWith(a.view.ua)}return i}}function w9(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=FC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_9.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=p9.bind(null,e),e.Va.a_=r9.bind(null,e.eventManager),e.Va.Fa=i9.bind(null,e.eventManager),e}function E9(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=m9.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=g9.bind(null,e),e}class wE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=lh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return x6(this.persistence,new b6,e.initialUser,this.serializer)}createPersistence(e){return new E6(d0.jr,this.serializer)}createSharedClientState(e){return new N6}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class S9{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=y9.bind(null,this.syncEngine),await J6(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new e9}()}createDatastore(e){const n=lh(e.databaseInfo.databaseId),r=function(o){return new j6(o)}(e.databaseInfo);return function(o,s,a,l){return new U6(o,s,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,a){return new z6(r,i,o,s,a)}(this.localStore,this.datastore,e.asyncQueue,n=>yE(this.syncEngine,n,0),function(){return mE.D()?new mE:new D6}())}createSyncEngine(e,n){return function(i,o,s,a,l,u,c){const f=new u9(i,o,s,a,l,u);return c&&(f.Ca=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=re(n);z("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await du(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T9{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):Sr("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b9{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=KI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new G(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new li;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=y0(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Pp(t,e){t.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await CC(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function EE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await x9(t);z("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>gE(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,o)=>gE(e.remoteStore,o)),t._onlineComponents=e}function k9(t){return t.name==="FirebaseError"?t.code===O.FAILED_PRECONDITION||t.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function x9(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Pp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!k9(n))throw n;ks("Error using user provided cache. Falling back to memory cache: "+n),await Pp(t,new wE)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await Pp(t,new wE);return t._offlineComponents}async function WC(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await EE(t,t._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await EE(t,new S9))),t._onlineComponents}function I9(t){return WC(t).then(e=>e.syncEngine)}async function C9(t){const e=await WC(t),n=e.eventManager;return n.onListen=c9.bind(null,e.syncEngine),n.onUnlisten=d9.bind(null,e.syncEngine),n}function R9(t,e,n={}){const r=new li;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,l,u){const c=new T9({next:d=>{s.enqueueAndForget(()=>n9(o,f)),d.fromCache&&l.source==="server"?u.reject(new G(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),f=new o9(a,c,{includeMetadataChanges:!0,J_:!0});return t9(o,f)}(await C9(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qC(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(t,e,n){if(!n)throw new G(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function P9(t,e,n,r){if(e===!0&&r===!0)throw new G(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function TE(t){if(!Y.isDocumentKey(t))throw new G(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bE(t){if(Y.isDocumentKey(t))throw new G(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function E0(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function Yf(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=E0(t);throw new G(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}P9("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qC((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new G(O.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new G(O.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new G(O.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new G(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new G(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new qU;switch(r.type){case"firstParty":return new QU(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=SE.get(n);r&&(z("ComponentProvider","Removing Datastore"),SE.delete(n),r.terminate())}(this),Promise.resolve()}}function A9(t,e,n,r={}){var i;const o=(t=Yf(t,fh))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&ks("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=yt.MOCK_USER;else{a=vb(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new G(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new yt(u)}t._authCredentials=new GU(new GI(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new dh(this.firestore,e,this._query)}}class kn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ui(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kn(this.firestore,e,this._key)}}class ui extends dh{constructor(e,n,r){super(e,n,iC(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new kn(this.firestore,null,new Y(e))}withConverter(e){return new ui(this.firestore,e,this._path)}}function S0(t,e,...n){if(t=Ge(t),GC("collection","path",e),t instanceof fh){const r=Pe.fromString(e,...n);return bE(r),new ui(t,null,r)}{if(!(t instanceof kn||t instanceof ui))throw new G(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return bE(r),new ui(t.firestore,null,r)}}function O9(t,e,...n){if(t=Ge(t),arguments.length===1&&(e=KI.newId()),GC("doc","path",e),t instanceof fh){const r=Pe.fromString(e,...n);return TE(r),new kn(t,null,new Y(r))}{if(!(t instanceof kn||t instanceof ui))throw new G(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return TE(r),new kn(t.firestore,t instanceof ui?t.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N9{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new PC(this,"async_queue_retry"),this.iu=()=>{const n=Rp();n&&z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=Rp();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=Rp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new li;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!uu(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(r);throw Sr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=v0.createAndSchedule(this,e,n,r,o=>this.au(o));return this.Xa.push(i),i}su(){this.eu&&Z()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class T0 extends fh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new N9}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||YC(this),this._firestoreClient.terminate()}}function D9(t,e){const n=typeof t=="object"?t:qv(),r=typeof t=="string"?t:e||"(default)",i=zl(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=E2("firestore");o&&A9(i,...o)}return i}function KC(t){return t._firestoreClient||YC(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function YC(t){var e,n,r;const i=t._freezeSettings(),o=function(a,l,u,c){return new lF(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,qC(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new b9(t._authCredentials,t._appCheckCredentials,t._queue,o),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this._byteString=e}static fromBase64String(e){try{return new As(It.fromBase64String(e))}catch(n){throw new G(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new As(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L9=/^__.*__$/;class M9{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new yo(e,this.data,this.fieldMask,n,this.fieldTransforms):new cu(e,this.data,n,this.fieldTransforms)}}function XC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class x0{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Pu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new x0(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Au(e),i}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Qf(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(XC(this.Iu)&&L9.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class j9{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||lh(e)}pu(e,n,r,i=!1){return new x0({Iu:e,methodName:n,gu:r,path:ut.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $9(t){const e=t._freezeSettings(),n=lh(t._databaseId);return new j9(t._databaseId,!!e.ignoreUndefinedProperties,n)}function V9(t,e,n,r,i,o={}){const s=t.pu(o.merge||o.mergeFields?2:0,e,n,i);tR("Data must be an object, but it was:",s,r);const a=ZC(r,s);let l,u;if(o.merge)l=new En(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const c=[];for(const f of o.mergeFields){const d=U9(e,f,n);if(!s.contains(d))throw new G(O.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);z9(c,d)||c.push(d)}l=new En(c),u=s.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=s.fieldTransforms;return new M9(new sn(a),l,u)}function JC(t,e){if(eR(t=Ge(t)))return tR("Unsupported field value:",e,t),ZC(t,e);if(t instanceof QC)return function(r,i){if(!XC(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const a of r){let l=JC(a,i.Vu(s));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=Ge(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return PF(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Xe.fromDate(r);return{timestampValue:Gf(i.serializer,o)}}if(r instanceof Xe){const o=new Xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Gf(i.serializer,o)}}if(r instanceof k0)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof As)return{bytesValue:SC(i.serializer,r._byteString)};if(r instanceof kn){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.mu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:c0(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${E0(r)}`)}(t,e)}function ZC(t,e){const n={};return YI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hs(t,(r,i)=>{const o=JC(i,e.Eu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function eR(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Xe||t instanceof k0||t instanceof As||t instanceof kn||t instanceof QC)}function tR(t,e,n){if(!eR(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=E0(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function U9(t,e,n){if((e=Ge(e))instanceof b0)return e._internalPath;if(typeof e=="string")return nR(t,e);throw Qf("Field path arguments must be of type string or ",t,!1,void 0,n)}const F9=new RegExp("[~\\*/\\[\\]]");function nR(t,e,n){if(e.search(F9)>=0)throw Qf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new b0(...e.split("."))._internalPath}catch{throw Qf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Qf(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new G(O.INVALID_ARGUMENT,a+t+l)}function z9(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new kn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new B9(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(iR("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class B9 extends rR{data(){return super.data()}}function iR(t,e){return typeof e=="string"?nR(t,e):e instanceof b0?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H9(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class W9{convertValue(e,n="none"){switch(lo(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ao(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Hs(e,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertGeoPoint(e){return new k0(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=i0(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Rl(e));default:return null}}convertTimestamp(e){const n=yi(e);return new Xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Pe.fromString(e);we(IC(r));const i=new Pl(r.get(1),r.get(3)),o=new Y(r.popFirst(5));return i.isEqual(n)||Sr(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q9(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class G9 extends rR{constructor(e,n,r,i,o,s){super(e,n,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Dc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(iR("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Dc extends G9{data(e={}){return super.data(e)}}class K9{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new tc(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Dc(this._firestore,this._userDataWriter,r.key,r,new tc(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(a=>{const l=new Dc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new tc(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>o||a.type!==3).map(a=>{const l=new Dc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new tc(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=s.indexOf(a.doc.key),s=s.delete(a.doc.key)),a.type!==1&&(s=s.add(a.doc),c=s.indexOf(a.doc.key)),{type:Y9(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Y9(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}class Q9 extends W9{constructor(e){super(),this.firestore=e}convertBytes(e){return new As(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new kn(this.firestore,null,n)}}function oR(t){t=Yf(t,dh);const e=Yf(t.firestore,T0),n=KC(e),r=new Q9(e);return H9(t._query),R9(n,t._query).then(i=>new K9(e,r,t,i))}function X9(t,e){const n=Yf(t.firestore,T0),r=O9(t),i=q9(t.converter,e);return J9(n,[V9($9(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,cr.exists(!1))]).then(()=>r)}function J9(t,e){return function(r,i){const o=new li;return r.asyncQueue.enqueueAndForget(async()=>h9(await I9(r),i,o)),o.promise}(KC(t),e)}(function(e,n=!0){(function(i){Bs=i})(kr),gr(new Yn("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),a=new T0(new KU(r.getProvider("auth-internal")),new JU(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new G(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pl(u.options.projectId,c)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),a._setSettings(o),a},"PUBLIC").setMultipleInstances(!0)),Gt(G1,"4.4.0",e),Gt(G1,"4.4.0","esm2017")})();const Z9={apiKey:"AIzaSyAu1pu4r4m_kJLEyeL7Jgc6tWz94Upzk98",authDomain:"book-review-a7be9.firebaseapp.com",projectId:"book-review-a7be9",storageBucket:"book-review-a7be9.appspot.com",messagingSenderId:"905824431279",appId:"1:905824431279:web:f56fdfc06bc60dd733785a",measurementId:"G-L9QXD3H138"};Bl(Z9);const I0=D9();function ez(){const[t,e]=A.useState([]),[n,r]=A.useState(1),[i]=A.useState(10),[o,s]=A.useState(1),a=oy(),l=Array.from({length:o},(u,c)=>c+1);return A.useEffect(()=>{async function u(){try{const c=(n-1)*i,f=c+i,d=S0(I0,"Board"),_=(await oR(d)).docs.map(w=>({id:w.id,author:w.data().author,category:w.data().category,comments:w.data().comments,content:w.data().content,image:w.data().image,likes:w.data().likes,title:w.data().title,views:w.data().views})).slice(c,f);e(_)}catch(c){console.log(c)}}u()},[n,i]),A.useEffect(()=>{const u=Math.ceil(t.length/i);s(u)},[t,i]),h.jsxs(tz,{children:[h.jsxs("div",{children:[h.jsxs(nz,{children:["자유게시판",h.jsx(rz,{children:"자유로운 소통을 위한 공간입니다."})]}),h.jsx(iz,{}),h.jsxs(oz,{children:[h.jsxs(sz,{children:[" ","제목",h.jsx(az,{children:" | 조회수 |"}),h.jsx(lz,{children:" 좋아요"})]}),t.map(u=>h.jsxs(cz,{children:[h.jsxs(fz,{onClick:()=>a(`/boarddetail/${u.id}`),children:[u.title,h.jsxs(dz,{children:[" ",u.views," | ",h.jsxs(hz,{children:[" ",u.likes," "]})]})]})," "]},u.id))]})]})," ",h.jsxs(pz,{children:[h.jsx(mz,{onClick:()=>r(n-1),disabled:n===1,children:"이전"}),l.map(u=>h.jsx(vz,{onClick:()=>r(u),children:u},u)),h.jsx(gz,{onClick:()=>r(n+1),disabled:n>=o,children:"다음"})]}),h.jsx(uz,{href:"/Boardwrite",children:"글쓰기"})]})}const tz=C.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
`,nz=C.h1`
  background-color: white;
  color: black;
  font-size: 30pt;
  padding: 10px 0 0 6em;
  margin-top: 30px;
  margin-left: 100px;
`,rz=C.span`
  background-color: white;
  color: gray;
  font-size: 12pt;
  height: auto;
  padding-top: 10px;
  padding-left: 20px;
  /*제목 옆 부제목*/
`,iz=C.div`
  position: relative;
  width: 1200px;
  height: 3px;
  margin-top: 10px;
  margin-left: 15%;
  background: linear-gradient(120deg, purple, skyblue);
  margin-bottom: 20px;
`,oz=C.div`
  padding: 0;
  width: 1200px;
  height: 100vh;
`,sz=C.div`
  width: 1100px;
  height: auto;
  text-align: left;
  margin-left: 22.5%;
  padding-left: 10px;
  font-size: 9pt;
  font-weight: bold;
  text-align: center;
  border-bottom: lightgray 1px solid;
  margin-top: 50px;
  /*게시글 설명 바*/
`,az=C.span`
  font-size: 9pt;
  font-weight: bold;
  text-align: right;
  position: absolute;
  right: 12%;
`,lz=C.span`
  color: purple;
  font-size: 9pt;
  font-weight: bold;
  position: absolute;
  right: 9.3%;
`,uz=C.a`
  background-color: #333333;
  color: white;
  font-size: 12pt;
  border-radius: 30px;
  border: 1px solid gray;

  font-weight: bold;
  padding: 15px 30px;
  bottom: 15%;
  right: 5%;
  text-align: center;
  text-decoration: none;
  padding-top: 2px;
`,cz=C.div`
  height: 30px;
  width: 967px;
  margin: 0;
  margin-bottom: 10px;
`,fz=C.button`
  border-bottom: lightgray 1px solid;
  color: black;
  background-color: white;
  width: 1100px;
  height: 40px;
  font-size: 13pt;
  text-align: left;
  margin-left: 28%;
  margin-bottom: 10px;
  padding-left: 20px;
`,dz=C.span`
  font-size: 8pt;
  right: 12%;
  padding-top: 5px;
  position: absolute;
`,hz=C.span`
  color: purple;

  margin-left: 5px;
  position: absolute;
`,pz=C.div`
  position: absolute;
  left: 45%;
  box-sizing: content-box;
  margin-top: 20px;
  width: 30%;
`,mz=C.button`
  left: 20%;
  width: auto;
  box-sizing: content-box;
  background-color: #fff;
  color: black;
  border: gray 1px solid;
  border-radius: 3px;
  font-size: 8pt;

  &:hover {
    opacity: 1;
    visibility: visible;
    transition: all 0.2s ease;
    text-decoration: underline;
  }
`,gz=C.button`
  right: 20%;
  width: auto;
  box-sizing: content-box;
  background-color: #fff;
  color: black;
  border: gray 1px solid;
  font-size: 8pt;
  border-radius: 3px;

  &:hover {
    opacity: 1;
    visibility: visible;
    transition: all 0.2s ease;
    text-decoration: underline;
  }
`,vz=C.button`
  background-color: white;
  color: black;
  box-sizing: content-box;
  width: auto;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 20px;
  &:hover {
    opacity: 1;
    visibility: visible;
    transition: all 0.3s ease;
    text-decoration: underline;
  }
`;function yz(){const[t,e]=A.useState(""),[n,r]=A.useState(""),[i,o]=A.useState(""),[s,a]=A.useState(""),l=oy(),u=async c=>{c.preventDefault();try{const f=S0(I0,"Board");await X9(f,{author:t,title:n,category:i,content:s,likes:0,views:0,comments:"",image:""}),console.log("Author:",t),console.log("Title:",n),console.log("Category:",i),console.log("Content:",s),console.log("게시물이 성공적으로 추가되었습니다."),l("/board")}catch(f){console.error("게시물 추가 중 오류 발생:",f)}};return h.jsx(_z,{children:h.jsxs(wz,{children:[h.jsx(Ez,{children:"글쓰기"}),h.jsx(xE,{}),h.jsxs("ul",{children:[h.jsxs("li",{children:[h.jsx(Tz,{children:"작성자"}),h.jsx(Sz,{type:"text",placeholder:"작성자",value:t,onChange:c=>e(c.target.value)})]}),h.jsxs("li",{children:[h.jsx(kz,{children:"제목"}),h.jsx(bz,{type:"text",placeholder:"제목",value:n,onChange:c=>r(c.target.value)})]}),h.jsxs("li",{children:[h.jsx(Cz,{children:"카테고리"}),h.jsxs("select",{value:i,onChange:c=>o(c.target.value),children:[h.jsx("option",{value:"카테고리1",disabled:!0,children:"카테고리 1"}),h.jsx("option",{value:"카테고리2",children:"카테고리2"}),h.jsx("option",{value:"카테고리3",children:"카테고리3"}),h.jsx("option",{value:"카테고리4",children:"카테고리4"}),h.jsx("option",{value:"카테고리5",children:"카테고리5"}),h.jsx("option",{value:"카테고리6",children:"카테고리6"})]})]}),h.jsxs("li",{children:[h.jsx(Iz,{children:"내용"}),h.jsx(xz,{placeholder:"내용",value:s,onChange:c=>a(c.target.value)})]}),h.jsx(xE,{}),h.jsxs("li",{children:[h.jsx(_n,{to:"/board",children:h.jsx(Pz,{children:"취소"})}),h.jsx(Rz,{onClick:u,children:"등록"})]})]})]})})}const _z=C.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,wz=C.form`
  height: 800px;
  width: 900px;

  background-color: #fff;
  justify-content: center;
  align-items: center;

  li {
    display: flex;
    padding: 7px 0;
  }
`,Ez=C.h1`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`,xE=C.div`
  width: 100%;
  border-bottom: 1px solid #e8e8e8;
  margin-bottom: 5px;
`,Sz=C.input`
  display: flex;
  align-items: center;
  width: 80%;
  height: 34px;
  border: 1px solid #c6c6c6;
  border-radius: 5px;
  padding: 0 10px;
`,Tz=C.span`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`,bz=C.input`
  width: 80%;
  height: 34px;
  border: 1px solid #c6c6c6;
  border-radius: 5px;
  padding: 0 10px;
`,kz=C.span`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`,xz=C.textarea`
  display: flex;
  width: 80%;
  height: 400px;
  margin-bottom: 30px;
  border: 1px solid #c6c6c6;
  border-radius: 5px;
  padding: 0 10px;
`,Iz=C.span`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`,Cz=C.span`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`,Rz=C.button`
  padding: 10px 30px;
  background-color: #2f2fbe;
  color: #fff;
  margin-left: 30px;
`,Pz=C.button`
  padding: 10px 30px;
  background-color: #3b3b44;
  color: #fff;
  margin-left: 600px;
`;function Az(){const[t,e]=A.useState([]);return A.useEffect(()=>{async function n(){try{const r=S0(I0,"Board"),o=(await oR(r)).docs.map(s=>({id:s.id,author:s.data().author,category:s.data().category,comments:s.data().comments,content:s.data().content,image:s.data().image,likes:s.data().likes,title:s.data().title,views:s.data().views}));e(o)}catch(r){console.log(r)}}n()}),h.jsx(Oz,{children:t.map(n=>h.jsxs(Nz,{children:[h.jsxs(Dz,{children:[h.jsx("h1",{children:n.title}),h.jsx("h2",{children:"올린사람"})]}),h.jsx(Lz,{}),h.jsxs(Mz,{children:[h.jsx("h3",{children:"사용자"}),h.jsx("p",{children:"댓글들"})]}),h.jsx(jz,{placeholder:"댓글을 입력해주세요"})]}))})}const Oz=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`,Nz=C.div`
  width: 1300px;
  height: 800px;
  border: 5px solid black;
  background-color: #fff;
`,Dz=C.div`
  width: 100%;
  height: 200px;
  border: 3px solid blue;
`,Lz=C.div`
  width: 100%;
  height: 600px;
  border: 3px solid red;
`,Mz=C.div`
  width: 1300px;
  border: 3px solid yellow;
`,jz=C.textarea`
  width: 1300px;
  height: 50px;
`;function $z(){return h.jsx(Vz,{children:h.jsxs(Bz,{children:[h.jsx(Uz,{}),h.jsx(sR,{children:h.jsx("img",{src:en})}),h.jsx(aR,{children:h.jsxs(lR,{children:[h.jsxs("h2",{children:["닉네임 ",h.jsx("br",{})]}),h.jsxs(Fz,{children:[h.jsxs("h3",{children:["Nickname",h.jsx("br",{})," ",h.jsx("span",{children:"sonjinbin"})," "]}),h.jsxs("h3",{children:["ID ",h.jsx("br",{}),h.jsx("span",{children:"withsjb1@gmail.com"})," "]}),h.jsxs("h3",{children:["Password ",h.jsx("br",{}),h.jsx("span",{children:"asd7170882@"})," "]})]}),h.jsx(zz,{children:h.jsx("button",{children:"수정하기"})})]})})]})})}const Vz=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #333;
  font-family: "Poppins", sans-serif;
`,Uz=C.div`
  position: absolute;
  inset: 0;
  background: #000;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 120px;
    background: linear-gradient(
      transparent,
      #45f3ff,
      #45f3ff,
      #45f3ff,
      transparent
    );
    animation: animate 4s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }

    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  &::after {
    content: "";
    position: absolute;
    background: #292929;
    inset: 3px;
  }
`,sR=C.div`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  background: black;
  transition: 0.5s;
  z-index: 10;
  overflow: hidden;

  img {
    position: absolute;
    z-index: 1;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    top: 10px;
    left: 10px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 150px;
    transform: translate(-50%, -50%);
    background: linear-gradient(
      transparent,
      #ff3c7b,
      #ff3c7b,
      #ff3c7b,
      transparent
    );
    animation: animate2 6s linear infinite;

    @keyframes animate2 {
      0% {
        transform: translate(-50%, -50%) rotate(360deg);
      }

      100% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
    }
  }
  &::after {
    content: "";
    position: absolute;
    inset: 3px;
    background: #292929;
  }
`,aR=C.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
`,lR=C.div`
  padding: 40px;
  text-align: center;
  width: 100%;
  transition: 0.5s;
  transform: translateY(145px);
`,Fz=C.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;

  h3 {
    font-size: 1em;
    color: #45f3ff;
    line-height: 1.2em;
    font-size: 600;
    margin-left: 15px;
  }

  span {
    font-size: 0.85em;
    font-weight: 400;
    color: #fff;
  }
`,zz=C.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  button {
    padding: 10px 30px;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 1em;
    font-weight: 500;
    background: #45f3ff;
    color: #222;
    cursor: pointer;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`,Bz=C.div`
  position: relative;
  width: 350px;
  height: 190px;
  background: #333;
  transition: 0.5s;

  h2 {
    font-size: 1.25em;
    font-weight: 600;
    color: #45f3ff;
    line-height: 1.2em;
  }

  span {
    font-size: 0.75em;
    font-weight: 500;
    color: #fff;
  }
  &:hover {
    height: 550px;

    ${sR} {
      width: 250px;
      height: 250px;
    }

    ${aR} {
      transform: translateY(0px);
    }

    ${lR} {
      transform: translateY(0px);
    }
  }
`;var zg={exports:{}},uo={},Bg={exports:{}},An={},Hg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=c;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",r="contents",i=/input|select|textarea|button|object|iframe/;function o(f,d){return d.getPropertyValue("overflow")!=="visible"||f.scrollWidth<=0&&f.scrollHeight<=0}function s(f){var d=f.offsetWidth<=0&&f.offsetHeight<=0;if(d&&!f.innerHTML)return!0;try{var p=window.getComputedStyle(f),y=p.getPropertyValue("display");return d?y!==r&&o(f,p):y===n}catch{return console.warn("Failed to inspect element style"),!1}}function a(f){for(var d=f,p=f.getRootNode&&f.getRootNode();d&&d!==document.body;){if(p&&d===p&&(d=p.host.parentNode),s(d))return!1;d=d.parentNode}return!0}function l(f,d){var p=f.nodeName.toLowerCase(),y=i.test(p)&&!f.disabled||p==="a"&&f.href||d;return y&&a(f)}function u(f){var d=f.getAttribute("tabindex");d===null&&(d=void 0);var p=isNaN(d);return(p||d>=0)&&l(f,!p)}function c(f){var d=[].slice.call(f.querySelectorAll("*"),0).reduce(function(p,y){return p.concat(y.shadowRoot?c(y.shadowRoot):[y])},[]);return d.filter(u)}t.exports=e.default})(Hg,Hg.exports);var uR=Hg.exports;Object.defineProperty(An,"__esModule",{value:!0});An.resetState=Gz;An.log=Kz;An.handleBlur=Dl;An.handleFocus=Ll;An.markForFocusLater=Yz;An.returnFocus=Qz;An.popWithoutFocus=Xz;An.setupScopedFocus=Jz;An.teardownScopedFocus=Zz;var Hz=uR,Wz=qz(Hz);function qz(t){return t&&t.__esModule?t:{default:t}}var Os=[],Ko=null,Wg=!1;function Gz(){Os=[]}function Kz(){}function Dl(){Wg=!0}function Ll(){if(Wg){if(Wg=!1,!Ko)return;setTimeout(function(){if(!Ko.contains(document.activeElement)){var t=(0,Wz.default)(Ko)[0]||Ko;t.focus()}},0)}}function Yz(){Os.push(document.activeElement)}function Qz(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{Os.length!==0&&(e=Os.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function Xz(){Os.length>0&&Os.pop()}function Jz(t){Ko=t,window.addEventListener?(window.addEventListener("blur",Dl,!1),document.addEventListener("focus",Ll,!0)):(window.attachEvent("onBlur",Dl),document.attachEvent("onFocus",Ll))}function Zz(){Ko=null,window.addEventListener?(window.removeEventListener("blur",Dl),document.removeEventListener("focus",Ll)):(window.detachEvent("onBlur",Dl),document.detachEvent("onFocus",Ll))}var qg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var n=uR,r=i(n);function i(a){return a&&a.__esModule?a:{default:a}}function o(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?o(a.activeElement.shadowRoot):a.activeElement}function s(a,l){var u=(0,r.default)(a);if(!u.length){l.preventDefault();return}var c=void 0,f=l.shiftKey,d=u[0],p=u[u.length-1],y=o();if(a===y){if(!f)return;c=p}if(p===y&&!f&&(c=d),d===y&&f&&(c=p),c){l.preventDefault(),c.focus();return}var _=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),w=_!=null&&_[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(w){var g=u.indexOf(y);if(g>-1&&(g+=f?-1:1),c=u[g],typeof c>"u"){l.preventDefault(),c=f?p:d,c.focus();return}l.preventDefault(),c.focus()}}t.exports=e.default})(qg,qg.exports);var eB=qg.exports,On={},tB=function(){},nB=tB,xn={},cR={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=n:window.ExecutionEnvironment=n})()})(cR);var rB=cR.exports;Object.defineProperty(xn,"__esModule",{value:!0});xn.canUseDOM=xn.SafeNodeList=xn.SafeHTMLCollection=void 0;var iB=rB,oB=sB(iB);function sB(t){return t&&t.__esModule?t:{default:t}}var hh=oB.default,aB=hh.canUseDOM?window.HTMLElement:{};xn.SafeHTMLCollection=hh.canUseDOM?window.HTMLCollection:{};xn.SafeNodeList=hh.canUseDOM?window.NodeList:{};xn.canUseDOM=hh.canUseDOM;xn.default=aB;Object.defineProperty(On,"__esModule",{value:!0});On.resetState=dB;On.log=hB;On.assertNodeList=fR;On.setElement=pB;On.validateElement=C0;On.hide=mB;On.show=gB;On.documentNotReadyOrSSRTesting=vB;var lB=nB,uB=fB(lB),cB=xn;function fB(t){return t&&t.__esModule?t:{default:t}}var tn=null;function dB(){tn&&(tn.removeAttribute?tn.removeAttribute("aria-hidden"):tn.length!=null?tn.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(tn).forEach(function(t){return t.removeAttribute("aria-hidden")})),tn=null}function hB(){}function fR(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function pB(t){var e=t;if(typeof e=="string"&&cB.canUseDOM){var n=document.querySelectorAll(e);fR(n,e),e=n}return tn=e||tn,tn}function C0(t){var e=t||tn;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,uB.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function mB(t){var e=!0,n=!1,r=void 0;try{for(var i=C0(t)[Symbol.iterator](),o;!(e=(o=i.next()).done);e=!0){var s=o.value;s.setAttribute("aria-hidden","true")}}catch(a){n=!0,r=a}finally{try{!e&&i.return&&i.return()}finally{if(n)throw r}}}function gB(t){var e=!0,n=!1,r=void 0;try{for(var i=C0(t)[Symbol.iterator](),o;!(e=(o=i.next()).done);e=!0){var s=o.value;s.removeAttribute("aria-hidden")}}catch(a){n=!0,r=a}finally{try{!e&&i.return&&i.return()}finally{if(n)throw r}}}function vB(){tn=null}var Gs={};Object.defineProperty(Gs,"__esModule",{value:!0});Gs.resetState=yB;Gs.log=_B;var Va={},Ua={};function IE(t,e){t.classList.remove(e)}function yB(){var t=document.getElementsByTagName("html")[0];for(var e in Va)IE(t,Va[e]);var n=document.body;for(var r in Ua)IE(n,Ua[r]);Va={},Ua={}}function _B(){}var wB=function(e,n){return e[n]||(e[n]=0),e[n]+=1,n},EB=function(e,n){return e[n]&&(e[n]-=1),n},SB=function(e,n,r){r.forEach(function(i){wB(n,i),e.add(i)})},TB=function(e,n,r){r.forEach(function(i){EB(n,i),n[i]===0&&e.remove(i)})};Gs.add=function(e,n){return SB(e.classList,e.nodeName.toLowerCase()=="html"?Va:Ua,n.split(" "))};Gs.remove=function(e,n){return TB(e.classList,e.nodeName.toLowerCase()=="html"?Va:Ua,n.split(" "))};var Ks={};Object.defineProperty(Ks,"__esModule",{value:!0});Ks.log=kB;Ks.resetState=xB;function bB(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var dR=function t(){var e=this;bB(this,t),this.register=function(n){e.openInstances.indexOf(n)===-1&&(e.openInstances.push(n),e.emit("register"))},this.deregister=function(n){var r=e.openInstances.indexOf(n);r!==-1&&(e.openInstances.splice(r,1),e.emit("deregister"))},this.subscribe=function(n){e.subscribers.push(n)},this.emit=function(n){e.subscribers.forEach(function(r){return r(n,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},Xf=new dR;function kB(){console.log("portalOpenInstances ----------"),console.log(Xf.openInstances.length),Xf.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function xB(){Xf=new dR}Ks.default=Xf;var R0={};Object.defineProperty(R0,"__esModule",{value:!0});R0.resetState=PB;R0.log=AB;var IB=Ks,CB=RB(IB);function RB(t){return t&&t.__esModule?t:{default:t}}var vt=void 0,gn=void 0,Ki=[];function PB(){for(var t=[vt,gn],e=0;e<t.length;e++){var n=t[e];n&&n.parentNode&&n.parentNode.removeChild(n)}vt=gn=null,Ki=[]}function AB(){console.log("bodyTrap ----------"),console.log(Ki.length);for(var t=[vt,gn],e=0;e<t.length;e++){var n=t[e],r=n||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function CE(){Ki.length!==0&&Ki[Ki.length-1].focusContent()}function OB(t,e){!vt&&!gn&&(vt=document.createElement("div"),vt.setAttribute("data-react-modal-body-trap",""),vt.style.position="absolute",vt.style.opacity="0",vt.setAttribute("tabindex","0"),vt.addEventListener("focus",CE),gn=vt.cloneNode(),gn.addEventListener("focus",CE)),Ki=e,Ki.length>0?(document.body.firstChild!==vt&&document.body.insertBefore(vt,document.body.firstChild),document.body.lastChild!==gn&&document.body.appendChild(gn)):(vt.parentElement&&vt.parentElement.removeChild(vt),gn.parentElement&&gn.parentElement.removeChild(gn))}CB.default.subscribe(OB);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(q){for(var F=1;F<arguments.length;F++){var ue=arguments[F];for(var x in ue)Object.prototype.hasOwnProperty.call(ue,x)&&(q[x]=ue[x])}return q},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(q){return typeof q}:function(q){return q&&typeof Symbol=="function"&&q.constructor===Symbol&&q!==Symbol.prototype?"symbol":typeof q},i=function(){function q(F,ue){for(var x=0;x<ue.length;x++){var I=ue[x];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(F,I.key,I)}}return function(F,ue,x){return ue&&q(F.prototype,ue),x&&q(F,x),F}}(),o=A,s=Oy,a=S(s),l=An,u=E(l),c=eB,f=S(c),d=On,p=E(d),y=Gs,_=E(y),w=xn,g=S(w),m=Ks,v=S(m);function E(q){if(q&&q.__esModule)return q;var F={};if(q!=null)for(var ue in q)Object.prototype.hasOwnProperty.call(q,ue)&&(F[ue]=q[ue]);return F.default=q,F}function S(q){return q&&q.__esModule?q:{default:q}}function T(q,F){if(!(q instanceof F))throw new TypeError("Cannot call a class as a function")}function b(q,F){if(!q)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return F&&(typeof F=="object"||typeof F=="function")?F:q}function k(q,F){if(typeof F!="function"&&F!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof F);q.prototype=Object.create(F&&F.prototype,{constructor:{value:q,enumerable:!1,writable:!0,configurable:!0}}),F&&(Object.setPrototypeOf?Object.setPrototypeOf(q,F):q.__proto__=F)}var R={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},D=function(F){return F.code==="Tab"||F.keyCode===9},Q=function(F){return F.code==="Escape"||F.keyCode===27},W=0,H=function(q){k(F,q);function F(ue){T(this,F);var x=b(this,(F.__proto__||Object.getPrototypeOf(F)).call(this,ue));return x.setOverlayRef=function(I){x.overlay=I,x.props.overlayRef&&x.props.overlayRef(I)},x.setContentRef=function(I){x.content=I,x.props.contentRef&&x.props.contentRef(I)},x.afterClose=function(){var I=x.props,j=I.appElement,V=I.ariaHideApp,K=I.htmlOpenClassName,oe=I.bodyOpenClassName,Ze=I.parentSelector,Ae=Ze&&Ze().ownerDocument||document;oe&&_.remove(Ae.body,oe),K&&_.remove(Ae.getElementsByTagName("html")[0],K),V&&W>0&&(W-=1,W===0&&p.show(j)),x.props.shouldFocusAfterRender&&(x.props.shouldReturnFocusAfterClose?(u.returnFocus(x.props.preventScroll),u.teardownScopedFocus()):u.popWithoutFocus()),x.props.onAfterClose&&x.props.onAfterClose(),v.default.deregister(x)},x.open=function(){x.beforeOpen(),x.state.afterOpen&&x.state.beforeClose?(clearTimeout(x.closeTimer),x.setState({beforeClose:!1})):(x.props.shouldFocusAfterRender&&(u.setupScopedFocus(x.node),u.markForFocusLater()),x.setState({isOpen:!0},function(){x.openAnimationFrame=requestAnimationFrame(function(){x.setState({afterOpen:!0}),x.props.isOpen&&x.props.onAfterOpen&&x.props.onAfterOpen({overlayEl:x.overlay,contentEl:x.content})})}))},x.close=function(){x.props.closeTimeoutMS>0?x.closeWithTimeout():x.closeWithoutTimeout()},x.focusContent=function(){return x.content&&!x.contentHasFocus()&&x.content.focus({preventScroll:!0})},x.closeWithTimeout=function(){var I=Date.now()+x.props.closeTimeoutMS;x.setState({beforeClose:!0,closesAt:I},function(){x.closeTimer=setTimeout(x.closeWithoutTimeout,x.state.closesAt-Date.now())})},x.closeWithoutTimeout=function(){x.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},x.afterClose)},x.handleKeyDown=function(I){D(I)&&(0,f.default)(x.content,I),x.props.shouldCloseOnEsc&&Q(I)&&(I.stopPropagation(),x.requestClose(I))},x.handleOverlayOnClick=function(I){x.shouldClose===null&&(x.shouldClose=!0),x.shouldClose&&x.props.shouldCloseOnOverlayClick&&(x.ownerHandlesClose()?x.requestClose(I):x.focusContent()),x.shouldClose=null},x.handleContentOnMouseUp=function(){x.shouldClose=!1},x.handleOverlayOnMouseDown=function(I){!x.props.shouldCloseOnOverlayClick&&I.target==x.overlay&&I.preventDefault()},x.handleContentOnClick=function(){x.shouldClose=!1},x.handleContentOnMouseDown=function(){x.shouldClose=!1},x.requestClose=function(I){return x.ownerHandlesClose()&&x.props.onRequestClose(I)},x.ownerHandlesClose=function(){return x.props.onRequestClose},x.shouldBeClosed=function(){return!x.state.isOpen&&!x.state.beforeClose},x.contentHasFocus=function(){return document.activeElement===x.content||x.content.contains(document.activeElement)},x.buildClassName=function(I,j){var V=(typeof j>"u"?"undefined":r(j))==="object"?j:{base:R[I],afterOpen:R[I]+"--after-open",beforeClose:R[I]+"--before-close"},K=V.base;return x.state.afterOpen&&(K=K+" "+V.afterOpen),x.state.beforeClose&&(K=K+" "+V.beforeClose),typeof j=="string"&&j?K+" "+j:K},x.attributesFromObject=function(I,j){return Object.keys(j).reduce(function(V,K){return V[I+"-"+K]=j[K],V},{})},x.state={afterOpen:!1,beforeClose:!1},x.shouldClose=null,x.moveFromContentToOverlay=null,x}return i(F,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(x,I){this.props.isOpen&&!x.isOpen?this.open():!this.props.isOpen&&x.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!I.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var x=this.props,I=x.appElement,j=x.ariaHideApp,V=x.htmlOpenClassName,K=x.bodyOpenClassName,oe=x.parentSelector,Ze=oe&&oe().ownerDocument||document;K&&_.add(Ze.body,K),V&&_.add(Ze.getElementsByTagName("html")[0],V),j&&(W+=1,p.hide(I)),v.default.register(this)}},{key:"render",value:function(){var x=this.props,I=x.id,j=x.className,V=x.overlayClassName,K=x.defaultStyles,oe=x.children,Ze=j?{}:K.content,Ae=V?{}:K.overlay;if(this.shouldBeClosed())return null;var hn={ref:this.setOverlayRef,className:this.buildClassName("overlay",V),style:n({},Ae,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},Mt=n({id:I,ref:this.setContentRef,style:n({},Ze,this.props.style.content),className:this.buildClassName("content",j),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),Zt=this.props.contentElement(Mt,oe);return this.props.overlayElement(hn,Zt)}}]),F}(o.Component);H.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},H.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(g.default),a.default.instanceOf(w.SafeHTMLCollection),a.default.instanceOf(w.SafeNodeList),a.default.arrayOf(a.default.instanceOf(g.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},e.default=H,t.exports=e.default})(Bg,Bg.exports);var NB=Bg.exports;function hR(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function pR(t){function e(n){var r=this.constructor.getDerivedStateFromProps(t,n);return r??null}this.setState(e.bind(this))}function mR(t,e){try{var n=this.props,r=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}hR.__suppressDeprecationWarning=!0;pR.__suppressDeprecationWarning=!0;mR.__suppressDeprecationWarning=!0;function DB(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var n=null,r=null,i=null;if(typeof e.componentWillMount=="function"?n="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?i="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(i="UNSAFE_componentWillUpdate"),n!==null||r!==null||i!==null){var o=t.displayName||t.name,s=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+o+" uses "+s+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(i!==null?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=hR,e.componentWillReceiveProps=pR),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=mR;var a=e.componentDidUpdate;e.componentDidUpdate=function(u,c,f){var d=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:f;a.call(this,u,c,d)}}return t}const LB=Object.freeze(Object.defineProperty({__proto__:null,polyfill:DB},Symbol.toStringTag,{value:"Module"})),MB=QE(LB);Object.defineProperty(uo,"__esModule",{value:!0});uo.bodyOpenClassName=uo.portalClassName=void 0;var RE=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},jB=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),gR=A,Jf=pu(gR),$B=cb,Zf=pu($B),VB=Oy,te=pu(VB),UB=NB,PE=pu(UB),FB=On,zB=HB(FB),Qr=xn,AE=pu(Qr),BB=MB;function HB(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function pu(t){return t&&t.__esModule?t:{default:t}}function WB(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function OE(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function qB(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var GB=uo.portalClassName="ReactModalPortal",KB=uo.bodyOpenClassName="ReactModal__Body--open",Oi=Qr.canUseDOM&&Zf.default.createPortal!==void 0,NE=function(e){return document.createElement(e)},DE=function(){return Oi?Zf.default.createPortal:Zf.default.unstable_renderSubtreeIntoContainer};function nc(t){return t()}var mu=function(t){qB(e,t);function e(){var n,r,i,o;WB(this,e);for(var s=arguments.length,a=Array(s),l=0;l<s;l++)a[l]=arguments[l];return o=(r=(i=OE(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(a))),i),i.removePortal=function(){!Oi&&Zf.default.unmountComponentAtNode(i.node);var u=nc(i.props.parentSelector);u&&u.contains(i.node)?u.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(u){i.portal=u},i.renderPortal=function(u){var c=DE(),f=c(i,Jf.default.createElement(PE.default,RE({defaultStyles:e.defaultStyles},u)),i.node);i.portalRef(f)},r),OE(i,o)}return jB(e,[{key:"componentDidMount",value:function(){if(Qr.canUseDOM){Oi||(this.node=NE("div")),this.node.className=this.props.portalClassName;var r=nc(this.props.parentSelector);r.appendChild(this.node),!Oi&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var i=nc(r.parentSelector),o=nc(this.props.parentSelector);return{prevParent:i,nextParent:o}}},{key:"componentDidUpdate",value:function(r,i,o){if(Qr.canUseDOM){var s=this.props,a=s.isOpen,l=s.portalClassName;r.portalClassName!==l&&(this.node.className=l);var u=o.prevParent,c=o.nextParent;c!==u&&(u.removeChild(this.node),c.appendChild(this.node)),!(!r.isOpen&&!a)&&!Oi&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!Qr.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,i=Date.now(),o=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||i+this.props.closeTimeoutMS);o?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,o-i)):this.removePortal()}}},{key:"render",value:function(){if(!Qr.canUseDOM||!Oi)return null;!this.node&&Oi&&(this.node=NE("div"));var r=DE();return r(Jf.default.createElement(PE.default,RE({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){zB.setElement(r)}}]),e}(gR.Component);mu.propTypes={isOpen:te.default.bool.isRequired,style:te.default.shape({content:te.default.object,overlay:te.default.object}),portalClassName:te.default.string,bodyOpenClassName:te.default.string,htmlOpenClassName:te.default.string,className:te.default.oneOfType([te.default.string,te.default.shape({base:te.default.string.isRequired,afterOpen:te.default.string.isRequired,beforeClose:te.default.string.isRequired})]),overlayClassName:te.default.oneOfType([te.default.string,te.default.shape({base:te.default.string.isRequired,afterOpen:te.default.string.isRequired,beforeClose:te.default.string.isRequired})]),appElement:te.default.oneOfType([te.default.instanceOf(AE.default),te.default.instanceOf(Qr.SafeHTMLCollection),te.default.instanceOf(Qr.SafeNodeList),te.default.arrayOf(te.default.instanceOf(AE.default))]),onAfterOpen:te.default.func,onRequestClose:te.default.func,closeTimeoutMS:te.default.number,ariaHideApp:te.default.bool,shouldFocusAfterRender:te.default.bool,shouldCloseOnOverlayClick:te.default.bool,shouldReturnFocusAfterClose:te.default.bool,preventScroll:te.default.bool,parentSelector:te.default.func,aria:te.default.object,data:te.default.object,role:te.default.string,contentLabel:te.default.string,shouldCloseOnEsc:te.default.bool,overlayRef:te.default.func,contentRef:te.default.func,id:te.default.string,overlayElement:te.default.func,contentElement:te.default.func};mu.defaultProps={isOpen:!1,portalClassName:GB,bodyOpenClassName:KB,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,n){return Jf.default.createElement("div",e,n)},contentElement:function(e,n){return Jf.default.createElement("div",e,n)}};mu.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,BB.polyfill)(mu);uo.default=mu;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=uo,r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}e.default=r.default,t.exports=e.default})(zg,zg.exports);var YB=zg.exports;const Gg=td(YB);function QB(){return h.jsxs(XB,{children:[h.jsxs(JB,{children:[h.jsx(ZB,{children:h.jsx("img",{src:en,alt:"picture"})}),h.jsxs(e8,{children:[h.jsx("h2",{children:"책정보"}),h.jsxs("ul",{children:[h.jsx("li",{children:"책제목"}),h.jsx("li",{children:"저자"}),h.jsx("li",{children:"출판사"}),h.jsx("li",{children:"가격"})]})]})]}),h.jsxs(t8,{children:[h.jsx("h2",{children:"리뷰(댓글)"}),h.jsxs(n8,{children:[h.jsx("input",{placeholder:"닉네임"}),h.jsx("textarea",{placeholder:"리뷰를 작성해주세요"}),h.jsx("button",{children:"제출하기"})]}),h.jsxs(r8,{children:[h.jsx("p",{children:"홍길동"}),h.jsx("p",{children:"|"}),h.jsx("p",{children:"이 책 매우 재밌습니다!"})]})]})]})}const XB=C.div`
  padding: 20px 0;
`,JB=C.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  margin: 0 auto 10px auto;
  padding: 20px;
  background-color: rgb(251, 251, 251);
  border: 1px solid #e1e1e1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`,ZB=C.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  background-color: whitesmoke;
  margin-right: 100px;
  img {
    width: 350px;
    height: 350px;
  }
  @media screen and (max-width: 600px) {
    margin-right: 0px;
    width: 300px;
    height: 300px;
    img {
      width: 250px;
      height: 250px;
    }
  }
`,e8=C.div`
  padding: 20px;
  background-color: whitesmoke;
  width: 360px;
  height: 360px;
  ul {
    list-style-type: square;
    margin-left: -20px;
    line-height: 2;
  }
  @media screen and (max-width: 600px) {
    margin-right: 0px;
    width: 260px;
    height: 260px;
  }
`,t8=C.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: rgb(251, 251, 251);
  border: 1px solid #e1e1e1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`,n8=C.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  input {
    width: 10%;
  }
  textarea {
    margin-top: 6px;
    width: 90%;
    height: 100px;
  }
  input,
  textarea {
    font-size: 0.9rem;
    font-family: Arial, Helvetica, sans-serif;
  }
  button {
    width: 10%;
    padding: 10px;
    margin-top: 6px;
    border-radius: 4px;
  }
  @media screen and (max-width: 600px) {
    input {
      width: 96.9%;
    }
    textarea {
      width: 97.7%;
    }
    button {
      width: 100%;
    }
  }
`,r8=C.div`
  display: flex;
  margin-top: 20px;
  background-color: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  p {
    width: 50%;
  }
  @media screen and (max-width: 600px) {
    p {
      font-size: 0.64rem;
    }
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i8{constructor(e,n){this._delegate=e,this.firebase=n,uf(e,new Yn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Tb(this._delegate)))}_getService(e,n=di){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=di){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){uf(this._delegate,e)}_addOrOverwriteComponent(e){Sb(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o8={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},LE=new po("app-compat","Firebase",o8);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s8(t){const e={},n={__esModule:!0,initializeApp:o,app:i,registerVersion:Gt,setLogLevel:kb,onLog:bb,apps:null,SDK_VERSION:kr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:HO}};n.default=n,Object.defineProperty(n,"apps",{get:s});function r(u){delete e[u]}function i(u){if(u=u||di,!W_(e,u))throw LE.create("no-app",{appName:u});return e[u]}i.App=t;function o(u,c={}){const f=Bl(u,c);if(W_(e,f.name))return e[f.name];const d=new t(f,n);return e[f.name]=d,d}function s(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,f=c.replace("-compat","");if(gr(u)&&u.type==="PUBLIC"){const d=(p=i())=>{if(typeof p[f]!="function")throw LE.create("invalid-app-argument",{appName:c});return p[f]()};u.serviceProps!==void 0&&af(d,u.serviceProps),n[f]=d,t.prototype[f]=function(...p){return this._getService.bind(this,c).apply(this,u.multipleInstances?p:[])}}return u.type==="PUBLIC"?n[f]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(){const t=s8(i8);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:vR,extendNamespace:e,createSubscribe:yb,ErrorFactory:po,deepExtend:af});function e(n){af(t,n)}return t}const a8=vR();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=new yd("@firebase/app-compat"),l8="@firebase/app-compat",u8="0.2.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c8(t){Gt(l8,u8,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(b2()&&self.firebase!==void 0){ME.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&ME.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const ph=a8;c8();var f8="firebase",d8="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ph.registerVersion(f8,d8,"app-compat");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR="firebasestorage.googleapis.com",_R="storageBucket",h8=2*60*1e3,p8=10*60*1e3,m8=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends Pn{constructor(e,n,r=0){super(Ap(e),`Firebase Storage: ${n} (${Ap(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,je.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ap(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ie;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ie||(Ie={}));function Ap(t){return"storage/"+t}function P0(){const t="An unknown error occurred, please check the error payload for server response.";return new je(Ie.UNKNOWN,t)}function g8(t){return new je(Ie.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function v8(t){return new je(Ie.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function y8(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new je(Ie.UNAUTHENTICATED,t)}function _8(){return new je(Ie.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function w8(t){return new je(Ie.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function wR(){return new je(Ie.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ER(){return new je(Ie.CANCELED,"User canceled the upload/download.")}function E8(t){return new je(Ie.INVALID_URL,"Invalid URL '"+t+"'.")}function S8(t){return new je(Ie.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function T8(){return new je(Ie.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+_R+"' property when initializing the app?")}function SR(){return new je(Ie.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function b8(){return new je(Ie.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function k8(){return new je(Ie.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function x8(t){return new je(Ie.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ls(t){return new je(Ie.INVALID_ARGUMENT,t)}function TR(){return new je(Ie.APP_DELETED,"The Firebase app was deleted.")}function bR(t){return new je(Ie.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Fa(t,e){return new je(Ie.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function aa(t){throw new je(Ie.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=St.makeFromUrl(e,n)}catch{return new St(e,"")}if(r.path==="")return r;throw S8(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${f}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},_=n===yR?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",g=new RegExp(`^https?://${_}/${i}/${w}`,"i"),v=[{regex:a,indices:l,postModify:o},{regex:p,indices:y,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<v.length;E++){const S=v[E],T=S.regex.exec(e);if(T){const b=T[S.indices.bucket];let k=T[S.indices.path];k||(k=""),r=new St(b,k),S.postModify(r);break}}if(r==null)throw E8(e);return r}}class I8{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C8(t,e,n){let r=1,i=null,o=null,s=!1,a=0;function l(){return a===2}let u=!1;function c(...w){u||(u=!0,e.apply(null,w))}function f(w){i=setTimeout(()=>{i=null,t(p,l())},w)}function d(){o&&clearTimeout(o)}function p(w,...g){if(u){d();return}if(w){d(),c.call(null,w,...g);return}if(l()||s){d(),c.call(null,w,...g);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,f(v)}let y=!1;function _(w){y||(y=!0,d(),!u&&(i!==null?(w||(a=2),clearTimeout(i),f(0)):w||(a=1)))}return f(0),o=setTimeout(()=>{s=!0,_(!0)},n),_}function R8(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P8(t){return t!==void 0}function A8(t){return typeof t=="function"}function O8(t){return typeof t=="object"&&!Array.isArray(t)}function mh(t){return typeof t=="string"||t instanceof String}function jE(t){return A0()&&t instanceof Blob}function A0(){return typeof Blob<"u"}function Kg(t,e,n,r){if(r<e)throw ls(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ls(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function kR(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Yi||(Yi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xR(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N8{constructor(e,n,r,i,o,s,a,l,u,c,f,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=f,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,y)=>{this.resolve_=p,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new rc(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const s=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&o.addUploadProgressListener(s),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(s),this.pendingConnection_=null;const a=o.getErrorCode()===Yi.NO_ERROR,l=o.getStatus();if(!a||xR(l,this.additionalRetryCodes_)&&this.retry){const c=o.getErrorCode()===Yi.ABORT;r(!1,new rc(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new rc(u,o))})},n=(r,i)=>{const o=this.resolve_,s=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());P8(l)?o(l):o()}catch(l){s(l)}else if(a!==null){const l=P0();l.serverResponse=a.getErrorText(),this.errorCallback_?s(this.errorCallback_(a,l)):s(l)}else if(i.canceled){const l=this.appDelete_?TR():ER();s(l)}else{const l=wR();s(l)}};this.canceled_?n(!1,new rc(!1,null,!0)):this.backoffId_=C8(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&R8(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class rc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function D8(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function L8(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function M8(t,e){e&&(t["X-Firebase-GMPID"]=e)}function j8(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function $8(t,e,n,r,i,o,s=!0){const a=kR(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return M8(u,e),D8(u,n),L8(u,o),j8(u,r),new N8(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V8(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function U8(...t){const e=V8();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(A0())return new Blob(t);throw new je(Ie.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function F8(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z8(t){if(typeof atob>"u")throw x8("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Op{constructor(e,n){this.data=e,this.contentType=n||null}}function IR(t,e){switch(t){case ln.RAW:return new Op(CR(e));case ln.BASE64:case ln.BASE64URL:return new Op(RR(t,e));case ln.DATA_URL:return new Op(H8(e),W8(e))}throw P0()}function CR(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const o=r,s=t.charCodeAt(++n);r=65536|(o&1023)<<10|s&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function B8(t){let e;try{e=decodeURIComponent(t)}catch{throw Fa(ln.DATA_URL,"Malformed data URL.")}return CR(e)}function RR(t,e){switch(t){case ln.BASE64:{const i=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(i||o)throw Fa(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case ln.BASE64URL:{const i=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(i||o)throw Fa(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=z8(e)}catch(i){throw i.message.includes("polyfill")?i:Fa(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class PR{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Fa(ln.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=q8(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function H8(t){const e=new PR(t);return e.base64?RR(ln.BASE64,e.rest):B8(e.rest)}function W8(t){return new PR(t).contentType}function q8(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n){let r=0,i="";jE(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(jE(this.data_)){const r=this.data_,i=F8(r,e,n);return i===null?null:new nr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new nr(r,!0)}}static getBlob(...e){if(A0()){const n=e.map(r=>r instanceof nr?r.data_:r);return new nr(U8.apply(null,n))}else{const n=e.map(s=>mh(s)?IR(ln.RAW,s).data:s.data_);let r=0;n.forEach(s=>{r+=s.byteLength});const i=new Uint8Array(r);let o=0;return n.forEach(s=>{for(let a=0;a<s.length;a++)i[o++]=s[a]}),new nr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(t){let e;try{e=JSON.parse(t)}catch{return null}return O8(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G8(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function K8(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function AR(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y8(t,e){return e}class Rt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||Y8}}let ic=null;function Q8(t){return!mh(t)||t.length<2?t:AR(t)}function gh(){if(ic)return ic;const t=[];t.push(new Rt("bucket")),t.push(new Rt("generation")),t.push(new Rt("metageneration")),t.push(new Rt("name","fullPath",!0));function e(o,s){return Q8(s)}const n=new Rt("name");n.xform=e,t.push(n);function r(o,s){return s!==void 0?Number(s):s}const i=new Rt("size");return i.xform=r,t.push(i),t.push(new Rt("timeCreated")),t.push(new Rt("updated")),t.push(new Rt("md5Hash",null,!0)),t.push(new Rt("cacheControl",null,!0)),t.push(new Rt("contentDisposition",null,!0)),t.push(new Rt("contentEncoding",null,!0)),t.push(new Rt("contentLanguage",null,!0)),t.push(new Rt("contentType",null,!0)),t.push(new Rt("metadata","customMetadata",!0)),ic=t,ic}function X8(t,e){function n(){const r=t.bucket,i=t.fullPath,o=new St(r,i);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function J8(t,e,n){const r={};r.type="file";const i=n.length;for(let o=0;o<i;o++){const s=n[o];r[s.local]=s.xform(r,e[s.server])}return X8(r,t),r}function OR(t,e,n){const r=O0(e);return r===null?null:J8(t,r,n)}function Z8(t,e,n,r){const i=O0(e);if(i===null||!mh(i.downloadTokens))return null;const o=i.downloadTokens;if(o.length===0)return null;const s=encodeURIComponent;return o.split(",").map(u=>{const c=t.bucket,f=t.fullPath,d="/b/"+s(c)+"/o/"+s(f),p=Ii(d,n,r),y=kR({alt:"media",token:u});return p+y})[0]}function N0(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const o=e[i];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E="prefixes",VE="items";function e7(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[$E])for(const i of n[$E]){const o=i.replace(/\/$/,""),s=t._makeStorageReference(new St(e,o));r.prefixes.push(s)}if(n[VE])for(const i of n[VE]){const o=t._makeStorageReference(new St(e,i.name));r.items.push(o)}return r}function t7(t,e,n){const r=O0(n);return r===null?null:e7(t,e,r)}class Ir{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t){if(!t)throw P0()}function vh(t,e){function n(r,i){const o=OR(t,i,e);return Kn(o!==null),o}return n}function n7(t,e){function n(r,i){const o=t7(t,e,i);return Kn(o!==null),o}return n}function r7(t,e){function n(r,i){const o=OR(t,i,e);return Kn(o!==null),Z8(o,i,t.host,t._protocol)}return n}function Ys(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=_8():i=y8():n.getStatus()===402?i=v8(t.bucket):n.getStatus()===403?i=w8(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function yh(t){const e=Ys(t);function n(r,i){let o=e(r,i);return r.getStatus()===404&&(o=g8(t.path)),o.serverResponse=i.serverResponse,o}return n}function NR(t,e,n){const r=e.fullServerUrl(),i=Ii(r,t.host,t._protocol),o="GET",s=t.maxOperationRetryTime,a=new Ir(i,o,vh(t,n),s);return a.errorHandler=yh(e),a}function i7(t,e,n,r,i){const o={};e.isRoot?o.prefix="":o.prefix=e.path+"/",n&&n.length>0&&(o.delimiter=n),r&&(o.pageToken=r),i&&(o.maxResults=i);const s=e.bucketOnlyServerUrl(),a=Ii(s,t.host,t._protocol),l="GET",u=t.maxOperationRetryTime,c=new Ir(a,l,n7(t,e.bucket),u);return c.urlParams=o,c.errorHandler=Ys(e),c}function o7(t,e,n){const r=e.fullServerUrl(),i=Ii(r,t.host,t._protocol),o="GET",s=t.maxOperationRetryTime,a=new Ir(i,o,r7(t,n),s);return a.errorHandler=yh(e),a}function s7(t,e,n,r){const i=e.fullServerUrl(),o=Ii(i,t.host,t._protocol),s="PATCH",a=N0(n,r),l={"Content-Type":"application/json; charset=utf-8"},u=t.maxOperationRetryTime,c=new Ir(o,s,vh(t,r),u);return c.headers=l,c.body=a,c.errorHandler=yh(e),c}function a7(t,e){const n=e.fullServerUrl(),r=Ii(n,t.host,t._protocol),i="DELETE",o=t.maxOperationRetryTime;function s(l,u){}const a=new Ir(r,i,s,o);return a.successCodes=[200,204],a.errorHandler=yh(e),a}function l7(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function DR(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=l7(null,e)),r}function u7(t,e,n,r,i){const o=e.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let E=0;E<2;E++)v=v+Math.random().toString().slice(2);return v}const l=a();s["Content-Type"]="multipart/related; boundary="+l;const u=DR(e,r,i),c=N0(u,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",p=nr.getBlob(f,r,d);if(p===null)throw SR();const y={name:u.fullPath},_=Ii(o,t.host,t._protocol),w="POST",g=t.maxUploadRetryTime,m=new Ir(_,w,vh(t,n),g);return m.urlParams=y,m.headers=s,m.body=p.uploadData(),m.errorHandler=Ys(e),m}class ed{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function D0(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Kn(!1)}return Kn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function c7(t,e,n,r,i){const o=e.bucketOnlyServerUrl(),s=DR(e,r,i),a={name:s.fullPath},l=Ii(o,t.host,t._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":s.contentType,"Content-Type":"application/json; charset=utf-8"},f=N0(s,n),d=t.maxUploadRetryTime;function p(_){D0(_);let w;try{w=_.getResponseHeader("X-Goog-Upload-URL")}catch{Kn(!1)}return Kn(mh(w)),w}const y=new Ir(l,u,p,d);return y.urlParams=a,y.headers=c,y.body=f,y.errorHandler=Ys(e),y}function f7(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function o(u){const c=D0(u,["active","final"]);let f=null;try{f=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Kn(!1)}f||Kn(!1);const d=Number(f);return Kn(!isNaN(d)),new ed(d,r.size(),c==="final")}const s="POST",a=t.maxUploadRetryTime,l=new Ir(n,s,o,a);return l.headers=i,l.errorHandler=Ys(e),l}const UE=256*1024;function d7(t,e,n,r,i,o,s,a){const l=new ed(0,0);if(s?(l.current=s.current,l.total=s.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw b8();const u=l.total-l.current;let c=u;i>0&&(c=Math.min(c,i));const f=l.current,d=f+c;let p="";c===0?p="finalize":u===c?p="upload, finalize":p="upload";const y={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${l.current}`},_=r.slice(f,d);if(_===null)throw SR();function w(E,S){const T=D0(E,["active","final"]),b=l.current+c,k=r.size();let R;return T==="final"?R=vh(e,o)(E,S):R=null,new ed(b,k,T==="final",R)}const g="POST",m=e.maxUploadRetryTime,v=new Ir(n,g,w,m);return v.headers=y,v.body=_.uploadData(),v.progressCallback=a||null,v.errorHandler=Ys(t),v}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h7={STATE_CHANGED:"state_changed"},At={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Np(t){switch(t){case"running":case"pausing":case"canceling":return At.RUNNING;case"paused":return At.PAUSED;case"success":return At.SUCCESS;case"canceled":return At.CANCELED;case"error":return At.ERROR;default:return At.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p7{constructor(e,n,r){if(A8(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const o=e;this.next=o.next,this.error=o.error,this.complete=o.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class m7{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Yi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Yi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Yi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw aa("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw aa("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw aa("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw aa("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw aa("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class g7 extends m7{initXhr(){this.xhr_.responseType="text"}}function $n(){return new g7}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=gh(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Ie.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const o=this.isExponentialBackoffExpired();if(xR(i.status,[]))if(o)i=wR();else{this.sleepTime=Math.max(this.sleepTime*2,m8),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Ie.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,o)=>{this._resolve=i,this._reject=o,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=c7(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,$n,e,n);this._request=i,i.getPromise().then(o=>{this._request=void 0,this._uploadUrl=o,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=f7(this._ref.storage,this._ref._location,e,this._blob),o=this._ref.storage._makeRequest(i,$n,n,r);this._request=o,o.getPromise().then(s=>{s=s,this._request=void 0,this._updateProgress(s.current),this._needToFetchStatus=!1,s.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=UE*this._chunkMultiplier,n=new ed(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,o)=>{let s;try{s=d7(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(s,$n,i,o,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){UE*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=NR(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,$n,e,n);this._request=i,i.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=u7(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,$n,e,n);this._request=i,i.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=ER(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Np(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const o=new p7(n||void 0,r||void 0,i||void 0);return this._addObserver(o),()=>{this._removeObserver(o)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Np(this._state)){case At.SUCCESS:xo(this._resolve.bind(null,this.snapshot))();break;case At.CANCELED:case At.ERROR:const n=this._reject;xo(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Np(this._state)){case At.RUNNING:case At.PAUSED:e.next&&xo(e.next.bind(e,this.snapshot))();break;case At.SUCCESS:e.complete&&xo(e.complete.bind(e))();break;case At.CANCELED:case At.ERROR:e.error&&xo(e.error.bind(e,this._error))();break;default:e.error&&xo(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n){this._service=e,n instanceof St?this._location=n:this._location=St.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new co(e,n)}get root(){const e=new St(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return AR(this._location.path)}get storage(){return this._service}get parent(){const e=G8(this._location.path);if(e===null)return null;const n=new St(this._location.bucket,e);return new co(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw bR(e)}}function v7(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new LR(t,new nr(e),n)}function y7(t){const e={prefixes:[],items:[]};return MR(t,e).then(()=>e)}async function MR(t,e,n){const i=await jR(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await MR(t,e,i.nextPageToken)}function jR(t,e){e!=null&&typeof e.maxResults=="number"&&Kg("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=i7(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,$n)}function _7(t){t._throwIfRoot("getMetadata");const e=NR(t.storage,t._location,gh());return t.storage.makeRequestWithTokens(e,$n)}function w7(t,e){t._throwIfRoot("updateMetadata");const n=s7(t.storage,t._location,e,gh());return t.storage.makeRequestWithTokens(n,$n)}function E7(t){t._throwIfRoot("getDownloadURL");const e=o7(t.storage,t._location,gh());return t.storage.makeRequestWithTokens(e,$n).then(n=>{if(n===null)throw k8();return n})}function S7(t){t._throwIfRoot("deleteObject");const e=a7(t.storage,t._location);return t.storage.makeRequestWithTokens(e,$n)}function $R(t,e){const n=K8(t._location.path,e),r=new St(t._location.bucket,n);return new co(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T7(t){return/^[A-Za-z]+:\/\//.test(t)}function b7(t,e){return new co(t,e)}function VR(t,e){if(t instanceof L0){const n=t;if(n._bucket==null)throw T8();const r=new co(n,n._bucket);return e!=null?VR(r,e):r}else return e!==void 0?$R(t,e):t}function k7(t,e){if(e&&T7(e)){if(t instanceof L0)return b7(t,e);throw ls("To use ref(service, url), the first argument must be a Storage instance.")}else return VR(t,e)}function FE(t,e){const n=e==null?void 0:e[_R];return n==null?null:St.makeFromBucketSpec(n,t)}function x7(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:vb(i,t.app.options.projectId))}class L0{constructor(e,n,r,i,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=yR,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=h8,this._maxUploadRetryTime=p8,this._requests=new Set,i!=null?this._bucket=St.makeFromBucketSpec(i,this._host):this._bucket=FE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=St.makeFromBucketSpec(this._url,e):this._bucket=FE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Kg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Kg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new co(this,e)}_makeRequest(e,n,r,i,o=!0){if(this._deleted)return new I8(TR());{const s=$8(e,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const zE="@firebase/storage",BE="0.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I7="storage";function C7(t,e,n){return t=Ge(t),v7(t,e,n)}function R7(t){return t=Ge(t),_7(t)}function P7(t,e){return t=Ge(t),w7(t,e)}function A7(t,e){return t=Ge(t),jR(t,e)}function O7(t){return t=Ge(t),y7(t)}function N7(t){return t=Ge(t),E7(t)}function D7(t){return t=Ge(t),S7(t)}function HE(t,e){return t=Ge(t),k7(t,e)}function L7(t,e){return $R(t,e)}function M7(t,e,n,r={}){x7(t,e,n,r)}function j7(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new L0(n,r,i,e,kr)}function $7(){gr(new Yn(I7,j7,"PUBLIC").setMultipleInstances(!0)),Gt(zE,BE,""),Gt(zE,BE,"esm2017")}$7();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new oc(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new oc(r,this,this._ref))},n)}on(e,n,r,i){let o;return n&&(typeof n=="function"?o=s=>n(new oc(s,this,this._ref)):o={next:n.next?s=>n.next(new oc(s,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,o,r||void 0,i||void 0)}}class qE{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new fr(e,this._service))}get items(){return this._delegate.items.map(e=>new fr(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=L7(this._delegate,e);return new fr(n,this.storage)}get root(){return new fr(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new fr(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new WE(C7(this._delegate,e,n),this)}putString(e,n=ln.RAW,r){this._throwIfRoot("putString");const i=IR(n,e),o=Object.assign({},r);return o.contentType==null&&i.contentType!=null&&(o.contentType=i.contentType),new WE(new LR(this._delegate,new nr(i.data,!0),o),this)}listAll(){return O7(this._delegate).then(e=>new qE(e,this.storage))}list(e){return A7(this._delegate,e||void 0).then(n=>new qE(n,this.storage))}getMetadata(){return R7(this._delegate)}updateMetadata(e){return P7(this._delegate,e)}getDownloadURL(){return N7(this._delegate)}delete(){return this._throwIfRoot("delete"),D7(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw bR(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(GE(e))throw ls("ref() expected a child path but got a URL, use refFromURL instead.");return new fr(HE(this._delegate,e),this)}refFromURL(e){if(!GE(e))throw ls("refFromURL() expected a full URL but got a child path, use ref() instead.");try{St.makeFromUrl(e,this._delegate.host)}catch{throw ls("refFromUrl() expected a valid full URL but got an invalid one.")}return new fr(HE(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){M7(this._delegate,e,n,r)}}function GE(t){return/^[A-Za-z]+:\/\//.test(t)}const V7="@firebase/storage-compat",U7="0.3.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F7="storage-compat";function z7(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new UR(n,r)}function B7(t){const e={TaskState:At,TaskEvent:h7,StringFormat:ln,Storage:UR,Reference:fr};t.INTERNAL.registerComponent(new Yn(F7,z7,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(V7,U7)}B7(ph);const H7="/assets/BookAddIcon-821769f4.jpeg",W7={apiKey:"AIzaSyAu1pu4r4m_kJLEyeL7Jgc6tWz94Upzk98",authDomain:"book-review-a7be9.firebaseapp.com",projectId:"book-review-a7be9",storageBucket:"book-review-a7be9.appspot.com",messagingSenderId:"905824431279",appId:"1:905824431279:web:f56fdfc06bc60dd733785a",measurementId:"G-L9QXD3H138"};ph.initializeApp(W7);const q7=ph.storage();function G7({closeBookAddModal:t}){const[e,n]=A.useState(null),[r,i]=A.useState(""),[o,s]=A.useState(""),[a,l]=A.useState(""),[u,c]=A.useState(""),f=p=>{const y=p.target.files;y&&y.length>0&&n(y[0])},d=async()=>{if(!e)return;const y=q7.ref().child(e.name);await y.put(e);const _=await y.getDownloadURL();console.log("책 제목:",r),console.log("저자:",o),console.log("출판사:",a),console.log("가격:",u),console.log("이미지 URL:",_),t()};return h.jsxs(K7,{children:[h.jsx("h2",{children:"책 추가하기"}),h.jsx("img",{src:e?URL.createObjectURL(e):H7,alt:"책 이미지"}),h.jsxs(Y7,{children:[h.jsx("input",{id:"fileInput",type:"file",onChange:f}),h.jsx("input",{type:"text",placeholder:"책제목을 기입해주세요",onChange:p=>i(p.target.value)}),h.jsx("input",{type:"text",placeholder:"저자를 기입해주세요",onChange:p=>s(p.target.value)}),h.jsx("input",{type:"text",placeholder:"출판사를 기입해주세요",onChange:p=>l(p.target.value)}),h.jsx("input",{type:"number",placeholder:"가격을 기입해주세요",onChange:p=>c(p.target.value)})]}),h.jsxs(Q7,{children:[h.jsx("button",{onClick:d,children:"완료하기"}),h.jsx("button",{onClick:t,children:"창닫기"})]})]})}const K7=C.div`
  img {
    width: 200px;
    height: 200px;
    border-radius: 20px;
    margin-bottom: 10px;
  }
`,Y7=C.div`
  display: flex;
  flex-direction: column;
  input,
  button,
  label {
    margin-bottom: 10px;
  }
  button {
    width: 20%;
  }
  input {
    width: 40%;
  }
  input:nth-child(n + 2) {
    border: none;
    border-radius: 4px;
    padding: 4px 6px;
    background-color: skyblue;
  }
`,Q7=C.div`
  position: absolute;
  bottom: 10px;
  left: 20px;
  button {
    margin-right: 4px;
    background-color: lightblue;
    border: unset;
    border-radius: 4px;
    padding: 4px 10px;
    position: relative;
    transition: all 250ms;
    overflow: hidden;
    z-index: 1;
    font-weight: 1000;
    font-size: 17px;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 0;
      border-radius: 4px;
      background-color: lightcoral;
      z-index: -1;
      transition: all 250ms;
    }
    &:hover {
      cursor: pointer;
      color: #fff;
    }
    &:hover::before {
      width: 100%;
    }
  }
`,X7={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",height:"80%",width:"80%"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.8)"}},J7={content:{top:"40%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",height:"54%",width:"40%"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.8)"}};Gg.setAppElement("#root");function Z7(){const[t,e]=A.useState(!1),[n,r]=A.useState(!1);function i(){e(!0)}function o(){e(!1)}function s(){r(!0)}function a(){r(!1)}return h.jsxs(eH,{children:[h.jsx(tH,{children:h.jsx("input",{placeholder:"검색창"})}),h.jsx(nH,{children:h.jsx("button",{onClick:s,children:"책 추가하기"})}),h.jsx(rH,{children:h.jsxs(iH,{children:[h.jsxs(KE,{children:[h.jsxs(sc,{children:[h.jsx(Or,{children:h.jsx("img",{src:en,onClick:i})}),h.jsxs(Nr,{onClick:i,children:[h.jsx("p",{children:"책제목: 고양이3"}),h.jsx("p",{children:"저자: 집사3"}),h.jsx("p",{children:"출판사: 집사협회"}),h.jsx("p",{children:"가격: 1004원"})]})]}),h.jsxs(ac,{children:[h.jsx(Or,{children:h.jsx("img",{src:en,onClick:i})}),h.jsxs(Nr,{onClick:i,children:[h.jsx("p",{children:"책제목: 고양이3"}),h.jsx("p",{children:"저자: 집사3"}),h.jsx("p",{children:"출판사: 집사협회"}),h.jsx("p",{children:"가격: 1004원"})]})]}),h.jsxs(sc,{children:[h.jsx(Or,{children:h.jsx("img",{src:en,onClick:i})}),h.jsxs(Nr,{onClick:i,children:[h.jsx("p",{children:"책제목: 고양이3"}),h.jsx("p",{children:"저자: 집사3"}),h.jsx("p",{children:"출판사: 집사협회"}),h.jsx("p",{children:"가격: 1004원"})]})]}),h.jsxs(ac,{children:[h.jsx(Or,{children:h.jsx("img",{src:en,onClick:i})}),h.jsxs(Nr,{onClick:i,children:[h.jsx("p",{children:"책제목: 고양이3"}),h.jsx("p",{children:"저자: 집사3"}),h.jsx("p",{children:"출판사: 집사협회"}),h.jsx("p",{children:"가격: 1004원"})]})]})]}),h.jsxs(KE,{children:[h.jsxs(sc,{children:[h.jsx(Or,{children:h.jsx("img",{src:en,onClick:i})}),h.jsxs(Nr,{onClick:i,children:[h.jsx("p",{children:"책제목: 고양이3"}),h.jsx("p",{children:"저자: 집사3"}),h.jsx("p",{children:"출판사: 집사협회"}),h.jsx("p",{children:"가격: 1004원"})]})]}),h.jsxs(ac,{children:[h.jsx(Or,{children:h.jsx("img",{src:en,onClick:i})}),h.jsxs(Nr,{onClick:i,children:[h.jsx("p",{children:"책제목: 고양이3"}),h.jsx("p",{children:"저자: 집사3"}),h.jsx("p",{children:"출판사: 집사협회"}),h.jsx("p",{children:"가격: 1004원"})]})]}),h.jsxs(sc,{children:[h.jsx(Or,{children:h.jsx("img",{src:en,onClick:i})}),h.jsxs(Nr,{onClick:i,children:[h.jsx("p",{children:"책제목: 고양이3"}),h.jsx("p",{children:"저자: 집사3"}),h.jsx("p",{children:"출판사: 집사협회"}),h.jsx("p",{children:"가격: 1004원"})]})]}),h.jsxs(ac,{children:[h.jsx(Or,{children:h.jsx("img",{src:en,onClick:i})}),h.jsxs(Nr,{onClick:i,children:[h.jsx("p",{children:"책제목: 고양이3"}),h.jsx("p",{children:"저자: 집사3"}),h.jsx("p",{children:"출판사: 집사협회"}),h.jsx("p",{children:"가격: 1004원"})]})]})]})]})}),h.jsxs(Gg,{isOpen:t,onRequestClose:o,style:X7,children:[h.jsx(QB,{}),h.jsx(YE,{children:h.jsx("button",{onClick:o,children:"X"})})]}),h.jsxs(Gg,{isOpen:n,onRequestClose:a,style:J7,children:[h.jsx(G7,{closeBookAddModal:a}),h.jsx(YE,{children:h.jsx("button",{onClick:a,children:"X"})})]})]})}const eH=C.div`
  background-color: #fff;
`,tH=C.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
  input {
    width: 300px;
    height: 20px;
  }
`,nH=C.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
  button {
    width: 150px;
    height: 50px;
    &:hover {
      cursor: pointer;
      background-color: #fff;
    }
  }
`,rH=C.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`,iH=C.div`
  width: 90%;
`,KE=C.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`,sc=C.div`
  display: flex;
  width: 50%;
  padding: 10px;
`,Or=C.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 140px;
    height: 200px;
    cursor: pointer;
  }
`,Nr=C.div`
  width: 50%;
  padding: 10px;
  p {
    cursor: pointer;
    font-weight: bold;
  }
`,ac=C.div`
  display: flex;
  padding: 10px;
  width: 50%;
`,YE=C.div`
  position: absolute;
  top: 10px;
  right: 10px;
  button {
    border: none;
    background-color: #fff;
    font-size: 1.2rem;
    &:hover {
      cursor: pointer;
      color: red;
    }
  }
`,oH=l4`
  body, html {
    margin: 0;
    padding: 0;
  }
  body {
    background: url(${u4});
  }
`;function sH(){return h.jsxs(h.Fragment,{children:[h.jsx(oH,{}),h.jsxs("div",{className:"App",children:[h.jsx(C5,{}),h.jsxs(XL,{children:[h.jsx(Dr,{path:"/",element:h.jsx(v$,{})}),h.jsx(Dr,{path:"/Mypage",element:h.jsx($z,{})}),h.jsx(Dr,{path:"/Boardwrite",element:h.jsx(yz,{})}),h.jsx(Dr,{path:"/Boarddetail/:id",element:h.jsx(Az,{})}),h.jsx(Dr,{path:"/List",element:h.jsx(Z7,{})}),h.jsx(Dr,{path:"/Board",element:h.jsx(ez,{})}),h.jsx(Dr,{path:"/Login",element:h.jsx(A5,{})})]}),h.jsx(w$,{})]})]})}Dp.createRoot(document.getElementById("root")).render(h.jsx(Ht.StrictMode,{children:h.jsx(rM,{children:h.jsx(sH,{})})}));
