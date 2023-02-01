(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[227],{9655:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/themes",function(){return s(4977)}])},2292:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var l=s(5893);s(7294);var r=s(3811);function n(e){let{children:t,size:s="lg"}=e;return(0,l.jsx)("div",{className:(0,r.Z)({"p-8":!0,"pt-2":!0,"m-auto":!0,["max-w-screen-".concat(s)]:!0}),children:t})}},6784:function(e,t,s){"use strict";s.d(t,{Z:function(){return h}});var l=s(5893),r=s(7294),n=s(9008),a=s.n(n),i=s(1664),o=s.n(i),d=s(3811);function u(e){let{items:t,selected:s}=e;return(0,l.jsx)("div",{className:"text-sm text-gray-600",children:t.map((e,n)=>(0,l.jsxs)(r.Fragment,{children:[(0,l.jsx)(o(),{href:e.href,className:(0,d.Z)({"mr-2":!0,"text-gray-800":s===e.id,"no-underline":!0}),children:e.label},e.id),n!==t.length-1&&(0,l.jsx)("span",{className:"mr-2"})]},e.id))})}function c(e){let{label:t,href:s}=e;return(0,l.jsx)(o(),{href:s,className:"no-underline text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out mr-4",children:t})}function h(e){let{label:t,path:s,selectedPath:n,size:i="lg",toolbarContent:o}=e;return(0,l.jsxs)(r.Fragment,{children:[(0,l.jsx)(a(),{children:(0,l.jsxs)("title",{children:[t," | Theme Tools"]})}),(0,l.jsxs)("div",{className:"bg-gray-900 p-4 text-sm uppercase",children:[(0,l.jsx)(c,{href:"/hooks",label:"Hooks"}),(0,l.jsx)(c,{href:"/releases",label:"Releases"}),(0,l.jsx)(c,{href:"/validator",label:"Validator"}),(0,l.jsx)(c,{href:"/decoder",label:"Decoder"}),(0,l.jsx)(c,{href:"/colors",label:"Colors"}),(0,l.jsx)(c,{href:"/themes",label:"Themes"})]}),(0,l.jsx)("div",{className:"bg-gray-300 p-4 text-sm",children:(0,l.jsx)(u,{items:[{id:"home",label:"Home",href:"/"},...s],selected:n})}),o&&(0,l.jsx)("div",{className:"border-b border-gray-500 bg-white",style:{position:"sticky",top:"0px",left:"0px",zIndex:"2"},children:o}),(0,l.jsx)("div",{className:(0,d.Z)({"mt-6":!0,"p-8":!0,"pt-2":!0,"m-auto":!0,["max-w-screen-".concat(i)]:!0}),children:(0,l.jsx)("h1",{className:"text-3xl",children:t})})]})}},7015:function(e,t,s){"use strict";var l=s(5893);s(7294);var r=s(5697),n=s.n(r),a=s(3811);function i(e){let{layout:t="vertical",name:s,label:r,items:n,selected:i,onSelect:o=()=>{},unsetLabel:d,valueKey:u="id"}=e;return(0,l.jsxs)("div",{className:(0,a.Z)({"w-full":!0,flex:!0,"items-center":"horizontal"===t,"flex-col":"vertical"===t}),children:[(0,l.jsx)("label",{className:(0,a.Z)({"mb-1":"vertical"===t,"mr-2":"horizontal"===t,"flex-1-0-auto":!0,label:!0}),htmlFor:s,children:r}),(0,l.jsxs)("div",{className:"relative w-full",children:[(0,l.jsxs)("select",{className:"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"format",value:i,onChange(e){o(e.target.value)},children:[d?(0,l.jsx)("option",{value:"",children:d}):null,n.map(e=>(0,l.jsx)("option",{value:e[u],children:e.label},e.id))]}),(0,l.jsx)("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",children:(0,l.jsx)("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,l.jsx)("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})})})]})]})}i.propTypes={layout:n().oneOf(["vertical","horizontal"]),name:n().string,label:n().string,items:n().arrayOf(n().shape({color:n().string,fontSize:n().number})),valueKey:n().string,selected:n().string,onSelect:n().func,unsetLabel:n().string},t.Z=i},3811:function(e,t,s){"use strict";function l(e){let t=[];for(let s in e)e.hasOwnProperty(s)&&e.hasOwnProperty(s)&&e[s]&&t.push(s);return t.join(" ")}s.d(t,{Z:function(){return l}})},7645:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let s=n.default,r=(null==t?void 0:t.suspense)?{}:{loading(e){let{error:t,isLoading:s,pastDelay:l}=e;return null}};if(e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r=l({},r,e)),(r=l({},r,t)).suspense&&(delete r.ssr,delete r.loading),r.loadableGenerated&&delete(r=l({},r,r.loadableGenerated)).loadableGenerated,"boolean"==typeof r.ssr&&!r.suspense){if(!r.ssr)return delete r.ssr,a(s,r);delete r.ssr}return s(r)},t.noSSR=a;var l=s(6495).Z,r=s(2648).Z,n=(r(s(7294)),r(s(4588)));function a(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3644:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var l=(0,s(2648).Z)(s(7294));let r=l.default.createContext(null);t.LoadableContext=r},4588:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=s(6495).Z,r=(0,s(1598).Z)(s(7294)),n=s(3644);let a=[],i=[],o=!1;function d(e){let t=e(),s={loading:!0,loaded:null,error:null};return s.promise=t.then(e=>(s.loading=!1,s.loaded=e,e)).catch(e=>{throw s.loading=!1,s.error=e,e}),s}class u{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=l({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let s=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);s.suspense&&(s.lazy=r.default.lazy(s.loader));let a=null;function d(){if(!a){let t=new u(e,s);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()}if(!o){let c=s.webpack?s.webpack():s.modules;c&&i.push(e=>{for(let t of c)if(-1!==e.indexOf(t))return d()})}function h(){d();let e=r.default.useContext(n.LoadableContext);e&&Array.isArray(s.modules)&&s.modules.forEach(t=>{e(t)})}let m=s.suspense?function(e,t){return h(),r.default.createElement(s.lazy,l({},e,{ref:t}))}:function(e,t){h();let l=r.useSyncExternalStore(a.subscribe,a.getCurrentValue,a.getCurrentValue);return r.default.useImperativeHandle(t,()=>({retry:a.retry}),[]),r.default.useMemo(()=>{var t;return l.loading||l.error?r.default.createElement(s.loading,{isLoading:l.loading,pastDelay:l.pastDelay,timedOut:l.timedOut,error:l.error,retry:a.retry}):l.loaded?r.default.createElement((t=l.loaded)&&t.__esModule?t.default:t,e):null},[e,l])};return m.preload=()=>d(),m.displayName="LoadableComponent",r.default.forwardRef(m)}(d,e)}function h(e,t){let s=[];for(;e.length;){let l=e.pop();s.push(l(t))}return Promise.all(s).then(()=>{if(e.length)return h(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{h(a).then(e,t)}),c.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let s=()=>(o=!0,t());h(i,e).then(s,s)})},window.__NEXT_PRELOADREADY=c.preloadReady,t.default=c},4977:function(e,t,s){"use strict";s.r(t);var l=s(4924),r=s(5893),n=s(7294),a=s(6784),i=s(2292),o=s(7015),d=s(5152),u=s.n(d),c=s(5862),h=s(1352);let m=[{id:"themes",href:"/themes",label:"Themes"}],f=u()(async()=>{let e=await Promise.all([s.e(126),s.e(656)]).then(s.bind(s,9656));return await Promise.all([s.e(126),s.e(876)]).then(s.t.bind(s,7319,23)),e.Controlled},{loadableGenerated:{webpack:()=>[7319]},ssr:!1});class p extends n.Component{async componentDidMount(){this.getThemes()}componentDidUpdate(e,t){if(t.selectedTheme!==this.state.selectedTheme){let s=new URLSearchParams;s.set("id",this.state.selectedTheme.sys_id);let l=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+s.toString();window.history.replaceState({path:l},"",l)}}render(){let{themes:e,selectedTheme:t}=this.state;return(0,r.jsxs)(n.Fragment,{children:[(0,r.jsx)(a.Z,{label:"Themes",path:m,selectedPath:"themes"}),(0,r.jsxs)(i.Z,{children:[(0,r.jsx)("div",{className:"flex justify-between mb-8",children:(0,r.jsx)("div",{className:"flex",children:e.length?(0,r.jsx)(n.Fragment,{children:(0,r.jsx)(o.Z,{layout:"horizontal",label:"Themes",items:e.map(e=>({id:e.sys_id,label:e.name})),selected:t.sys_id,onSelect:this.onThemeSelect})}):null})}),e.length?(0,r.jsx)(n.Fragment,{children:f&&t&&(0,r.jsx)(f,{className:"mt-8",value:JSON.stringify(t.themeJSON,null,4),options:{mode:"application/json",theme:"material",lineNumbers:!0,readOnly:!1,gutters:["CodeMirror-linenumbers","codelinemarkers"]},smartIndent:!0,onBeforeChange:(e,s,l)=>{this.setState({selectedTheme:{...t,theme:l}})}})}):null]})]})}constructor(...e){super(...e),(0,l.Z)(this,"state",{themes:[],isCreateModalOpen:!1,newTheme:{name:"",themeJson:""},selectedTheme:{},themeJson:{},editor:null,isDeleteModalOpen:!1,username:"",password:"",isLoginModalOpen:!1}),(0,l.Z)(this,"getThemes",async()=>{let e=new URLSearchParams(window.location.search),t=e.get("id");try{let s=await (0,h.RC)({deleted:"false",sysparm_query:"ORDERBYname"});this.state.selectedTheme.sys_id?this.setState({themes:s}):t&&s.length?this.setState({themes:s,selectedTheme:s.filter(e=>e.sys_id===t)[0]||s[0]}):this.setState({themes:s,selectedTheme:s.length?s[0]:{}})}catch(l){c.Am.error("There was an error getting themes. Please contact #theming.")}}),(0,l.Z)(this,"isJsonString",e=>{try{JSON.parse(e)}catch(t){return!1}return!0}),(0,l.Z)(this,"validateFields",(e,t)=>e&&t?!!this.isJsonString(t)||(c.Am.warn("Please check your theme json. You can use the Validator to validate it."),!1):(c.Am.warn("Please insert a name or theme json"),!1)),(0,l.Z)(this,"onThemeSelect",e=>{this.setState({selectedTheme:this.state.themes.filter(t=>t.sys_id===e)[0]})})}}t.default=p},5152:function(e,t,s){e.exports=s(7645)},4924:function(e,t,s){"use strict";function l(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}s.d(t,{Z:function(){return l}})}},function(e){e.O(0,[996,669,352,774,888,179],function(){return e(e.s=9655)}),_N_E=e.O()}]);