(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return p}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=d(n),u=a,p=h["".concat(i,".").concat(u)]||h[u]||b[u]||r;return n?o.a.createElement(p,s(s({ref:t},l),{},{components:n})):o.a.createElement(p,s({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),r=(n(0),n(126)),i={title:"Enhanced Asset Info"},s={unversionedId:"basics/assets/enhanced-asset",id:"basics/assets/enhanced-asset",isDocsHomePage:!1,title:"Enhanced Asset Info",description:"When initially setting or changing your asset's (token's) description, you can enable enhanced functionality (such as an token image and a longer description) by providing a URL to a specially formatted .json file (e.g. http://www.mydomain.com/foo.json) as the description. This allows the token owner to provide enhanced information to the token's holders, and enhances the user experience for these holders for wallet implementations that support this spec.",source:"@site/docs/basics/assets/enhanced-asset.md",slug:"/basics/assets/enhanced-asset",permalink:"/Documentation/docs/basics/assets/enhanced-asset",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/basics/assets/enhanced-asset.md",version:"current",sidebar:"basics",previous:{title:"Understanding assets on Counterparty",permalink:"/Documentation/docs/basics/assets/counterparty-assets"},next:{title:"Enhanced Feed Info",permalink:"/Documentation/docs/basics/assets/enhanced-feed"}},c=[{value:"Token Info URL format",id:"token-info-url-format",children:[]},{value:"Token Info JSON format",id:"token-info-json-format",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Other Topics",id:"other-topics",children:[{value:"Validity and refreshing",id:"validity-and-refreshing",children:[]},{value:"Validating your JSON data",id:"validating-your-json-data",children:[]}]}],l={toc:c};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"When initially setting or changing your asset's (token's) description, you can enable enhanced functionality (such as an token image and a longer description) by providing a URL to a specially formatted .json file (e.g. ",Object(r.b)("a",{parentName:"p",href:"http://www.mydomain.com/foo.json"},"http://www.mydomain.com/foo.json"),") as the description. This allows the token owner to provide enhanced information to the token's holders, and enhances the user experience for these holders for wallet implementations that support this spec."),Object(r.b)("h2",{id:"token-info-url-format"},"Token Info URL format"),Object(r.b)("p",null,"The URL itself in the broadcast text field must conform to the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Must fully fit within the text field space allowed"),Object(r.b)("li",{parentName:"ul"},'May or may not start with "http://" or "https://". If the URL does not start with either, "http://" is assumed'),Object(r.b)("li",{parentName:"ul"},'Must end with ".json"'),Object(r.b)("li",{parentName:"ul"},'It is recommended that the server return the JSON data with the correct MIME type set (e.g. "application/json")'),Object(r.b)("li",{parentName:"ul"},"A HTTP 200 response code must be returned (redirects, e.g. 301, 302, etc. are not allowed)")),Object(r.b)("h2",{id:"token-info-json-format"},"Token Info JSON format"),Object(r.b)("p",null,"The JSON object/mapping the URL points to must contain the following data:"),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("b",null,"asset")),Object(r.b)("td",null,"Required"),Object(r.b)("td",null,"The name of the token. Must match your token's name exactly. 24 characters max.")),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("b",null,"description")),Object(r.b)("td",null,"Optional"),Object(r.b)("td",null,"A longish description about this token. 2048 characters max.")),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("b",null,"image")),Object(r.b)("td",null,"Optional"),Object(r.b)("td",null,'A link a 48x48 PNG image to represent the token on the leaderboard and portfolio views. The text itself must be a valid URL that starts with "http://" or "https://" (100 characters max). The image the URL references must be in PNG format (the URL must end in .png). It must be 48x48, and it must use the RGB or RGBA color palette. If any of these are not correct, the system will reject it.')),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("b",null,"website")),Object(r.b)("td",null,"Optional"),Object(r.b)("td",null,'A link to the website for the token. 100 characters max. Must be a valid URL that starts with "http://" or "https://"')),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("b",null,"pgpsig")),Object(r.b)("td",null,"Optional"),Object(r.b)("td",null,'A link to a pgp signature text/file that will or can be used to sign messages by the issuer of this token. 100 characters max. Must be a valid URL that starts with "http://" or "https://"'))),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("p",null,"Here's an example for a token called ",Object(r.b)("b",null,"MYTOKEN"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'    { \n        "asset": "MYTOKEN",\n        "description": "This is a description of MYTOKEN",\n        "image": "http://www.mysite.com/mytoken.png", \n        "website": "http://www.mysite.com",\n        "pgpsig": "http://www.mysite.com/MYTOKEN.pgp"\n    }\n')),Object(r.b)("h2",{id:"other-topics"},"Other Topics"),Object(r.b)("h3",{id:"validity-and-refreshing"},"Validity and refreshing"),Object(r.b)("p",null,"Every 30-60 minutes, the Counterwallet system will query this URL provided to validate and fetch the necessary information. If the information you provided is reachable and valid (within a 1 second response time), your token's information will be enhanced based on this data.\nIn order for this data file to be deemed as valid for a specific token/asset, there must have been either an initial issuance, or a description change transaction for that asset, and the text field of that description must have been set to the URL of this JSON file. If the information you provided is reachable and valid (within a 5 second response time), your token's information will be enhanced based on this data. If it is not, counterblockd will retry up to 2 additional times, over the next 30 or so minutes, and then give up until another transaction is made that changes the description field (it may be to the same URL, but another description change transaction is necessary to reinitialize the validity check by counterblockd)."),Object(r.b)("h3",{id:"validating-your-json-data"},"Validating your JSON data"),Object(r.b)("p",null,"Your JSON data must respect and validate against ",Object(r.b)("a",{parentName:"p",href:"https://raw.githubusercontent.com/CounterpartyXCP/counterblock/master/counterblock/schemas/asset.schema.json"},"this")," JSON schema.\nIf the validation fails on any level, counterblockd will not accept the\ndata."),Object(r.b)("p",null,"To check your data against this schema, go ",Object(r.b)("a",{parentName:"p",href:"http://json-schema-validator.herokuapp.com/"},"here"),". Paste the schema\nfrom the link above into the ",Object(r.b)("strong",{parentName:"p"},"Schema")," field, and place your example\noutput into the ",Object(r.b)("strong",{parentName:"p"},"Data")," field. Then click the ",Object(r.b)("strong",{parentName:"p"},"Validate")," button"))}d.isMDXComponent=!0}}]);