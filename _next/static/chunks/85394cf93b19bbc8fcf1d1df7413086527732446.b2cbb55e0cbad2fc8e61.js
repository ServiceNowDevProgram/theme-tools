(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/FO8":function(r,e,o){"use strict";o.d(e,"b",(function(){return a})),o.d(e,"a",(function(){return n}));var t=o("FGyW");function a(r){var e=function(e){e.clipboardData.setData("text/plain",r),e.preventDefault()};document.addEventListener("copy",e),document.execCommand("copy"),document.removeEventListener("copy",e)}function n(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=JSON.stringify(r,null,"  ");a(e),console.log("JSON copied to clipboard: ",e),t.b.success("JSON copied to clipboard")}},B34S:function(r,e,o){"use strict";o.d(e,"a",(function(){return b}));var t=o("1OyB"),a=o("vuIU"),n=o("Ji7U"),i=o("md7G"),c=o("foSv"),l=o("q1tI"),u=o.n(l),s=o("/FO8"),d=o("ylkT"),g=o("FGyW"),h=u.a.createElement;function f(r){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(r){return!1}}();return function(){var o,t=Object(c.a)(r);if(e){var a=Object(c.a)(this).constructor;o=Reflect.construct(t,arguments,a)}else o=t.apply(this,arguments);return Object(i.a)(this,o)}}var b=function(r){Object(n.a)(o,r);var e=f(o);function o(r){var a;return Object(t.a)(this,o),(a=e.call(this,r)).state={hover:!1},a}return Object(a.a)(o,[{key:"render",value:function(){var r=this,e=this.props,o=e.value,t=e.children,a=this.state.hover;return h("div",{className:Object(d.a)({relative:!0,"cursor-pointer":!0,"text-red-500":a}),onMouseEnter:function(){return r.setState({hover:!0})},onMouseLeave:function(){return r.setState({hover:!1})},onClick:function(){Object(s.b)(o),g.b.success("Copied to clipboard: ".concat(o))}},t,a&&h("div",{className:"inline-block absolute bg-gray-800 text-white text-xs p-1",style:{left:"0",bottom:"-1.3rem",fontSize:"8px",width:"72px",borderRadius:"2px"}},"CLICK TO COPY"))}}]),o}(l.Component)},BjqG:function(r,e,o){"use strict";var t=o("rePB"),a=o("q1tI"),n=o.n(a),i=o("vRNQ"),c=o.n(i),l=o("ylkT"),u=n.a.createElement;e.a=function(r){var e,o=r.label,n=r.checked,i=void 0!==n&&n,s=r.onChange,d=void 0===s?function(){}:s,g=Object(a.useState)(i),h=g[0],f=g[1];return u("label",{className:"flex items-center cursor-pointer"},u("a",{role:"button",tabIndex:"0",className:"relative",onKeyPress:function(){f(!h),d(h)}},u("input",{name:o,type:"checkbox",className:"hidden",onChange:function(){f(!h),d(h)},checked:i}),u("div",{className:"toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"}),u("div",{className:Object(l.a)((e={},Object(t.a)(e,c.a.toggle__dot,!0),Object(t.a)(e,"absolute",!0),Object(t.a)(e,"w-6",!0),Object(t.a)(e,"h-6",!0),Object(t.a)(e,"bg-white",!0),Object(t.a)(e,"rounded-full",!0),Object(t.a)(e,"shadow",!0),Object(t.a)(e,"inset-y-0",!0),Object(t.a)(e,"left-0",!0),e))})),u("div",{className:"ml-3"},o))}},"rST/":function(r,e,o){"use strict";o.d(e,"b",(function(){return s})),o.d(e,"d",(function(){return d})),o.d(e,"h",(function(){return g})),o.d(e,"g",(function(){return h})),o.d(e,"a",(function(){return f})),o.d(e,"f",(function(){return b})),o.d(e,"c",(function(){return U})),o.d(e,"e",(function(){return $}));var t=o("rePB"),a=(o("KQm4"),o("1OyB")),n=function r(e,o){Object(a.a)(this,r),this.hex=e,this.rgb=l(e),this.name=o},i=function(r){var e=r.toString(16);return 1===e.length?"0".concat(e):e},c=function(r,e,o){o=(Math.round(100*o)/100).toFixed(2);var t=Math.round(parseInt(e.substring(0,2),16)*o+parseInt(r.substring(0,2),16)*(1-o)),a=Math.round(parseInt(e.substring(2,4),16)*o+parseInt(r.substring(2,4),16)*(1-o)),n=Math.round(parseInt(e.substring(4,6),16)*o+parseInt(r.substring(4,6),16)*(1-o));return i(t)+i(a)+i(n)},l=function(r){var e=parseInt(r.substring(1,3),16),o=parseInt(r.substring(3,5),16),t=parseInt(r.substring(5,7),16);return"".concat(e,",").concat(o,",").concat(t)},u=function(r){if(!r)return"";var e=r.split(","),o=parseInt(e[0]).toString(16),t=parseInt(e[1]).toString(16),a=parseInt(e[2]).toString(16);return 1===o.length&&(o="0"+o),1===t.length&&(t="0"+t),1===a.length&&(a="0"+a),"#"+o+t+a},s=function(r){var e=r.color,o=r.lightVariations,t=r.lightPercentage,a=r.lightSaturation,i=r.darkVariations,l=r.darkPercentage,u=r.darkSaturation,s=r.hook,d=void 0===s?"hook":s,g=r.startIndex,b=r.includeEnds,k=r.isDark,w=r.removeEnd;if(!e)return[];for(var p=[],v=[],_=t/o,m=a/o,y=l/i,x=u/i,P=e,O=e,j=0;j<o;j++){if(a){var V=h(e),S=V.s+V.s*m*(j+1);V.s=S>100?100:S,P=f(V.h,V.s,V.l)}var I=c("ffffff",P.slice(1),1-(j+1)*_);p.push("#"+I)}for(j=0;j<i;j++){if(u){var M=h(e),N=M.s+M.s*x*(j+1);M.s=N>100?100:N,O=f(M.h,M.s,M.l)}var B=c("000000",O.slice(1),1-(j+1)*y);v.push("#"+B)}b&&(p.push("#ffffff"),v.push("#000000")),p.reverse();var E=[].concat(p,[e],v);return w&&E.pop(),k&&E.reverse(),E.map((function(r,e){var o="--".concat(d);return null!==g&&(o+="-".concat(e+(g||0))),new n(r,o)}))},d=function(r){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o={};for(var t in r)switch(t){case"neutrals":o[t]=k(r[t]),o.surfaceNeutral=B(r[t],e),o.surfaceDivider=E(r[t],e),o.backgroundPrimary=T(r[t],e),o.backgroundSecondary=G(r[t],e),o.backgroundTertiary=R(r[t],e),o.dividerPrimary=L(r[t],e),o.dividerSecondary=Y(r[t],e),o.dividerTertiary=J(r[t],e),o.textPrimary=q(r[t],e),o.textSecondary=W(r[t],e),o.textTertiary=z(r[t],e),o.borderPrimary=A(r[t],e),o.borderSecondary=K(r[t],e),o.borderTertiary=Q(r[t]);break;case"primary":o[t]=w(r[t]);break;case"secondary":o[t]=p(r[t],e);break;case"selectionPrimary":o[t]=v(r[t],e);break;case"selectionSecondary":o[t]=_(r[t],e);break;case"interactive":o[t]=m(r[t],e);break;case"link":o[t]=y(r[t],e);break;case"focus":o[t]=x(r[t],e);break;case"alertCritical":o[t]=P(r[t]);break;case"alertHigh":o[t]=O(r[t]);break;case"alertWarning":o[t]=j(r[t]);break;case"alertModerate":o[t]=V(r[t]);break;case"alertInfo":o[t]=S(r[t]);break;case"alertPositive":o[t]=I(r[t]);break;case"alertLow":o[t]=M(r[t]);break;case"brandNeutral":case"brandPrimary":case"brandSecondary":o[t]=N(r[t],t);break;case"surfaceBrand":o[t]=C(r[t],e);break;case"chromeBrand":o[t]=D(r[t]);break;case"chromeDivider":o[t]=F(r[t]);break;case"groupedBlue":case"groupedBrown":case"groupedGray":case"groupedGreen":case"groupedGreenYellow":case"groupedMagenta":case"groupedOrange":case"groupedPink":case"groupedPurple":case"groupedTeal":case"groupedYellow":o[t]=H(r[t],t)}return o},g=function(r){return/^#[0-9A-F]{6}$/i.test(r)},h=function(r){var e=0,o=0,t=0;4==r.length?(e="0x"+r[1]+r[1],o="0x"+r[2]+r[2],t="0x"+r[3]+r[3]):7==r.length&&(e="0x"+r[1]+r[2],o="0x"+r[3]+r[4],t="0x"+r[5]+r[6]),e/=255,o/=255,t/=255;var a=Math.min(e,o,t),n=Math.max(e,o,t),i=n-a,c=0,l=0,u=0;return c=0==i?0:n==e?(o-t)/i%6:n==o?(t-e)/i+2:(e-o)/i+4,(c=Math.round(60*c))<0&&(c+=360),u=(n+a)/2,l=+(100*(l=0==i?0:i/(1-Math.abs(2*u-1)))).toFixed(1),u=+(100*u).toFixed(1),{h:Math.round(c),s:Math.round(l),l:Math.round(u)}},f=function(r,e,o){e/=100,o/=100;var t=(1-Math.abs(2*o-1))*e,a=t*(1-Math.abs(r/60%2-1)),n=o-t/2,i=0,c=0,l=0;return 0<=r&&r<60?(i=t,c=a,l=0):60<=r&&r<120?(i=a,c=t,l=0):120<=r&&r<180?(i=0,c=t,l=a):180<=r&&r<240?(i=0,c=a,l=t):240<=r&&r<300?(i=a,c=0,l=t):300<=r&&r<360&&(i=t,c=0,l=a),i=Math.round(255*(i+n)).toString(16),c=Math.round(255*(c+n)).toString(16),l=Math.round(255*(l+n)).toString(16),1==i.length&&(i="0"+i),1==c.length&&(c="0"+c),1==l.length&&(l="0"+l),"#"+i+c+l},b=function(r){var e=h(r),o=e.h,t=e.s,a=e.l;return f(o,t=t-25<0?0:t-25,a=a-18<0?0:a-18)},k=function(r){return r?s({color:r,lightVariations:10,lightPercentage:.95,lightSaturation:1,darkVariations:9,darkPercentage:.9,darkSaturation:1,hook:"now-color--neutral",startIndex:0,includeEnds:!0}):[]},w=function(r){return r?s({color:r,lightPercentage:.74,lightVariations:1,darkPercentage:.65,darkVariations:2,hook:"now-color--primary"}):[]},p=function(r,e){return r?s(e?{color:r,lightPercentage:.95,lightVariations:3,lightSaturation:1,darkPercentage:.65,darkVariations:0,darkSaturation:1,hook:"now-color--secondary"}:{color:r,lightPercentage:.74,lightVariations:1,darkPercentage:.65,darkVariations:2,hook:"now-color--secondary"}):[]},v=function(r,e){return r?s(e?{color:r,lightPercentage:.75,lightVariations:3,lightSaturation:1,darkPercentage:.25,darkVariations:1,darkSaturation:1,hook:"now-color_selection--primary"}:{color:r,lightPercentage:.85,lightVariations:2,darkPercentage:.5,darkVariations:2,hook:"now-color_selection--primary"}):[]},_=function(r,e){return r?s(e?{color:r,lightPercentage:.75,lightVariations:3,darkPercentage:.25,darkSaturation:.25,darkVariations:1,hook:"now-color_selection--secondary"}:{color:r,lightPercentage:.74,lightVariations:2,darkPercentage:.65,darkVariations:2,hook:"now-color_selection--secondary"}):[]},m=function(r,e){return r?s(e?{color:r,lightPercentage:.75,lightVariations:3,lightSaturation:1,darkPercentage:.25,darkVariations:1,darkSaturation:.25,hook:"now-color--interactive"}:{color:r,lightPercentage:.74,lightVariations:2,darkPercentage:.7,darkVariations:2,hook:"now-color--interactive"}):[]},y=function(r,e){return r?s(e?{color:r,lightPercentage:.75,lightVariations:3,lightSaturation:1,darkPercentage:.25,darkVariations:0,darkSaturation:.25,startIndex:1,hook:"now-color--link"}:{color:r,lightPercentage:.32,lightVariations:1,darkPercentage:.63,darkVariations:2,startIndex:1,hook:"now-color--link"}):[]},x=function(r,e){return r?s(e?{color:r,lightPercentage:.75,lightVariations:2,lightSaturation:1,darkPercentage:.63,darkVariations:0,startIndex:1,hook:"now-color--focus"}:{color:r,lightPercentage:.3,lightVariations:1,darkPercentage:.63,darkVariations:1,startIndex:1,hook:"now-color--focus"}):[]},P=function(r){return r?s({color:r,lightPercentage:.75,lightVariations:2,darkPercentage:.6,darkVariations:3,startIndex:0,hook:"now-color_alert--critical"}):[]},O=function(r){return r?s({color:r,lightPercentage:.75,lightVariations:2,darkPercentage:.72,darkVariations:3,startIndex:0,hook:"now-color_alert--high"}):[]},j=function(r){return r?s({color:r,lightPercentage:.75,lightVariations:2,darkPercentage:.72,darkVariations:3,startIndex:0,hook:"now-color_alert--warning"}):[]},V=function(r){return r?s({color:r,lightPercentage:.74,lightVariations:2,darkPercentage:.72,darkVariations:3,startIndex:0,hook:"now-color_alert--moderate"}):[]},S=function(r){return r?s({color:r,lightPercentage:.74,lightVariations:2,darkPercentage:.72,darkVariations:3,startIndex:0,hook:"now-color_alert--info"}):[]},I=function(r){return r?s({color:r,lightPercentage:.74,lightVariations:2,darkPercentage:.79,darkVariations:3,startIndex:0,hook:"now-color_alert--positive"}):[]},M=function(r){return r?s({color:r,lightPercentage:.74,lightVariations:2,darkPercentage:.79,darkVariations:3,startIndex:0,hook:"now-color_alert--low"}):[]},N=function(r,e){return r?(e="--now-color_brand--"+e.replace(/([a-z](?=[A-Z]))/g,"$1 ").split(" ")[1].toLowerCase(),[new n(r,e)]):[]},B=function(r,e){if(!r)return[];var o=k(r),t=e?o[18].hex:o[4].hex;if(e){var a=h(t),n=a.h,i=a.s,c=a.l;t=f(n,2*i>100?100:2*i,c)}return s({color:t,lightPercentage:e?.2:.95,lightVariations:6,darkPercentage:e?.4:.81,darkVariations:0,startIndex:1,hook:"now-color_surface--neutral",includeEnds:!1,isDark:e,removeEnd:!0})},E=function(r,e){if(!r)return[];var o=k(r),t=e?o[16].hex:o[8].hex;if(e){var a=h(t),n=a.h,i=a.s,c=a.l;t=f(n,2*i>100?100:2*i,c)}return s({color:t,lightPercentage:e?.2:.9,lightVariations:6,darkPercentage:e?.4:.81,darkVariations:0,startIndex:1,hook:"now-color_surface--divider",includeEnds:!1,isDark:e,removeEnd:!0})},C=function(r,e){return r?s({color:r,lightPercentage:e?.15:.9,lightVariations:5,darkPercentage:.5,darkVariations:0,startIndex:1,hook:"now-color_surface--brand",includeEnds:!1,isDark:e}):[]},D=function(r){return r?s({color:r,lightPercentage:.85,lightVariations:5,darkPercentage:.5,darkVariations:5,hook:"now-color_chrome--brand"}):[]},F=function(r){return r?s({color:r,lightPercentage:.6,lightVariations:5,darkPercentage:.8,darkVariations:5,hook:"now-color_chrome--divider"}):[]},H=function(r,e){return r?((e=e.replace(/([a-z](?=[A-Z]))/g,"$1 ").split(" ")).shift(),e=e.map((function(r){return r.toLowerCase()})).join("-"),s({color:r,lightVariations:2,lightPercentage:.75,darkVariations:3,darkPercentage:.65,hook:"now-color_grouped--".concat(e),startIndex:0})):[]},T=function(r,e){if(!r)return[];var o=k(r),t=e?o[18].hex:o[0].hex;return[new n(t,"--now-color_background--primary")]},G=function(r,e){if(!r)return[];var o=k(r),t=e?o[16].hex:o[1].hex;return[new n(t,"--now-color_background--secondary")]},R=function(r,e){if(!r)return[];var o=k(r),t=e?o[14].hex:o[2].hex;return[new n(t,"--now-color_background--tertiary")]},L=function(r,e){if(!r)return[];var o=k(r),t=e?o[8].hex:o[4].hex;return[new n(t,"--now-color_divider--primary")]},Y=function(r,e){if(!r)return[];var o=k(r),t=e?o[10].hex:o[3].hex;return[new n(t,"--now-color_divider--secondary")]},J=function(r,e){if(!r)return[];var o=k(r),t=e?o[12].hex:o[2].hex;return[new n(t,"--now-color_divider--tertiary")]},q=function(r,e){if(!r)return[];var o=k(r),t=e?o[0].hex:o[18].hex;return[new n(t,"--now-color_text--primary")]},W=function(r,e){if(!r)return[];var o=k(r),t=e?o[4].hex:o[12].hex;return[new n(t,"--now-color_text--secondary")]},z=function(r,e){if(!r)return[];var o=k(r),t=e?o[6].hex:o[9].hex;return[new n(t,"--now-color_text--tertiary")]},A=function(r,e){if(!r)return[];var o=k(r),t=e?o[1].hex:o[7].hex;return[new n(t,"--now-color_border--primary")]},K=function(r,e){if(!r)return[];var o=k(r),t=e?o[2].hex:o[5].hex;return[new n(t,"--now-color_border--secondary")]},Q=function(r){if(!r)return[];var e=k(r);return[new n(e[3].hex,"--now-color_border--tertiary")]},U=function(r){var e;return e={neutrals:u(r["--now-color--neutral-11"]),primary:u(r["--now-color--primary-1"]),secondary:u(r["--now-color--secondary-1"]),selectionPrimary:u(r["--now-color_selection--primary-2"]),selectionSecondary:u(r["--now-color_selection--secondary-2"]),interactive:u(r["--now-color--interactive-2"]),chromeBrand:u(r["--now-color_chrome--brand-5"]),chromeDivider:u(r["--now-color_chrome--divider-5"]),brandNeutral:u(r["--now-color_brand--neutral"]),brandPrimary:u(r["--now-color_brand--primary"]),brandSecondary:u(r["--now-color_brand--secondary"]),surfaceNeutral:u(r["--now-color--neutral-11"]),surfaceDivider:u(r["--now-color--neutral-11"]),surfaceBrand:u(r["--now-color_surface--brand-6"])},Object(t.a)(e,"chromeBrand",u(r["--now-color_chrome--brand-5"])),Object(t.a)(e,"chromeDivider",u(r["--now-color_chrome--divider-5"])),Object(t.a)(e,"backgroundPrimary",u(r["--now-color--neutral-11"])),Object(t.a)(e,"backgroundSecondary",u(r["--now-color--neutral-11"])),Object(t.a)(e,"backgroundTertiary",u(r["--now-color--neutral-11"])),Object(t.a)(e,"dividerPrimary",u(r["--now-color--neutral-11"])),Object(t.a)(e,"dividerSecondary",u(r["--now-color--neutral-11"])),Object(t.a)(e,"dividerTertiary",u(r["--now-color--neutral-11"])),Object(t.a)(e,"textPrimary",u(r["--now-color--neutral-11"])),Object(t.a)(e,"textSecondary",u(r["--now-color--neutral-11"])),Object(t.a)(e,"textTertiary",u(r["--now-color--neutral-11"])),Object(t.a)(e,"borderPrimary",u(r["--now-color--neutral-11"])),Object(t.a)(e,"borderSecondary",u(r["--now-color--neutral-11"])),Object(t.a)(e,"borderTertiary",u(r["--now-color--neutral-11"])),Object(t.a)(e,"alertCritical",u(r["--now-color_alert--critical-2"])),Object(t.a)(e,"alertHigh",u(r["--now-color_alert--high-2"])),Object(t.a)(e,"alertWarning",u(r["--now-color_alert--warning-2"])),Object(t.a)(e,"alertModerate",u(r["--now-color_alert--moderate-2"])),Object(t.a)(e,"alertInfo",u(r["--now-color_alert--info-2"])),Object(t.a)(e,"alertPositive",u(r["--now-color_alert--positive-2"])),Object(t.a)(e,"alertLow",u(r["--now-color_alert--low-2"])),Object(t.a)(e,"groupedBlue",u(r["--now-color_grouped--blue-2"])),Object(t.a)(e,"groupedBrown",u(r["--now-color_grouped--brown-2"])),Object(t.a)(e,"groupedGray",u(r["--now-color_grouped--gray-2"])),Object(t.a)(e,"groupedGreen",u(r["--now-color_grouped--green-2"])),Object(t.a)(e,"groupedGreenYellow",u(r["--now-color_grouped--green-yellow-2"])),Object(t.a)(e,"groupedMagenta",u(r["--now-color_grouped--magenta-2"])),Object(t.a)(e,"groupedOrange",u(r["--now-color_grouped--orange-2"])),Object(t.a)(e,"groupedPink",u(r["--now-color_grouped--pink-2"])),Object(t.a)(e,"groupedPurple",u(r["--now-color_grouped--purple-2"])),Object(t.a)(e,"groupedTeal",u(r["--now-color_grouped--teal-2"])),Object(t.a)(e,"groupedYellow",u(r["--now-color_grouped--yellow-2"])),Object(t.a)(e,"link",u(r["--now-color--link-2"])),Object(t.a)(e,"focus",u(r["--now-color--focus-2"])),e},Z=function(r){var e=r.split(",").map((function(r){return(r/=255)<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4)}));return.2126*e[0]+.7152*e[1]+.0722*e[2]},$=function(r,e){if(!r||!e)return{normal:{},large:{},ratio:null};g(r)&&(r=l(r)),g(e)&&(e=l(e));var o=Z(r),t=Z(e),a=o>t?(t+.05)/(o+.05):(o+.05)/(t+.05);return{normal:{aa:a<1/4.5?"Pass":"Fail",aaa:a<1/7?"Pass":"Fail"},large:{aa:a<1/3?"Pass":"Fail",aaa:a<1/4.5?"Pass":"Fail"},nonText:{aa:a<1/3?"Pass":"Fail"},ratio:Math.floor(1/a*10)/10}}},vRNQ:function(r,e,o){r.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH",dark:"Home_dark__2t7S6",toggle__dot:"Home_toggle__dot__3HqBg"}},vxOt:function(r,e,o){"use strict";var t=o("q1tI"),a=o.n(t),n=o("B34S"),i=a.a.createElement;e.a=function(r){var e=r.items;return i("div",{className:"flex"},e&&e.length?e.map((function(r){return i("div",{className:"flex-1",title:r.name,key:r.name},i("div",{style:{height:"80px",backgroundColor:r.hex}}),i(n.a,{value:r.hex},i("small",{style:{fontSize:"10px"}},r.hex)))})):i("div",{className:"flex-1"},i("div",{style:{height:"80px",backgroundColor:"#f5f5f5"}})))}}}]);