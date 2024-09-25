/*! For license information please see 7bf7dd2a.9433ffec.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2762],{26487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=n(74848),i=n(28453),r=n(27502);const s={title:"Design a GraphQL Schema So Good, It'll Make REST APIs Cry - Part 4",authors:[{name:"Amit Singh",title:"Head of Growth and Strategy @ Tailcall",url:"https://github.com/amitksingh1490",image_url:"https://avatars.githubusercontent.com/u/23661702?v=5"}],tags:["GraphQL","API","Schema","Design","Best Practices"],description:"Learn how to remove schema elements without causing disruptions. Strategies to handle breaking changes and maintain backward compatibility.",image:"/images/blog/quiz-part4.png",hide_table_of_contents:!0,slug:"graphql-schema-part-2-3"},o=void 0,l={permalink:"/blog/graphql-schema-part-2-3",source:"@site/blog/graphql-schema-part-2-3-2024-07-23.mdx",title:"Design a GraphQL Schema So Good, It'll Make REST APIs Cry - Part 4",description:"Learn how to remove schema elements without causing disruptions. Strategies to handle breaking changes and maintain backward compatibility.",date:"2024-07-23T00:00:00.000Z",tags:[{inline:!0,label:"GraphQL",permalink:"/blog/tags/graph-ql"},{inline:!0,label:"API",permalink:"/blog/tags/api"},{inline:!0,label:"Schema",permalink:"/blog/tags/schema"},{inline:!0,label:"Design",permalink:"/blog/tags/design"},{inline:!0,label:"Best Practices",permalink:"/blog/tags/best-practices"}],readingTime:6.665,hasTruncateMarker:!0,authors:[{name:"Amit Singh",title:"Head of Growth and Strategy @ Tailcall",url:"https://github.com/amitksingh1490",image_url:"https://avatars.githubusercontent.com/u/23661702?v=5",imageURL:"https://avatars.githubusercontent.com/u/23661702?v=5"}],frontMatter:{title:"Design a GraphQL Schema So Good, It'll Make REST APIs Cry - Part 4",authors:[{name:"Amit Singh",title:"Head of Growth and Strategy @ Tailcall",url:"https://github.com/amitksingh1490",image_url:"https://avatars.githubusercontent.com/u/23661702?v=5",imageURL:"https://avatars.githubusercontent.com/u/23661702?v=5"}],tags:["GraphQL","API","Schema","Design","Best Practices"],description:"Learn how to remove schema elements without causing disruptions. Strategies to handle breaking changes and maintain backward compatibility.",image:"/images/blog/quiz-part4.png",hide_table_of_contents:!0,slug:"graphql-schema-part-2-3"},unlisted:!1,prevItem:{title:"Exploring GraphiQL: The In-Browser IDE for GraphQL",permalink:"/blog/exploring-graphiql"},nextItem:{title:"Design a GraphQL Schema So Good, It'll Make REST APIs Cry - Part 3",permalink:"/blog/graphql-schema-part-2-2"}},c={authorsImageUrls:[void 0]},d=[{value:"What Do You Already Know? \ud83e\udde0\ud83d\udcab",id:"what-do-you-already-know-",level:2},{value:"Removing Without Breaking: The Subtraction Subterfuge",id:"removing-without-breaking-the-subtraction-subterfuge",level:2},{value:"Recap of Additive Changes and Modifications",id:"recap-of-additive-changes-and-modifications",level:2},{value:"Safe, Dangerous, and Breaking Changes",id:"safe-dangerous-and-breaking-changes",level:3},{value:"The Subtraction Subterfuge",id:"the-subtraction-subterfuge",level:2},{value:"The Field Farewell",id:"the-field-farewell",level:3},{value:"The Argument Abandonment",id:"the-argument-abandonment",level:3},{value:"The Type Deletion Dilemma",id:"the-type-deletion-dilemma",level:3},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"what-do-you-already-know-",children:"What Do You Already Know? \ud83e\udde0\ud83d\udcab"}),"\n",(0,a.jsx)(r.A,{title:"GraphQL Schema Change",questions:[{id:1,text:"What is a critical consideration before removing a field from a GraphQL schema?",options:["Ensuring the field is no longer in use by any clients","Providing a detailed explanation in the schema documentation","Immediately notifying all clients via email","Replacing the field with a temporary placeholder"],correctAnswer:0},{id:2,text:"Why is it recommended to deprecate a field before removing it?",options:["To avoid immediate schema validation errors","To provide clients with time to migrate to the new schema","To enhance schema performance temporarily","To test the removal process in a staging environment"],correctAnswer:1},{id:3,text:"What is the best practice for handling arguments that cannot be deprecated directly in GraphQL?",options:["Removing the argument immediately and updating the resolver","Indicating the deprecation through the argument's description","Notifying clients to ignore the argument","Using schema validation to enforce the change"],correctAnswer:1},{id:4,text:"What is a key risk when removing a type that is part of a union or implements an interface?",options:["It will cause performance degradation","It cannot be documented properly","It may break queries that rely on the type","It requires changing the schema version"],correctAnswer:2},{id:5,text:"How can you minimize disruption when removing an argument from a GraphQL query?",options:["Immediately notify all clients","Provide a new query or field that does not use the argument","Deprecate the entire query","Change the schema version"],correctAnswer:1},{id:8,text:"What is the primary goal of providing a deprecation period before removing a schema element?",options:["To test the impact of the removal on server performance","To allow clients sufficient time to adjust their queries","To prepare the documentation for the change","To gradually phase out old schema versions"],correctAnswer:1}]}),"\n",(0,a.jsx)(t.h2,{id:"removing-without-breaking-the-subtraction-subterfuge",children:"Removing Without Breaking: The Subtraction Subterfuge"}),"\n",(0,a.jsxs)(t.p,{children:["In our ",(0,a.jsx)(t.a,{href:"/blog/graphql-schema-part-2-2",children:"previous post"}),", we explored how to modify existing schema elements without causing disruptions. Now, we'll tackle the most challenging part: removing schema elements and handling breaking changes."]}),"\n",(0,a.jsx)(t.h2,{id:"recap-of-additive-changes-and-modifications",children:"Recap of Additive Changes and Modifications"}),"\n",(0,a.jsxs)(t.p,{children:["In ",(0,a.jsx)(t.a,{href:"/blog/graphql-schema-part-2-1",children:"Part 2"}),", we focused on additive changes, emphasizing the importance of expanding your schema's capabilities without disrupting existing clients. By adding new fields, types, and arguments, you can enhance your API while maintaining backward compatibility."]}),"\n",(0,a.jsxs)(t.p,{children:["In ",(0,a.jsx)(t.a,{href:"/blog/graphql-schema-part-2-2",children:"Part 3"}),", we delved into modifying existing schema elements, discussing how to handle changes such as updating default values, transforming non-null fields to nullable, and changing field types. We highlighted the need for clear communication, providing transition paths, and leveraging schema design tools to minimize client disruptions."]}),"\n",(0,a.jsx)(t.h3,{id:"safe-dangerous-and-breaking-changes",children:"Safe, Dangerous, and Breaking Changes"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Safe Changes:"})," Additive changes such as adding new fields or types that do not affect existing queries or functionality."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Dangerous Changes:"})," Modifications that might not break the schema immediately but can cause subtle issues, such as changing default values or making non-nullable fields nullable."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Breaking Changes:"})," Changes that will definitely break existing queries and require clients to update their code, such as removing fields or changing field types."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"the-subtraction-subterfuge",children:"The Subtraction Subterfuge"}),"\n",(0,a.jsx)(t.p,{children:"Removing things from your schema is almost always a breaking change. If you remove a field, type, or argument, clients that depend on it will break. You can't just take things away without consequences."}),"\n",(0,a.jsx)(t.p,{children:"But sometimes, it's necessary. Here's how to do it without causing a riot."}),"\n",(0,a.jsx)(t.h3,{id:"the-field-farewell",children:"The Field Farewell"}),"\n",(0,a.jsx)(t.p,{children:"Let's say we want to remove a field because it's causing performance issues. Here's the smart way to do it:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Introduce a replacement"}),"\n",(0,a.jsx)(t.li,{children:"Deprecate the old field"}),"\n",(0,a.jsx)(t.li,{children:"Wait (patiently!)"}),"\n",(0,a.jsx)(t.li,{children:"Remove when usage has died down"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-diff",children:"type Query {\n-  products(first: Int!): [Product!]!\n+  products(first: Int!): [Product!]! @deprecated(reason: \u201cproducts is deprecated and is getting replaced by the field `topProducts`.\u201d)\n+  topProducts(first: Int!): [Product!]!\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["By introducing ",(0,a.jsx)(t.code,{children:"topProducts"})," and deprecating ",(0,a.jsx)(t.code,{children:"products"}),", we give our clients time to adapt. And hey, we've even improved our API in the process!"]}),"\n",(0,a.jsx)(t.p,{children:"The old field may be removed after a certain period and if the usage for it has gone down. Keep in mind you don\u2019t necessarily have to make the change unless absolutely needed. Additive changes and deprecations are sometimes enough to keep evolving the API."}),"\n",(0,a.jsx)(t.h3,{id:"the-argument-abandonment",children:"The Argument Abandonment"}),"\n",(0,a.jsx)(t.p,{children:"Removing an argument is similar to removing a field. You can deprecate it and"}),"\n",(0,a.jsx)(t.p,{children:"introduce a new field with the desired behavior. Clients will have time to migrate to the new field before the old one is removed."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-diff",children:"type Query {\n-  products(first: Int!, featured: Boolean): String!\n+  products(first: Int!, featured: Boolean): String! @deprecated(reason: \u201cproducts is deprecated, use `allProducts` for products and `featuredProducts` to get products that are featured\u201d)\n+  allProducts(first: Int!): String!\n+  featuredProducts(first: Int!): String!\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"If you need to make a change to an existing field, because arguments can\u2019t be deprecated just yet, you should indicate that the argument is deprecated through its description."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-diff",children:"type Query {\n- products(first: Int!, featured: Boolean): String!\n+  products(first: Int!,\n+  # DEPRECATED: This argument will be removed. Use query `featuredProducts`.\n+  featured: Boolean\n+   ): String!\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"the-type-deletion-dilemma",children:"The Type Deletion Dilemma"}),"\n",(0,a.jsx)(t.p,{children:"Sometimes, you need to remove an entire type from your schema. This is a major operation and requires careful planning."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"First, deprecate all fields that return this type:"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:'type Query {\n  oldUser(id: ID!): OldUser @deprecated(reason: "Use `user` query with new User type instead")\n  user(id: ID!): User\n}\n'})}),"\n",(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsx)(t.li,{children:"If the type is part of a union or implements an interface, you'll need to be extra cautious. These can't be easily deprecated, so clear communication is key."}),"\n",(0,a.jsx)(t.li,{children:"Finally, after a long deprecation period and when usage has dropped to zero, you can remove the type entirely."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Note that you might want to deprecate using that type within your codebase to avoid developers to use that User type for new fields. Removing a type is even trickier when it\u2019s part of union types or implements interfaces. Once again, union members and interface implementations cannot be marked as deprecated. This means that fields like node may stop working correctly if the type you\u2019re removing was reachable through that field."}),"\n",(0,a.jsx)(t.p,{children:"Your best bet in these cases are to either keep this type as part of unions and through interfaces or to communicate that change very carefully through descriptions and out of band communication like documentation and emails."}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(t.p,{children:"Removing schema elements is a delicate process that requires strategic planning and clear communication to avoid breaking changes. By following the principles and strategies outlined in this article, you can confidently remove fields, arguments, and types while minimizing disruption to your clients."}),"\n",(0,a.jsx)(t.p,{children:"Remember these key takeaways:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Deprecate Cautiously"}),": Use deprecation notices, schema descriptions, and out-of-band communication to keep your clients informed about upcoming changes."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Provide Transition Paths"}),": When breaking changes are necessary, offer clear migration paths. This might involve introducing new fields alongside deprecated ones or providing new query structures that achieve the same results."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Monitor Usage"}),": Keep an eye on usage metrics to determine when it's safe to remove deprecated elements. Don't rush the process \u2013 give your clients time to adapt.","\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["Tailcall supports a variety of integrations with monitoring tools to help you track usage metrics and make informed decisions about schema changes. you can check out our ",(0,a.jsx)(t.a,{href:"/docs/graphql-data-dog-telemetry-tailcall/",children:"documentation"})," for more information."]})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"By treating your GraphQL schema as a product with its own lifecycle and evolution strategy, you can build APIs that are both powerful and adaptable. This approach allows you to innovate rapidly while providing a stable and reliable service to your clients."}),"\n",(0,a.jsx)(t.p,{children:"Remember, a great GraphQL schema is never truly finished \u2013 it's a living, breathing entity that grows and evolves with your application's needs. Embrace this continuous evolution, and you'll create APIs that stand the test of time."})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},27502:(e,t,n)=>{n.d(t,{A:()=>h});var a=n(96540),i=n(84722);const r=(0,i.A)("Frown",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]),s=(0,i.A)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),o=(0,i.A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var l=n(6222),c=n(74848);const d=()=>(0,c.jsx)("svg",{className:"w-5 h-5 inline-block mr-2",viewBox:"0 0 24 24",fill:"currentColor",children:(0,c.jsx)("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),h=e=>{let{questions:t,title:n}=e;const[i,h]=(0,a.useState)(0),[u,m]=(0,a.useState)(0),[g,p]=(0,a.useState)(!1),[f,y]=(0,a.useState)(null);return(0,c.jsxs)("div",{className:"max-w-2xl mx-auto p-6 bg-gradient-to-r from-purple-100 to-blue-100 shadow-lg rounded-xl",children:[(0,c.jsxs)("h2",{className:"text-3xl font-bold mb-6 text-center text-gray-800",children:[n," Quiz!"]}),g?(0,c.jsxs)("div",{className:"text-center",children:[(0,c.jsxs)("p",{className:"text-2xl mb-4 font-semibold text-gray-700",children:["You scored ",u," out of ",t.length]}),u>3?(0,c.jsxs)("div",{className:"flex flex-col items-center",children:[(0,c.jsx)("p",{className:"text-5xl mb-4",children:"\ud83c\udf89"}),(0,c.jsx)("p",{className:"text-green-600 font-bold text-xl",children:"Congratulations! You're a GraphQL schema change expert!"})]}):(0,c.jsxs)("div",{className:"flex flex-col items-center",children:[(0,c.jsx)(r,{size:64,className:"text-red-500 mb-4"}),(0,c.jsx)("p",{className:"text-red-600 font-bold text-xl",children:"Keep learning about schema changes. You'll get there!"})]}),(0,c.jsx)("div",{className:"mt-6 space-y-3",children:(0,c.jsxs)("button",{onClick:()=>((e,t,n,a)=>{(0,l.p8)(a,"score","score shared");const i=`I scored ${t} out of ${n} on the ${a} Quiz! Test your knowledge too!`,r=document.location.href;let s="";"twitter"===e&&(s=`https://twitter.com/intent/tweet?text=${encodeURIComponent(i)}&url=${encodeURIComponent(r)}&via=tailcallhq`),window.open(s,"_blank")})("twitter",u,t.length,n),className:"w-full bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-md flex items-center justify-center",children:[(0,c.jsx)(d,{})," Share on X (Twitter)"]})}),(0,c.jsx)("button",{onClick:()=>{(0,l.p8)(n,"Click","reset Clicked"),h(0),m(0),p(!1),y(null)},className:"mt-6 bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors duration-300 shadow-md w-full",children:"Retry Quiz"})]}):(0,c.jsxs)("div",{children:[(0,c.jsxs)("p",{className:"mb-4 text-lg font-semibold text-gray-600",children:["Question ",i+1,"/",t.length]}),(0,c.jsx)("p",{className:"text-xl font-bold mb-6 text-gray-800",children:t[i].text}),(0,c.jsx)("div",{className:"space-y-3",children:t[i].options.map(((e,a)=>(0,c.jsxs)("button",{onClick:()=>{return e=a,(0,l.p8)(n,"Click","Answer Clicked"),y(e),e===t[i].correctAnswer&&m(u+1),void setTimeout((()=>{y(null);const e=i+1;e<t.length?h(e):p(!0)}),1e3);var e},className:"w-full text-left p-4 rounded-lg transition-all duration-300 "+(null===f?"bg-white hover:bg-gray-100 shadow-md":f===a?a===t[i].correctAnswer?"bg-green-500 text-white":"bg-red-500 text-white":"bg-white"),disabled:null!==f,children:[(0,c.jsx)("span",{className:"text-lg font-medium",children:e}),f===a&&(0,c.jsx)("span",{className:"float-right",children:a===t[i].correctAnswer?(0,c.jsx)(s,{className:"inline text-white",size:24}):(0,c.jsx)(o,{className:"inline text-white",size:24})})]},a)))})]})]})}},84722:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(96540);const i=(...e)=>e.filter(((e,t,n)=>Boolean(e)&&n.indexOf(e)===t)).join(" ");var r={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const s=(0,a.forwardRef)((({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:c,...d},h)=>(0,a.createElement)("svg",{ref:h,...r,width:t,height:t,stroke:e,strokeWidth:s?24*Number(n)/Number(t):n,className:i("lucide",o),...d},[...c.map((([e,t])=>(0,a.createElement)(e,t))),...Array.isArray(l)?l:[l]]))),o=(e,t)=>{const n=(0,a.forwardRef)((({className:n,...r},o)=>{return(0,a.createElement)(s,{ref:o,iconNode:t,className:i(`lucide-${l=e,l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,n),...r});var l}));return n.displayName=`${e}`,n}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(96540);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);