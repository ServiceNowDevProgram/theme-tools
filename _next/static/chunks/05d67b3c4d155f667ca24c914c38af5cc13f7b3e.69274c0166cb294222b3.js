(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{FGyW:function(t,e,n){"use strict";n.d(e,"a",(function(){return B})),n.d(e,"b",(function(){return J}));var o=n("q1tI"),r=n.n(o);n("17x9");var i=n("i8i4"),s=n.n(i),a=!1,u=r.a.createContext(null),c=function(t){var e,n;function o(e,n){var o;o=t.call(this,e,n)||this;var r,i=n&&!n.isMounting?e.enter:e.appear;return o.appearStatus=null,e.in?i?(r="exited",o.appearStatus="entering"):r="entered":r=e.unmountOnExit||e.mountOnEnter?"unmounted":"exited",o.state={status:r},o.nextCallback=null,o}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.getDerivedStateFromProps=function(t,e){return t.in&&"unmounted"===e.status?{status:"exited"}:null};var i=o.prototype;return i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(e="entering"):"entering"!==n&&"entered"!==n||(e="exiting")}this.updateStatus(!1,e)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var t,e,n,o=this.props.timeout;return t=e=n=o,null!=o&&"number"!==typeof o&&(t=o.exit,e=o.enter,n=void 0!==o.appear?o.appear:e),{exit:t,enter:e,appear:n}},i.updateStatus=function(t,e){void 0===t&&(t=!1),null!==e?(this.cancelNextCallback(),"entering"===e?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},i.performEnter=function(t){var e=this,n=this.props.enter,o=this.context?this.context.isMounting:t,r=this.props.nodeRef?[o]:[s.a.findDOMNode(this),o],i=r[0],u=r[1],c=this.getTimeouts(),l=o?c.appear:c.enter;!t&&!n||a?this.safeSetState({status:"entered"},(function(){e.props.onEntered(i)})):(this.props.onEnter(i,u),this.safeSetState({status:"entering"},(function(){e.props.onEntering(i,u),e.onTransitionEnd(l,(function(){e.safeSetState({status:"entered"},(function(){e.props.onEntered(i,u)}))}))})))},i.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),o=this.props.nodeRef?void 0:s.a.findDOMNode(this);e&&!a?(this.props.onExit(o),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(o),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:"exited"},(function(){t.props.onExited(o)}))}))}))):this.safeSetState({status:"exited"},(function(){t.props.onExited(o)}))},i.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},i.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,e.nextCallback=null,t(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},i.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:s.a.findDOMNode(this),o=null==t&&!this.props.addEndListener;if(n&&!o){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=r[0],a=r[1];this.props.addEndListener(i,a)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},i.render=function(){var t=this.state.status;if("unmounted"===t)return null;var e=this.props,n=e.children,o=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.a.createElement(u.Provider,{value:null},"function"===typeof n?n(t,o):r.a.cloneElement(r.a.Children.only(n),o))},o}(r.a.Component);function l(){}c.contextType=u,c.propTypes={},c.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:l,onEntering:l,onEntered:l,onExit:l,onExiting:l,onExited:l},c.UNMOUNTED="unmounted",c.EXITED="exited",c.ENTERING="entering",c.ENTERED="entered",c.EXITING="exiting";var d=c;function f(t){var e,n,o="";if("string"===typeof t||"number"===typeof t)o+=t;else if("object"===typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=f(t[e]))&&(o&&(o+=" "),o+=n);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}var p=function(){for(var t,e,n=0,o="";n<arguments.length;)(t=arguments[n++])&&(e=f(t))&&(o&&(o+=" "),o+=e);return o};function m(){return(m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function v(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}function g(t){return"number"===typeof t&&!isNaN(t)}function h(t){return"boolean"===typeof t}function y(t){return"string"===typeof t}function E(t){return"function"===typeof t}function b(t){return y(t)||E(t)?t:null}function O(t){return 0===t||t}var T=!("undefined"===typeof window||!window.document||!window.document.createElement);function x(t){return Object(o.isValidElement)(t)||y(t)||E(t)||g(t)}var C={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},I={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default",DARK:"dark"};function N(t){var e,n,r=t.enter,i=t.exit,s=t.duration,a=void 0===s?750:s,u=t.appendPosition,c=void 0!==u&&u,l=t.collapse,f=void 0===l||l,p=t.collapseDuration,m=void 0===p?300:p;return Array.isArray(a)&&2===a.length?(e=a[0],n=a[1]):e=n=a,function(t){var s=t.children,a=t.position,u=t.preventExitTransition,l=t.done,p=v(t,["children","position","preventExitTransition","done"]),g=c?r+"--"+a:r,h=c?i+"--"+a:i,y=function t(){var e=p.nodeRef.current;e&&(e.removeEventListener("animationend",t),f?function(t,e,n){void 0===n&&(n=300);var o=t.scrollHeight,r=t.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all "+n+"ms",requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout((function(){return e()}),n)}))}))}(e,l,m):l())};return Object(o.createElement)(d,Object.assign({},p,{timeout:u?f?m:50:{enter:e,exit:f?n+m:n+50},onEnter:function(){var t=p.nodeRef.current;t&&(t.classList.add(g),t.style.animationFillMode="forwards",t.style.animationDuration=e+"ms")},onEntered:function(){var t=p.nodeRef.current;t&&(t.classList.remove(g),t.style.cssText="")},onExit:u?y:function(){var t=p.nodeRef.current;t&&(t.classList.add(h),t.style.animationFillMode="forwards",t.style.animationDuration=n+"ms",t.addEventListener("animationend",y))},unmountOnExit:!0}),s)}}var j={list:new Map,emitQueue:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t,e){if(e){var n=this.list.get(t).filter((function(t){return t!==e}));return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit:function(t){var e=this.emitQueue.get(t);return e&&(e.forEach((function(t){return clearTimeout(t)})),this.emitQueue.delete(t)),this},emit:function(t){for(var e=this,n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];this.list.has(t)&&this.list.get(t).forEach((function(n){var r=setTimeout((function(){n.apply(void 0,o)}),0);e.emitQueue.has(t)||e.emitQueue.set(t,[]),e.emitQueue.get(t).push(r)}))}};function _(t,e){void 0===e&&(e=!1);var n=Object(o.useRef)(t);return Object(o.useEffect)((function(){e&&(n.current=t)})),n.current}function R(t,e){switch(e.type){case"ADD":return[].concat(t,[e.toastId]).filter((function(t){return t!==e.staleId}));case"REMOVE":return O(e.toastId)?t.filter((function(t){return t!==e.toastId})):[]}}function k(t){var e=Object(o.useReducer)((function(t){return t+1}),0)[1],n=Object(o.useReducer)(R,[]),r=n[0],i=n[1],s=Object(o.useRef)(null),a=_(0),u=_([]),c=_({}),l=_({toastKey:1,displayedToast:0,props:t,containerId:null,isToastActive:d,getToast:function(t){return c[t]||null}});function d(t){return-1!==r.indexOf(t)}function f(t){var e=t.containerId,n=l.props,o=n.limit,r=n.enableMultiContainer;o&&(!e||l.containerId===e&&r)&&(a-=u.length,u=[])}function p(t){var e=u.length;if((a=O(t)?a-1:a-l.displayedToast)<0&&(a=0),e>0){var n=O(t)?1:l.props.limit;if(1===e||1===n)l.displayedToast++,m();else{var o=n>e?e:n;l.displayedToast=o;for(var r=0;r<o;r++)m()}}i({type:"REMOVE",toastId:t})}function m(){var t=u.shift(),e=t.toastContent,n=t.toastProps,o=t.staleId;setTimeout((function(){C(e,n,o)}),500)}function T(t,n){var r=n.delay,i=n.staleId,d=v(n,["delay","staleId"]);if(x(t)&&!function(t){var e=t.containerId,n=t.toastId,o=t.updateId;return!!(!s.current||l.props.enableMultiContainer&&e!==l.props.containerId||l.isToastActive(n)&&null==o)}(d)){var f=d.toastId,m=d.updateId,O=l.props,T=function(){return p(f)},I=!(0,l.isToastActive)(f);I&&a++;var N,j,_={toastId:f,updateId:m,key:d.key||l.toastKey++,type:d.type,closeToast:T,closeButton:d.closeButton,rtl:O.rtl,position:d.position||O.position,transition:d.transition||O.transition,className:b(d.className||O.toastClassName),bodyClassName:b(d.bodyClassName||O.bodyClassName),style:d.style||O.toastStyle,bodyStyle:d.bodyStyle||O.bodyStyle,onClick:d.onClick||O.onClick,pauseOnHover:h(d.pauseOnHover)?d.pauseOnHover:O.pauseOnHover,pauseOnFocusLoss:h(d.pauseOnFocusLoss)?d.pauseOnFocusLoss:O.pauseOnFocusLoss,draggable:h(d.draggable)?d.draggable:O.draggable,draggablePercent:g(d.draggablePercent)?d.draggablePercent:O.draggablePercent,closeOnClick:h(d.closeOnClick)?d.closeOnClick:O.closeOnClick,progressClassName:b(d.progressClassName||O.progressClassName),progressStyle:d.progressStyle||O.progressStyle,autoClose:(N=d.autoClose,j=O.autoClose,!1===N||g(N)&&N>0?N:j),hideProgressBar:h(d.hideProgressBar)?d.hideProgressBar:O.hideProgressBar,progress:d.progress,role:y(d.role)?d.role:O.role,deleteToast:function(){!function(t){delete c[t],e()}(f)}};E(d.onOpen)&&(_.onOpen=d.onOpen),E(d.onClose)&&(_.onClose=d.onClose);var R=O.closeButton;!1===d.closeButton||x(d.closeButton)?R=d.closeButton:!0===d.closeButton&&(R=!x(O.closeButton)||O.closeButton),_.closeButton=R;var k=t;Object(o.isValidElement)(t)&&!y(t.type)?k=Object(o.cloneElement)(t,{closeToast:T}):E(t)&&(k=t({closeToast:T})),O.limit&&O.limit>0&&a>O.limit&&I?u.push({toastContent:k,toastProps:_,staleId:i}):g(r)&&r>0?setTimeout((function(){C(k,_,i)}),r):C(k,_,i)}}function C(t,e,n){var o=e.toastId;c[o]={content:t,props:e},i({type:"ADD",toastId:o,staleId:n})}return Object(o.useEffect)((function(){return l.containerId=t.containerId,j.cancelEmit(3).on(0,T).on(1,(function(t){return s.current&&p(t)})).on(5,f).emit(2,l),function(){return j.emit(3,l)}}),[]),Object(o.useEffect)((function(){l.isToastActive=d,l.displayedToast=r.length,j.emit(4,r.length,t.containerId)}),[r]),Object(o.useEffect)((function(){l.props=t})),{getToastToRender:function(e){for(var n={},o=t.newestOnTop?Object.keys(c).reverse():Object.keys(c),r=0;r<o.length;r++){var i=c[o[r]],s=i.props.position;n[s]||(n[s]=[]),n[s].push(i)}return Object.keys(n).map((function(t){return e(t,n[t])}))},collection:c,containerRef:s,isToastActive:d}}function S(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function L(t){var e=Object(o.useState)(!0),n=e[0],r=e[1],i=Object(o.useState)(!1),s=i[0],a=i[1],u=Object(o.useRef)(null),c=_({start:0,x:0,y:0,deltaX:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null}),l=_(t,!0),d=t.autoClose,f=t.pauseOnHover,p=t.closeToast,m=t.onClick,v=t.closeOnClick;function g(e){var n=u.current;c.canCloseOnClick=!0,c.canDrag=!0,c.boundingRect=n.getBoundingClientRect(),n.style.transition="",c.start=c.x=S(e.nativeEvent),c.removalDistance=n.offsetWidth*(t.draggablePercent/100)}function h(){if(c.boundingRect){var e=c.boundingRect,n=e.top,o=e.bottom,r=e.left,i=e.right;t.pauseOnHover&&c.x>=r&&c.x<=i&&c.y>=n&&c.y<=o?b():y()}}function y(){r(!0)}function b(){r(!1)}function O(t){var e=u.current;c.canDrag&&(n&&b(),c.x=S(t),c.deltaX=c.x-c.start,c.y=function(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}(t),c.start!==c.x&&(c.canCloseOnClick=!1),e.style.transform="translateX("+c.deltaX+"px)",e.style.opacity=""+(1-Math.abs(c.deltaX/c.removalDistance)))}function T(){var e=u.current;if(c.canDrag){if(c.canDrag=!1,Math.abs(c.deltaX)>c.removalDistance)return a(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform="translateX(0)",e.style.opacity="1"}}Object(o.useEffect)((function(){return E(t.onOpen)&&t.onOpen(Object(o.isValidElement)(t.children)&&t.children.props),function(){E(l.onClose)&&l.onClose(Object(o.isValidElement)(l.children)&&l.children.props)}}),[]),Object(o.useEffect)((function(){return t.draggable&&(document.addEventListener("mousemove",O),document.addEventListener("mouseup",T),document.addEventListener("touchmove",O),document.addEventListener("touchend",T)),function(){t.draggable&&(document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",T),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",T))}}),[t.draggable]),Object(o.useEffect)((function(){return t.pauseOnFocusLoss&&(window.addEventListener("focus",y),window.addEventListener("blur",b)),function(){t.pauseOnFocusLoss&&(window.removeEventListener("focus",y),window.removeEventListener("blur",b))}}),[t.pauseOnFocusLoss]);var x={onMouseDown:g,onTouchStart:g,onMouseUp:h,onTouchEnd:h};return d&&f&&(x.onMouseEnter=b,x.onMouseLeave=y),v&&(x.onClick=function(t){m&&m(t),c.canCloseOnClick&&p()}),{playToast:y,pauseToast:b,isRunning:n,preventExitTransition:s,toastRef:u,eventHandlers:x}}function w(t){var e=t.closeToast,n=t.type,r=t.ariaLabel,i=void 0===r?"close":r;return Object(o.createElement)("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(t){t.stopPropagation(),e(t)},"aria-label":i},Object(o.createElement)("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Object(o.createElement)("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function D(t){var e,n,r=t.delay,i=t.isRunning,s=t.closeToast,a=t.type,u=t.hide,c=t.className,l=t.style,d=t.controlledProgress,f=t.progress,v=t.rtl,g=t.isIn,h=m({},l,{animationDuration:r+"ms",animationPlayState:i?"running":"paused",opacity:u?0:1});d&&(h.transform="scaleX("+f+")");var y=["Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar--"+a,(e={},e["Toastify__progress-bar--rtl"]=v,e)],b=E(c)?c({rtl:v,type:a,defaultClassName:p.apply(void 0,y)}):p.apply(void 0,[].concat(y,[c])),O=((n={})[d&&f>=1?"onTransitionEnd":"onAnimationEnd"]=d&&f<1?null:function(){g&&s()},n);return Object(o.createElement)("div",Object.assign({className:b,style:h},O))}D.defaultProps={type:I.DEFAULT,hide:!1};var P=function(t){var e,n=L(t),r=n.isRunning,i=n.preventExitTransition,s=n.toastRef,a=n.eventHandlers,u=t.closeButton,c=t.children,l=t.autoClose,d=t.onClick,f=t.type,m=t.hideProgressBar,v=t.closeToast,g=t.transition,h=t.position,y=t.className,b=t.style,O=t.bodyClassName,T=t.bodyStyle,x=t.progressClassName,C=t.progressStyle,I=t.updateId,N=t.role,j=t.progress,_=t.rtl,R=t.toastId,k=t.deleteToast,S=["Toastify__toast","Toastify__toast--"+f,(e={},e["Toastify__toast--rtl"]=_,e)],w=E(y)?y({rtl:_,position:h,type:f,defaultClassName:p.apply(void 0,S)}):p.apply(void 0,[].concat(S,[y])),P=!!j;return Object(o.createElement)(g,{in:t.in,appear:!0,done:k,position:h,preventExitTransition:i,nodeRef:s},Object(o.createElement)("div",Object.assign({id:R,onClick:d,className:w||void 0},a,{style:b,ref:s}),Object(o.createElement)("div",Object.assign({},t.in&&{role:N},{className:E(O)?O({type:f}):p("Toastify__toast-body",O),style:T}),c),function(t){if(t){var e={closeToast:v,type:f};return E(t)?t(e):Object(o.isValidElement)(t)?Object(o.cloneElement)(t,e):void 0}}(u),(l||P)&&Object(o.createElement)(D,Object.assign({},I&&!P?{key:"pb-"+I}:{},{rtl:_,delay:l,isRunning:r,isIn:t.in,closeToast:v,hide:m,type:f,style:C,className:x,controlledProgress:P,progress:j}))))},M=N({enter:"Toastify__bounce-enter",exit:"Toastify__bounce-exit",appendPosition:!0}),A=function(t){var e=t.children,n=t.className,r=t.style,i=v(t,["children","className","style"]);return delete i.in,Object(o.createElement)("div",{className:n,style:r},o.Children.map(e,(function(t){return Object(o.cloneElement)(t,i)})))},B=function(t){var e=k(t),n=e.getToastToRender,r=e.containerRef,i=e.isToastActive,s=t.className,a=t.style,u=t.rtl,c=t.containerId;return Object(o.createElement)("div",{ref:r,className:"Toastify",id:c},n((function(t,e){var n,r,c={className:E(s)?s({position:t,rtl:u,defaultClassName:p("Toastify__toast-container","Toastify__toast-container--"+t,(n={},n["Toastify__toast-container--rtl"]=u,n))}):p("Toastify__toast-container","Toastify__toast-container--"+t,(r={},r["Toastify__toast-container--rtl"]=u,r),b(s)),style:0===e.length?m({},a,{pointerEvents:"none"}):m({},a)};return Object(o.createElement)(A,Object.assign({},c,{key:"container-"+t}),e.map((function(t){var e=t.content,n=t.props;return Object(o.createElement)(P,Object.assign({},n,{in:i(n.toastId),key:"toast-"+n.key,closeButton:!0===n.closeButton?w:n.closeButton}),e)})))})))};B.defaultProps={position:C.TOP_RIGHT,transition:M,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:w,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,role:"alert"};var F,H,X,U=new Map,G=[],Q=!1;function V(){return U.size>0}function W(t,e){var n=function(t){return V()?U.get(t||F):null}(e.containerId);return n?n.getToast(t):null}function K(){return(Math.random().toString(36)+Date.now().toString(36)).substr(2,10)}function q(t){return t&&(y(t.toastId)||g(t.toastId))?t.toastId:K()}function z(t,e){return V()?j.emit(0,t,e):(G.push({content:t,options:e}),Q&&T&&(Q=!1,H=document.createElement("div"),document.body.appendChild(H),Object(i.render)(Object(o.createElement)(B,Object.assign({},X)),H))),e.toastId}function Y(t,e){return m({},e,{type:e&&e.type||t,toastId:q(e)})}var J=function(t,e){return z(t,Y(I.DEFAULT,e))};J.success=function(t,e){return z(t,Y(I.SUCCESS,e))},J.info=function(t,e){return z(t,Y(I.INFO,e))},J.error=function(t,e){return z(t,Y(I.ERROR,e))},J.warning=function(t,e){return z(t,Y(I.WARNING,e))},J.dark=function(t,e){return z(t,Y(I.DARK,e))},J.warn=J.warning,J.dismiss=function(t){return V()&&j.emit(1,t)},J.clearWaitingQueue=function(t){return void 0===t&&(t={}),V()&&j.emit(5,t)},J.isActive=function(t){var e=!1;return U.forEach((function(n){n.isToastActive&&n.isToastActive(t)&&(e=!0)})),e},J.update=function(t,e){void 0===e&&(e={}),setTimeout((function(){var n=W(t,e);if(n){var o=n.props,r=n.content,i=m({},o,e,{toastId:e.toastId||t,updateId:K()});i.toastId!==t&&(i.staleId=t);var s="undefined"!==typeof i.render?i.render:r;delete i.render,z(s,i)}}),0)},J.done=function(t){J.update(t,{progress:1})},J.onChange=function(t){return E(t)&&j.on(4,t),function(){E(t)&&j.off(4,t)}},J.configure=function(t){void 0===t&&(t={}),Q=!0,X=t},J.POSITION=C,J.TYPE=I,j.on(2,(function(t){F=t.containerId||t,U.set(F,t),G.forEach((function(t){j.emit(0,t.content,t.options)})),G=[]})).on(3,(function(t){U.delete(t.containerId||t),0===U.size&&j.off(0).off(1).off(5),T&&H&&document.body.removeChild(H)}))}}]);