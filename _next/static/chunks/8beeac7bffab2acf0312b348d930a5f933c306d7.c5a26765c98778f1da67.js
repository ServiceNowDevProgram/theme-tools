(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{B34S:function(e,r,t){"use strict";t.d(r,"a",(function(){return v}));var n=t("H+61"),o=t("UlJF"),a=t("+Css"),i=t("7LId"),c=t("VIvw"),s=t("iHvq"),l=t("cpVT"),u=t("q1tI"),d=t.n(u),g=t("/FO8"),h=t("ylkT"),f=t("FGyW"),p=d.a.createElement;function k(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=Object(s.a)(e);if(r){var o=Object(s.a)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return Object(c.a)(this,t)}}var v=function(e){Object(i.a)(t,e);var r=k(t);function t(e){var o;return Object(n.a)(this,t),o=r.call(this,e),Object(l.a)(Object(a.a)(o),"copyValue",(function(){var e=o.props.value;Object(g.b)(e),f.b.success("Copied to clipboard: ".concat(e))})),o.state={hover:!1},o}return Object(o.a)(t,[{key:"render",value:function(){var e=this,r=this.props,t=r.value,n=r.withButton,o=r.children,a=this.state.hover;return n?p("div",{className:"flex"},p("div",{className:"pr-4"},o),p("button",{className:"ml-auto text-2xs uppercase bg-black text-white rounded font-semibold py-1 px-2",onClick:this.copyValue},"Copy")):p("div",{className:Object(h.a)({relative:!0,"cursor-pointer":!0,"text-red-500":a}),onMouseEnter:function(){return e.setState({hover:!0})},onMouseLeave:function(){return e.setState({hover:!1})},onClick:function(){Object(g.b)(t),f.b.success("Copied to clipboard: ".concat(t))}},o,a&&p("div",{className:"inline-block absolute bg-gray-800 text-white text-xs p-1",style:{left:"0",bottom:"-1.3rem",fontSize:"8px",width:"72px",borderRadius:"2px"}},"CLICK TO COPY"))}}]),t}(u.Component)},RuST:function(e,r,t){"use strict";var n=t("q1tI"),o=t.n(n),a=t("B34S"),i=t("b5oN"),c=t("i8i4");function s(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}var l="undefined"!==typeof window&&"undefined"!==typeof document;function u(e,r){e&&("function"===typeof e&&e(r),{}.hasOwnProperty.call(e,"current")&&(e.current=r))}function d(){return l&&document.createElement("div")}function g(e,r){var t,n;return Object.assign({},r,{popperOptions:Object.assign({},e.popperOptions,r.popperOptions,{modifiers:[].concat(((null==(t=e.popperOptions)?void 0:t.modifiers)||[]).filter((function(e){return e.name.indexOf("tippy")>=0})),(null==(n=r.popperOptions)?void 0:n.modifiers)||[])})})}var h=l?n.useLayoutEffect:n.useEffect;function f(e){var r=Object(n.useRef)();return r.current||(r.current="function"===typeof e?e():e),r.current}function p(e,r,t){t.split(/\s+/).forEach((function(t){t&&e.classList[r](t)}))}var k={name:"className",defaultValue:"",fn:function(e){var r=e.popper.firstElementChild,t=function(){var r;return!!(null==(r=e.props.render)?void 0:r.$$tippy)};function n(){e.props.className&&!t()||p(r,"add",e.props.className)}return{onCreate:n,onBeforeUpdate:function(){t()&&p(r,"remove",e.props.className)},onAfterUpdate:n}}};function v(e){return function(r){var t=r.children,a=r.content,i=r.visible,l=r.singleton,p=r.render,v=r.reference,b=r.disabled,w=void 0!==b&&b,P=r.ignoreAttributes,x=void 0===P||P,m=(r.__source,r.__self,s(r,["children","content","visible","singleton","render","reference","disabled","ignoreAttributes","__source","__self"])),V=void 0!==i,y=void 0!==l,_=Object(n.useState)(!1),O=_[0],j=_[1],I=Object(n.useState)({}),R=I[0],S=I[1],C=Object(n.useState)(),N=C[0],E=C[1],B=f((function(){return{container:d(),renders:1}})),M=Object.assign({ignoreAttributes:x},m,{content:B.container});V&&(M.trigger="manual",M.hideOnClick=!1),y&&(w=!0);var T=M,D=M.plugins||[];p&&(T=Object.assign({},M,{plugins:y?[].concat(D,[{fn:function(){return{onTrigger:function(e,r){var t=l.data.children.find((function(e){return e.instance.reference===r.currentTarget})).content;E(t)}}}}]):D,render:function(){return{popper:B.container}}}));var F=[v].concat(t?[t.type]:[]);return h((function(){var r=v;v&&v.hasOwnProperty("current")&&(r=v.current);var t=e(r||B.ref||d(),Object.assign({},T,{plugins:[k].concat(M.plugins||[])}));return B.instance=t,w&&t.disable(),i&&t.show(),y&&l.hook({instance:t,content:a,props:T}),j(!0),function(){t.destroy(),null==l||l.cleanup(t)}}),F),h((function(){if(1!==B.renders){var e=B.instance;e.setProps(g(e.props,T)),w?e.disable():e.enable(),V&&(i?e.show():e.hide()),y&&l.hook({instance:e,content:a,props:T})}else B.renders++})),h((function(){var e;if(p){var r=B.instance;r.setProps({popperOptions:Object.assign({},r.props.popperOptions,{modifiers:[].concat((null==(e=r.props.popperOptions)?void 0:e.modifiers)||[],[{name:"$$tippyReact",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var r,t=e.state,n=null==(r=t.modifiersData)?void 0:r.hide;R.placement===t.placement&&R.referenceHidden===(null==n?void 0:n.isReferenceHidden)&&R.escaped===(null==n?void 0:n.hasPopperEscaped)||S({placement:t.placement,referenceHidden:null==n?void 0:n.isReferenceHidden,escaped:null==n?void 0:n.hasPopperEscaped}),t.attributes.popper={}}}])})})}}),[R.placement,R.referenceHidden,R.escaped].concat(F)),o.a.createElement(o.a.Fragment,null,t?Object(n.cloneElement)(t,{ref:function(e){B.ref=e,u(t.ref,e)}}):null,O&&Object(c.createPortal)(p?p(function(e){var r={"data-placement":e.placement};return e.referenceHidden&&(r["data-reference-hidden"]=""),e.escaped&&(r["data-escaped"]=""),r}(R),N,B.instance):a,B.container))}}function b(e){return function(r){var t=void 0===r?{}:r,o=t.disabled,a=void 0!==o&&o,i=t.overrides,c=void 0===i?[]:i,l=Object(n.useState)(!1),u=l[0],d=l[1],p=f({children:[],renders:1});return h((function(){if(u){var r=p.children,t=p.sourceData;if(t){var n=e(r.map((function(e){return e.instance})),Object.assign({},t.props,{popperOptions:t.instance.props.popperOptions,overrides:c,plugins:[k].concat(t.props.plugins||[])}));return p.instance=n,a&&n.disable(),function(){n.destroy(),p.children=r.filter((function(e){return!e.instance.state.isDestroyed}))}}}else d(!0)}),[u]),h((function(){if(u)if(1!==p.renders){var e=p.children,r=p.instance,t=p.sourceData;if(r&&t){var n=t.props,o=(n.content,s(n,["content"]));r.setProps(g(r,Object.assign({},o,{overrides:c}))),r.setInstances(e.map((function(e){return e.instance}))),a?r.disable():r.enable()}}else p.renders++})),Object(n.useMemo)((function(){return[{data:p,hook:function(e){p.sourceData=e},cleanup:function(){p.sourceData=null}},{hook:function(e){p.children.find((function(r){var t=r.instance;return e.instance===t}))||p.children.push(e)},cleanup:function(e){p.children=p.children.filter((function(r){return r.instance!==e}))}}]}),[])}}var w=function(e,r){return Object(n.forwardRef)((function(t,a){var i=t.children,c=s(t,["children"]);return o.a.createElement(e,Object.assign({},r,c),i?Object(n.cloneElement)(i,{ref:function(e){u(a,e),u(i.ref,e)}}):null)}))},P=(i.a,w(v(i.b))),x=o.a.createElement;r.a=function(e){var r=e.color,t=e.children,n=x("div",null,x("div",{className:"w-full h-20",style:{backgroundColor:r.hex}}),x("div",{className:"p-4 border-t border-gray-500"},x("p",{className:"text-2xs uppercase opacity-75 pb-1"},"SCSS Variable"),x(a.a,{withButton:!0,value:r.scssVariable},x("p",null,r.scssVariable)),x("p",{className:"text-2xs uppercase opacity-75 pb-1 mt-3"},"CSS Custom Property"),x(a.a,{withButton:!0,value:r.customProperty},x("p",null,r.customProperty)),x("p",{className:"text-2xs uppercase opacity-75 pb-1 mt-3"},"Hex Color"),x(a.a,{withButton:!0,value:r.hex},x("p",null,r.hex)),x("p",{className:"text-2xs uppercase opacity-75 pb-1 mt-3"},"RGB Color"),x(a.a,{withButton:!0,value:r.rgb},x("p",null,r.rgb))));return x(P,{content:n,trigger:"click",interactive:!0,theme:"colorbox",arrow:!1},t)}},"rST/":function(e,r,t){"use strict";t.d(r,"b",(function(){return u})),t.d(r,"d",(function(){return d})),t.d(r,"j",(function(){return g})),t.d(r,"i",(function(){return h})),t.d(r,"a",(function(){return f})),t.d(r,"h",(function(){return p})),t.d(r,"g",(function(){return k})),t.d(r,"c",(function(){return le})),t.d(r,"e",(function(){return de})),t.d(r,"f",(function(){return ge}));var n=t("cpVT"),o=(t("z7pX"),t("H+61")),a=function e(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;Object(o.a)(this,e),this.hex=r,this.rgb=s(r),this.id=t,this.index=n,this.customProperty="--".concat(t),this.scssVariable="$".concat(t),this.name=this.customProperty},i=function(e){var r=e.toString(16);return 1===r.length?"0".concat(r):r},c=function(e,r,t){t=(Math.round(100*t)/100).toFixed(2);var n=Math.round(parseInt(r.substring(0,2),16)*t+parseInt(e.substring(0,2),16)*(1-t)),o=Math.round(parseInt(r.substring(2,4),16)*t+parseInt(e.substring(2,4),16)*(1-t)),a=Math.round(parseInt(r.substring(4,6),16)*t+parseInt(e.substring(4,6),16)*(1-t));return i(n)+i(o)+i(a)},s=function(e){var r=parseInt(e.substring(1,3),16),t=parseInt(e.substring(3,5),16),n=parseInt(e.substring(5,7),16);return"".concat(r,",").concat(t,",").concat(n)},l=function(e){if(!e)return"";var r=e.split(","),t=parseInt(r[0]).toString(16),n=parseInt(r[1]).toString(16),o=parseInt(r[2]).toString(16);return 1===t.length&&(t="0"+t),1===n.length&&(n="0"+n),1===o.length&&(o="0"+o),"#"+t+n+o},u=function(e){var r=e.color,t=e.lightVariations,n=e.lightPercentage,o=e.lightSaturation,i=e.darkVariations,s=e.darkPercentage,l=e.darkSaturation,u=e.hook,d=void 0===u?"hook":u,g=e.startIndex,p=void 0===g?0:g,k=e.includeEnds,v=e.isReverse,b=e.removeBase;if(!r)return[];if(!t&&!i)return[new a(r,d.replace(/^--/,""))];for(var w=[],P=[],x=n/t,m=o/t,V=s/i,y=l/i,_=r,O=r,j=0;j<t;j++){if(o){var I=h(r),R=I.s+I.s*m*(j+1);I.s=R>100?100:R,_=f(I.h,I.s,I.l)}var S=c("ffffff",_.slice(1),1-(j+1)*x);w.push("#"+S)}for(j=0;j<i;j++){if(l){var C=h(r),N=C.s+C.s*y*(j+1);C.s=N>100?100:N,O=f(C.h,C.s,C.l)}var E=c("000000",O.slice(1),1-(j+1)*V);P.push("#"+E)}k&&(w.push("#ffffff"),P.push("#000000")),w.reverse();var B=[];return B=b?[].concat(w,P):[].concat(w,[r],P),v&&B.reverse(),B.map((function(e,r){var t=p+r,n=d;return null!==p&&(n+="-".concat(t)),new a(e,n,t)}))},d=function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t={};for(var n in e)switch(n){case"neutrals":t[n]=v(e[n]),t.surfaceNeutral=E(e[n],r),t.surfaceDivider=B(e[n],r),t.backgroundPrimary=W(e[n],r),t.backgroundSecondary=K(e[n],r),t.backgroundTertiary=X(e[n],r),t.dividerPrimary=Z(e[n],r),t.dividerSecondary=Q(e[n],r),t.dividerTertiary=ee(e[n],r),t.textPrimary=re(e[n],r),t.textSecondary=te(e[n],r),t.textTertiary=ne(e[n],r),t.borderPrimary=oe(e[n],r),t.borderSecondary=ae(e[n],r),t.borderTertiary=ie(e[n],r),t.focusRingShadow=ce(e[n]);break;case"primary":t[n]=b(e[n],r);break;case"secondary":t[n]=w(e[n],r);break;case"selectionPrimary":t[n]=P(e[n],r);break;case"selectionSecondary":t[n]=x(e[n],r);break;case"interactive":t[n]=m(e[n],r);break;case"link":t[n]=V(e[n],r);break;case"focus":t[n]=y(e[n],r),t.focusRing=se(e[n]);break;case"alertCritical":t[n]=_(e[n],r);break;case"alertHigh":t[n]=O(e[n],r);break;case"alertWarning":t[n]=j(e[n],r);break;case"alertModerate":t[n]=I(e[n],r);break;case"alertInfo":t[n]=R(e[n],r);break;case"alertPositive":t[n]=S(e[n],r);break;case"alertLow":t[n]=C(e[n],r);break;case"brandNeutral":case"brandPrimary":case"brandSecondary":t[n]=N(e[n],n);break;case"surfaceBrand":t[n]=M(e[n],r);break;case"chromeBrand":t[n]=T(e[n],r);break;case"chromeDivider":t[n]=D(e[n],r);break;case"groupedBlue":t[n]=F(e[n],r);break;case"groupedBrown":t[n]=H(e[n],r);break;case"groupedGray":t[n]=L(e[n],r);break;case"groupedGreen":t[n]=A(e[n],r);break;case"groupedGreenYellow":t[n]=G(e[n],r);break;case"groupedMagenta":t[n]=q(e[n],r);break;case"groupedOrange":t[n]=$(e[n],r);break;case"groupedPink":t[n]=z(e[n],r);break;case"groupedPurple":t[n]=Y(e[n],r);break;case"groupedTeal":t[n]=J(e[n],r);break;case"groupedYellow":t[n]=U(e[n],r)}return t},g=function(e){return/^#[0-9A-F]{6}$/i.test(e)},h=function(e){var r=0,t=0,n=0;4==e.length?(r="0x"+e[1]+e[1],t="0x"+e[2]+e[2],n="0x"+e[3]+e[3]):7==e.length&&(r="0x"+e[1]+e[2],t="0x"+e[3]+e[4],n="0x"+e[5]+e[6]),r/=255,t/=255,n/=255;var o=Math.min(r,t,n),a=Math.max(r,t,n),i=a-o,c=0,s=0,l=0;return c=0==i?0:a==r?(t-n)/i%6:a==t?(n-r)/i+2:(r-t)/i+4,(c=Math.round(60*c))<0&&(c+=360),l=(a+o)/2,s=+(100*(s=0==i?0:i/(1-Math.abs(2*l-1)))).toFixed(1),l=+(100*l).toFixed(1),{h:Math.round(c),s:Math.round(s),l:Math.round(l)}},f=function(e,r,t){r/=100,t/=100;var n=(1-Math.abs(2*t-1))*r,o=n*(1-Math.abs(e/60%2-1)),a=t-n/2,i=0,c=0,s=0;return 0<=e&&e<60?(i=n,c=o,s=0):60<=e&&e<120?(i=o,c=n,s=0):120<=e&&e<180?(i=0,c=n,s=o):180<=e&&e<240?(i=0,c=o,s=n):240<=e&&e<300?(i=o,c=0,s=n):300<=e&&e<360&&(i=n,c=0,s=o),i=Math.round(255*(i+a)).toString(16),c=Math.round(255*(c+a)).toString(16),s=Math.round(255*(s+a)).toString(16),1==i.length&&(i="0"+i),1==c.length&&(c="0"+c),1==s.length&&(s="0"+s),"#"+i+c+s},p=function(e){var r=h(e),t=r.h;r.s,r.l;return 5,35,f(t,5,35)},k=function(e){var r=h(e),t=r.h;r.s,r.l;return 5,35,f(t,5,35)},v=function(e){return e?u({color:e,lightVariations:10,lightPercentage:.95,lightSaturation:1,darkVariations:9,darkPercentage:.9,darkSaturation:1,hook:"now-color--neutral",startIndex:0,includeEnds:!0}):[]},b=function(e,r){return e?u(r?{color:e,lightPercentage:.6,lightVariations:2,darkPercentage:.7,darkVariations:1,hook:"now-color--primary",isReverse:!0}:{color:e,lightPercentage:.74,lightVariations:1,darkPercentage:.65,darkVariations:2,hook:"now-color--primary"}):[]},w=function(e,r){return e?u(r?{color:e,lightPercentage:.6,lightVariations:2,darkPercentage:.7,darkVariations:1,hook:"now-color--secondary",isReverse:!0}:{color:e,lightPercentage:.74,lightVariations:1,darkPercentage:.65,darkVariations:2,hook:"now-color--secondary"}):[]},P=function(e,r){return e?u(r?{color:e,lightPercentage:.6,lightVariations:2,darkPercentage:.72,darkVariations:2,hook:"now-color_selection--primary",isReverse:!0}:{color:e,lightPercentage:.85,lightVariations:2,darkPercentage:.5,darkVariations:2,hook:"now-color_selection--primary"}):[]},x=function(e,r){return e?u(r?{color:e,lightPercentage:.78,lightVariations:2,darkPercentage:.68,darkVariations:2,hook:"now-color_selection--secondary",isReverse:!0}:{color:e,lightPercentage:.74,lightVariations:2,darkPercentage:.65,darkVariations:2,hook:"now-color_selection--secondary"}):[]},m=function(e,r){return e?u(r?{color:e,lightPercentage:.78,lightVariations:2,darkPercentage:.68,darkVariations:2,hook:"now-color--interactive",isReverse:!0}:{color:e,lightPercentage:.74,lightVariations:2,darkPercentage:.7,darkVariations:2,hook:"now-color--interactive"}):[]},V=function(e,r){return e?u(r?{color:e,lightPercentage:.6,lightVariations:2,darkPercentage:.31,darkVariations:1,startIndex:1,hook:"now-color--link",isReverse:!0}:{color:e,lightPercentage:.32,lightVariations:1,darkPercentage:.63,darkVariations:2,startIndex:1,hook:"now-color--link"}):[]},y=function(e,r){return e?u(r?{color:e,lightPercentage:.6,lightVariations:1,darkPercentage:.31,darkVariations:1,startIndex:1,hook:"now-color--focus",isReverse:!0}:{color:e,lightPercentage:.3,lightVariations:1,darkPercentage:.63,darkVariations:1,startIndex:1,hook:"now-color--focus"}):[]},_=function(e,r){return e?u(r?{color:e,lightPercentage:.75,lightVariations:3,darkPercentage:.44,darkVariations:2,startIndex:0,hook:"now-color_alert--critical",isReverse:r}:{color:e,lightPercentage:.75,lightVariations:2,darkPercentage:.6,darkVariations:3,startIndex:0,hook:"now-color_alert--critical"}):[]},O=function(e,r){return e?u(r?{color:e,lightPercentage:.75,lightVariations:3,darkPercentage:.45,darkVariations:2,startIndex:0,hook:"now-color_alert--high",isReverse:r}:{color:e,lightPercentage:.75,lightVariations:2,darkPercentage:.72,darkVariations:3,startIndex:0,hook:"now-color_alert--high"}):[]},j=function(e,r){return e?u(r?{color:e,lightPercentage:.75,lightVariations:3,darkPercentage:.5,darkVariations:2,startIndex:0,hook:"now-color_alert--warning",isReverse:r}:{color:e,lightPercentage:.75,lightVariations:2,darkPercentage:.72,darkVariations:3,startIndex:0,hook:"now-color_alert--warning"}):[]},I=function(e,r){return e?u(r?{color:e,lightPercentage:.74,lightVariations:3,darkPercentage:.4,darkVariations:2,startIndex:0,hook:"now-color_alert--moderate",isReverse:r}:{color:e,lightPercentage:.74,lightVariations:2,darkPercentage:.72,darkVariations:3,startIndex:0,hook:"now-color_alert--moderate"}):[]},R=function(e,r){return e?u(r?{color:e,lightPercentage:.74,lightVariations:3,darkPercentage:.45,darkVariations:2,startIndex:0,hook:"now-color_alert--info",isReverse:r}:{color:e,lightPercentage:.74,lightVariations:2,darkPercentage:.72,darkVariations:3,startIndex:0,hook:"now-color_alert--info"}):[]},S=function(e,r){return e?u(r?{color:e,lightPercentage:.71,lightVariations:3,darkPercentage:.47,darkVariations:2,startIndex:0,hook:"now-color_alert--positive",isReverse:r}:{color:e,lightPercentage:.74,lightVariations:2,darkPercentage:.79,darkVariations:3,startIndex:0,hook:"now-color_alert--positive"}):[]},C=function(e,r){return e?u(r?{color:e,lightPercentage:.71,lightVariations:3,darkPercentage:.5,darkVariations:2,startIndex:0,hook:"now-color_alert--low",isReverse:r}:{color:e,lightPercentage:.74,lightVariations:2,darkPercentage:.79,darkVariations:3,startIndex:0,hook:"now-color_alert--low"}):[]},N=function(e,r){return e?(r="now-color_brand--"+r.replace(/([a-z](?=[A-Z]))/g,"$1 ").split(" ")[1].toLowerCase(),[new a(e,r)]):[]},E=function(e,r){if(!e)return[];var t=v(e),n=r?t[13].hex:t[4].hex;return u(r?{color:n,lightPercentage:0,lightVariations:0,darkPercentage:.83,darkVariations:6,startIndex:1,hook:"now-color_surface--neutral",includeEnds:!1,removeBase:!0,isReverse:r}:{color:n,lightPercentage:.95,lightVariations:6,darkPercentage:.81,darkVariations:0,startIndex:1,hook:"now-color_surface--neutral",includeEnds:!1,removeBase:!0})},B=function(e,r){if(!e)return[];var t=v(e),n=r?t[9].hex:t[8].hex;return u(r?{color:n,lightPercentage:0,lightVariations:0,darkPercentage:.75,darkSaturation:1,darkVariations:6,startIndex:1,hook:"now-color_surface--divider",includeEnds:!1,removeBase:!0,isReverse:r}:{color:n,lightPercentage:.9,lightVariations:6,darkPercentage:.81,darkVariations:0,startIndex:1,hook:"now-color_surface--divider",includeEnds:!1,removeBase:!0})},M=function(e,r){return e?u(r?{color:e,lightPercentage:0,lightVariations:0,darkPercentage:.8,darkVariations:5,startIndex:1,hook:"now-color_surface--brand",includeEnds:!1,isReverse:r}:{color:e,lightPercentage:.9,lightVariations:5,darkPercentage:.5,darkVariations:0,startIndex:1,hook:"now-color_surface--brand",includeEnds:!1}):[]},T=function(e){return e?u({color:e,lightPercentage:.85,lightVariations:5,darkPercentage:.5,darkVariations:5,hook:"now-color_chrome--brand"}):[]},D=function(e){return e?u({color:e,lightPercentage:.6,lightVariations:5,darkPercentage:.8,darkVariations:5,hook:"now-color_chrome--divider"}):[]},F=function(e,r){return e?u(r?{color:e,lightVariations:3,lightPercentage:.75,darkVariations:2,darkPercentage:.46,hook:"now-color_grouped--blue",startIndex:0,isReverse:r}:{color:e,lightVariations:2,lightPercentage:.75,darkVariations:3,darkPercentage:.65,hook:"now-color_grouped--blue",startIndex:0}):[]},H=function(e,r){return e?u(r?{color:e,lightVariations:3,lightPercentage:.75,darkVariations:2,darkPercentage:.46,hook:"now-color_grouped--brown",startIndex:0,isReverse:r}:{color:e,lightVariations:2,lightPercentage:.75,darkVariations:3,darkPercentage:.65,hook:"now-color_grouped--brown",startIndex:0}):[]},L=function(e,r){return e?u(r?{color:e,lightVariations:3,lightPercentage:.75,darkVariations:2,darkPercentage:.5,hook:"now-color_grouped--gray",startIndex:0,isReverse:r}:{color:e,lightVariations:2,lightPercentage:.75,darkVariations:3,darkPercentage:.65,hook:"now-color_grouped--gray",startIndex:0}):[]},A=function(e,r){return e?u(r?{color:e,lightVariations:3,lightPercentage:.75,darkVariations:2,darkPercentage:.45,hook:"now-color_grouped--green",startIndex:0,isReverse:r}:{color:e,lightVariations:2,lightPercentage:.75,darkVariations:3,darkPercentage:.65,hook:"now-color_grouped--green",startIndex:0}):[]},G=function(e,r){return e?u(r?{color:e,lightVariations:3,lightPercentage:.75,darkVariations:2,darkPercentage:.5,hook:"now-color_grouped--green-yellow",startIndex:0,isReverse:r}:{color:e,lightVariations:2,lightPercentage:.75,darkVariations:3,darkPercentage:.65,hook:"now-color_grouped--green-yellow",startIndex:0}):[]},q=function(e,r){return e?u(r?{color:e,lightVariations:3,lightPercentage:.75,darkVariations:2,darkPercentage:.43,hook:"now-color_grouped--magenta",startIndex:0,isReverse:r}:{color:e,lightVariations:2,lightPercentage:.75,darkVariations:3,darkPercentage:.65,hook:"now-color_grouped--magenta",startIndex:0}):[]},$=function(e,r){return e?u(r?{color:e,lightVariations:3,lightPercentage:.75,darkVariations:2,darkPercentage:.43,hook:"now-color_grouped--orange",startIndex:0,isReverse:r}:{color:e,lightVariations:2,lightPercentage:.75,darkVariations:3,darkPercentage:.65,hook:"now-color_grouped--orange",startIndex:0}):[]},z=function(e,r){return e?u(r?{color:e,lightVariations:3,lightPercentage:.75,darkVariations:2,darkPercentage:.42,hook:"now-color_grouped--pink",startIndex:0,isReverse:r}:{color:e,lightVariations:2,lightPercentage:.75,darkVariations:3,darkPercentage:.65,hook:"now-color_grouped--pink",startIndex:0}):[]},Y=function(e,r){return e?u(r?{color:e,lightVariations:3,lightPercentage:.75,darkVariations:2,darkPercentage:.4,hook:"now-color_grouped--purple",startIndex:0,isReverse:r}:{color:e,lightVariations:2,lightPercentage:.75,darkVariations:3,darkPercentage:.65,hook:"now-color_grouped--purple",startIndex:0}):[]},J=function(e,r){return e?u(r?{color:e,lightVariations:3,lightPercentage:.75,darkVariations:2,darkPercentage:.49,hook:"now-color_grouped--teal",startIndex:0,isReverse:r}:{color:e,lightVariations:2,lightPercentage:.75,darkVariations:3,darkPercentage:.65,hook:"now-color_grouped--teal",startIndex:0}):[]},U=function(e,r){return e?u(r?{color:e,lightVariations:3,lightPercentage:.75,darkVariations:2,darkPercentage:.48,hook:"now-color_grouped--yellow",startIndex:0,isReverse:r}:{color:e,lightVariations:2,lightPercentage:.75,darkVariations:3,darkPercentage:.65,hook:"now-color_grouped--yellow",startIndex:0}):[]},W=function(e,r){if(!e)return[];var t=v(e),n=r?t[20].hex:t[0].hex;return[new a(n,"now-color_background--primary")]},K=function(e,r){if(!e)return[];var t=v(e),n=r?t[18].hex:t[1].hex;return[new a(n,"now-color_background--secondary")]},X=function(e,r){if(!e)return[];var t=v(e),n=r?t[16].hex:t[2].hex;return[new a(n,"now-color_background--tertiary")]},Z=function(e,r){if(!e)return[];var t=v(e),n=r?t[10].hex:t[4].hex;return[new a(n,"now-color_divider--primary")]},Q=function(e,r){if(!e)return[];var t=v(e),n=r?t[12].hex:t[3].hex;return[new a(n,"now-color_divider--secondary")]},ee=function(e,r){if(!e)return[];var t=v(e),n=r?t[14].hex:t[2].hex;return[new a(n,"now-color_divider--tertiary")]},re=function(e,r){if(!e)return[];var t=v(e),n=r?t[0].hex:t[18].hex;return[new a(n,"now-color_text--primary")]},te=function(e,r){if(!e)return[];var t=v(e),n=r?t[3].hex:t[12].hex;return[new a(n,"now-color_text--secondary")]},ne=function(e,r){if(!e)return[];var t=v(e),n=r?t[6].hex:t[9].hex;return[new a(n,"now-color_text--tertiary")]},oe=function(e,r){if(!e)return[];var t=v(e),n=r?t[8].hex:t[7].hex;return[new a(n,"now-color_border--primary")]},ae=function(e,r){if(!e)return[];var t=v(e),n=r?t[10].hex:t[5].hex;return[new a(n,"now-color_border--secondary")]},ie=function(e,r){if(!e)return[];var t=v(e),n=r?t[12].hex:t[3].hex;return[new a(n,"now-color_border--tertiary")]},ce=function(e){if(!e)return[];var r=v(e)[0].hex;return[new a(r,"now-color_focus-ring_shadow")]},se=function(e){if(!e)return[];var r=y(e)[1].hex;return[new a(r,"now-color_focus-ring")]},le=function(e){var r;return r={neutrals:l(e["--now-color--neutral-11"]),primary:l(e["--now-color--primary-1"]),secondary:l(e["--now-color--secondary-1"]),selectionPrimary:l(e["--now-color_selection--primary-2"]),selectionSecondary:l(e["--now-color_selection--secondary-2"]),interactive:l(e["--now-color--interactive-2"]),chromeBrand:l(e["--now-color_chrome--brand-5"]),chromeDivider:l(e["--now-color_chrome--divider-5"]),brandNeutral:l(e["--now-color_brand--neutral"]),brandPrimary:l(e["--now-color_brand--primary"]),brandSecondary:l(e["--now-color_brand--secondary"]),surfaceNeutral:l(e["--now-color--neutral-11"]),surfaceDivider:l(e["--now-color--neutral-11"]),surfaceBrand:l(e["--now-color_surface--brand-6"])},Object(n.a)(r,"chromeBrand",l(e["--now-color_chrome--brand-5"])),Object(n.a)(r,"chromeDivider",l(e["--now-color_chrome--divider-5"])),Object(n.a)(r,"backgroundPrimary",l(e["--now-color--neutral-11"])),Object(n.a)(r,"backgroundSecondary",l(e["--now-color--neutral-11"])),Object(n.a)(r,"backgroundTertiary",l(e["--now-color--neutral-11"])),Object(n.a)(r,"dividerPrimary",l(e["--now-color--neutral-11"])),Object(n.a)(r,"dividerSecondary",l(e["--now-color--neutral-11"])),Object(n.a)(r,"dividerTertiary",l(e["--now-color--neutral-11"])),Object(n.a)(r,"textPrimary",l(e["--now-color--neutral-11"])),Object(n.a)(r,"textSecondary",l(e["--now-color--neutral-11"])),Object(n.a)(r,"textTertiary",l(e["--now-color--neutral-11"])),Object(n.a)(r,"borderPrimary",l(e["--now-color--neutral-11"])),Object(n.a)(r,"borderSecondary",l(e["--now-color--neutral-11"])),Object(n.a)(r,"borderTertiary",l(e["--now-color--neutral-11"])),Object(n.a)(r,"focusRingShadow",l(e["--now-color--neutral-11"])),Object(n.a)(r,"alertCritical",l(e["--now-color_alert--critical-2"])),Object(n.a)(r,"alertHigh",l(e["--now-color_alert--high-2"])),Object(n.a)(r,"alertWarning",l(e["--now-color_alert--warning-2"])),Object(n.a)(r,"alertModerate",l(e["--now-color_alert--moderate-2"])),Object(n.a)(r,"alertInfo",l(e["--now-color_alert--info-2"])),Object(n.a)(r,"alertPositive",l(e["--now-color_alert--positive-2"])),Object(n.a)(r,"alertLow",l(e["--now-color_alert--low-2"])),Object(n.a)(r,"groupedBlue",l(e["--now-color_grouped--blue-2"])),Object(n.a)(r,"groupedBrown",l(e["--now-color_grouped--brown-2"])),Object(n.a)(r,"groupedGray",l(e["--now-color_grouped--gray-2"])),Object(n.a)(r,"groupedGreen",l(e["--now-color_grouped--green-2"])),Object(n.a)(r,"groupedGreenYellow",l(e["--now-color_grouped--green-yellow-2"])),Object(n.a)(r,"groupedMagenta",l(e["--now-color_grouped--magenta-2"])),Object(n.a)(r,"groupedOrange",l(e["--now-color_grouped--orange-2"])),Object(n.a)(r,"groupedPink",l(e["--now-color_grouped--pink-2"])),Object(n.a)(r,"groupedPurple",l(e["--now-color_grouped--purple-2"])),Object(n.a)(r,"groupedTeal",l(e["--now-color_grouped--teal-2"])),Object(n.a)(r,"groupedYellow",l(e["--now-color_grouped--yellow-2"])),Object(n.a)(r,"link",l(e["--now-color--link-2"])),Object(n.a)(r,"focus",l(e["--now-color--focus-2"])),Object(n.a)(r,"focusRing",l(e["--now-color--focus-2"])),r},ue=function(e){var r=e.split(",").map((function(e){return(e/=255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}));return.2126*r[0]+.7152*r[1]+.0722*r[2]},de=function(e,r){if(!e||!r)return{normal:{},large:{},ratio:null};g(e)&&(e=s(e)),g(r)&&(r=s(r));var t=ue(e),n=ue(r),o=t>n?(n+.05)/(t+.05):(t+.05)/(n+.05);return{normal:{aa:o<1/4.5?"Pass":"Fail",aaa:o<1/7?"Pass":"Fail"},large:{aa:o<1/3?"Pass":"Fail",aaa:o<1/4.5?"Pass":"Fail"},nonText:{aa:o<1/3?"Pass":"Fail"},ratio:Math.floor(1/o*10)/10}},ge=function(e){var r=h(e),t=r.h,n=(r.s,r.l),o=f(t,5,n),a=5;return n<=100&&n>=91?a=0:n<=90&&n>=82?a=1:n<=81&&n>=73?a=2:n<=72&&n>=64?a=3:n<=63&&n>=55?a=4:n<=54&&n>=46?a=5:n<=45&&n>=37?a=6:n<=36&&n>=28?a=7:n<=27&&n>=19?a=8:n<=18&&n>=9?a=9:n<=8&&n>=0&&(a=10),{chromeBrand:u({color:e,lightVariations:a,lightPercentage:.99,darkVariations:10-a,darkPercentage:.81,hook:"now-color_chrome--brand",startIndex:0}),chromeDivider:u({color:o,lightVariations:a,lightPercentage:.92,darkVariations:10-a,darkPercentage:.86,hook:"now-color_chrome--divider",startIndex:0})}}},vxOt:function(e,r,t){"use strict";var n=t("q1tI"),o=t.n(n),a=t("B34S"),i=t("H+61"),c=t("UlJF"),s=t("+Css"),l=t("7LId"),u=t("VIvw"),d=t("iHvq"),g=t("cpVT"),h=t("qEAo"),f=t("rST/"),p=o.a.createElement;function k(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=Object(d.a)(e);if(r){var o=Object(d.a)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return Object(u.a)(this,t)}}var v=function(e){Object(l.a)(t,e);var r=k(t);function t(e){var n;return Object(i.a)(this,t),n=r.call(this,e),Object(g.a)(Object(s.a)(n),"onSelect",(function(e){var r=n.props.items.findIndex((function(r){return r.id===e}));n.setState({selectedIndex:r})})),Object(g.a)(Object(s.a)(n),"renderContrastRatio",(function(e){if(e&&e.length&&e[n.state.selectedIndex])return Object(f.e)(n.props.baseColor,e[n.state.selectedIndex].color).ratio+" : 1"})),n.state={selectedIndex:0},n}return Object(c.a)(t,[{key:"render",value:function(){var e=this.state.selectedIndex,r=this.props.items;return r&&r.length?p("div",{className:"flex items-center"},p("div",{className:"w-7/12 mr-4"},p(h.a,{items:r,selected:r[e].id,onSelect:this.onSelect})),p("small",null,this.renderContrastRatio(r))):null}}]),t}(n.Component),b=t("RuST"),w=o.a.createElement;r.a=function(e){var r=e.items,t=e.hideName,n=e.a11yCheckColors,o=void 0===n?[]:n,i=e.hideA11yCheckColors;return w("div",{className:"flex"},r&&r.length?r.map((function(e){return w("div",{className:"flex-1",title:e.name,key:e.name},w(b.a,{color:e},w("button",{style:{display:"block",height:"80px",width:"100%",backgroundColor:e.hex}})),t?null:w(a.a,{value:e.name},w("small",{style:{fontSize:"10px"}},e.index)),w(a.a,{value:e.hex},w("small",{style:{fontSize:"10px"}},e.hex)),i?null:w(v,{items:o,baseColor:e.hex}))})):w("div",{className:"flex-1"},w("div",{style:{height:"80px",backgroundColor:"#f5f5f5"}})))}}}]);