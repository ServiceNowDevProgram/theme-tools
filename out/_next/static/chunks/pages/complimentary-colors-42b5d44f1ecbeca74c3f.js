_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{"/FO8":function(e,t,o){"use strict";o.d(t,"b",(function(){return a})),o.d(t,"a",(function(){return r}));var n=o("FGyW");function a(e){var t=function(t){t.clipboardData.setData("text/plain",e),t.preventDefault()};document.addEventListener("copy",t),document.execCommand("copy"),document.removeEventListener("copy",t)}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=JSON.stringify(e,null,"  ");a(t),console.log("JSON copied to clipboard: ",t),n.b.success("JSON copied to clipboard")}},B34S:function(e,t,o){"use strict";o.d(t,"a",(function(){return m}));var n=o("H+61"),a=o("UlJF"),r=o("+Css"),c=o("7LId"),i=o("VIvw"),l=o("iHvq"),s=o("cpVT"),u=o("q1tI"),f=o.n(u),p=o("/FO8"),d=o("ylkT"),v=o("FGyW"),b=f.a.createElement;function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=Object(l.a)(e);if(t){var a=Object(l.a)(this).constructor;o=Reflect.construct(n,arguments,a)}else o=n.apply(this,arguments);return Object(i.a)(this,o)}}var m=function(e){Object(c.a)(o,e);var t=h(o);function o(e){var a;return Object(n.a)(this,o),a=t.call(this,e),Object(s.a)(Object(r.a)(a),"copyValue",(function(){var e=a.props.value;Object(p.b)(e),v.b.success("Copied to clipboard: ".concat(e))})),a.state={hover:!1},a}return Object(a.a)(o,[{key:"render",value:function(){var e=this,t=this.props,o=t.value,n=t.withButton,a=t.children,r=this.state.hover;return n?b("div",{className:"flex"},b("div",{className:"pr-4"},a),b("button",{className:"ml-auto text-2xs uppercase bg-black text-white rounded font-semibold py-1 px-2",onClick:this.copyValue},"Copy")):b("div",{className:Object(d.a)({relative:!0,"cursor-pointer":!0,"text-red-500":r}),onMouseEnter:function(){return e.setState({hover:!0})},onMouseLeave:function(){return e.setState({hover:!1})},onClick:function(){Object(p.b)(o),v.b.success("Copied to clipboard: ".concat(o))}},a,r&&b("div",{className:"inline-block absolute bg-gray-800 text-white text-xs p-1",style:{left:"0",bottom:"-1.3rem",fontSize:"8px",width:"72px",borderRadius:"2px"}},"CLICK TO COPY"))}}]),o}(u.Component)},j4LX:function(e,t,o){"use strict";o.r(t);var n=o("q1tI"),a=o.n(n),r=o("lXAN"),c=o("F1wk"),i=o("sTWn"),l=o("T7VE"),s=o("2vXY"),u=o("B34S"),f=a.a.createElement,p=[{id:"colors",href:"/colors",label:"Colors"},{id:"complimentary-colors",href:"/complimentary-colors",label:"Complimentary Colors"}];t.default=function(){var e=Object(n.useState)("#66a0ce"),t=e[0],o=e[1],a=Object(n.useState)("5"),d=a[0],v=a[1];return Object(n.useEffect)((function(){var e=new URLSearchParams(window.location.search),t=e.get("baseColor"),n=e.get("variations");t&&n&&(o(t),v(n))}),[]),Object(n.useEffect)((function(){var e=new URLSearchParams;e.set("baseColor",t),e.set("variations",d);var o=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+e.toString();window.history.replaceState({path:o},"",o)}),[t,d]),f(n.Fragment,null,f(r.a,{label:"Complimentary Colors",path:p,selectedPath:"complimentary-colors",size:"xl"}),f(c.a,{size:"xl"},f("div",{className:"grid grid-cols-4 gap-4 mb-5"},f(i.a,{value:t,label:"Base color",onChange:function(e){return o(e)},position:"middle"}),f(l.a,{label:"Variations",value:d,onChange:function(e){return v(e)}})),f("div",{className:"flex"},function(e,t){var o=Object(s.e)(e,t);return o&&o.length?o.map((function(e,t){return f("div",{className:"flex-1",title:e.name,key:e.hex+t},f("div",{style:{height:"80px",backgroundColor:e.hex}}),f(u.a,{value:e.hex},f("small",{style:{fontSize:"10px"}},e.hex)))})):f("div",{className:"flex-1"},f("div",{style:{height:"80px",backgroundColor:"#f5f5f5"}}))}(t,d))))}},xEbv:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/complimentary-colors",function(){return o("j4LX")}])}},[["xEbv",0,2,1,3,4,5,6,10]]]);