_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[26],{N6ue:function(e,l,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/release/[id]",function(){return n("abTx")}])},abTx:function(e,l,n){"use strict";n.r(l),n.d(l,"__N_SSG",(function(){return m})),n.d(l,"default",(function(){return b}));var r=n("q1tI"),a=n.n(r),t=n("YFqc"),s=n.n(t),o=n("lXAN"),d=n("F1wk"),u=a.a.createElement;function i(e){var l=e.uid,n=e.id;return u(s.a,{href:"/hook/".concat(l)},u("a",null,n))}function c(e){var l=e.columns,n=e.data.map((function(e){return{cells:l.map((function(l){return l.renderer?l.renderer(e):l.key?e[l.key]:void 0}))}}));return u("table",{className:"text-left table-fixed w-full border border-collapse"},u("thead",null,u("tr",null,l.map((function(e){return u("th",{className:"align-bottom py-4 px-6 bg-grey-lightest font-bold uppercase text-xs text-grey-dark border-b border-grey-light"},e.label)})))),u("tbody",null,n.map((function(e){return u("tr",null,e.cells.map((function(e){return u("td",{className:"py-4 px-6 border-b border-grey-light"},e)})))}))))}var m=!0;function b(e){var l=e.id,n=e.added,a=e.removed,t=e.renamed,s=[{id:"releases",href:"/releases",label:"Releases"},{id:l,href:"/release/".concat(l),label:l}],m=l;return u(r.Fragment,null,u(o.a,{label:"Release ".concat(l),path:s,selectedPath:m}),u(d.a,null,u("div",{className:"mb-6"},u("h2",{className:"text-xl mb-3"},"Added"),u("ul",{className:"list-disc"},n.map((function(e){return u("li",{key:e.id},i(e))}))),!n.length&&u("p",null,"No hooks were added in this release")),u("div",{className:"mb-6"},u("h2",{className:"text-xl mb-3"},"Removed"),u("ul",{className:"list-disc"},a.map((function(e){return u("li",{key:e.id},i(e))}))),!a.length&&u("p",null,"No hooks were removed in this release")),u("div",{className:"mb-6"},u("h2",{className:"text-xl mb-3"},"Renamed"),!!t.length&&u(c,{columns:[{label:"Previous Name",key:"previousId"},{label:"New Name",renderer:function(e){return i(e)}}],data:t}),!t.length&&u("p",null,"No hooks were renamed in this release"))))}}},[["N6ue",0,2,1,3]]]);