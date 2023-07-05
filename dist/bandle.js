/*! For license information please see bandle.js.LICENSE.txt */
(()=>{"use strict";var e={251:(e,t,r)=>{var n=r(294),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,a={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,n)&&!o.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:i,type:e,key:c,ref:u,props:a,_owner:s.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},408:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),o=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),h=Symbol.iterator,_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,p={};function b(e,t,r){this.props=e,this.context=t,this.refs=p,this.updater=r||_}function y(){}function x(e,t,r){this.props=e,this.context=t,this.refs=p,this.updater=r||_}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=b.prototype;var v=x.prototype=new y;v.constructor=x,m(v,b.prototype),v.isPureReactComponent=!0;var j=Array.isArray,g=Object.prototype.hasOwnProperty,S={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,n){var i,a={},l=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(l=""+t.key),t)g.call(t,i)&&!N.hasOwnProperty(i)&&(a[i]=t[i]);var o=arguments.length-2;if(1===o)a.children=n;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(i in o=e.defaultProps)void 0===a[i]&&(a[i]=o[i]);return{$$typeof:r,type:e,key:l,ref:s,props:a,_owner:S.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var L=/\/+/g;function k(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function w(e,t,i,a,l){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var o=!1;if(null===e)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case r:case n:o=!0}}if(o)return l=l(o=e),e=""===a?"."+k(o,0):a,j(l)?(i="",null!=e&&(i=e.replace(L,"$&/")+"/"),w(l,t,i,"",(function(e){return e}))):null!=l&&(E(l)&&(l=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,i+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(L,"$&/")+"/")+e)),t.push(l)),1;if(o=0,a=""===a?".":a+":",j(e))for(var c=0;c<e.length;c++){var u=a+k(s=e[c],c);o+=w(s,t,i,u,l)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)o+=w(s=s.value,t,i,u=a+k(s,c++),l);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function C(e,t,r){if(null==e)return e;var n=[],i=0;return w(e,n,"","",(function(e){return t.call(r,e,i++)})),n}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},O={transition:null},D={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:O,ReactCurrentOwner:S};t.Children={map:C,forEach:function(e,t,r){C(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=i,t.Profiler=l,t.PureComponent=x,t.StrictMode=a,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=m({},e.props),a=e.key,l=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,s=S.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in t)g.call(t,c)&&!N.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==o?o[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:r,type:e.type,key:a,ref:l,props:i,_owner:s}},t.createContext=function(e){return(e={$$typeof:o,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=R,t.createFactory=function(e){var t=R.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return P.current.useCallback(e,t)},t.useContext=function(e){return P.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return P.current.useDeferredValue(e)},t.useEffect=function(e,t){return P.current.useEffect(e,t)},t.useId=function(){return P.current.useId()},t.useImperativeHandle=function(e,t,r){return P.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return P.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return P.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return P.current.useMemo(e,t)},t.useReducer=function(e,t,r){return P.current.useReducer(e,t,r)},t.useRef=function(e){return P.current.useRef(e)},t.useState=function(e){return P.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return P.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return P.current.useTransition()},t.version="18.2.0"},294:(e,t,r)=>{e.exports=r(408)},893:(e,t,r)=>{e.exports=r(251)}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}(()=>{var e=r(893);function t(){let[t,r]=React.useState(!1),[n,i]=React.useState(!1);return(0,e.jsxs)("header",{className:"header",children:[(0,e.jsx)("a",{href:"/",className:"header__logo","aria-label":"Яндекс.Дом"}),(0,e.jsx)("button",{className:"header__menu","aria-expanded":String(t),onClick:()=>{n||i(!0),r(!t)},children:(0,e.jsx)("span",{className:"header__menu-text a11y-hidden",children:t?"Закрыть меню":"Открыть меню"})}),(0,e.jsxs)("ul",{className:"header__links"+(t?" header__links_opened":"")+(n?" header__links-toggled":""),children:[(0,e.jsx)("li",{className:"header__item",children:(0,e.jsx)("a",{className:"header__link header__link_current",href:"/","aria-current":"page",children:"Сводка"})}),(0,e.jsx)("li",{className:"header__item",children:(0,e.jsx)("a",{className:"header__link",href:"/devices",children:"Устройства"})}),(0,e.jsx)("li",{className:"header__item",children:(0,e.jsx)("a",{className:"header__link",href:"/scripts",children:"Сценарии"})})]})]})}function n(t){const r=React.useRef(),{onSize:n}=t;return React.useEffect((()=>{const e=r.current.offsetWidth,t=r.current.offsetHeight;n&&n({width:e,height:t})})),(0,e.jsx)("li",{ref:r,className:"event"+(t.slim?" event_slim":""),onMouseMove:null,children:(0,e.jsxs)("button",{className:"event__button",children:[(0,e.jsx)("span",{className:`event__icon event__icon_${t.icon}`,role:"img","aria-label":t.iconLabel}),(0,e.jsx)("h4",{className:"event__title",children:t.title}),t.subtitle&&(0,e.jsx)("span",{className:"event__subtitle",children:t.subtitle})]})})}const i={all:{title:"Все",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"D-Link Omna 180 Cam",subtitle:"Включится в 17:00"},{icon:"temp",iconLabel:"Температура",title:"Elgato Eve Degree Connected",subtitle:"Выключено до 17:00"},{icon:"light",iconLabel:"Освещение",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"Включится в 17:00"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"}]},kitchen:{title:"Кухня",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включено"},{icon:"temp",iconLabel:"Температура",title:"Elgato Eve Degree Connected",subtitle:"Выключено до 17:00"}]},hall:{title:"Зал",items:[{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Выключено"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Выключено"}]},lights:{title:"Лампочки",items:[{icon:"light",iconLabel:"Освещение",title:"D-Link Omna 180 Cam",subtitle:"Включится в 17:00"},{icon:"light",iconLabel:"Освещение",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"Включится в 17:00"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"}]},cameras:{title:"Камеры",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"}]}},a=({onSize:t,type:r})=>{const[a,l]=React.useState(i[r].items),[s,o]=React.useState(!1);return React.useEffect((()=>{if("all"===r){const e=structuredClone(i.all.items),t=structuredClone(i.all.items);t.length=512;for(let r=7,n=0;r<t.length;r++,n++)n===e.length&&(n=0),t[r]=e[n];i.all.items=t,l(t)}}),[]),(0,e.jsx)("ul",{className:"section__panel-list",onMouseMove:"all"===r?()=>{s||o(!0)}:null,children:a.map(((r,i)=>(s||i<15)&&(0,e.jsx)(n,{...r,onSize:t},i)))})},l=Object.keys(i);function s(){const t=React.useRef(),r=React.useRef(!1),[s,o]=React.useState(""),[c,u]=React.useState(!1);React.useEffect((()=>{s||r.current||(r.current=!0,o(new URLSearchParams(location.search).get("tab")||"all"))}));let f=[];const d=e=>{f.push(e)};return React.useEffect((()=>{const e=f.reduce(((e,t)=>e+t.width),0)>t.current.offsetWidth;e!==c&&u(e)})),(0,e.jsxs)("main",{className:"main",children:[(0,e.jsxs)("section",{className:"section main__general",children:[(0,e.jsx)("h2",{className:"section__title section__title-header section__main-title",children:"Главное"}),(0,e.jsxs)("div",{className:"hero-dashboard",children:[(0,e.jsxs)("div",{className:"hero-dashboard__primary",children:[(0,e.jsx)("h3",{className:"hero-dashboard__title",children:"Привет, Геннадий!"}),(0,e.jsx)("p",{className:"hero-dashboard__subtitle",children:"Двери и окна закрыты, сигнализация включена."}),(0,e.jsxs)("ul",{className:"hero-dashboard__info",children:[(0,e.jsxs)("li",{className:"hero-dashboard__item",children:[(0,e.jsx)("div",{className:"hero-dashboard__item-title",children:"Дома"}),(0,e.jsxs)("div",{className:"hero-dashboard__item-details",children:["+23",(0,e.jsx)("span",{className:"a11y-hidden",children:"°"})]})]}),(0,e.jsxs)("li",{className:"hero-dashboard__item",children:[(0,e.jsx)("div",{className:"hero-dashboard__item-title",children:"За окном"}),(0,e.jsxs)("div",{className:"hero-dashboard__item-details",children:["+19",(0,e.jsx)("span",{className:"a11y-hidden",children:"°"}),(0,e.jsx)("div",{className:"hero-dashboard__icon hero-dashboard__icon_rain",role:"img","aria-label":"Дождь"})]})]})]})]}),(0,e.jsxs)("ul",{className:"hero-dashboard__schedule",children:[(0,e.jsx)(n,{icon:"temp",iconLabel:"Температура",title:"Philips Cooler",subtitle:"Начнет охлаждать в 16:30"}),(0,e.jsx)(n,{icon:"light",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включится в 17:00"}),(0,e.jsx)(n,{icon:"light",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включится в 17:00"})]})]})]}),(0,e.jsxs)("section",{className:"section main__scripts",children:[(0,e.jsx)("h2",{className:"section__title section__title-header",children:"Избранные сценарии"}),(0,e.jsxs)("ul",{className:"event-grid",children:[(0,e.jsx)(n,{slim:!0,icon:"light2",iconLabel:"Освещение",title:"Выключить весь свет в доме и во дворе"}),(0,e.jsx)(n,{slim:!0,icon:"schedule",iconLabel:"Расписание",title:"Я ухожу"}),(0,e.jsx)(n,{slim:!0,icon:"light2",iconLabel:"Освещение",title:"Включить свет в коридоре"}),(0,e.jsx)(n,{slim:!0,icon:"temp2",iconLabel:"Температура",title:"Набрать горячую ванну",subtitle:"Начнётся в 18:00"}),(0,e.jsx)(n,{slim:!0,icon:"temp2",iconLabel:"Температура",title:"Сделать пол тёплым во всей квартире"})]})]}),(0,e.jsxs)("section",{className:"section main__devices",children:[(0,e.jsxs)("div",{className:"section__title",children:[(0,e.jsx)("h2",{className:"section__title-header",children:"Избранные устройства"}),(0,e.jsx)("select",{className:"section__select",defaultValue:"all",onInput:e=>{o(e.target.value)},children:l.map((t=>(0,e.jsx)("option",{value:t,children:i[t].title},t)))}),(0,e.jsx)("ul",{role:"tablist",className:"section__tabs",children:l.map((t=>(0,e.jsx)("li",{role:"tab","aria-selected":String(t===s),tabIndex:t===s?"0":void 0,className:"section__tab"+(t===s?" section__tab_active":""),id:`tab_${t}`,"aria-controls":`panel_${t}`,onClick:()=>o(t),children:i[t].title},t)))})]}),(0,e.jsxs)("div",{className:"section__panel-wrapper",ref:t,children:[l.map((t=>(0,e.jsx)("div",{role:"tabpanel",className:"section__panel"+(t===s?"":" section__panel_hidden"),id:`panel_${t}`,"aria-labelledby":`tab_${t}`,children:t===s&&(0,e.jsx)(a,{onSize:d,type:t})},t))),"all"===s&&(0,e.jsx)("div",{className:"section__arrow",onClick:()=>{const e=t.current.querySelector(".section__panel:not(.section__panel_hidden)");e&&e.scrollTo({left:e.scrollLeft+400,behavior:"smooth"})}})]})]})]})}ReactDOM.createRoot(document.getElementById("app")).render((0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t,{}),(0,e.jsx)(s,{})]}))})()})();