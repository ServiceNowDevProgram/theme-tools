_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{"/FO8":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var o=n("FGyW");function r(e){var t=function(t){t.clipboardData.setData("text/plain",e),t.preventDefault()};document.addEventListener("copy",t),document.execCommand("copy"),document.removeEventListener("copy",t)}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=JSON.stringify(e,null,"  ");r(t),console.log("JSON copied to clipboard: ",t),o.b.success("JSON copied to clipboard")}},B34S:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var o=n("1OyB"),r=n("vuIU"),a=n("Ji7U"),c=n("md7G"),i=n("foSv"),l=n("q1tI"),s=n.n(l),u=n("/FO8"),f=n("ylkT"),d=n("FGyW"),p=s.a.createElement;function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(i.a)(e);if(t){var r=Object(i.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var h=function(e){Object(a.a)(n,e);var t=v(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={hover:!1},r}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.value,o=t.children,r=this.state.hover;return p("div",{className:Object(f.a)({relative:!0,"cursor-pointer":!0,"text-red-500":r}),onMouseEnter:function(){return e.setState({hover:!0})},onMouseLeave:function(){return e.setState({hover:!1})},onClick:function(){Object(u.b)(n),d.b.success("Copied to clipboard: ".concat(n))}},o,r&&p("div",{className:"inline-block absolute bg-gray-800 text-white text-xs p-1",style:{left:"0",bottom:"-1.3rem",fontSize:"8px",width:"72px",borderRadius:"2px",zIndex:"100"}},"CLICK TO COPY"))}}]),n}(l.Component)},j4LX:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),r=n.n(o),a=n("lXAN"),c=n("F1wk"),i=n("sTWn"),l=n("T7VE"),s=n("2vXY"),u=n("B34S"),f=r.a.createElement,d=[{id:"colors",href:"/colors",label:"Colors"},{id:"complimentary-colors",href:"/complimentary-colors",label:"Complimentary Colors"}];t.default=function(){var e=Object(o.useState)("#66a0ce"),t=e[0],n=e[1],r=Object(o.useState)("5"),p=r[0],v=r[1];return Object(o.useEffect)((function(){var e=new URLSearchParams(window.location.search),t=e.get("baseColor"),o=e.get("variations");t&&o&&(n(t),v(o))}),[]),Object(o.useEffect)((function(){var e=new URLSearchParams;e.set("baseColor",t),e.set("variations",p);var n=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+e.toString();window.history.replaceState({path:n},"",n)}),[t,p]),f(o.Fragment,null,f(a.a,{label:"Complimentary Colors",path:d,selectedPath:"complimentary-colors",wide:!0}),f(c.a,{wide:!0},f("div",{className:"grid grid-cols-4 gap-4 mb-5"},f(i.a,{value:t,label:"Base color",onChange:function(e){return n(e)},position:"middle"}),f(l.a,{label:"Variations",value:p,onChange:function(e){return v(e)}})),f("div",{className:"flex"},function(e,t){var n=Object(s.d)(e,t);return n&&n.length?n.map((function(e,t){return f("div",{className:"flex-1",title:e.name,key:e.hex+t},f("div",{style:{height:"80px",backgroundColor:e.hex}}),f(u.a,{value:e.hex},f("small",{style:{fontSize:"10px"}},e.hex)))})):f("div",{className:"flex-1"},f("div",{style:{height:"80px",backgroundColor:"#f5f5f5"}}))}(t,p))))}},xEbv:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/complimentary-colors",function(){return n("j4LX")}])}},[["xEbv",0,2,1,3,4,5,6,9]]]);