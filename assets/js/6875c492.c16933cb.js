"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4813],{47713:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(21312),o=n(39022),a=n(74848);function i(e){const{metadata:t}=e,{previousPage:n,nextPage:i}=t;return(0,a.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,a.jsx)(o.A,{permalink:n,title:(0,a.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),i&&(0,a.jsx)(o.A,{permalink:i,title:(0,a.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},33892:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(7131),o=n(24651),a=n(74848);function i(e){let{items:t,component:n=o.A}=e;return(0,a.jsx)(a.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,a.jsx)(s.i,{content:t,children:(0,a.jsx)(n,{children:(0,a.jsx)(t,{})})},t.metadata.permalink)}))})}},33069:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(96540);var s=n(34164),o=n(21312),a=n(53465),i=n(61213),c=n(17559),r=n(28774),l=n(26535),d=n(47713),p=n(41463),u=n(33892),g=n(50996),h=n(51107),m=n(74848);function x(e){const t=function(){const{selectMessage:e}=(0,a.W)();return t=>e(t,(0,o.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,o.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function b(e){let{tag:t}=e;const n=x(t);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i.be,{title:n,description:t.description}),(0,m.jsx)(p.A,{tag:"blog_tags_posts"})]})}function j(e){let{tag:t,items:n,sidebar:s,listMetadata:a}=e;const i=x(t);return(0,m.jsxs)(l.A,{sidebar:s,children:[t.unlisted&&(0,m.jsx)(g.A,{}),(0,m.jsxs)("header",{className:"margin-bottom--xl",children:[(0,m.jsx)(h.A,{as:"h1",children:i}),t.description&&(0,m.jsx)("p",{children:t.description}),(0,m.jsx)(r.A,{href:t.allTagsPath,children:(0,m.jsx)(o.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,m.jsx)(u.A,{items:n}),(0,m.jsx)(d.A,{metadata:a})]})}function f(e){return(0,m.jsxs)(i.e3,{className:(0,s.A)(c.G.wrapper.blogPages,c.G.page.blogTagPostListPage),children:[(0,m.jsx)(b,{...e}),(0,m.jsx)(j,{...e})]})}},50996:(e,t,n)=>{n.d(t,{A:()=>g});n(96540);var s=n(34164),o=n(21312),a=n(5260),i=n(74848);function c(){return(0,i.jsx)(o.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,i.jsx)(o.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function l(){return(0,i.jsx)(a.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(17559),p=n(27293);function u(e){let{className:t}=e;return(0,i.jsx)(p.A,{type:"caution",title:(0,i.jsx)(c,{}),className:(0,s.A)(t,d.G.common.unlistedBanner),children:(0,i.jsx)(r,{})})}function g(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l,{}),(0,i.jsx)(u,{...e})]})}},18654:(e,t,n)=>{n.d(t,{A:()=>p});var s=n(96540),o=n(34164),a=n(86861),i=n(21312),c=n(81473),r=n(14115);const l={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};var d=n(74848);function p(e){let{code:t,className:n}=e;const[p,u]=(0,s.useState)(!1),g=(0,s.useRef)(void 0),h=(0,s.useCallback)((()=>{(0,a.A)(t),u(!0),g.current=window.setTimeout((()=>{u(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(g.current)),[]),(0,d.jsx)("button",{type:"button","aria-label":p?(0,i.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,i.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,i.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,o.A)("clean-btn",n,l.copyButton,p&&l.copyButtonCopied),onClick:h,children:(0,d.jsxs)("span",{className:l.copyButtonIcons,"aria-hidden":"true",children:[(0,d.jsx)(c.A,{className:l.copyButtonIcon}),(0,d.jsx)(r.A,{className:l.copyButtonSuccessIcon})]})})}},26334:(e,t,n)=>{n.d(t,{A:()=>i});var s=n(96540),o=n(14902),a=n(74848);function i(e){const[t,n]=(0,s.useState)(!1),i=(e=>{if(!e)return{};const t={},n=/(\w+)(?:="([^"]*)"|\s*)/g;let s;for(;null!==(s=n.exec(e));){const[,e,n]=s;t[e]=n||"true"}return t})(e.metastring);return(0,a.jsxs)("div",{className:"rounded-3xl overflow-hidden",children:[(0,a.jsxs)("div",{className:"bg-[#35353A] p-4 flex justify-between items-center",children:[(0,a.jsx)("span",{className:"text-white text-xs font-space-mono",children:i.title}),(0,a.jsx)("div",{className:"relative",children:(0,a.jsxs)("button",{onClick:()=>{navigator.clipboard.writeText(e.children?.toString()||""),n(!0),setTimeout((()=>n(!1)),2e3)},"aria-label":"Copy code",className:"flex flex-row items-center bg-transparent appearance-none border-none",children:[t&&(0,a.jsx)("span",{className:"text-xs text-white mr-2 opacity-70 font-space-mono p-0",style:{lineHeight:"0"},children:"Copied!"}),(0,a.jsx)("img",{src:"/icons/basic/copy-icon.svg",alt:"Copy Icon",className:"w-4 h-4 cursor-pointer hover:opacity-80 transition-opacity duration-150"})]})})]}),(0,a.jsx)(o.A,{...e})]})}}}]);