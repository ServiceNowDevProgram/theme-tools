_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{KBXX:function(r,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/color-generator-advanced",function(){return a("en/E")}])},"en/E":function(r,e,a){"use strict";a.r(e);var t=a("z7pX"),o=a("H+61"),n=a("UlJF"),l=a("+Css"),i=a("7LId"),c=a("VIvw"),g=a("iHvq"),d=a("cpVT"),h=a("q1tI"),s=a.n(h),u=a("lXAN"),k=a("F1wk"),b=a("BjqG"),P=a("rST/"),p=a("/FO8"),v=a("ylkT"),V=a("vRNQ"),w=a.n(V),f=a("sTWn"),m=a("vxOt"),y=a("T7VE"),S=s.a.createElement,x=function(r){var e=Object(h.useState)(r.baseColor),a=e[0],o=e[1],n=Object(h.useState)(r.lightVariations),l=n[0],i=n[1],c=Object(h.useState)(r.lightPercentage),g=c[0],d=c[1],s=Object(h.useState)(r.lightSaturation||"0"),u=s[0],k=s[1],p=Object(h.useState)(r.darkVariations),v=p[0],V=p[1],w=Object(h.useState)(r.darkPercentage),x=w[0],C=w[1],_=Object(h.useState)(r.darkSaturation||"0"),O=_[0],E=_[1],j=Object(h.useState)(!1),B=j[0],I=j[1],D=Object(h.useState)(!1),N=D[0],F=D[1],A=Object(h.useState)(r.derived||[]),G=A[0],T=A[1];Object(h.useEffect)((function(){r.onChange(r.label,{baseColor:a,lightVariations:l,lightPercentage:g,lightSaturation:u,darkVariations:v,darkPercentage:x,darkSaturation:O,isReverse:B,startIndex:r.startIndex,includeEnds:r.includeEnds||!1,derived:G})}),[a,l,g,u,v,x,O,B,G]);return S("div",null,S("div",{className:"mb-8"},S("p",null,r.label),function(r,e,a,t,o,n,l,i,c,g,d,h){var s=Object(P.b)({color:r,lightVariations:Number(e),lightPercentage:Number(a),lightSaturation:Number(t),darkVariations:Number(o),darkPercentage:Number(n),darkSaturation:Number(l),isReverse:i,startIndex:c,includeEnds:g,hook:d,removeEnd:h});return S(m.a,{items:s})}(a,l,g,u,v,x,O,B,r.startIndex,r.includeEnds,r.hook,r.removeEnd),S("div",{className:"flex flex-row-reverse"},S("small",null,S("a",{role:"button",onClick:function(){return F(!N)}},N?"Hide":"Edit")))),N?S(h.Fragment,null,S("div",{className:"grid grid-cols-7 gap-3 mb-12"},S("div",null,S(y.a,{label:"Light Variations",value:l,placeholder:"3",onChange:function(r){return i(r)}})),S("div",null,S(y.a,{label:"Light Percentage",value:g,placeholder:".95",onChange:function(r){return d(r)}}),S("input",{type:"range",min:"0",max:"1",value:g,step:"0.01",onChange:function(r){return d(r.target.value)}})),S("div",null,S(y.a,{label:"Light Saturation",value:u,placeholder:".95",onChange:function(r){return k(r)}}),S("input",{type:"range",min:"0",max:"1",value:u,step:"0.01",onChange:function(r){return k(r.target.value)}})),S("div",null,S(f.a,{label:"Base Color",value:a,position:"middle",onChange:function(r){return o(r)}})),S("div",null,S(y.a,{label:"Dark Variations",value:v,placeholder:"3",onChange:function(r){return V(r)}})),S("div",null,S(y.a,{label:"Dark Percentage",value:x,placeholder:".95",onChange:function(r){return C(r)}}),S("input",{type:"range",min:"0",max:"1",value:x,step:"0.01",onChange:function(r){return C(r.target.value)}})),S("div",null,S(y.a,{label:"Dark Saturation",value:O,placeholder:".95",onChange:function(r){return E(r)}}),S("input",{type:"range",min:"0",max:"1",value:O,step:"0.01",onChange:function(r){return E(r.target.value)}})),S(b.a,{label:"Reverse",checked:B,onChange:function(){return I(!B)}})),G.length?S(h.Fragment,null,S("p",{className:"mb-4"},"Derived Colors"),S("div",{className:"grid grid-cols-4 gap-3 mb-12"},G.map((function(r,e){return S("div",{key:e},r.group.map((function(r,a){return S(y.a,{key:a,label:r.label,value:r.color,onChange:function(r){return function(r,e,a){var o=Object(t.a)(G);o[r].group[e].color=a,T(o)}(e,a,r)}})})))})))):null):null)},C=[{label:"Brand Primary",hook:"--now-color_brand--primary",light:{color:"#4F52BD"}},{label:"Brand Secondary",hook:"--now-color_brand--secondary",light:{color:"#302F4B"}},{label:"Brand Neutral",hook:"--now-color_brand--neutral",light:{color:"#4F5664"}},{label:"Neutrals",hook:"now-color--neutral",light:{color:"#4F5664",lightVariations:10,lightPercentage:.95,lightSaturation:1,darkVariations:9,darkPercentage:.9,darkSaturation:1,startIndex:0,includeEnds:!0,derived:[{group:[{label:"Text Primary",hook:"--now-color_text--primary",color:"--now-color--neutral-18"},{label:"Text Secondary",hook:"--now-color_text--secondary",color:"--now-color--neutral-12"},{label:"Text Tertiary",hook:"--now-color_text--tertiary",color:"--now-color--neutral-9"}]},{group:[{label:"Background Primary",hook:"--now-color_background--primary",color:"--now-color--neutral-0"},{label:"Background Secondary",hook:"--now-color_background--secondary",color:"--now-color--neutral-1"},{label:"Background Tertiary",hook:"--now-color_background--tertiary",color:"--now-color--neutral-2"}]},{group:[{label:"Border Primary",hook:"--now-color_border--primary",color:"--now-color--neutral-7"},{label:"Border Secondary",hook:"--now-color_border--secondary",color:"--now-color--neutral-5"},{label:"Border Tertiary",hook:"--now-color_border--tertiary",color:"--now-color--neutral-3"}]},{group:[{label:"Divider Primary",hook:"--now-color_divider--primary",color:"--now-color--neutral-7"},{label:"Divider Secondary",hook:"--now-color_divider--secondary",color:"--now-color--neutral-5"},{label:"Divider Tertiary",hook:"--now-color_divider--tertiary",color:"--now-color--neutral-3"}]}]}},{label:"Primary",hook:"now-color--primary",light:{color:"#4F52BD",lightPercentage:.74,lightVariations:1,darkPercentage:.65,darkVariations:2}},{label:"Secondary",hook:"now-color--secondary",light:{color:"#4F52BD",lightPercentage:.74,lightVariations:1,darkPercentage:.65,darkVariations:2},dark:{color:"#4F52BD",lightPercentage:.95,lightVariations:3,lightSaturation:1,darkPercentage:.65,darkVariations:0,darkSaturation:1}},{label:"Selection Primary",hook:"now-color_selection--primary",light:{color:"#007B58",lightPercentage:.85,lightVariations:2,darkPercentage:.5,darkVariations:2},dark:{color:"#007B58",lightPercentage:.75,lightVariations:3,lightSaturation:1,darkPercentage:.25,darkVariations:1,darkSaturation:1}},{label:"Selection Secondary",hook:"now-color_selection--secondary",light:{color:"#4F52BD",lightPercentage:.74,lightVariations:2,darkPercentage:.65,darkVariations:2},dark:{color:"#4F52BD",lightPercentage:.75,lightVariations:3,darkPercentage:.25,darkSaturation:.25,darkVariations:1}},{label:"Interactive",hook:"now-color--interactive",light:{color:"#4F52BD",lightPercentage:.74,lightVariations:2,darkPercentage:.7,darkVariations:2},dark:{color:"#4F52BD",lightPercentage:.75,lightVariations:3,lightSaturation:1,darkPercentage:.25,darkVariations:1,darkSaturation:.25}},{label:"Link",hook:"now-color--link",light:{color:"#3C59E7",lightPercentage:.32,lightVariations:1,darkPercentage:.63,darkVariations:2,startIndex:1},dark:{color:"#3C59E7",lightPercentage:.75,lightVariations:3,lightSaturation:1,darkPercentage:.25,darkVariations:0,darkSaturation:.25,startIndex:1}},{label:"Focus",hook:"now-color--focus",light:{color:"#3C59E7",lightPercentage:.3,lightVariations:1,darkPercentage:.63,darkVariations:1,startIndex:1},dark:{color:"#3C59E7",lightPercentage:.75,lightVariations:2,lightSaturation:1,darkPercentage:.63,darkVariations:0,startIndex:1}},{label:"Surface Brand",hook:"now-color_surface--brand",light:{color:"#007B58",lightPercentage:.9,lightVariations:5,darkPercentage:.5,darkVariations:0,startIndex:1}},{label:"Surface Neutral",hook:"now-color_surface--neutral",light:{color:"#C0C5CD",lightPercentage:.95,lightVariations:6,darkPercentage:.81,darkVariations:0,startIndex:1,removeEnd:!0}},{label:"Surface Divider",hook:"now-color_surface--divider",light:{color:"#7d8592",lightPercentage:.9,lightVariations:6,darkPercentage:0,darkVariations:0,startIndex:1,removeEnd:!0}},{label:"Chrome Brand",hook:"now-color_chrome--brand",light:{color:"#302F4B",lightPercentage:.85,lightVariations:5,darkPercentage:.5,darkVariations:5}},{label:"Chrome Divider",hook:"now-color_chrome--divider",light:{color:"#2A2941",lightPercentage:.6,lightVariations:5,darkPercentage:.8,darkVariations:5}},{label:"Alert Critical",hook:"now-color_alert--critical",light:{color:"#FF334B",lightPercentage:.75,lightVariations:2,darkPercentage:.6,darkVariations:3,startIndex:0}},{label:"Alert High",hook:"now-color_alert--high",light:{color:"#FD9700",lightPercentage:.75,lightVariations:2,darkPercentage:.72,darkVariations:3,startIndex:0}},{label:"Alert Warning",hook:"now-color_alert--warning",light:{color:"#F0E000",lightPercentage:.75,lightVariations:2,darkPercentage:.72,darkVariations:3,startIndex:0}},{label:"Alert Moderate",hook:"now-color_alert--moderate",light:{color:"#8B6BFF",lightPercentage:.74,lightVariations:2,darkPercentage:.72,darkVariations:3,startIndex:0}},{label:"Alert Info",hook:"now-color_alert--info",light:{color:"#38AAF4",lightPercentage:.74,lightVariations:2,darkPercentage:.72,darkVariations:3,startIndex:0}},{label:"Alert Positive",hook:"now-color_alert--positive",light:{color:"#51AE00",lightPercentage:.74,lightVariations:2,darkPercentage:.79,darkVariations:3,startIndex:0}},{label:"Alert Low",hook:"now-color_alert--low",light:{color:"#9698A4",lightPercentage:.74,lightVariations:2,darkPercentage:.79,darkVariations:3,startIndex:0}},{label:"Grouped Blue",hook:"now-color_grouped--blue",light:{color:"#67D2E6",lightVariations:2,lightPercentage:.75,darkVariations:3,darkPercentage:.65,startIndex:0}},{label:"Grouped Brown",hook:"now-color_grouped--brown",light:{color:"#D3A675",lightVariations:2,lightPercentage:.75,darkVariations:3,darkPercentage:.65,startIndex:0}},{label:"Grouped Gray",hook:"now-color_grouped--gray",light:{color:"#A3ABAC",lightVariations:2,lightPercentage:.75,darkVariations:3,darkPercentage:.65,startIndex:0}},{label:"Grouped Green",hook:"now-color_grouped--green",light:{color:"#51B962",lightVariations:2,lightPercentage:.75,darkVariations:3,darkPercentage:.65,startIndex:0}},{label:"Grouped Green Yellow",hook:"now-color_grouped--green-yellow",light:{color:"#C8DA6E",lightVariations:2,lightPercentage:.75,darkVariations:3,darkPercentage:.65,startIndex:0}},{label:"Grouped Magenta",hook:"now-color_grouped--magenta",light:{color:"#E869BF",lightVariations:2,lightPercentage:.75,darkVariations:3,darkPercentage:.65,startIndex:0}},{label:"Grouped Orange",hook:"now-color_grouped--orange",light:{color:"#FF8C72",lightVariations:2,lightPercentage:.75,darkVariations:3,darkPercentage:.65,startIndex:0}},{label:"Grouped Pink",hook:"now-color_grouped--pink",light:{color:"#E080A0",lightVariations:2,lightPercentage:.75,darkVariations:3,darkPercentage:.65,startIndex:0}},{label:"Grouped Purple",hook:"now-color_grouped--purple",light:{color:"#BD7AEA",lightVariations:2,lightPercentage:.75,darkVariations:3,darkPercentage:.65,startIndex:0}},{label:"Grouped Teal",hook:"now-color_grouped--teal",light:{color:"#51C2C2",lightVariations:2,lightPercentage:.75,darkVariations:3,darkPercentage:.65,startIndex:0}},{label:"Grouped Yellow",hook:"now-color_grouped--yellow",light:{color:"#FFC651",lightVariations:2,lightPercentage:.75,darkVariations:3,darkPercentage:.65,startIndex:0}}],_=s.a.createElement;function O(r,e){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),a.push.apply(a,t)}return a}function E(r){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?O(Object(a),!0).forEach((function(e){Object(d.a)(r,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(a,e))}))}return r}function j(r){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(r){return!1}}();return function(){var a,t=Object(g.a)(r);if(e){var o=Object(g.a)(this).constructor;a=Reflect.construct(t,arguments,o)}else a=t.apply(this,arguments);return Object(c.a)(this,a)}}var B=[{id:"colors",href:"/colors",label:"Colors"},{id:"color-generator-advanced",href:"/color-generator-advanced",label:"Color Generator Advanced (BETA)"}],I=function(r){Object(i.a)(a,r);var e=j(a);function a(r){var n;return Object(o.a)(this,a),n=e.call(this,r),Object(d.a)(Object(l.a)(n),"copyColors",(function(){var r={};n.state.colors.forEach((function(e){Object(P.b)({hook:e.hook,color:e.light.baseColor,lightVariations:Number(e.light.lightVariations),lightPercentage:Number(e.light.lightPercentage),lightSaturation:Number(e.light.lightSaturation),darkVariations:Number(e.light.darkVariations),darkPercentage:Number(e.light.darkPercentage),darkSaturation:Number(e.light.darkSaturation),isReverse:e.light.isReverse,startIndex:Number(e.light.startIndex),includeEnds:e.light.includeEnds,removeEnd:e.light.removeEnd}).forEach((function(e){r[e.name]=e.rgb})),e.light.derived&&e.light.derived.length&&e.light.derived.forEach((function(e){e.group.forEach((function(e){r[e.hook]=e.color}))}))})),Object(p.a)(r)})),Object(d.a)(Object(l.a)(n),"updateColors",(function(r,e){var a=n.state.colors.map((function(a){return a.label===r&&(a.light=E(E({},a.light),e)),a}));n.setState({colors:a})})),n.state={isDark:!1,colors:Object(t.a)(C)},n}return Object(n.a)(a,[{key:"render",value:function(){var r=this,e=this.state.isDark;return _("div",{className:Object(v.a)(Object(d.a)({},w.a.dark,e))},_(u.a,{label:"Color Generator Advanced (BETA)",path:B,selectedPath:"color-generator-advanced",wide:!0}),_(k.a,{wide:!0},_("div",{className:"mb-8 flex flex-row-reverse items-center"},_("div",null,_("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-auto mb-2",onClick:this.copyColors},"Copy Colors Json"),_(b.a,{label:"Dark Mode",onChange:function(){return r.setState({isDark:!e,isHighContrast:!1})},checked:e}))),_("div",null,C.map((function(e){return _("div",{key:e.label},_(x,{label:e.label,baseColor:e.light.color,lightVariations:e.light.lightVariations,lightPercentage:e.light.lightPercentage,lightSaturation:e.light.lightSaturation,darkVariations:e.light.darkVariations,darkPercentage:e.light.darkPercentage,darkSaturation:e.light.darkSaturation,hook:e.hook,startIndex:e.light.startIndex,includeEnds:e.light.includeEnds,onChange:r.updateColors,derived:e.light.derived,removeEnd:e.light.removeEnd}))})))))}}]),a}(h.Component);e.default=I}},[["KBXX",0,2,1,3,4,5,6,8]]]);