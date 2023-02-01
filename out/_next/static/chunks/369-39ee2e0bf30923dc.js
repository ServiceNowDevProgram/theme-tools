"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[369],{369:function(e,t,n){function r(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function i(e){return e instanceof r(e).Element||e instanceof Element}function o(e){return e instanceof r(e).HTMLElement||e instanceof HTMLElement}function a(e){return"undefined"!==typeof ShadowRoot&&(e instanceof r(e).ShadowRoot||e instanceof ShadowRoot)}n.d(t,{XB:function(){return ot},ZP:function(){return at}});var s=Math.max,c=Math.min,u=Math.round;function f(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,i=1;if(o(e)&&t){var a=e.offsetHeight,s=e.offsetWidth;s>0&&(r=u(n.width)/s||1),a>0&&(i=u(n.height)/a||1)}return{width:n.width/r,height:n.height/i,top:n.top/i,right:n.right/r,bottom:n.bottom/i,left:n.left/r,x:n.left/r,y:n.top/i}}function p(e){var t=r(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function d(e){return e?(e.nodeName||"").toLowerCase():null}function l(e){return((i(e)?e.ownerDocument:e.document)||window.document).documentElement}function m(e){return f(l(e)).left+p(e).scrollLeft}function v(e){return r(e).getComputedStyle(e)}function h(e){var t=v(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return /auto|scroll|overlay|hidden/.test(n+i+r);}function g(e,t,n){void 0===n&&(n=!1);var i=o(t),a=o(t)&&function(e){var t=e.getBoundingClientRect(),n=u(t.width)/e.offsetWidth||1,r=u(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),s=l(t),c=f(e,a),v={scrollLeft:0,scrollTop:0},g={x:0,y:0};return(i||!i&&!n)&&(("body"!==d(t)||h(s))&&(v=function(e){return e!==r(e)&&o(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:p(e);var t}(t)),o(t)?((g=f(t,!0)).x+=t.clientLeft,g.y+=t.clientTop):s&&(g.x=m(s))),{x:c.left+v.scrollLeft-g.x,y:c.top+v.scrollTop-g.y,width:c.width,height:c.height}}function b(e){var t=f(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function y(e){return"html"===d(e)?e:e.assignedSlot||e.parentNode||(a(e)?e.host:null)||l(e)}function x(e){return["html","body","#document"].indexOf(d(e))>=0?e.ownerDocument.body:o(e)&&h(e)?e:x(y(e))}function w(e,t){var n;void 0===t&&(t=[]);var i=x(e),o=i===(null==(n=e.ownerDocument)?void 0:n.body),a=r(i),s=o?[a].concat(a.visualViewport||[],h(i)?i:[]):i,c=t.concat(s);return o?c:c.concat(w(y(s)))}function O(e){return["table","td","th"].indexOf(d(e))>=0}function E(e){return o(e)&&"fixed"!==v(e).position?e.offsetParent:null}function A(e){for(var t=r(e),n=E(e);n&&O(n)&&"static"===v(n).position;)n=E(n);return n&&("html"===d(n)||"body"===d(n)&&"static"===v(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&o(e)&&"fixed"===v(e).position)return null;var n=y(e);for(a(n)&&(n=n.host);o(n)&&["html","body"].indexOf(d(n))<0;){var r=v(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var T="top",D="bottom",j="right",L="left",k="auto",C=[T,D,j,L],M="start",P="end",R="viewport",V="popper",S=C.reduce((function(e,t){return e.concat([t+"-"+M,t+"-"+P])}),[]),B=[].concat(C,[k]).reduce((function(e,t){return e.concat([t,t+"-"+M,t+"-"+P])}),[]),H=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function W(e){var t=new Map,n=new Set,r=[];function i(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||i(e)})),r}function I(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var N={placement:"bottom",modifiers:[],strategy:"absolute"};function _(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function q(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,a=void 0===o?N:o;return function(e,t,n){void 0===n&&(n=a);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},N,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},s=[],c=!1,u={state:o,setOptions:function(n){var c="function"===typeof n?n(o.options):n;f(),o.options=Object.assign({},a,o.options,c),o.scrollParents={reference:i(e)?w(e):e.contextElement?w(e.contextElement):[],popper:w(t)};var p=function(e){var t=W(e);return H.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=p.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var a=i({state:o,name:t,instance:u,options:r}),c=function(){};s.push(a||c)}})),u.update()},forceUpdate:function(){if(!c){var e=o.elements,t=e.reference,n=e.popper;if(_(t,n)){o.rects={reference:g(t,A(n),"fixed"===o.options.strategy),popper:b(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,s=i.options,f=void 0===s?{}:s,p=i.name;"function"===typeof a&&(o=a({state:o,options:f,name:p,instance:u})||o)}else o.reset=!1,r=-1}}},update:I((function(){return new Promise((function(e){u.forceUpdate(),e(o)}))})),destroy:function(){f(),c=!0}};if(!_(e,t))return u;function f(){s.forEach((function(e){return e()})),s=[]}return u.setOptions(n).then((function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var U={passive:!0};function F(e){return e.split("-")[0]}function z(e){return e.split("-")[1]}function $(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function X(e){var t,n=e.reference,r=e.element,i=e.placement,o=i?F(i):null,a=i?z(i):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(o){case T:t={x:s,y:n.y-r.height};break;case D:t={x:s,y:n.y+n.height};break;case j:t={x:n.x+n.width,y:c};break;case L:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var u=o?$(o):null;if(null!=u){var f="y"===u?"height":"width";switch(a){case M:t[u]=t[u]-(n[f]/2-r[f]/2);break;case P:t[u]=t[u]+(n[f]/2-r[f]/2)}}return t}var Y={top:"auto",right:"auto",bottom:"auto",left:"auto"};function J(e){var t,n=e.popper,i=e.popperRect,o=e.placement,a=e.variation,s=e.offsets,c=e.position,f=e.gpuAcceleration,p=e.adaptive,d=e.roundOffsets,m=e.isFixed,h=s.x,g=void 0===h?0:h,b=s.y,y=void 0===b?0:b,x="function"===typeof d?d({x:g,y:y}):{x:g,y:y};g=x.x,y=x.y;var w=s.hasOwnProperty("x"),O=s.hasOwnProperty("y"),E=L,k=T,C=window;if(p){var M=A(n),R="clientHeight",V="clientWidth";if(M===r(n)&&"static"!==v(M=l(n)).position&&"absolute"===c&&(R="scrollHeight",V="scrollWidth"),M=M,o===T||(o===L||o===j)&&a===P)k=D,y-=(m&&M===C&&C.visualViewport?C.visualViewport.height:M[R])-i.height,y*=f?1:-1;if(o===L||(o===T||o===D)&&a===P)E=j,g-=(m&&M===C&&C.visualViewport?C.visualViewport.width:M[V])-i.width,g*=f?1:-1}var S,B=Object.assign({position:c},p&&Y),H=!0===d?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:u(t*r)/r||0,y:u(n*r)/r||0}}({x:g,y:y}):{x:g,y:y};return g=H.x,y=H.y,f?Object.assign({},B,((S={})[k]=O?"0":"",S[E]=w?"0":"",S.transform=(C.devicePixelRatio||1)<=1?"translate("+g+"px, "+y+"px)":"translate3d("+g+"px, "+y+"px, 0)",S)):Object.assign({},B,((t={})[k]=O?y+"px":"",t[E]=w?g+"px":"",t.transform="",t))}var Z={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,i=n.offset,o=void 0===i?[0,0]:i,a=B.reduce((function(e,n){return e[n]=function(e,t,n){var r=F(e),i=[L,T].indexOf(r)>=0?-1:1,o="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=o[0],s=o[1];return a=a||0,s=(s||0)*i,[L,j].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,o),e}),{}),s=a[t.placement],c=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}},G={left:"right",right:"left",bottom:"top",top:"bottom"};function K(e){return e.replace(/left|right|bottom|top/g,(function(e){return G[e]}));}var Q={start:"end",end:"start"};function ee(e){return e.replace(/start|end/g,(function(e){return Q[e]}));}function te(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&a(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function ne(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function re(e,t){return t===R?ne(function(e){var t=r(e),n=l(e),i=t.visualViewport,o=n.clientWidth,a=n.clientHeight,s=0,c=0;return i&&(o=i.width,a=i.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=i.offsetLeft,c=i.offsetTop)),{width:o,height:a,x:s+m(e),y:c};}(e)):i(t)?function(e){var t=f(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ne(function(e){var t,n=l(e),r=p(e),i=null==(t=e.ownerDocument)?void 0:t.body,o=s(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),a=s(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),c=-r.scrollLeft+m(e),u=-r.scrollTop;return"rtl"===v(i||n).direction&&(c+=s(n.clientWidth,i?i.clientWidth:0)-o),{width:o,height:a,x:c,y:u}}(l(e)));}function ie(e,t,n){var r="clippingParents"===t?function(e){var t=w(y(e)),n=["absolute","fixed"].indexOf(v(e).position)>=0&&o(e)?A(e):e;return i(n)?t.filter((function(e){return i(e)&&te(e,n)&&"body"!==d(e)})):[]}(e):[].concat(t),a=[].concat(r,[n]),u=a[0],f=a.reduce((function(t,n){var r=re(e,n);return t.top=s(r.top,t.top),t.right=c(r.right,t.right),t.bottom=c(r.bottom,t.bottom),t.left=s(r.left,t.left),t}),re(e,u));return f.width=f.right-f.left,f.height=f.bottom-f.top,f.x=f.left,f.y=f.top,f}function oe(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ae(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function se(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,a=n.boundary,s=void 0===a?"clippingParents":a,c=n.rootBoundary,u=void 0===c?R:c,p=n.elementContext,d=void 0===p?V:p,m=n.altBoundary,v=void 0!==m&&m,h=n.padding,g=void 0===h?0:h,b=oe("number"!==typeof g?g:ae(g,C)),y=d===V?"reference":V,x=e.rects.popper,w=e.elements[v?y:d],O=ie(i(w)?w:w.contextElement||l(e.elements.popper),s,u),E=f(e.elements.reference),A=X({reference:E,element:x,strategy:"absolute",placement:o}),L=ne(Object.assign({},x,A)),k=d===V?L:E,M={top:O.top-k.top+b.top,bottom:k.bottom-O.bottom+b.bottom,left:O.left-k.left+b.left,right:k.right-O.right+b.right},P=e.modifiersData.offset;if(d===V&&P){var S=P[o];Object.keys(M).forEach((function(e){var t=[j,D].indexOf(e)>=0?1:-1,n=[T,D].indexOf(e)>=0?"y":"x";M[e]+=S[n]*t}))}return M}function ce(e,t,n){return s(e,c(t,n))}var ue={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,i=n.mainAxis,o=void 0===i||i,a=n.altAxis,u=void 0!==a&&a,f=n.boundary,p=n.rootBoundary,d=n.altBoundary,l=n.padding,m=n.tether,v=void 0===m||m,h=n.tetherOffset,g=void 0===h?0:h,y=se(t,{boundary:f,rootBoundary:p,padding:l,altBoundary:d}),x=F(t.placement),w=z(t.placement),O=!w,E=$(x),k="x"===E?"y":"x",C=t.modifiersData.popperOffsets,P=t.rects.reference,R=t.rects.popper,V="function"===typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,S="number"===typeof V?{mainAxis:V,altAxis:V}:Object.assign({mainAxis:0,altAxis:0},V),B=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,H={x:0,y:0};if(C){if(o){var W,I="y"===E?T:L,N="y"===E?D:j,_="y"===E?"height":"width",q=C[E],U=q+y[I],X=q-y[N],Y=v?-R[_]/2:0,J=w===M?P[_]:R[_],Z=w===M?-R[_]:-P[_],G=t.elements.arrow,K=v&&G?b(G):{width:0,height:0},Q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=Q[I],te=Q[N],ne=ce(0,P[_],K[_]),re=O?P[_]/2-Y-ne-ee-S.mainAxis:J-ne-ee-S.mainAxis,ie=O?-P[_]/2+Y+ne+te+S.mainAxis:Z+ne+te+S.mainAxis,oe=t.elements.arrow&&A(t.elements.arrow),ae=oe?"y"===E?oe.clientTop||0:oe.clientLeft||0:0,ue=null!=(W=null==B?void 0:B[E])?W:0,fe=q+ie-ue,pe=ce(v?c(U,q+re-ue-ae):U,q,v?s(X,fe):X);C[E]=pe,H[E]=pe-q}if(u){var de,le="x"===E?T:L,me="x"===E?D:j,ve=C[k],he="y"===k?"height":"width",ge=ve+y[le],be=ve-y[me],ye=-1!==[T,L].indexOf(x),xe=null!=(de=null==B?void 0:B[k])?de:0,we=ye?ge:ve-P[he]-R[he]-xe+S.altAxis,Oe=ye?ve+P[he]+R[he]-xe-S.altAxis:be,Ee=v&&ye?function(e,t,n){var r=ce(e,t,n);return r>n?n:r}(we,ve,Oe):ce(v?we:ge,ve,v?Oe:be);C[k]=Ee,H[k]=Ee-ve}t.modifiersData[r]=H}},requiresIfExists:["offset"]};var fe={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,i=e.options,o=n.elements.arrow,a=n.modifiersData.popperOffsets,s=F(n.placement),c=$(s),u=[L,j].indexOf(s)>=0?"height":"width";if(o&&a){var f=function(e,t){return oe("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ae(e,C))}(i.padding,n),p=b(o),d="y"===c?T:L,l="y"===c?D:j,m=n.rects.reference[u]+n.rects.reference[c]-a[c]-n.rects.popper[u],v=a[c]-n.rects.reference[c],h=A(o),g=h?"y"===c?h.clientHeight||0:h.clientWidth||0:0,y=m/2-v/2,x=f[d],w=g-p[u]-f[l],O=g/2-p[u]/2+y,E=ce(x,O,w),k=c;n.modifiersData[r]=((t={})[k]=E,t.centerOffset=E-O,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&te(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function pe(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function de(e){return[T,j,D,L].some((function(t){return e[t]>=0}))}var le=q({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,i=e.options,o=i.scroll,a=void 0===o||o,s=i.resize,c=void 0===s||s,u=r(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&f.forEach((function(e){e.addEventListener("scroll",n.update,U)})),c&&u.addEventListener("resize",n.update,U),function(){a&&f.forEach((function(e){e.removeEventListener("scroll",n.update,U)})),c&&u.removeEventListener("resize",n.update,U)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=X({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=void 0===r||r,o=n.adaptive,a=void 0===o||o,s=n.roundOffsets,c=void 0===s||s,u={placement:F(t.placement),variation:z(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,J(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,J(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];o(i)&&d(i)&&(Object.assign(i.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],i=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});o(r)&&d(r)&&(Object.assign(r.style,a),Object.keys(i).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},Z,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var i=n.mainAxis,o=void 0===i||i,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,u=n.padding,f=n.boundary,p=n.rootBoundary,d=n.altBoundary,l=n.flipVariations,m=void 0===l||l,v=n.allowedAutoPlacements,h=t.options.placement,g=F(h),b=c||(g===h||!m?[K(h)]:function(e){if(F(e)===k)return[];var t=K(e);return[ee(e),t,ee(t)]}(h)),y=[h].concat(b).reduce((function(e,n){return e.concat(F(n)===k?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=n.boundary,o=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?B:c,f=z(r),p=f?s?S:S.filter((function(e){return z(e)===f})):C,d=p.filter((function(e){return u.indexOf(e)>=0}));0===d.length&&(d=p);var l=d.reduce((function(t,n){return t[n]=se(e,{placement:n,boundary:i,rootBoundary:o,padding:a})[F(n)],t}),{});return Object.keys(l).sort((function(e,t){return l[e]-l[t]}))}(t,{placement:n,boundary:f,rootBoundary:p,padding:u,flipVariations:m,allowedAutoPlacements:v}):n)}),[]),x=t.rects.reference,w=t.rects.popper,O=new Map,E=!0,A=y[0],P=0;P<y.length;P++){var R=y[P],V=F(R),H=z(R)===M,W=[T,D].indexOf(V)>=0,I=W?"width":"height",N=se(t,{placement:R,boundary:f,rootBoundary:p,altBoundary:d,padding:u}),_=W?H?j:L:H?D:T;x[I]>w[I]&&(_=K(_));var q=K(_),U=[];if(o&&U.push(N[V]<=0),s&&U.push(N[_]<=0,N[q]<=0),U.every((function(e){return e}))){A=R,E=!1;break}O.set(R,U)}if(E)for(var $=function(e){var t=y.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return A=t,"break"},X=m?3:1;X>0;X--){if("break"===$(X))break}t.placement!==A&&(t.modifiersData[r]._skip=!0,t.placement=A,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},ue,fe,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,o=t.modifiersData.preventOverflow,a=se(t,{elementContext:"reference"}),s=se(t,{altBoundary:!0}),c=pe(a,r),u=pe(s,i,o),f=de(c),p=de(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:f,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":p})}}]}),me="tippy-content",ve="tippy-backdrop",he="tippy-arrow",ge="tippy-svg-arrow",be={passive:!0,capture:!0};function ye(e,t,n){if(Array.isArray(e)){var r=e[t];return null==r?Array.isArray(n)?n[t]:n:r}return e}function xe(e,t){var n={}.toString.call(e);return 0===n.indexOf("[object")&&n.indexOf(t+"]")>-1}function we(e,t){return"function"===typeof e?e.apply(void 0,t):e}function Oe(e,t){return 0===t?e:function(r){clearTimeout(n),n=setTimeout((function(){e(r)}),t)};var n}function Ee(e,t){var n=Object.assign({},e);return t.forEach((function(e){delete n[e]})),n}function Ae(e){return[].concat(e)}function Te(e,t){-1===e.indexOf(t)&&e.push(t)}function De(e){return e.split("-")[0]}function je(e){return[].slice.call(e)}function Le(){return document.createElement("div")}function ke(e){return["Element","Fragment"].some((function(t){return xe(e,t)}))}function Ce(e){return xe(e,"MouseEvent")}function Me(e){return!(!e||!e._tippy||e._tippy.reference!==e)}function Pe(e){return ke(e)?[e]:function(e){return xe(e,"NodeList")}(e)?je(e):Array.isArray(e)?e:je(document.querySelectorAll(e))}function Re(e,t){e.forEach((function(e){e&&(e.style.transitionDuration=t+"ms")}))}function Ve(e,t){e.forEach((function(e){e&&e.setAttribute("data-state",t)}))}function Se(e){var t=Ae(e)[0];return t&&t.ownerDocument||document}function Be(e,t,n){var r=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(t){e[r](t,n)}))}var He={isTouch:!1},We=0;function Ie(){He.isTouch||(He.isTouch=!0,window.performance&&document.addEventListener("mousemove",Ne))}function Ne(){var e=performance.now();e-We<20&&(He.isTouch=!1,document.removeEventListener("mousemove",Ne)),We=e}function _e(){var e=document.activeElement;if(Me(e)){var t=e._tippy;e.blur&&!t.state.isVisible&&e.blur()}}var qe="undefined"!==typeof window&&"undefined"!==typeof document?navigator.userAgent:"",Ue=/MSIE |Trident\//.test(qe);var Fe={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},ze=Object.assign({appendTo:function(){return document.body},aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},Fe,{},{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),$e=Object.keys(ze);function Xe(e){var t=(e.plugins||[]).reduce((function(t,n){var r=n.name,i=n.defaultValue;return r&&(t[r]=void 0!==e[r]?e[r]:i),t}),{});return Object.assign({},e,{},t)}function Ye(e,t){var n=Object.assign({},t,{content:we(t.content,[e])},t.ignoreAttributes?{}:function(e,t){return(t?Object.keys(Xe(Object.assign({},ze,{plugins:t}))):$e).reduce((function(t,n){var r=(e.getAttribute("data-tippy-"+n)||"").trim();if(!r)return t;if("content"===n)t[n]=r;else try{t[n]=JSON.parse(r)}catch(i){t[n]=r}return t}),{})}(e,t.plugins));return n.aria=Object.assign({},ze.aria,{},n.aria),n.aria={expanded:"auto"===n.aria.expanded?t.interactive:n.aria.expanded,content:"auto"===n.aria.content?t.interactive?null:"describedby":n.aria.content},n}function Je(e,t){e.innerHTML=t}function Ze(e){var t=Le();return!0===e?t.className=he:(t.className=ge,ke(e)?t.appendChild(e):Je(t,e)),t}function Ge(e,t){ke(t.content)?(Je(e,""),e.appendChild(t.content)):"function"!==typeof t.content&&(t.allowHTML?Je(e,t.content):e.textContent=t.content)}function Ke(e){var t=e.firstElementChild,n=je(t.children);return{box:t,content:n.find((function(e){return e.classList.contains(me)})),arrow:n.find((function(e){return e.classList.contains(he)||e.classList.contains(ge)})),backdrop:n.find((function(e){return e.classList.contains(ve)}))}}function Qe(e){var t=Le(),n=Le();n.className="tippy-box",n.setAttribute("data-state","hidden"),n.setAttribute("tabindex","-1");var r=Le();function i(n,r){var i=Ke(t),o=i.box,a=i.content,s=i.arrow;r.theme?o.setAttribute("data-theme",r.theme):o.removeAttribute("data-theme"),"string"===typeof r.animation?o.setAttribute("data-animation",r.animation):o.removeAttribute("data-animation"),r.inertia?o.setAttribute("data-inertia",""):o.removeAttribute("data-inertia"),o.style.maxWidth="number"===typeof r.maxWidth?r.maxWidth+"px":r.maxWidth,r.role?o.setAttribute("role",r.role):o.removeAttribute("role"),n.content===r.content&&n.allowHTML===r.allowHTML||Ge(a,e.props),r.arrow?s?n.arrow!==r.arrow&&(o.removeChild(s),o.appendChild(Ze(r.arrow))):o.appendChild(Ze(r.arrow)):s&&o.removeChild(s)}return r.className=me,r.setAttribute("data-state","hidden"),Ge(r,e.props),t.appendChild(n),n.appendChild(r),i(e.props,e.props),{popper:t,onUpdate:i}}Qe.$$tippy=!0;var et=1,tt=[],nt=[];function rt(e,t){var n,r,i,o,a,s,c,u,f,p=Ye(e,Object.assign({},ze,{},Xe((n=t,Object.keys(n).reduce((function(e,t){return void 0!==n[t]&&(e[t]=n[t]),e}),{}))))),d=!1,l=!1,m=!1,v=!1,h=[],g=Oe(Y,p.interactiveDebounce),b=et++,y=(f=p.plugins).filter((function(e,t){return f.indexOf(e)===t})),x={id:b,reference:e,popper:Le(),popperInstance:null,props:p,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:y,clearDelayTimeouts:function(){clearTimeout(r),clearTimeout(i),cancelAnimationFrame(o)},setProps:function(t){0;if(x.state.isDestroyed)return;V("onBeforeUpdate",[x,t]),$();var n=x.props,r=Ye(e,Object.assign({},x.props,{},t,{ignoreAttributes:!0}));x.props=r,z(),n.interactiveDebounce!==r.interactiveDebounce&&(H(),g=Oe(Y,r.interactiveDebounce));n.triggerTarget&&!r.triggerTarget?Ae(n.triggerTarget).forEach((function(e){e.removeAttribute("aria-expanded")})):r.triggerTarget&&e.removeAttribute("aria-expanded");B(),R(),E&&E(n,r);x.popperInstance&&(K(),ee().forEach((function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)})));V("onAfterUpdate",[x,t])},setContent:function(e){x.setProps({content:e})},show:function(){0;var e=x.state.isVisible,t=x.state.isDestroyed,n=!x.state.isEnabled,r=He.isTouch&&!x.props.touch,i=ye(x.props.duration,0,ze.duration);if(e||t||n||r)return;if(k().hasAttribute("disabled"))return;if(V("onShow",[x],!1),!1===x.props.onShow(x))return;x.state.isVisible=!0,L()&&(O.style.visibility="visible");R(),_(),x.state.isMounted||(O.style.transition="none");if(L()){var o=M(),a=o.box,s=o.content;Re([a,s],0)}c=function(){if(x.state.isVisible&&!v){if(v=!0,O.offsetHeight,O.style.transition=x.props.moveTransition,L()&&x.props.animation){var e=M(),t=e.box,n=e.content;Re([t,n],i),Ve([t,n],"visible")}S(),B(),Te(nt,x),x.state.isMounted=!0,V("onMount",[x]),x.props.animation&&L()&&function(e,t){U(e,t)}(i,(function(){x.state.isShown=!0,V("onShown",[x])}))}},function(){var e,t=x.props.appendTo,n=k();e=x.props.interactive&&t===ze.appendTo||"parent"===t?n.parentNode:we(t,[n]);e.contains(O)||e.appendChild(O);K(),!1}()},hide:function(){0;var e=!x.state.isVisible,t=x.state.isDestroyed,n=!x.state.isEnabled,r=ye(x.props.duration,1,ze.duration);if(e||t||n)return;if(V("onHide",[x],!1),!1===x.props.onHide(x))return;x.state.isVisible=!1,x.state.isShown=!1,v=!1,d=!1,L()&&(O.style.visibility="hidden");if(H(),q(),R(),L()){var i=M(),o=i.box,a=i.content;x.props.animation&&(Re([o,a],r),Ve([o,a],"hidden"))}S(),B(),x.props.animation?L()&&function(e,t){U(e,(function(){!x.state.isVisible&&O.parentNode&&O.parentNode.contains(O)&&t()}))}(r,x.unmount):x.unmount()},hideWithInteractivity:function(e){0;C().addEventListener("mousemove",g),Te(tt,g),g(e)},enable:function(){x.state.isEnabled=!0},disable:function(){x.hide(),x.state.isEnabled=!1},unmount:function(){0;x.state.isVisible&&x.hide();if(!x.state.isMounted)return;Q(),ee().forEach((function(e){e._tippy.unmount()})),O.parentNode&&O.parentNode.removeChild(O);nt=nt.filter((function(e){return e!==x})),x.state.isMounted=!1,V("onHidden",[x])},destroy:function(){0;if(x.state.isDestroyed)return;x.clearDelayTimeouts(),x.unmount(),$(),delete e._tippy,x.state.isDestroyed=!0,V("onDestroy",[x])}};if(!p.render)return x;var w=p.render(x),O=w.popper,E=w.onUpdate;O.setAttribute("data-tippy-root",""),O.id="tippy-"+x.id,x.popper=O,e._tippy=x,O._tippy=x;var A=y.map((function(e){return e.fn(x)})),T=e.hasAttribute("aria-expanded");return z(),B(),R(),V("onCreate",[x]),p.showOnCreate&&te(),O.addEventListener("mouseenter",(function(){x.props.interactive&&x.state.isVisible&&x.clearDelayTimeouts()})),O.addEventListener("mouseleave",(function(e){x.props.interactive&&x.props.trigger.indexOf("mouseenter")>=0&&(C().addEventListener("mousemove",g),g(e))})),x;function D(){var e=x.props.touch;return Array.isArray(e)?e:[e,0]}function j(){return"hold"===D()[0]}function L(){var e;return!!(null==(e=x.props.render)?void 0:e.$$tippy)}function k(){return u||e}function C(){var e=k().parentNode;return e?Se(e):document}function M(){return Ke(O)}function P(e){return x.state.isMounted&&!x.state.isVisible||He.isTouch||a&&"focus"===a.type?0:ye(x.props.delay,e?0:1,ze.delay)}function R(){O.style.pointerEvents=x.props.interactive&&x.state.isVisible?"":"none",O.style.zIndex=""+x.props.zIndex}function V(e,t,n){var r;(void 0===n&&(n=!0),A.forEach((function(n){n[e]&&n[e].apply(void 0,t)})),n)&&(r=x.props)[e].apply(r,t)}function S(){var t=x.props.aria;if(t.content){var n="aria-"+t.content,r=O.id;Ae(x.props.triggerTarget||e).forEach((function(e){var t=e.getAttribute(n);if(x.state.isVisible)e.setAttribute(n,t?t+" "+r:r);else{var i=t&&t.replace(r,"").trim();i?e.setAttribute(n,i):e.removeAttribute(n)}}))}}function B(){!T&&x.props.aria.expanded&&Ae(x.props.triggerTarget||e).forEach((function(e){x.props.interactive?e.setAttribute("aria-expanded",x.state.isVisible&&e===k()?"true":"false"):e.removeAttribute("aria-expanded")}))}function H(){C().removeEventListener("mousemove",g),tt=tt.filter((function(e){return e!==g}))}function W(e){if((!He.isTouch||!m&&"mousedown"!==e.type)&&(!x.props.interactive||!O.contains(e.target))){if(k().contains(e.target)){if(He.isTouch)return;if(x.state.isVisible&&x.props.trigger.indexOf("click")>=0)return}else V("onClickOutside",[x,e]);!0===x.props.hideOnClick&&(x.clearDelayTimeouts(),x.hide(),l=!0,setTimeout((function(){l=!1})),x.state.isMounted||q())}}function I(){m=!0}function N(){m=!1}function _(){var e=C();e.addEventListener("mousedown",W,!0),e.addEventListener("touchend",W,be),e.addEventListener("touchstart",N,be),e.addEventListener("touchmove",I,be)}function q(){var e=C();e.removeEventListener("mousedown",W,!0),e.removeEventListener("touchend",W,be),e.removeEventListener("touchstart",N,be),e.removeEventListener("touchmove",I,be)}function U(e,t){var n=M().box;function r(e){e.target===n&&(Be(n,"remove",r),t())}if(0===e)return t();Be(n,"remove",s),Be(n,"add",r),s=r}function F(t,n,r){void 0===r&&(r=!1),Ae(x.props.triggerTarget||e).forEach((function(e){e.addEventListener(t,n,r),h.push({node:e,eventType:t,handler:n,options:r})}))}function z(){var e;j()&&(F("touchstart",X,{passive:!0}),F("touchend",J,{passive:!0})),(e=x.props.trigger,e.split(/\s+/).filter(Boolean)).forEach((function(e){if("manual"!==e)switch(F(e,X),e){case"mouseenter":F("mouseleave",J);break;case"focus":F(Ue?"focusout":"blur",Z);break;case"focusin":F("focusout",Z)}}))}function $(){h.forEach((function(e){var t=e.node,n=e.eventType,r=e.handler,i=e.options;t.removeEventListener(n,r,i)})),h=[]}function X(e){var t,n=!1;if(x.state.isEnabled&&!G(e)&&!l){var r="focus"===(null==(t=a)?void 0:t.type);a=e,u=e.currentTarget,B(),!x.state.isVisible&&Ce(e)&&tt.forEach((function(t){return t(e)})),"click"===e.type&&(x.props.trigger.indexOf("mouseenter")<0||d)&&!1!==x.props.hideOnClick&&x.state.isVisible?n=!0:te(e),"click"===e.type&&(d=!n),n&&!r&&ne(e)}}function Y(e){var t=e.target,n=k().contains(t)||O.contains(t);if("mousemove"!==e.type||!n){var r=ee().concat(O).map((function(e){var t,n=null==(t=e._tippy.popperInstance)?void 0:t.state;return n?{popperRect:e.getBoundingClientRect(),popperState:n,props:p}:null})).filter(Boolean);(function(e,t){var n=t.clientX,r=t.clientY;return e.every((function(e){var t=e.popperRect,i=e.popperState,o=e.props.interactiveBorder,a=De(i.placement),s=i.modifiersData.offset;if(!s)return!0;var c="bottom"===a?s.top.y:0,u="top"===a?s.bottom.y:0,f="right"===a?s.left.x:0,p="left"===a?s.right.x:0,d=t.top-r+c>o,l=r-t.bottom-u>o,m=t.left-n+f>o,v=n-t.right-p>o;return d||l||m||v}))})(r,e)&&(H(),ne(e))}}function J(e){G(e)||x.props.trigger.indexOf("click")>=0&&d||(x.props.interactive?x.hideWithInteractivity(e):ne(e))}function Z(e){x.props.trigger.indexOf("focusin")<0&&e.target!==k()||x.props.interactive&&e.relatedTarget&&O.contains(e.relatedTarget)||ne(e)}function G(e){return!!He.isTouch&&j()!==e.type.indexOf("touch")>=0}function K(){Q();var t=x.props,n=t.popperOptions,r=t.placement,i=t.offset,o=t.getReferenceClientRect,a=t.moveTransition,s=L()?Ke(O).arrow:null,u=o?{getBoundingClientRect:o,contextElement:o.contextElement||k()}:e,f={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state;if(L()){var n=M().box;["placement","reference-hidden","escaped"].forEach((function(e){"placement"===e?n.setAttribute("data-placement",t.placement):t.attributes.popper["data-popper-"+e]?n.setAttribute("data-"+e,""):n.removeAttribute("data-"+e)})),t.attributes.popper={}}}},p=[{name:"offset",options:{offset:i}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!a}},f];L()&&s&&p.push({name:"arrow",options:{element:s,padding:3}}),p.push.apply(p,(null==n?void 0:n.modifiers)||[]),x.popperInstance=le(u,O,Object.assign({},n,{placement:r,onFirstUpdate:c,modifiers:p}))}function Q(){x.popperInstance&&(x.popperInstance.destroy(),x.popperInstance=null)}function ee(){return je(O.querySelectorAll("[data-tippy-root]"))}function te(e){x.clearDelayTimeouts(),e&&V("onTrigger",[x,e]),_();var t=P(!0),n=D(),i=n[0],o=n[1];He.isTouch&&"hold"===i&&o&&(t=o),t?r=setTimeout((function(){x.show()}),t):x.show()}function ne(e){if(x.clearDelayTimeouts(),V("onUntrigger",[x,e]),x.state.isVisible){if(!(x.props.trigger.indexOf("mouseenter")>=0&&x.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&d)){var t=P(!1);t?i=setTimeout((function(){x.state.isVisible&&x.hide()}),t):o=requestAnimationFrame((function(){x.hide()}))}}else q()}}function it(e,t){void 0===t&&(t={});var n=ze.plugins.concat(t.plugins||[]);document.addEventListener("touchstart",Ie,be),window.addEventListener("blur",_e);var r=Object.assign({},t,{plugins:n}),i=Pe(e).reduce((function(e,t){var n=t&&rt(t,r);return n&&e.push(n),e}),[]);return ke(e)?i[0]:i}it.defaultProps=ze,it.setDefaultProps=function(e){Object.keys(e).forEach((function(t){ze[t]=e[t]}))},it.currentInput=He;var ot=function(e,t){void 0===t&&(t={});var n,r=e,i=[],o=t.overrides,a=[];function s(){i=r.map((function(e){return e.reference}))}function c(e){r.forEach((function(t){e?t.enable():t.disable()}))}function u(e){return r.map((function(t){var r=t.setProps;return t.setProps=function(i){r(i),t.reference===n&&e.setProps(i)},function(){t.setProps=r}}))}c(!1),s();var f={fn:function(){return{onDestroy:function(){c(!0)},onTrigger:function(e,t){var a=t.currentTarget,s=i.indexOf(a);if(a!==n){n=a;var c=(o||[]).concat("content").reduce((function(e,t){return e[t]=r[s].props[t],e}),{});e.setProps(Object.assign({},c,{getReferenceClientRect:"function"===typeof c.getReferenceClientRect?c.getReferenceClientRect:function(){return a.getBoundingClientRect()}}))}}}}},p=it(Le(),Object.assign({},Ee(t,["overrides"]),{plugins:[f].concat(t.plugins||[]),triggerTarget:i})),d=p.setProps;return p.setProps=function(e){o=e.overrides||o,d(e)},p.setInstances=function(e){c(!0),a.forEach((function(e){return e()})),r=e,c(!1),s(),u(p),p.setProps({triggerTarget:i})},a=u(p),p};it.setDefaultProps({render:Qe});var at=it}}]);