(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[196],{7501:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/validator",function(){return r(2020)}])},7938:function(e){"use strict";var t=function(){var e={trace:function(){},yy:{},symbols_:{error:2,JSONString:3,STRING:4,JSONNumber:5,NUMBER:6,JSONNullLiteral:7,NULL:8,JSONBooleanLiteral:9,TRUE:10,FALSE:11,JSONText:12,JSONValue:13,EOF:14,JSONObject:15,JSONArray:16,"{":17,"}":18,JSONMemberList:19,JSONMember:20,":":21,",":22,"[":23,"]":24,JSONElementList:25,$accept:0,$end:1},terminals_:{2:"error",4:"STRING",6:"NUMBER",8:"NULL",10:"TRUE",11:"FALSE",14:"EOF",17:"{",18:"}",21:":",22:",",23:"[",24:"]"},productions_:[0,[3,1],[5,1],[7,1],[9,1],[9,1],[12,2],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[15,2],[15,3],[20,3],[19,1],[19,3],[16,2],[16,3],[25,1],[25,3]],performAction:function(e,t,r,n,i,o,a){var l=o.length-1;switch(i){case 1:this.$=e.replace(/\\(\\|")/g,"$1").replace(/\\n/g,"\n").replace(/\\r/g,"\r").replace(/\\t/g,"\t").replace(/\\v/g,"\v").replace(/\\f/g,"\f").replace(/\\b/g,"\b");break;case 2:this.$=Number(e);break;case 3:this.$=null;break;case 4:this.$=!0;break;case 5:this.$=!1;break;case 6:return this.$=o[l-1];case 13:this.$={};break;case 14:case 19:this.$=o[l-1];break;case 15:this.$=[o[l-2],o[l]];break;case 16:this.$={},this.$[o[l][0]]=o[l][1];break;case 17:this.$=o[l-2],o[l-2][o[l][0]]=o[l][1];break;case 18:this.$=[];break;case 20:this.$=[o[l]];break;case 21:this.$=o[l-2],o[l-2].push(o[l])}},table:[{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],12:1,13:2,15:7,16:8,17:[1,14],23:[1,15]},{1:[3]},{14:[1,16]},{14:[2,7],18:[2,7],22:[2,7],24:[2,7]},{14:[2,8],18:[2,8],22:[2,8],24:[2,8]},{14:[2,9],18:[2,9],22:[2,9],24:[2,9]},{14:[2,10],18:[2,10],22:[2,10],24:[2,10]},{14:[2,11],18:[2,11],22:[2,11],24:[2,11]},{14:[2,12],18:[2,12],22:[2,12],24:[2,12]},{14:[2,3],18:[2,3],22:[2,3],24:[2,3]},{14:[2,4],18:[2,4],22:[2,4],24:[2,4]},{14:[2,5],18:[2,5],22:[2,5],24:[2,5]},{14:[2,1],18:[2,1],21:[2,1],22:[2,1],24:[2,1]},{14:[2,2],18:[2,2],22:[2,2],24:[2,2]},{3:20,4:[1,12],18:[1,17],19:18,20:19},{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],13:23,15:7,16:8,17:[1,14],23:[1,15],24:[1,21],25:22},{1:[2,6]},{14:[2,13],18:[2,13],22:[2,13],24:[2,13]},{18:[1,24],22:[1,25]},{18:[2,16],22:[2,16]},{21:[1,26]},{14:[2,18],18:[2,18],22:[2,18],24:[2,18]},{22:[1,28],24:[1,27]},{22:[2,20],24:[2,20]},{14:[2,14],18:[2,14],22:[2,14],24:[2,14]},{3:20,4:[1,12],20:29},{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],13:30,15:7,16:8,17:[1,14],23:[1,15]},{14:[2,19],18:[2,19],22:[2,19],24:[2,19]},{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],13:31,15:7,16:8,17:[1,14],23:[1,15]},{18:[2,17],22:[2,17]},{18:[2,15],22:[2,15]},{22:[2,21],24:[2,21]}],defaultActions:{16:[2,6]},parseError:function(e,t){var r=new Error(e);throw (r.__hash=t, r)},parse:function(e){var t=function(){var e;return"number"!==typeof(e=r.lexer.lex()||1)&&(e=r.symbols_[e]||e),e},r=this,n=[0],i=[null],o=[],a=this.table,l="",s=0,u=0,c=0;this.lexer.setInput(e),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,"undefined"==typeof this.lexer.yylloc&&(this.lexer.yylloc={});var h=this.lexer.yylloc;o.push(h),"function"===typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var f,d,y,v,m,p,x,g,b,w,S,k,N={};;){if(y=n[n.length-1],this.defaultActions[y]?v=this.defaultActions[y]:(null==f&&(f=t()),v=a[y]&&a[y][f]),"undefined"===typeof v||!v.length||!v[0]){if(!c){for(p in (b=[], a[y]))this.terminals_[p]&&p>2&&b.push("'"+this.terminals_[p]+"'");var E="";E=this.lexer.showPosition?"Parse error on line "+(s+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+b.join(", ")+", got '"+this.terminals_[f]+"'":"Parse error on line "+(s+1)+": Unexpected "+(1==f?"end of input":"'"+(this.terminals_[f]||f)+"'"),this.parseError(E,{text:this.lexer.match,token:this.terminals_[f]||f,line:this.lexer.yylineno,loc:h,expected:b})}if(3==c){if(1==f)throw new Error(E||"Parsing halted.");u=this.lexer.yyleng,l=this.lexer.yytext,s=this.lexer.yylineno,h=this.lexer.yylloc,f=t()}for(;!((2.).toString()in a[y]);){if(0==y)throw new Error(E||"Parsing halted.");k=1,n.length=n.length-2*k,i.length=i.length-k,o.length=o.length-k,y=n[n.length-1]}d=f,f=2,v=a[y=n[n.length-1]]&&a[y][2],c=3}if(w=v[0],(null!=(S=Array)&&"undefined"!==typeof Symbol&&S[Symbol.hasInstance]?S[Symbol.hasInstance](w):w instanceof S)&&v.length>1)throw new Error("Parse Error: multiple actions possible at state: "+y+", token: "+f);switch(v[0]){case 1:n.push(f),i.push(this.lexer.yytext),o.push(this.lexer.yylloc),n.push(v[1]),f=null,d?(f=d,d=null):(u=this.lexer.yyleng,l=this.lexer.yytext,s=this.lexer.yylineno,h=this.lexer.yylloc,c>0&&c--);break;case 2:if(x=this.productions_[v[1]][1],N.$=i[i.length-x],N._$={first_line:o[o.length-(x||1)].first_line,last_line:o[o.length-1].last_line,first_column:o[o.length-(x||1)].first_column,last_column:o[o.length-1].last_column},"undefined"!==typeof(m=this.performAction.call(N,l,u,s,this.yy,v[1],i,o)))return m;x&&(n=n.slice(0,-1*x*2),i=i.slice(0,-1*x),o=o.slice(0,-1*x)),n.push(this.productions_[v[1]][0]),i.push(N.$),o.push(N._$),g=a[n[n.length-2]][n[n.length-1]],n.push(g);break;case 3:return!0}}return!0}},t=function(){var e={EOF:1,parseError:function(e,t){if(!this.yy.parseError)throw new Error("foo");this.yy.parseError(e,t)},setInput:function(e){return this._input=e,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this},input:function(){var e=this._input[0];return this.yytext+=e,this.yyleng++,this.match+=e,this.matched+=e,e.match(/\n/)&&this.yylineno++,this._input=this._input.slice(1),e;},unput:function(e){return this._input=e+this._input,this},more:function(){return this._more=!0,this},less:function(e){this._input=this.match.slice(e)+this._input},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return (e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"");},upcomingInput:function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"");},showPosition:function(){var e=this.pastInput(),t=new Array(e.length+1).join("-");return e+this.upcomingInput()+"\n"+t+"^"},next:function(){if(this.done)return this.EOF;var e,t,r,n,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var o=this._currentRules(),a=0;a<o.length&&(!(r=this._input.match(this.rules[o[a]]))||t&&!(r[0].length>t[0].length)||(t=r,n=a,this.options.flex));a++);return t?((i=t[0].match(/\n.*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-1:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.yyleng=this.yytext.length,this._more=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],e=this.performAction.call(this,this.yy,this,o[n],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),e||void 0):""===this._input?this.EOF:void this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno});},lex:function(){var e=this.next();return"undefined"!==typeof e?e:this.lex()},begin:function(e){this.conditionStack.push(e)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(e){this.begin(e)},options:{},performAction:function(e,t,r,n){switch(r){case 0:break;case 1:return 6;case 2:return t.yytext=t.yytext.substr(1,t.yyleng-2),4;case 3:return 17;case 4:return 18;case 5:return 23;case 6:return 24;case 7:return 22;case 8:return 21;case 9:return 10;case 10:return 11;case 11:return 8;case 12:return 14;case 13:return"INVALID"}},rules:[/^(?:\s+)/,/^(?:(-?([0-9]|[1-9][0-9]+))(\.[0-9]+)?([eE][-+]?[0-9]+)?\b)/,/^(?:"(?:\\[\\"bfnrt/]|\\u[a-fA-F0-9]{4}|[^\\\0-\x09\x0a-\x1f"])*")/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:,)/,/^(?::)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:null\b)/,/^(?:$)/,/^(?:.)/],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],inclusive:!0}}};return e}();return e.lexer=t,e}();e.exports=t},2020:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return Y},default:function(){return ee}});var n=r(4051),i=r.n(n),o=r(5893),a=r(7294),l=r(7762),s=r(5152),u=r.n(s),c=r(6784),h=r(2292),f=r(7015),d=r(5377);function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(s){l=!0,i=s}finally{try{a||null==r.return||r.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();}var p=r(8148),x=r(7938),g=r(3218),b={String:"String",Number:"Number",Boolean:"Boolean",Null:"Null",Array:"Array",Object:"Object",Property:"Property",Identifier:"Identifier",Literal:"Literal"},w={},S=!0,k=!1,N=void 0;try{for(var E,j=function(e,t){var r=m(t.value,2),n=r[0],i=r[1];w[n]=function(e){return g(e)&&e.type===i}},_=Object.entries(b)[Symbol.iterator]();!(S=(E=_.next()).done);S=!0)j(0,E)}catch(te){k=!0,N=te}finally{try{S||null==_.return||_.return()}finally{if(k)throw N}}function O(e){var t=p(e);return t&&Array.isArray(t.children)&&t.children.forEach((function(e){var t=e.value;w.Literal(t)&&("true"!==t.raw&&"false"!==t.raw||(t.type=b.Boolean),"null"===t.raw&&(t.type=b.Null),/^[0-9]/.test(t.raw)&&(t.type=b.Number),/^"/.test(t.raw)&&(t.type=b.String))})),t;}var C={types:b,invalid:function(e){try{x.parse(e)}catch(c){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){v(e,t,r[t])}))}return e}({message:c.toString()},c.__hash||{})}var t=O(e);if(t.children.length!==Object.keys(JSON.parse(e)).length){var r=[],n=!0,i=!1,o=void 0;try{for(var a,l=function(e,n){var i=n.value;t.children.find((function(e){return e.key.value===i.key.value}))&&r.push(i)},s=t.children[Symbol.iterator]();!(n=(a=s.next()).done);n=!0)l(0,a)}catch(te){i=!0,o=te}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}var u="Invalid JSON, the following keys are duplicated. Each key must appear only once to prevent data loss by parser. Remove duplicates and click verify again.";return r.forEach((function(e){var t="\n".concat(e.loc.start.line,": ").concat(e.key.raw,":"," ").concat(e.value.raw);u+=t})),{message:u}}return null},parse:O,check:w},A=r(3811),I=r(369);var $=r(5062);function J(e){return e.startsWith("--")?e:"--now-"+e}function P(e,t,r){var n=e.releases.slice(0,e.releases.indexOf(t)+1),i=[],o=!0,a=!1,l=void 0;try{for(var s,u=n[Symbol.iterator]();!(o=(s=u.next()).done);o=!0){var c=s.value,h=e.migrations.byRelease[c],f=!0,d=!1,y=void 0;try{for(var v,m=h.renamed[Symbol.iterator]();!(f=(v=m.next()).done);f=!0){var p=v.value;p.previousId===r&&i.push(p)}}catch(te){d=!0,y=te}finally{try{f||null==m.return||m.return()}finally{if(d)throw y}}}}catch(te){a=!0,l=te}finally{try{o||null==u.return||u.return()}finally{if(a)throw l}}return i.slice(-1)[0]}r(6486);var R=[function(e){var t=e.ast,r=e.report,n=!0,i=!1,o=void 0;try{for(var a,l=t.children[Symbol.iterator]();!(n=(a=l.next()).done);n=!0){var s=a.value,u=s.key;if(u.value.startsWith("now")){var c="--".concat(u.value);r(s).key.error('Hook names should start with "--"',c)}}}catch(te){i=!0,o=te}finally{try{n||null==l.return||l.return()}finally{if(i)throw o}}},function(e){var t=e.ast,r=e.report,n=!0,i=!1,o=void 0;try{for(var a,l=t.children[Symbol.iterator]();!(n=(a=l.next()).done);n=!0){var s=a.value,u=s.value;if(u.value.startsWith("now-")){var c="--".concat(u.value);r(s).value.error('Reference values should start with "--"',c)}if(u.value.startsWith("$now")){var h="--".concat(u.value.slice(1));r(s).value.error('Reference values should start with "--" not "$"',h)}if(u.value.startsWith("var(")&&u.value.endsWith(")")){var f=u.value.replace(/^var\(/,"").replace(/\)$/,"");r(s).value.error('Reference values should not be wrapped in "var(...)" statement',f)}else;}}catch(te){i=!0,o=te}finally{try{n||null==l.return||l.return()}finally{if(i)throw o}}},function(e){var t=e.ast,r=e.report,n=!0,i=!1,o=void 0;try{for(var a,l=function(e,n){var i=n.value,o=i.value;o.value.startsWith("--")&&(t.children.find((function(e){return e.key.value===o.value}))||r(i).value.warning('Reference value should be defined in theme but "'.concat(o.value,'" is not defined. This might not be a problem on the instance if you sys_ux_theme records extends another theme that has "').concat(o.value,'" defined.')))},s=t.children[Symbol.iterator]();!(n=(a=s.next()).done);n=!0)l(0,a)}catch(te){i=!0,o=te}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}},function(e){var t=e.ast,r=e.report,n=e.data,i=function(e){e.startsWith("--now")&&(e=e.replace(/^--/,""));var t=Object.values(n.hooks).find((function(t){return t.definitions[e]}));return t?t.definitions[e]:null},o=!0,a=!1,l=void 0;try{for(var s,u=t.children[Symbol.iterator]();!(o=(s=u.next()).done);o=!0){var c=s.value,h=c.key,f=c.value,d=i(h.value);if(d&&"color"===d.schema){if(f.value.startsWith("--"))continue;if((0,$.o$)(f.value)){var y=(0,$.oo)(f.value).toString();r(c).value.error("Colors should be in RGB format not hex format",y);continue}if(!(0,$.vu)(f.value)){r(c).value.error('Hook expects a color value in RGB format (e.g. "1,2,3") but received "'.concat(f.value,'"'));continue}}}}catch(te){a=!0,l=te}finally{try{o||null==u.return||u.return()}finally{if(a)throw l}}},function(e){var t=e.ast,r=e.report,n=e.options,i=e.data,o=n.release;if(o){var a=!0,l=!1,s=void 0;try{for(var u,c=t.children[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var h=u.value,f=J(h.key.value);if(f.startsWith("--now")){var d=f.replace(/^--/,""),y=P(i,o,d);if(y){var v="--"+y.id;r(h).key.error('Hook was renamed in prior release "'.concat(y.release,'", update to use the new name'),v);continue}var m=i.hooksByRelease[o][d];if(!m){r(h).key.error('Hook not used by any NDS components in release "'.concat(o,'". Check hook spelling, or check that you are on the right version.'));continue}i.hooks[m].definitions[d].customProperty||r(h).key.error("Hook is static and cannot be themed, defining this value will do nothing")}}}catch(te){l=!0,s=te}finally{try{a||null==c.return||c.return()}finally{if(l)throw s}}}},function(e){var t=e.ast,r=e.report,n=!0,i=!1,o=void 0;try{for(var a,l=function(e,n){var i=n.value,o=i.key,a=J(o.value),l=a.replace(/^--now-/,""),s=(o.value,t.children.filter((function(e){return e!==i&&J(e.key.value)===a})));if(1===s.length&&s[0].key.value!==o.value)return r(i).key.error("Hook is defined twice, once using shorthand syntax (".concat(l,") and once using longhand syntax (").concat(a,"). Delete one of the duplicate definitions.")),"continue"},s=t.children[Symbol.iterator]();!(n=(a=s.next()).done);n=!0)l(0,a)}catch(te){i=!0,o=te}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}}];var L=r(1163),T=r(5862),F=r(3025);function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function U(e,t,r,n,i,o,a){try{var l=e[o](a),s=l.value}catch(u){return void r(u)}l.done?t(s):Promise.resolve(s).then(n,i)}function W(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(te){l=!0,i=te}finally{try{a||null==r.return||r.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return M(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return M(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();}function G(e){var t=e.status;return(0,o.jsx)("span",{className:(0,A.Z)({"inline-block":!0,"w-2":!0,"h-2":!0,"rounded-full":!0,"bg-green-600":"positive"===t,"bg-red-600":"negative"===t})})}function D(e){var t=e.label,r=e.status;return(0,o.jsxs)("div",{className:"flex items-center mr-2",children:[(0,o.jsx)(G,{status:r}),(0,o.jsx)("span",{className:"text-xs ml-1 leading-none",children:t})]})}var V,Z=u()((V=i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e(126),r.e(656)]).then(r.bind(r,9656));case 2:return t=e.sent,e.next=5,Promise.all([r.e(126),r.e(876)]).then(r.t.bind(r,6876,23));case 5:return e.abrupt("return",t.Controlled);case 6:case"end":return e.stop()}}),e)})),function(){var e=this,t=arguments;return new Promise((function(r,n){var i=V.apply(e,t);function o(e){U(i,r,n,o,a,"next",e)}function a(e){U(i,r,n,o,a,"throw",e)}o(void 0)}))}),{loadableGenerated:{webpack:function(){return[6876]}},ssr:!1}),H=JSON.stringify({"--now-color--primary-0":"1,1,1"},null,"  ");function q(e){var t=function(e){var t=(0,l.Dq)(e),r=document.createElement("DIV");return r.innerHTML=t,r.children[0]}((0,o.jsx)("div",{className:"w-2 h-2 bg-red-600 rounded-full relative",style:{top:"6px",left:"10px"}}));return(0,I.ZP)(t,{content:e}),t}function z(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:" ";return e+Array(t).fill(r).join("")}var X="INITIAL",K="EDITING",Q="REVIEWING_RESULT",Y=!0;function ee(e){var t=e.data,r=function(e){x((function(t){return{commitCount:t.commitCount+1,currentCode:e,committedCode:e,syntaxError:null,lintErrors:[]}}))},n=(0,L.useRouter)(),i=(0,a.useState)(!1),l=i[0],s=i[1],u=(0,a.useState)(!1),y=u[0],v=u[1],m=(0,a.useState)({commitCount:0,currentCode:H,committedCode:H,syntaxError:null,lintErrors:[]}),p=m[0],x=m[1],g=(0,a.useState)(null),b=g[0],w=g[1],S=(0,a.useState)(t.releases.slice(-1)[0]),k=S[0],N=S[1];(0,a.useEffect)((function(){n.isReady&&!y&&(v(!0),n.query.code&&!C.invalid(n.query.code)&&r(n.query.code))}),[n.query,n.isReady]),(0,a.useEffect)((function(){b&&(window.editor=b)}),[b]),(0,a.useEffect)((function(){var e=C.invalid(p.committedCode);if(e)x((function(t){return{commitCount:t.commitCount,currentCode:p.currentCode,committedCode:p.currentCode,syntaxError:e,lintErrors:[]}}));else{var r=JSON.stringify(JSON.parse(p.committedCode),null,"  "),n=function(e,t,r){var n=function(e){return{key:{error:function(t,r){return i.push({node:e,part:"key",message:t,fix:r})},warning:function(t,r){return o.push({node:e,part:"key",message:t,fix:r})}},value:{error:function(t,r){return i.push({node:e,part:"value",message:t,fix:r})},warning:function(t,r){return o.push({node:e,part:"value",message:t,fix:r})}}}},i=[],o=[],a=C.parse(e),l=!0,s=!1,u=void 0;try{for(var c,h=R[Symbol.iterator]();!(l=(c=h.next()).done);l=!0)(0,c.value)({ast:a,options:t,data:r,report:n})}catch(te){s=!0,u=te}finally{try{l||null==h.return||h.return()}finally{if(s)throw u}}return{errors:i,warnings:o}}(r,{release:k},t);x((function(e){return{commitCount:e.commitCount,currentCode:r,committedCode:r,syntaxError:null,lintErrors:n.errors}}))}}),[p.committedCode,p.commitCount]),(0,a.useEffect)((function(){b&&(b.clearGutter("codelinemarkers"),p.lintErrors.forEach((function(e){var t=e.node,r=e.message,n=t.loc.start.line-1;b.setGutterMarker(n,"codelinemarkers",q(r))})))}),[b,p.lintErrors]);var E=a.useMemo((function(){return t.releases.map((function(e){return{id:e,label:e}})).reverse()}),[]),j=a.useMemo((function(){var e=new Map,t=!0,r=!1,n=void 0;try{for(var i,o=p.lintErrors[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value;"string"===typeof a.fix&&(e.has(a.node)||e.set(a.node,[]),e.get(a.node).push(a))}}catch(te){r=!0,n=te}finally{try{t||null==o.return||o.return()}finally{if(r)throw n}}var l=[],s=!0,u=!1,c=void 0;try{for(var h,f=e.values()[Symbol.iterator]();!(s=(h=f.next()).done);s=!0){var d=h.value;1===d.length&&l.push(d[0])}}catch(te){u=!0,c=te}finally{try{s||null==f.return||f.return()}finally{if(u)throw c}}return l}),[p.lintErrors]),_=null;return _=0===p.commitCount?X:p.committedCode===p.currentCode?Q:K,(0,o.jsxs)(a.Fragment,{children:[(0,o.jsx)(c.Z,{label:"Validator",path:[{id:"validator",href:"/validator",label:"Validator"}],selectedPath:"validator"}),(0,o.jsxs)(h.Z,{children:[(0,o.jsx)("div",{className:"mb-4",children:(0,o.jsxs)("div",{className:"flex items-center",children:[(0,o.jsx)("div",{children:(0,o.jsx)(f.Z,{label:"Release",items:E,selected:k,onSelect:function(e){return N(e)},layout:"horizontal"})}),(0,o.jsxs)("div",{className:"flex items-center ml-auto",children:[(0,o.jsx)("div",{className:"mr-2",children:(0,o.jsx)(D,{status:p.syntaxError?"negative":"positive",label:p.syntaxError?"Invalid JSON":"Valid JSON"})}),(0,o.jsx)("div",{className:"mr-2",children:(0,o.jsx)(D,{status:0===p.lintErrors.length?"positive":"negative",label:0===p.lintErrors.length?"No Errors":"".concat(p.lintErrors.length," Error(s)")})}),(0,o.jsx)("span",{className:"mr-2",children:(0,o.jsx)(d.Z,{onClick:function(){r(p.currentCode),l||(s(!0),setTimeout((function(){return s(!1)}),350))},size:"md",loading:l,children:"Validate"})}),(0,o.jsx)(d.Z,{onClick:function(){return function(e){if(C.invalid(e))T.Am.error("Invalid JSON, could not copy shareable link");else{r(e);var t=JSON.stringify(JSON.parse(e),null,"");n.push({pathname:n.pathname,query:{code:t}}).then((function(){(0,F.z)(window.location.href),T.Am.success("Shareable link copied to clipboard and updated in URL")}))}}(p.currentCode)},size:"md",variant:"secondary",children:"Share"})]})]})}),Z&&(0,o.jsx)("div",{className:(0,A.Z)({"border-2":!0,"p-1":!0,"border-white":!0,"border-red-500":p.syntaxError||p.lintErrors.length>0}),children:(0,o.jsx)(Z,{value:p.currentCode,options:{mode:"application/json",theme:"material",lineNumbers:!0,gutters:["CodeMirror-linenumbers","codelinemarkers"]},onBeforeChange:function(e,t,r){x(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){W(e,t,r[t])}))}return e}({},p,{currentCode:r}))},onChange:function(e,t,r){},editorDidMount:function(e){return w(e)}})}),(0,o.jsxs)("div",{className:"mt-4",children:[p.syntaxError&&(0,o.jsxs)("div",{className:"text-red-800",children:[(0,o.jsx)("p",{className:"font-semibold",children:"Invalid JSON, fix the problems identified below:"}),(0,o.jsx)("div",{className:"bg-gray-400 text-xs p-4 mt-2 overflow-x-auto",children:(0,o.jsx)("pre",{children:(0,o.jsx)("code",{children:p.syntaxError.message})})})]}),!p.syntaxError&&0===p.lintErrors.length&&_!==X&&(0,o.jsx)("div",{className:"text-green-600",children:(0,o.jsx)("div",{className:"flex items-center",children:(0,o.jsx)("p",{className:"font-semibold",children:"No errors found"})})}),p.lintErrors.length>0&&(0,o.jsxs)("div",{className:"text-red-800",children:[(0,o.jsxs)("div",{className:"flex items-center",children:[(0,o.jsx)("p",{className:"text-xl font-semibold",children:"Errors"}),(0,o.jsx)("div",{className:"ml-auto",children:j.length>0&&(0,o.jsxs)("button",{className:"bg-black hover:bg-gray-800 text-white font-bold py-0 px-1 rounded text-xs",onClick:function(){return function(){if(C.invalid(p.currentCode))window.alert("JSON syntax invalid, fix and re-run validation before continuing");else{var e=JSON.parse(p.currentCode),t={},r=!0,n=!1,i=void 0;try{for(var o,a=function(e,r){var n=B(r.value,2),i=n[0],o=n[1],a=j.find((function(e){return e.node.key.value===i&&e.node.value.value===o}));if(!a)return t[i]=o,"continue";a.node;var l=a.part,s=a.fix;"key"===l?t[s]=o:t[i]=s},l=Object.entries(e)[Symbol.iterator]();!(r=(o=l.next()).done);r=!0)a(0,o)}catch(te){n=!0,i=te}finally{try{r||null==l.return||l.return()}finally{if(n)throw i}}var s=JSON.stringify(t,null,"  ");x((function(e){return{commitCount:e.commitCount+1,currentCode:s,committedCode:s,syntaxError:null,lintErrors:[]}}))}}()},children:["Apply ",j.length," Auto"," ",1===j.length?"Fix":"Fixes"]})})]}),p.lintErrors.map((function(e,t){var r=e.node,n=e.message,i=e.part,l=e.fix,s=void 0===l?"":l,u=String(r.loc.start.line),c="";return c=z(c,u.length+2," "),z(c,u.length+2," "),"key"===i?(c=z(c,r.key.raw.length,"^"),z(c,s.length,"^")):(c=z(c,r.key.raw.length+2," "),c=z(c,r.value.raw.length,"^"),z(c,r.key.raw.length+2," "),z(c,s.length+2," ")),(0,o.jsxs)("div",{className:"mt-3",children:[(0,o.jsxs)("p",{className:"mb-2",children:[t+1,".) ",n]}),(0,o.jsx)("div",{className:"text-xs bg-red-800 text-white pt-1 pb-1 pl-2 pr-2 uppercase font-semibold",children:"Current Code"}),(0,o.jsx)("div",{className:"bg-gray-400 text-xs p-4 pb-1 text-black overflow-x-auto",children:(0,o.jsx)("pre",{children:(0,o.jsxs)("code",{children:[r.loc.start.line,": ",r.key.raw,":"," ",r.value.raw,(0,o.jsx)("br",{}),c]})})}),""!==s&&(0,o.jsxs)(a.Fragment,{children:[(0,o.jsxs)("div",{className:"text-xs bg-green-800 text-white pt-1 pb-1 pl-2 pr-2 uppercase font-semibold flex",children:[(0,o.jsx)("span",{className:"mr-auto",children:"Suggested Fix"}),(0,o.jsx)("button",{className:"bg-black hover:bg-gray-800 text-white font-bold py-0 px-1 rounded",onClick:function(){return function(e){if(C.invalid(p.currentCode))window.alert("JSON syntax invalid, fix and re-run validation before continuing");else{var t=e.node,r=e.part,n=e.fix,i=JSON.parse(p.currentCode),o={},a=!0,l=!1,s=void 0;try{for(var u,c=Object.entries(i)[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var h=B(u.value,2),f=h[0],d=h[1];t.key.value===f&&t.value.value===d?"key"===r?o[n]=d:o[f]=n:o[f]=d}}catch(te){l=!0,s=te}finally{try{a||null==c.return||c.return()}finally{if(l)throw s}}var y=JSON.stringify(o,null,"  ");x((function(e){return{commitCount:e.commitCount+1,currentCode:y,committedCode:y,syntaxError:null,lintErrors:[]}}))}}(e)},children:"Apply Fix"})]}),(0,o.jsx)("div",{className:"bg-gray-400 text-xs p-4 pb-1 text-black",children:(0,o.jsx)("pre",{children:(0,o.jsxs)("code",{children:["key"===i?"".concat(u,': "').concat(s,'": ').concat(r.value.raw):"".concat(u,": ").concat(r.key.raw,': "').concat(s,'"'),(0,o.jsx)("br",{}),c]})})})]})]})}))]})]})]})]})}}},function(e){e.O(0,[774,662,996,369,152,494,464,888,179],(function(){return t=7501,e(e.s=t);var t}));var t=e.O();_N_E=t}]);