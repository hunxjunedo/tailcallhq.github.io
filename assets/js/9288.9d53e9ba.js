(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9288],{14902:(e,t,n)=>{"use strict";n.d(t,{A:()=>H});var s=n(96540),r=n(92303),o=n(34164),c=n(95293),a=n(6342);function l(){const{prism:e}=(0,a.p)(),{colorMode:t}=(0,c.G)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var i=n(17559),u=n(18426),d=n.n(u);const m=/title=(?<quote>["'])(?<title>.*?)\1/,b=/\{(?<range>[\d,-]+)\}/,f={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},h={...f,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},p=Object.keys(f);function g(e,t){const n=e.map((e=>{const{start:n,end:s}=h[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function k(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:r,metastring:o}=t;if(o&&b.test(o)){const e=o.match(b).groups.range;if(0===r.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=r[0].className,s=d()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return g(["js","jsBlock"],t);case"jsx":case"tsx":return g(["js","jsBlock","jsx"],t);case"html":return g(["js","jsBlock","html"],t);case"python":case"py":case"bash":return g(["bash"],t);case"markdown":case"md":return g(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return g(["tex"],t);case"lua":case"haskell":case"sql":return g(["lua"],t);case"wasm":return g(["wasm"],t);case"vb":case"vba":case"visual-basic":return g(["vb","rem"],t);case"vbnet":return g(["vbnet","rem"],t);case"batch":return g(["rem"],t);case"basic":return g(["rem","f90"],t);case"fsharp":return g(["js","ml"],t);case"ocaml":case"sml":return g(["ml"],t);case"fortran":return g(["f90"],t);case"cobol":return g(["cobol"],t);default:return g(p,t)}}(s,r),a=n.split("\n"),l=Object.fromEntries(r.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(r.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),m=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let d=0;d<a.length;){const e=a[d].match(c);if(!e){d+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?l[i[t]].range+=`${d},`:u[t]?l[u[t]].start=d:m[t]&&(l[m[t]].range+=`${l[m[t]].start}-${d-1},`),a.splice(d,1)}n=a.join("\n");const f={};return Object.entries(l).forEach((e=>{let[t,{range:n}]=e;d()(n).forEach((e=>{f[e]??=[],f[e].push(t)}))})),{lineClassNames:f,code:n}}const j={codeBlockContainer:"codeBlockContainer_Ckt0"};var x=n(74848);function v(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,r]=e;const o=t[s];o&&"string"==typeof r&&(n[o]=r)})),n}(l());return(0,x.jsx)(t,{...n,style:s,className:(0,o.A)(n.className,j.codeBlockContainer,i.G.common.codeBlock)})}const B={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function N(e){let{children:t,className:n}=e;return(0,x.jsx)(v,{as:"pre",tabIndex:0,className:(0,o.A)(B.codeBlockStandalone,"thin-scrollbar",n),children:(0,x.jsx)("code",{className:B.codeBlockLines,children:t})})}var w=n(89532);const C={attributes:!0,characterData:!0,childList:!0,subtree:!0};function y(e,t){const[n,r]=(0,s.useState)(),o=(0,s.useCallback)((()=>{r(e.current?.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,s.useEffect)((()=>{o()}),[o]),function(e,t,n){void 0===n&&(n=C);const r=(0,w._q)(t),o=(0,w.Be)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(r);return e&&t.observe(e,o),()=>t.disconnect()}),[e,r,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var E=n(71765);const L={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function A(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:r,getTokenProps:c}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const a=r({line:t,className:(0,o.A)(n,s&&L.codeLine)}),l=t.map(((e,t)=>(0,x.jsx)("span",{...c({token:e})},t)));return(0,x.jsxs)("span",{...a,children:[s?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("span",{className:L.codeLineNumber}),(0,x.jsx)("span",{className:L.codeLineContent,children:l})]}):l,(0,x.jsx)("br",{})]})}var _=n(18654),S=n(21312);function $(e){return(0,x.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,x.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const W={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function T(e){let{className:t,onClick:n,isEnabled:s}=e;const r=(0,S.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,x.jsx)("button",{type:"button",onClick:n,className:(0,o.A)("clean-btn",t,s&&W.wordWrapButtonEnabled),"aria-label":r,title:r,children:(0,x.jsx)($,{className:W.wordWrapButtonIcon,"aria-hidden":"true"})})}function M(e){let{children:t,className:n="",metastring:r,title:c,showLineNumbers:i,language:u}=e;const{prism:{defaultLanguage:d,magicComments:b}}=(0,a.p)(),f=function(e){return e?.toLowerCase()}(u??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??d),h=l(),p=function(){const[e,t]=(0,s.useState)(!1),[n,r]=(0,s.useState)(!1),o=(0,s.useRef)(null),c=(0,s.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),a=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");r(n)}),[o]);return y(o,a),(0,s.useEffect)((()=>{a()}),[e,a]),(0,s.useEffect)((()=>(window.addEventListener("resize",a,{passive:!0}),()=>{window.removeEventListener("resize",a)})),[a]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:c}}(),g=function(e){return e?.match(m)?.groups.title??""}(r)||c,{lineClassNames:j,code:N}=k(t,{metastring:r,language:f,magicComments:b}),w=i??function(e){return Boolean(e?.includes("showLineNumbers"))}(r);return(0,x.jsxs)(v,{as:"div",className:(0,o.A)(n,f&&!n.includes(`language-${f}`)&&`language-${f}`),children:[g&&(0,x.jsx)("div",{className:B.codeBlockTitle,children:g}),(0,x.jsxs)("div",{className:B.codeBlockContent,children:[(0,x.jsx)(E.f4,{theme:h,code:N,language:f??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:r,getTokenProps:c}=e;return(0,x.jsx)("pre",{tabIndex:0,ref:p.codeBlockRef,className:(0,o.A)(t,B.codeBlock,"thin-scrollbar"),style:n,children:(0,x.jsx)("code",{className:(0,o.A)(B.codeBlockLines,w&&B.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,x.jsx)(A,{line:e,getLineProps:r,getTokenProps:c,classNames:j[t],showLineNumbers:w},t)))})})}}),(0,x.jsxs)("div",{className:B.buttonGroup,children:[(p.isEnabled||p.isCodeScrollable)&&(0,x.jsx)(T,{className:B.codeButton,onClick:()=>p.toggle(),isEnabled:p.isEnabled}),(0,x.jsx)(_.A,{className:B.codeButton,code:N})]})]})]})}function H(e){let{children:t,...n}=e;const o=(0,r.A)(),c=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),a="string"==typeof c?M:N;return(0,x.jsx)(a,{...n,children:c},String(o))}},81473:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});n(96540);var s=n(74848);function r(e){return(0,s.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}},14115:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});n(96540);var s=n(74848);function r(e){return(0,s.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}},18426:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,r,o]=t;if(s&&o){s=parseInt(s),o=parseInt(o);const e=s<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=s;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},86861:(e,t,n)=>{"use strict";function s(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const s=document.createElement("textarea"),r=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";const o=document.getSelection(),c=o.rangeCount>0&&o.getRangeAt(0);n.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}return s.remove(),c&&(o.removeAllRanges(),o.addRange(c)),r&&r.focus(),a}n.d(t,{A:()=>s})}}]);