(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{FGyW:function(t,e,n){"use strict";n.d(e,"a",(function(){return G})),n.d(e,"b",(function(){return nt}));var o=n("q1tI"),r=n.n(o);n("17x9");var s=n("i8i4"),i=n.n(s),a=!1,c=r.a.createContext(null),u="unmounted",l="exited",d="entering",f="entered",p="exiting",m=function(t){var e,n;function o(e,n){var o;o=t.call(this,e,n)||this;var r,s=n&&!n.isMounting?e.enter:e.appear;return o.appearStatus=null,e.in?s?(r=l,o.appearStatus=d):r=f:r=e.unmountOnExit||e.mountOnEnter?u:l,o.state={status:r},o.nextCallback=null,o}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.getDerivedStateFromProps=function(t,e){return t.in&&e.status===u?{status:l}:null};var s=o.prototype;return s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==d&&n!==f&&(e=d):n!==d&&n!==f||(e=p)}this.updateStatus(!1,e)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var t,e,n,o=this.props.timeout;return t=e=n=o,null!=o&&"number"!==typeof o&&(t=o.exit,e=o.enter,n=void 0!==o.appear?o.appear:e),{exit:t,enter:e,appear:n}},s.updateStatus=function(t,e){void 0===t&&(t=!1),null!==e?(this.cancelNextCallback(),e===d?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===l&&this.setState({status:u})},s.performEnter=function(t){var e=this,n=this.props.enter,o=this.context?this.context.isMounting:t,r=this.props.nodeRef?[o]:[i.a.findDOMNode(this),o],s=r[0],c=r[1],u=this.getTimeouts(),l=o?u.appear:u.enter;!t&&!n||a?this.safeSetState({status:f},(function(){e.props.onEntered(s)})):(this.props.onEnter(s,c),this.safeSetState({status:d},(function(){e.props.onEntering(s,c),e.onTransitionEnd(l,(function(){e.safeSetState({status:f},(function(){e.props.onEntered(s,c)}))}))})))},s.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),o=this.props.nodeRef?void 0:i.a.findDOMNode(this);e&&!a?(this.props.onExit(o),this.safeSetState({status:p},(function(){t.props.onExiting(o),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:l},(function(){t.props.onExited(o)}))}))}))):this.safeSetState({status:l},(function(){t.props.onExited(o)}))},s.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},s.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,e.nextCallback=null,t(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},s.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:i.a.findDOMNode(this),o=null==t&&!this.props.addEndListener;if(n&&!o){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],s=r[0],a=r[1];this.props.addEndListener(s,a)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},s.render=function(){var t=this.state.status;if(t===u)return null;var e=this.props,n=e.children,o=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,function(t,e){if(null==t)return{};var n,o,r={},s=Object.keys(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.a.createElement(c.Provider,{value:null},"function"===typeof n?n(t,o):r.a.cloneElement(r.a.Children.only(n),o))},o}(r.a.Component);function v(){}m.contextType=c,m.propTypes={},m.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:v,onEntering:v,onEntered:v,onExit:v,onExiting:v,onExited:v},m.UNMOUNTED=u,m.EXITED=l,m.ENTERING=d,m.ENTERED=f,m.EXITING=p;var h=m;function g(t){var e,n,o="";if("string"===typeof t||"number"===typeof t)o+=t;else if("object"===typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=g(t[e]))&&(o&&(o+=" "),o+=n);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}var y=function(){for(var t,e,n=0,o="";n<arguments.length;)(t=arguments[n++])&&(e=g(t))&&(o&&(o+=" "),o+=e);return o};function E(){return(E=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function b(t,e){if(null==t)return{};var n,o,r={},s=Object.keys(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}function O(t){return"number"===typeof t&&!isNaN(t)}function T(t){return"boolean"===typeof t}function C(t){return"string"===typeof t}function x(t){return"function"===typeof t}function I(t){return C(t)||x(t)?t:null}function N(t){return 0===t||t}var j=!("undefined"===typeof window||!window.document||!window.document.createElement);function _(t){return Object(o.isValidElement)(t)||C(t)||x(t)||O(t)}var R={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},k={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default",DARK:"dark"};function S(t){var e,n,r=t.enter,s=t.exit,i=t.duration,a=void 0===i?750:i,c=t.appendPosition,u=void 0!==c&&c,l=t.collapse,d=void 0===l||l,f=t.collapseDuration,p=void 0===f?300:f;return Array.isArray(a)&&2===a.length?(e=a[0],n=a[1]):e=n=a,function(t){var i=t.children,a=t.position,c=t.preventExitTransition,l=t.done,f=b(t,["children","position","preventExitTransition","done"]),m=u?r+"--"+a:r,v=u?s+"--"+a:s,g=function t(){var e=f.nodeRef.current;e&&(e.removeEventListener("animationend",t),d?function(t,e,n){void 0===n&&(n=300);var o=t.scrollHeight,r=t.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all "+n+"ms",requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout((function(){return e()}),n)}))}))}(e,l,p):l())};return Object(o.createElement)(h,Object.assign({},f,{timeout:c?d?p:50:{enter:e,exit:d?n+p:n+50},onEnter:function(){var t=f.nodeRef.current;t&&(t.classList.add(m),t.style.animationFillMode="forwards",t.style.animationDuration=e+"ms")},onEntered:function(){var t=f.nodeRef.current;t&&(t.classList.remove(m),t.style.cssText="")},onExit:c?g:function(){var t=f.nodeRef.current;t&&(t.classList.add(v),t.style.animationFillMode="forwards",t.style.animationDuration=n+"ms",t.addEventListener("animationend",g))},unmountOnExit:!0}),i)}}var L={list:new Map,emitQueue:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t,e){if(e){var n=this.list.get(t).filter((function(t){return t!==e}));return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit:function(t){var e=this.emitQueue.get(t);return e&&(e.forEach((function(t){return clearTimeout(t)})),this.emitQueue.delete(t)),this},emit:function(t){for(var e=this,n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];this.list.has(t)&&this.list.get(t).forEach((function(n){var r=setTimeout((function(){n.apply(void 0,o)}),0);e.emitQueue.has(t)||e.emitQueue.set(t,[]),e.emitQueue.get(t).push(r)}))}};function w(t,e){void 0===e&&(e=!1);var n=Object(o.useRef)(t);return Object(o.useEffect)((function(){e&&(n.current=t)})),n.current}function D(t,e){switch(e.type){case"ADD":return[].concat(t,[e.toastId]).filter((function(t){return t!==e.staleId}));case"REMOVE":return N(e.toastId)?t.filter((function(t){return t!==e.toastId})):[]}}function P(t){var e=Object(o.useReducer)((function(t){return t+1}),0)[1],n=Object(o.useReducer)(D,[]),r=n[0],s=n[1],i=Object(o.useRef)(null),a=w(0),c=w([]),u=w({}),l=w({toastKey:1,displayedToast:0,props:t,containerId:null,isToastActive:d,getToast:function(t){return u[t]||null}});function d(t){return-1!==r.indexOf(t)}function f(t){var e=t.containerId,n=l.props,o=n.limit,r=n.enableMultiContainer;o&&(!e||l.containerId===e&&r)&&(a-=c.length,c=[])}function p(t){var e=c.length;if((a=N(t)?a-1:a-l.displayedToast)<0&&(a=0),e>0){var n=N(t)?1:l.props.limit;if(1===e||1===n)l.displayedToast++,m();else{var o=n>e?e:n;l.displayedToast=o;for(var r=0;r<o;r++)m()}}s({type:"REMOVE",toastId:t})}function m(){var t=c.shift(),e=t.toastContent,n=t.toastProps,o=t.staleId;setTimeout((function(){h(e,n,o)}),500)}function v(t,n){var r=n.delay,s=n.staleId,d=b(n,["delay","staleId"]);if(_(t)&&!function(t){var e=t.containerId,n=t.toastId,o=t.updateId;return!!(!i.current||l.props.enableMultiContainer&&e!==l.props.containerId||l.isToastActive(n)&&null==o)}(d)){var f=d.toastId,m=d.updateId,v=l.props,g=function(){return p(f)},y=!(0,l.isToastActive)(f);y&&a++;var E,N,j={toastId:f,updateId:m,key:d.key||l.toastKey++,type:d.type,closeToast:g,closeButton:d.closeButton,rtl:v.rtl,position:d.position||v.position,transition:d.transition||v.transition,className:I(d.className||v.toastClassName),bodyClassName:I(d.bodyClassName||v.bodyClassName),style:d.style||v.toastStyle,bodyStyle:d.bodyStyle||v.bodyStyle,onClick:d.onClick||v.onClick,pauseOnHover:T(d.pauseOnHover)?d.pauseOnHover:v.pauseOnHover,pauseOnFocusLoss:T(d.pauseOnFocusLoss)?d.pauseOnFocusLoss:v.pauseOnFocusLoss,draggable:T(d.draggable)?d.draggable:v.draggable,draggablePercent:O(d.draggablePercent)?d.draggablePercent:v.draggablePercent,closeOnClick:T(d.closeOnClick)?d.closeOnClick:v.closeOnClick,progressClassName:I(d.progressClassName||v.progressClassName),progressStyle:d.progressStyle||v.progressStyle,autoClose:(E=d.autoClose,N=v.autoClose,!1===E||O(E)&&E>0?E:N),hideProgressBar:T(d.hideProgressBar)?d.hideProgressBar:v.hideProgressBar,progress:d.progress,role:C(d.role)?d.role:v.role,deleteToast:function(){!function(t){delete u[t],e()}(f)}};x(d.onOpen)&&(j.onOpen=d.onOpen),x(d.onClose)&&(j.onClose=d.onClose);var R=v.closeButton;!1===d.closeButton||_(d.closeButton)?R=d.closeButton:!0===d.closeButton&&(R=!_(v.closeButton)||v.closeButton),j.closeButton=R;var k=t;Object(o.isValidElement)(t)&&!C(t.type)?k=Object(o.cloneElement)(t,{closeToast:g}):x(t)&&(k=t({closeToast:g})),v.limit&&v.limit>0&&a>v.limit&&y?c.push({toastContent:k,toastProps:j,staleId:s}):O(r)&&r>0?setTimeout((function(){h(k,j,s)}),r):h(k,j,s)}}function h(t,e,n){var o=e.toastId;u[o]={content:t,props:e},s({type:"ADD",toastId:o,staleId:n})}return Object(o.useEffect)((function(){return l.containerId=t.containerId,L.cancelEmit(3).on(0,v).on(1,(function(t){return i.current&&p(t)})).on(5,f).emit(2,l),function(){return L.emit(3,l)}}),[]),Object(o.useEffect)((function(){l.isToastActive=d,l.displayedToast=r.length,L.emit(4,r.length,t.containerId)}),[r]),Object(o.useEffect)((function(){l.props=t})),{getToastToRender:function(e){for(var n={},o=t.newestOnTop?Object.keys(u).reverse():Object.keys(u),r=0;r<o.length;r++){var s=u[o[r]],i=s.props.position;n[i]||(n[i]=[]),n[i].push(s)}return Object.keys(n).map((function(t){return e(t,n[t])}))},collection:u,containerRef:i,isToastActive:d}}function M(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function A(t){var e=Object(o.useState)(!0),n=e[0],r=e[1],s=Object(o.useState)(!1),i=s[0],a=s[1],c=Object(o.useRef)(null),u=w({start:0,x:0,y:0,deltaX:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null}),l=w(t,!0),d=t.autoClose,f=t.pauseOnHover,p=t.closeToast,m=t.onClick,v=t.closeOnClick;function h(e){var n=c.current;u.canCloseOnClick=!0,u.canDrag=!0,u.boundingRect=n.getBoundingClientRect(),n.style.transition="",u.start=u.x=M(e.nativeEvent),u.removalDistance=n.offsetWidth*(t.draggablePercent/100)}function g(){if(u.boundingRect){var e=u.boundingRect,n=e.top,o=e.bottom,r=e.left,s=e.right;t.pauseOnHover&&u.x>=r&&u.x<=s&&u.y>=n&&u.y<=o?E():y()}}function y(){r(!0)}function E(){r(!1)}function b(t){var e=c.current;u.canDrag&&(n&&E(),u.x=M(t),u.deltaX=u.x-u.start,u.y=function(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}(t),u.start!==u.x&&(u.canCloseOnClick=!1),e.style.transform="translateX("+u.deltaX+"px)",e.style.opacity=""+(1-Math.abs(u.deltaX/u.removalDistance)))}function O(){var e=c.current;if(u.canDrag){if(u.canDrag=!1,Math.abs(u.deltaX)>u.removalDistance)return a(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform="translateX(0)",e.style.opacity="1"}}Object(o.useEffect)((function(){return x(t.onOpen)&&t.onOpen(Object(o.isValidElement)(t.children)&&t.children.props),function(){x(l.onClose)&&l.onClose(Object(o.isValidElement)(l.children)&&l.children.props)}}),[]),Object(o.useEffect)((function(){return t.draggable&&(document.addEventListener("mousemove",b),document.addEventListener("mouseup",O),document.addEventListener("touchmove",b),document.addEventListener("touchend",O)),function(){t.draggable&&(document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",O),document.removeEventListener("touchmove",b),document.removeEventListener("touchend",O))}}),[t.draggable]),Object(o.useEffect)((function(){return t.pauseOnFocusLoss&&(window.addEventListener("focus",y),window.addEventListener("blur",E)),function(){t.pauseOnFocusLoss&&(window.removeEventListener("focus",y),window.removeEventListener("blur",E))}}),[t.pauseOnFocusLoss]);var T={onMouseDown:h,onTouchStart:h,onMouseUp:g,onTouchEnd:g};return d&&f&&(T.onMouseEnter=E,T.onMouseLeave=y),v&&(T.onClick=function(t){m&&m(t),u.canCloseOnClick&&p()}),{playToast:y,pauseToast:E,isRunning:n,preventExitTransition:i,toastRef:c,eventHandlers:T}}function B(t){var e=t.closeToast,n=t.type,r=t.ariaLabel,s=void 0===r?"close":r;return Object(o.createElement)("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(t){t.stopPropagation(),e(t)},"aria-label":s},Object(o.createElement)("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Object(o.createElement)("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function F(t){var e,n,r=t.delay,s=t.isRunning,i=t.closeToast,a=t.type,c=t.hide,u=t.className,l=t.style,d=t.controlledProgress,f=t.progress,p=t.rtl,m=t.isIn,v=E({},l,{animationDuration:r+"ms",animationPlayState:s?"running":"paused",opacity:c?0:1});d&&(v.transform="scaleX("+f+")");var h=["Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar--"+a,(e={},e["Toastify__progress-bar--rtl"]=p,e)],g=x(u)?u({rtl:p,type:a,defaultClassName:y.apply(void 0,h)}):y.apply(void 0,[].concat(h,[u])),b=((n={})[d&&f>=1?"onTransitionEnd":"onAnimationEnd"]=d&&f<1?null:function(){m&&i()},n);return Object(o.createElement)("div",Object.assign({className:g,style:v},b))}F.defaultProps={type:k.DEFAULT,hide:!1};var H=function(t){var e,n=A(t),r=n.isRunning,s=n.preventExitTransition,i=n.toastRef,a=n.eventHandlers,c=t.closeButton,u=t.children,l=t.autoClose,d=t.onClick,f=t.type,p=t.hideProgressBar,m=t.closeToast,v=t.transition,h=t.position,g=t.className,E=t.style,b=t.bodyClassName,O=t.bodyStyle,T=t.progressClassName,C=t.progressStyle,I=t.updateId,N=t.role,j=t.progress,_=t.rtl,R=t.toastId,k=t.deleteToast,S=["Toastify__toast","Toastify__toast--"+f,(e={},e["Toastify__toast--rtl"]=_,e)],L=x(g)?g({rtl:_,position:h,type:f,defaultClassName:y.apply(void 0,S)}):y.apply(void 0,[].concat(S,[g])),w=!!j;return Object(o.createElement)(v,{in:t.in,appear:!0,done:k,position:h,preventExitTransition:s,nodeRef:i},Object(o.createElement)("div",Object.assign({id:R,onClick:d,className:L||void 0},a,{style:E,ref:i}),Object(o.createElement)("div",Object.assign({},t.in&&{role:N},{className:x(b)?b({type:f}):y("Toastify__toast-body",b),style:O}),u),function(t){if(t){var e={closeToast:m,type:f};return x(t)?t(e):Object(o.isValidElement)(t)?Object(o.cloneElement)(t,e):void 0}}(c),(l||w)&&Object(o.createElement)(F,Object.assign({},I&&!w?{key:"pb-"+I}:{},{rtl:_,delay:l,isRunning:r,isIn:t.in,closeToast:m,hide:p,type:f,style:C,className:T,controlledProgress:w,progress:j}))))},X=S({enter:"Toastify__bounce-enter",exit:"Toastify__bounce-exit",appendPosition:!0}),U=function(t){var e=t.children,n=t.className,r=t.style,s=b(t,["children","className","style"]);return delete s.in,Object(o.createElement)("div",{className:n,style:r},o.Children.map(e,(function(t){return Object(o.cloneElement)(t,s)})))},G=function(t){var e=P(t),n=e.getToastToRender,r=e.containerRef,s=e.isToastActive,i=t.className,a=t.style,c=t.rtl,u=t.containerId;return Object(o.createElement)("div",{ref:r,className:"Toastify",id:u},n((function(t,e){var n,r,u={className:x(i)?i({position:t,rtl:c,defaultClassName:y("Toastify__toast-container","Toastify__toast-container--"+t,(n={},n["Toastify__toast-container--rtl"]=c,n))}):y("Toastify__toast-container","Toastify__toast-container--"+t,(r={},r["Toastify__toast-container--rtl"]=c,r),I(i)),style:0===e.length?E({},a,{pointerEvents:"none"}):E({},a)};return Object(o.createElement)(U,Object.assign({},u,{key:"container-"+t}),e.map((function(t){var e=t.content,n=t.props;return Object(o.createElement)(H,Object.assign({},n,{in:s(n.toastId),key:"toast-"+n.key,closeButton:!0===n.closeButton?B:n.closeButton}),e)})))})))};G.defaultProps={position:R.TOP_RIGHT,transition:X,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:B,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,role:"alert"};var Q,V,W,K=new Map,q=[],z=!1;function Y(){return K.size>0}function J(t,e){var n=function(t){return Y()?K.get(t||Q):null}(e.containerId);return n?n.getToast(t):null}function Z(){return(Math.random().toString(36)+Date.now().toString(36)).substr(2,10)}function $(t){return t&&(C(t.toastId)||O(t.toastId))?t.toastId:Z()}function tt(t,e){return Y()?L.emit(0,t,e):(q.push({content:t,options:e}),z&&j&&(z=!1,V=document.createElement("div"),document.body.appendChild(V),Object(s.render)(Object(o.createElement)(G,Object.assign({},W)),V))),e.toastId}function et(t,e){return E({},e,{type:e&&e.type||t,toastId:$(e)})}var nt=function(t,e){return tt(t,et(k.DEFAULT,e))};nt.success=function(t,e){return tt(t,et(k.SUCCESS,e))},nt.info=function(t,e){return tt(t,et(k.INFO,e))},nt.error=function(t,e){return tt(t,et(k.ERROR,e))},nt.warning=function(t,e){return tt(t,et(k.WARNING,e))},nt.dark=function(t,e){return tt(t,et(k.DARK,e))},nt.warn=nt.warning,nt.dismiss=function(t){return Y()&&L.emit(1,t)},nt.clearWaitingQueue=function(t){return void 0===t&&(t={}),Y()&&L.emit(5,t)},nt.isActive=function(t){var e=!1;return K.forEach((function(n){n.isToastActive&&n.isToastActive(t)&&(e=!0)})),e},nt.update=function(t,e){void 0===e&&(e={}),setTimeout((function(){var n=J(t,e);if(n){var o=n.props,r=n.content,s=E({},o,e,{toastId:e.toastId||t,updateId:Z()});s.toastId!==t&&(s.staleId=t);var i="undefined"!==typeof s.render?s.render:r;delete s.render,tt(i,s)}}),0)},nt.done=function(t){nt.update(t,{progress:1})},nt.onChange=function(t){return x(t)&&L.on(4,t),function(){x(t)&&L.off(4,t)}},nt.configure=function(t){void 0===t&&(t={}),z=!0,W=t},nt.POSITION=R,nt.TYPE=k,L.on(2,(function(t){Q=t.containerId||t,K.set(Q,t),q.forEach((function(t){L.emit(0,t.content,t.options)})),q=[]})).on(3,(function(t){K.delete(t.containerId||t),0===K.size&&L.off(0).off(1).off(5),j&&V&&document.body.removeChild(V)}))}}]);