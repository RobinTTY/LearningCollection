(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[814],{814:(e,t,n)=>{"use strict";n.d(t,{Z:()=>q});var o=n(7462),s=n(7294),a=n(2389),c=n(6010),r=n(2949),l=n(6668);function i(){const{prism:e}=(0,l.L)(),{colorMode:t}=(0,r.I)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var u=n(5281),p=n(7594),d=n.n(p);const m=/title=(?<quote>["'])(?<title>.*?)\1/,g=/\{(?<range>[\d,-]+)\}/,h={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function y(e,t){const n=e.map((e=>{const{start:n,end:o}=h[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function f(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:s,metastring:a}=t;if(a&&g.test(a)){const e=a.match(g).groups.range;if(0===s.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${a}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=s[0].className,o=d()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return y(["js","jsBlock"],t);case"jsx":case"tsx":return y(["js","jsBlock","jsx"],t);case"html":return y(["js","jsBlock","html"],t);case"python":case"py":case"bash":return y(["bash"],t);case"markdown":case"md":return y(["html","jsx","bash"],t);default:return y(Object.keys(h),t)}}(o,s),r=n.split("\n"),l=Object.fromEntries(s.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(s.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),p=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let d=0;d<r.length;){const e=r[d].match(c);if(!e){d+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?l[i[t]].range+=`${d},`:u[t]?l[u[t]].start=d:p[t]&&(l[p[t]].range+=`${l[p[t]].start}-${d-1},`),r.splice(d,1)}n=r.join("\n");const m={};return Object.entries(l).forEach((e=>{let[t,{range:n}]=e;d()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const b="codeBlockContainer_Ckt0";function k(e){let{as:t,...n}=e;const a=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,s]=e;const a=t[o];a&&"string"==typeof s&&(n[a]=s)})),n}(i());return s.createElement(t,(0,o.Z)({},n,{style:a,className:(0,c.Z)(n.className,b,u.k.common.codeBlock)}))}const v={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function E(e){let{children:t,className:n}=e;return s.createElement(k,{as:"pre",tabIndex:0,className:(0,c.Z)(v.codeBlockStandalone,"thin-scrollbar",n)},s.createElement("code",{className:v.codeBlockLines},t))}var N=n(902);const B={attributes:!0,characterData:!0,childList:!0,subtree:!0};function C(e,t){const[n,o]=(0,s.useState)(),a=(0,s.useCallback)((()=>{o(e.current?.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,s.useEffect)((()=>{a()}),[a]),function(e,t,n){void 0===n&&(n=B);const o=(0,N.zX)(t),a=(0,N.Ql)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,a),()=>t.disconnect()}),[e,o,a])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const w={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var L={Prism:n(7410).Z,theme:w};function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(){return T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},T.apply(this,arguments)}var _=/\r\n|\r|\n/,S=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},x=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},I=function(e,t){var n=e.plain,o=Object.create(null),s=e.styles.reduce((function(e,n){var o=n.languages,s=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=T({},e[t],s);e[t]=n})),e}),o);return s.root=n,s.plain=T({},n,{backgroundColor:null}),s};function O(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const P=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),j(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?I(e.theme,e.language):void 0;return t.themeDict=n})),j(this,"getLineProps",(function(e){var n=e.key,o=e.className,s=e.style,a=T({},O(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==s&&(a.style=void 0!==a.style?T({},a.style,s):s),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),j(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,s=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===s&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===s&&!o)return a[n[0]];var c=o?{display:"inline-block"}:{},r=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(r))}})),j(this,"getTokenProps",(function(e){var n=e.key,o=e.className,s=e.style,a=e.token,c=T({},O(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==s&&(c.style=void 0!==c.style?T({},c.style,s):s),void 0!==n&&(c.key=n),o&&(c.className+=" "+o),c})),j(this,"tokenize",(function(e,t,n,o){var s={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",s);var a=s.tokens=e.tokenize(s.code,s.grammar,s.language);return e.hooks.run("after-tokenize",s),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,s=e.children,a=this.getThemeDict(this.props),c=t.languages[n];return s({tokens:function(e){for(var t=[[]],n=[e],o=[0],s=[e.length],a=0,c=0,r=[],l=[r];c>-1;){for(;(a=o[c]++)<s[c];){var i=void 0,u=t[c],p=n[c][a];if("string"==typeof p?(u=c>0?u:["plain"],i=p):(u=x(u,p.type),p.alias&&(u=x(u,p.alias)),i=p.content),"string"==typeof i){var d=i.split(_),m=d.length;r.push({types:u,content:d[0]});for(var g=1;g<m;g++)S(r),l.push(r=[]),r.push({types:u,content:d[g]})}else c++,t.push(u),n.push(i),o.push(0),s.push(i.length)}c--,t.pop(),n.pop(),o.pop(),s.pop()}return S(r),l}(void 0!==c?this.tokenize(t,o,c,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(s.Component),A="codeLine_lJS_",Z="codeLineNumber_Tfdd",$="codeLineContent_feaV";function z(e){let{line:t,classNames:n,showLineNumbers:a,getLineProps:r,getTokenProps:l}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=r({line:t,className:(0,c.Z)(n,a&&A)}),u=t.map(((e,t)=>s.createElement("span",(0,o.Z)({key:t},l({token:e,key:t})))));return s.createElement("span",i,a?s.createElement(s.Fragment,null,s.createElement("span",{className:Z}),s.createElement("span",{className:$},u)):u,s.createElement("br",null))}var D=n(5999);const H={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function M(e){let{code:t,className:n}=e;const[o,a]=(0,s.useState)(!1),r=(0,s.useRef)(void 0),l=(0,s.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const o=document.createElement("textarea"),s=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const a=document.getSelection();let c=!1;a.rangeCount>0&&(c=a.getRangeAt(0)),n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let r=!1;try{r=document.execCommand("copy")}catch{}o.remove(),c&&(a.removeAllRanges(),a.addRange(c)),s&&s.focus()}(t),a(!0),r.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(r.current)),[]),s.createElement("button",{type:"button","aria-label":o?(0,D.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,D.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,D.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.Z)("clean-btn",n,H.copyButton,o&&H.copyButtonCopied),onClick:l},s.createElement("span",{className:H.copyButtonIcons,"aria-hidden":"true"},s.createElement("svg",{className:H.copyButtonIcon,viewBox:"0 0 24 24"},s.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),s.createElement("svg",{className:H.copyButtonSuccessIcon,viewBox:"0 0 24 24"},s.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const V="wordWrapButtonIcon_Bwma",W="wordWrapButtonEnabled_EoeP";function R(e){let{className:t,onClick:n,isEnabled:o}=e;const a=(0,D.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return s.createElement("button",{type:"button",onClick:n,className:(0,c.Z)("clean-btn",t,o&&W),"aria-label":a,title:a},s.createElement("svg",{className:V,viewBox:"0 0 24 24","aria-hidden":"true"},s.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function F(e){let{children:t,className:n="",metastring:a,title:r,showLineNumbers:u,language:p}=e;const{prism:{defaultLanguage:d,magicComments:g}}=(0,l.L)(),h=p??n.split(" ").find((e=>e.startsWith("language-")))?.replace(/language-/,"")??d;const y=i(),b=function(){const[e,t]=(0,s.useState)(!1),[n,o]=(0,s.useState)(!1),a=(0,s.useRef)(null),c=(0,s.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),r=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");o(n)}),[a]);return C(a,r),(0,s.useEffect)((()=>{r()}),[e,r]),(0,s.useEffect)((()=>(window.addEventListener("resize",r,{passive:!0}),()=>{window.removeEventListener("resize",r)})),[r]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:c}}(),E=function(e){return e?.match(m)?.groups.title??""}(a)||r,{lineClassNames:N,code:B}=f(t,{metastring:a,language:h,magicComments:g}),w=u??function(e){return Boolean(e?.includes("showLineNumbers"))}(a);return s.createElement(k,{as:"div",className:(0,c.Z)(n,h&&!n.includes(`language-${h}`)&&`language-${h}`)},E&&s.createElement("div",{className:v.codeBlockTitle},E),s.createElement("div",{className:v.codeBlockContent},s.createElement(P,(0,o.Z)({},L,{theme:y,code:B,language:h??"text"}),(e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:a}=e;return s.createElement("pre",{tabIndex:0,ref:b.codeBlockRef,className:(0,c.Z)(t,v.codeBlock,"thin-scrollbar")},s.createElement("code",{className:(0,c.Z)(v.codeBlockLines,w&&v.codeBlockLinesWithNumbering)},n.map(((e,t)=>s.createElement(z,{key:t,line:e,getLineProps:o,getTokenProps:a,classNames:N[t],showLineNumbers:w})))))})),s.createElement("div",{className:v.buttonGroup},(b.isEnabled||b.isCodeScrollable)&&s.createElement(R,{className:v.codeButton,onClick:()=>b.toggle(),isEnabled:b.isEnabled}),s.createElement(M,{className:v.codeButton,code:B}))))}function q(e){let{children:t,...n}=e;const c=(0,a.Z)(),r=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof r?F:E;return s.createElement(l,(0,o.Z)({key:String(c)},n),r)}},7594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,s,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==s&&".."!==s&&"\u2025"!==s||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);