(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{157:function(e,t,a){"use strict";a.r(t),a.d(t,"postBySlugQuery",function(){return s});a(95);var r=a(0),n=a.n(r),o=a(167),i=a(166),l=a(164);t.default=function(e){var t=e.data.markdownRemark;return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,{title:t.frontmatter.title,keywords:t.frontmatter.keywords?t.frontmatter.keywords.split(", "):[]}),n.a.createElement(i.a,null,n.a.createElement(o.a,{data:t})))};var s="4046134760"},160:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var r=a(0),n=a.n(r),o=a(5),i=a.n(o),l=a(39),s=a.n(l);a.d(t,"a",function(){return s.a});a(161);var c=n.a.createContext({});function m(e){var t=e.staticQueryData,a=e.data,r=e.query,o=e.render,i=a?a.data:t[r]&&t[r].data;return n.a.createElement(n.a.Fragment,null,i&&o(i),!i&&n.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,r=e.render,o=e.children;return n.a.createElement(c.Consumer,null,function(e){return n.a.createElement(m,{data:t,query:a,render:r||o,staticQueryData:e})})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},161:function(e,t,a){var r;e.exports=(r=a(162))&&r.default||r},162:function(e,t,a){"use strict";a.r(t);a(40);var r=a(0),n=a.n(r),o=a(5),i=a.n(o),l=a(64),s=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Phoebe Hong"}}}}},164:function(e,t,a){"use strict";var r=a(165),n=a(0),o=a.n(n),i=a(5),l=a.n(i),s=a(171),c=a.n(s);function m(e){var t=e.description,a=e.lang,n=e.meta,i=e.keywords,l=e.title,s=r.data.site,m=t||s.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:l},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:m}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(n)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=m},165:function(e){e.exports={data:{site:{siteMetadata:{title:"Phoebe Hong",description:"phoebehong.com",author:"@phoebejhhong"}}}}},166:function(e,t,a){"use strict";var r=a(163),n=a(0),o=a.n(n),i=a(5),l=a.n(i),s=a(160),c=a(168),m=a.n(c),d=function(e){var t=e.siteTitle;return o.a.createElement("header",{style:{background:"\n        radial-gradient(ellipse at bottom left, #019D93, transparent),\n        radial-gradient(ellipse at top left, #E863A2, transparent),\n        radial-gradient(ellipse at top right, #F89B60, transparent),\n        radial-gradient(ellipse at bottom right, #1885D8, transparent)\n      ",backgroundSize:"100% 15rem",backgroundColor:"white",marginBottom:"1.45rem",height:"15rem",borderBottom:"1px solid black"}},o.a.createElement("div",{style:{margin:"0 auto",padding:"7rem 0 4rem 0"}},o.a.createElement("span",{className:m.a.badge+" "+m.a.badgeTop},o.a.createElement("span",{role:"img","aria-label":"wave"},"👋")," welcome to"),o.a.createElement("h1",{className:m.a.title},o.a.createElement(s.a,{to:"/",style:{color:"black",textDecoration:"none",padding:"0.5rem 1rem",border:"2px solid black",boxShadow:"4px 4px black",fontStyle:"italic",textTransform:"uppercase",fontFamily:"roboto"}},t)),o.a.createElement("span",{className:m.a.badge+" "+m.a.badgeBottom},"'s website ",o.a.createElement("span",{role:"img","aria-label":"home"},"🏡"))))};d.propTypes={siteTitle:l.a.string},d.defaultProps={siteTitle:""};var u=d,p=(a(169),a(170),function(e){var t=e.children;return o.a.createElement(s.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=EB+Garamond:400,700|Roboto:400,700",rel:"stylesheet"}),o.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},o.a.createElement("main",null,t)),o.a.createElement("footer",{style:{textAlign:"center",marginBottom:"2rem"}},o.a.createElement("small",null,"built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org",target:"_blank",rel:"noopener noreferrer"},"gatsby"),o.a.createElement("span",{style:{margin:"0 0.5rem"}}," | "),"view"," ",o.a.createElement("a",{href:"https://github.com/phoebejhhong/phoebejhhong.github.io/tree/develop",target:"_blank",rel:"noopener noreferrer"},"code"))))},data:r})});p.propTypes={children:l.a.node.isRequired};t.a=p},167:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(160),i=a(5),l=a.n(i),s=a(172),c=a.n(s),m=function(e){var t=e.data;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:c.a.titleWrapper},n.a.createElement(o.a,{to:t.frontmatter.slug,className:c.a.title},n.a.createElement("h1",null,t.frontmatter.title)),n.a.createElement("span",{className:c.a.date},t.frontmatter.date)),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}))};t.a=m,m.propTypes={data:l.a.object}}}]);
//# sourceMappingURL=component---src-components-post-page-js-4017fe5dfaf6839436c9.js.map