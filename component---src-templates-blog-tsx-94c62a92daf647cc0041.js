(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{153:function(e,t,a){"use strict";a.r(t);a(83),a(55);var i=a(0),n=a.n(i),r=a(42),o=a(155),s=a.n(o),l=a(163),d=a(162),c=a(172),A=a(154),u=A.b.div.withConfig({displayName:"pagination__Pagination",componentId:"sc-1e5n4vi-0"})(["display:block;margin:0 0 50px;padding-top:20px;border-top:1px solid #ccc;"]),f=A.b.span.withConfig({displayName:"pagination__PaginationItem",componentId:"sc-1e5n4vi-1"})(["margin-right:10px;display:inline-block;font-size:14px;&:hover{text-decoration:underline;}",";"],function(e){return"right"===e.position&&Object(A.a)(["float:right;"])}),p=function(e){var t=e.nextPagePath,a=e.previousPagePath;return t||a?n.a.createElement(u,null,n.a.createElement(f,{position:"right"},t&&n.a.createElement(r.Link,{to:t},"Next Page")),n.a.createElement(f,{position:"left"},a&&n.a.createElement(r.Link,{to:a},"Previous Page"))):null},g=a(166),h=a(174);a(175);a.d(t,"pageQuery",function(){return m});t.default=function(e){var t=e.data.allMdx,a=e.pageContext,i=a.pagination,o=a.activeCategory,A=i.page,u=i.nextPagePath,f=i.previousPagePath,m=A.map(function(e){return t.edges.find(function(t){return t.node.id===e})}),E=m[0],b=Object(l.oc)(E).node.frontmatter.banner.childImageSharp.sizes();return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{active:o||"home"}),n.a.createElement(d.a,{title:"Blog",image:b?b.src:null},n.a.createElement(g.a,{size:8}),m.map(function(e){if(e){var t=e.node,a=Object(l.oc)(t).frontmatter.banner.childImageSharp.sizes();return n.a.createElement("div",{key:t.id},a?n.a.createElement(r.Link,{to:t.fields.url},n.a.createElement(s.a,{sizes:a})):null,n.a.createElement("h2",null,n.a.createElement(r.Link,{to:t.fields.url},t.fields.title)),n.a.createElement(h.a,null,t.fields.date),n.a.createElement("p",null,t.excerpt),n.a.createElement(r.Link,{to:t.fields.url},n.a.createElement(h.a,null,"Continue Reading")),n.a.createElement(g.a,{size:8}))}}),n.a.createElement(p,{nextPagePath:u,previousPagePath:f})))};var m="632069240"},155:function(e,t,a){"use strict";var i=a(19);t.__esModule=!0,t.default=void 0;var n,r=i(a(7)),o=i(a(43)),s=i(a(80)),l=i(a(81)),d=i(a(0)),c=i(a(2)),A=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},u={},f=function(e){var t=A(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!u[a]||(u[a]=!0,!1)},p=[];var g=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),p.push([e,t])},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",r=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+n+"<img "+s+l+t+o+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=d.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,n=e.onError,r=(0,s.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},r,{onLoad:i,onError:n,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});m.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var E=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,n=!0,r=!1,s=t.fadeIn,l=f(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,n=!1,r=!0),"undefined"==typeof window&&(i=!1,n=!1),t.critical&&(i=!0,n=!1,r=!1);var c=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:n,IOSupported:r,fadeIn:s,hasNoScript:c,seenBefore:l},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e,t=A(this.props),a=t.title,i=t.alt,n=t.className,r=t.style,o=void 0===r?{}:r,s=t.imgStyle,c=void 0===s?{}:s,u=t.placeholderStyle,f=void 0===u?{}:u,p=t.fluid,g=t.fixed,E=t.backgroundColor,b=t.Tag;e="boolean"==typeof E?"lightgray":E;var v=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},c,f),y=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},c);if(p){var w=p;return d.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/w.aspectRatio+"%"}}),w.base64&&d.default.createElement(m,{alt:i,title:a,src:w.base64,style:v}),w.tracedSVG&&d.default.createElement(m,{alt:i,title:a,src:w.tracedSVG,style:v}),e&&d.default.createElement(b,{title:a,style:{backgroundColor:e,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,w.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:w.srcSetWebp,sizes:w.sizes}),d.default.createElement("source",{srcSet:w.srcSet,sizes:w.sizes}),d.default.createElement(m,{alt:i,title:a,src:w.src,style:y,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:i,title:a},w))}}))}if(g){var x=g,S=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},o);return"inherit"===o.display&&delete S.display,d.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:S,ref:this.handleRef},x.base64&&d.default.createElement(m,{alt:i,title:a,src:x.base64,style:v}),x.tracedSVG&&d.default.createElement(m,{alt:i,title:a,src:x.tracedSVG,style:v}),e&&d.default.createElement(b,{title:a,style:{backgroundColor:e,width:x.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:x.height}}),this.state.isVisible&&d.default.createElement("picture",null,x.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),d.default.createElement("source",{srcSet:x.srcSet,sizes:x.sizes}),d.default.createElement(m,{alt:i,title:a,width:x.width,height:x.height,src:x.src,style:y,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:i,title:a,width:x.width,height:x.height},x))}}))}return null},t}(d.default.Component);E.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),v=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});E.propTypes={resolutions:b,sizes:v,fixed:b,fluid:v,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,Tag:c.default.string};var y=E;t.default=y},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Daniel Husar",description:"Product engineer based in San Francisco",keywords:"blog,javascript,react"}}}}},157:function(e,t,a){},160:function(e,t,a){},162:function(e,t,a){"use strict";var i=a(156),n=a(0),r=a.n(n),o=a(168),s=a.n(o),l=a(42),d=a(154).b.div.withConfig({displayName:"container",componentId:"sc-1msagjs-0"})(["margin:0 auto;padding:0 40px;max-width:1000px;@media (max-width:600px){padding:0 20px;}"]);a(157),a(160),t.a=function(e){var t=e.children,a=e.title,n=e.description,o=e.image;return r.a.createElement(l.StaticQuery,{query:"2520125950",render:function(e){var i=e.site.siteMetadata,l=i.title,c=i.description,A=i.keywords;return l=a?a+" | "+l:l,c=n||c,r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{title:l},r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{name:"description",content:c}),r.a.createElement("meta",{name:"keywords",content:A}),r.a.createElement("meta",{property:"og:title",content:"Customer Messaging Platform | Intercom"}),r.a.createElement("meta",{property:"og:description",content:c}),o?r.a.createElement("meta",{property:"og:image",content:o}):null),r.a.createElement(d,null,t))},data:i})}},163:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.oc=function e(t){return new Proxy(e=>void 0!==t?t:e,{get:(t,a)=>{const i=t();return"object"!=typeof i?e():e(i[a])}})}},164:function(e,t,a){"use strict";a(165)("fixed",function(e){return function(){return e(this,"tt","","")}})},165:function(e,t,a){var i=a(6),n=a(20),r=a(31),o=/"/g,s=function(e,t,a,i){var n=String(r(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(i).replace(o,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),i(i.P+i.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},166:function(e,t,a){"use strict";var i=a(154);t.a=i.b.div.withConfig({displayName:"spacer",componentId:"sc-1oxxnvt-0"})(["display:block;",";"],function(e){return Object(i.a)(["height:","px;"],10*e.size)})},172:function(e,t,a){"use strict";a(164);var i=a(173),n=a(0),r=a.n(n),o=a(42),s=a(155),l=a.n(s),d=a(154),c=d.b.div.withConfig({displayName:"nav__Nav",componentId:"vg6bhf-0"})(["display:flex;align-items:center;position:absolute;top:5px;left:5px;"]),A=d.b.div.withConfig({displayName:"nav__NavItem",componentId:"vg6bhf-1"})(["margin-right:10px;display:inline-block;font-size:14px;&:hover{text-decoration:underline;}",";"],function(e){return e.active&&Object(d.a)(["text-decoration:underline;"])}),u=d.b.div.withConfig({displayName:"nav__NavPortrait",componentId:"vg6bhf-2"})(["overflow:hidden;border-radius:5px;height:30px;"]);t.a=function(e){var t=e.active;return r.a.createElement(o.StaticQuery,{query:"469129957",render:function(e){return r.a.createElement(c,null,r.a.createElement(A,{active:!1},r.a.createElement(o.Link,{to:"/","aria-label":"About me"},e.portrait.childImageSharp&&e.portrait.childImageSharp.fixed?r.a.createElement(u,null,r.a.createElement(l.a,{fixed:e.portrait.childImageSharp.fixed,alt:"My portrait",fadeIn:!1})):null)),r.a.createElement(A,{active:"home"===t},r.a.createElement(o.Link,{to:"/blog"},"Index")))},data:i})}},173:function(e){e.exports={data:{portrait:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIEAQP/xAAWAQEBAQAAAAAAAAAAAAAAAAABAwL/2gAMAwEAAhADEAAAAcnV5bYwV7yvg3I2/8QAHBAAAgIDAQEAAAAAAAAAAAAAAQIREgADMwQj/9oACAEBAAEFAqkssqqsYV/kGtqgzE4oqLTnr7DNfP8A/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEP/aAAgBAwEBPwHGKT//xAAXEQEBAQEAAAAAAAAAAAAAAAAAAQIR/9oACAECAQE/AXGVr//EAB0QAAICAgMBAAAAAAAAAAAAAAERACECEDFBcZH/2gAIAQEABj8CJH2WKPerKfESqFVBhlFGFvHyf//EABwQAQADAAMBAQAAAAAAAAAAAAEAESExUWEQQf/aAAgBAQABPyG/dBviajXUSdXuxhXj9Iz7LtZbYRdVcXpIGeQAN0QQ4L3Fmcvjf//aAAwDAQACAAMAAAAQ4PNN/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQARIRD/2gAIAQMBAT8QA2+GmYz/xAAYEQEBAQEBAAAAAAAAAAAAAAABEQAQMf/aAAgBAgEBPxCPnLEs1W7/xAAeEAEAAwACAgMAAAAAAAAAAAABABEhMUFRwWFxgf/aAAgBAQABPxC7BV17fkIQMJKHkhFsPTiEY8lgFGN+devmXl5dAAj3nniFdAwlZUEboe7vQjk6aF89/cq6EedPNeow49vqbC8xVRmJ/9k=",width:30,height:30,src:"/static/portrait-a54dc04e5b0a2e3f0e25023129808a28-f7990.jpeg",srcSet:"/static/portrait-a54dc04e5b0a2e3f0e25023129808a28-f7990.jpeg 1x,\n/static/portrait-a54dc04e5b0a2e3f0e25023129808a28-7862f.jpeg 1.5x,\n/static/portrait-a54dc04e5b0a2e3f0e25023129808a28-0a2ed.jpeg 2x,\n/static/portrait-a54dc04e5b0a2e3f0e25023129808a28-9e3e1.jpeg 3x"}}}}}},174:function(e,t,a){"use strict";var i=a(154);t.a=i.b.div.withConfig({displayName:"small",componentId:"kmfmfp-0"})(["font-size:14px;color:#8e7979;"])},175:function(e,t){}}]);
//# sourceMappingURL=component---src-templates-blog-tsx-94c62a92daf647cc0041.js.map