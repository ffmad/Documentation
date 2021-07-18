(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{100:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return u}));var n=o(3),r=o(7),a=(o(0),o(126)),i={title:"Voting with Tokens"},s={unversionedId:"wallets/counterwallet-tutorials/voting",id:"wallets/counterwallet-tutorials/voting",isDocsHomePage:!1,title:"Voting with Tokens",description:"Counterparty supports voting through user-created tokens, as well as broadcasting information onto the Bitcoin blockchain. This means that you can post the terms and options of your vote as a broadcast, and let users vote on its outcome with full transparency by using tokens.",source:"@site/docs/wallets/counterwallet-tutorials/voting.md",slug:"/wallets/counterwallet-tutorials/voting",permalink:"/Documentation/docs/wallets/counterwallet-tutorials/voting",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/wallets/counterwallet-tutorials/voting.md",version:"current",sidebar:"wallets",previous:{title:"Broadcast information on the Bitcoin blockchain",permalink:"/Documentation/docs/wallets/counterwallet-tutorials/broadcast"},next:{title:"Buy and sell assets (tokens) on the DEx using XCP",permalink:"/Documentation/docs/wallets/counterwallet-tutorials/buy-sell"}},c=[{value:"Monitoring votes",id:"monitoring-votes",children:[]}],l={toc:c};function u(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Counterparty supports voting through user-created tokens, as well as broadcasting information onto the Bitcoin blockchain. This means that you can post the terms and options of your vote as a broadcast, and let users vote on its outcome with full transparency by using tokens. "),Object(a.b)("p",null,"If you create an token (\u2018EXAMPLE\u2019), you can create any other tokens (such as EXAMPLEVOTE) and ",Object(a.b)("a",{parentName:"p",href:"/Documentation/docs/wallets/counterwallet-tutorials/pay-distribution"},"pay distributions")," of EXAMPLEVOTE to all holders of EXAMPLE in one single action."),Object(a.b)("p",null,"To send available votes to the holders of your asset, go to Counterwallet and click on your asset EXAMPLE, and then click pay distribution. Choose EXAMPLEVOTE as the currency to distribute. This way, all holders of EXAMPLE will receive EXAMPLEVOTE in the amount you specify."),Object(a.b)("p",null,"Now all you need are as many different Bitcoin addresses as there are choices in your poll. To cast their votes, holders of EXAMPLE can then send the EXAMPLEVOTE they have received to whichever choice(s) they agree with. The results of the poll will be public and verifiable thanks to the Bitcoin blockchain."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Example:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'10 users own the token "EXAMPLE".'),Object(a.b)("li",{parentName:"ul"},"You make a distribution payment of EXAMPLEVOTE."),Object(a.b)("li",{parentName:"ul"},"Now each of the 10 users receives EXAMPLEVOTE proportionally to their holdings of EXAMPLE."),Object(a.b)("li",{parentName:"ul"},"You create a address for each option of the vote."),Object(a.b)("li",{parentName:"ul"},"You create a broadcast from the issuance address, describing the vote, the choices, and the addresses which represent the choices.")),Object(a.b)("p",null,"It may be a good idea to create burn addresses for this purpose (addresses where the private key is not known). This way, the votes cannot be recycled or moved. This can be done with a ",Object(a.b)("a",{parentName:"p",href:"https://gist.github.com/CoinWhisperer/6d673f1f3d13da1611cd"},"simple python script")),Object(a.b)("h3",{id:"monitoring-votes"},"Monitoring votes"),Object(a.b)("p",null,"If you want to get info about your votes, or other polls, you can use the voting page on the block explorer ",Object(a.b)("a",{parentName:"p",href:"http://blockscan.com/votes"},"Blockscan"),". "),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"For ",Object(a.b)("a",{parentName:"strong",href:"http://blockscan.com/vote/FLDCVOTEI"},"example"),":")),Object(a.b)("p",null,Object(a.b)("img",{src:o(216).default})))}u.isMDXComponent=!0},126:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return h}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(o),d=n,h=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return o?r.a.createElement(h,s(s({ref:t},l),{},{components:o})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},216:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/voting_with_tokens1-d82d5953a059b0fbab105537ae639bbe.png"}}]);