(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),p=o,f=d["".concat(i,".").concat(p)]||d[p]||b[p]||a;return n?r.a.createElement(f,s(s({ref:t},u),{},{components:n})):r.a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var o=n(3),r=n(7),a=(n(0),n(126)),i={title:"Some use cases"},s={unversionedId:"basics/assets/use-cases",id:"basics/assets/use-cases",isDocsHomePage:!1,title:"Some use cases",description:"Below are just a few of the many uses of assets, feel free to propose new uses if you find them.",source:"@site/docs/basics/assets/use-cases.md",slug:"/basics/assets/use-cases",permalink:"/Documentation/docs/basics/assets/use-cases",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/basics/assets/use-cases.md",version:"current",sidebar:"basics",previous:{title:"Enhanced Feed Info",permalink:"/Documentation/docs/basics/assets/enhanced-feed"},next:{title:"Frequently Asked Questions",permalink:"/Documentation/docs/basics/faq/general"}},c=[{value:"Betting",id:"betting",children:[]},{value:"Tickets &amp; Coupons",id:"tickets--coupons",children:[]},{value:"Token Controlled Access (TCA)",id:"token-controlled-access-tca",children:[]},{value:"Proof of Publication",id:"proof-of-publication",children:[]},{value:"Crowdfunding",id:"crowdfunding",children:[]},{value:"Derivatives",id:"derivatives",children:[]},{value:"In-game Currency",id:"in-game-currency",children:[]},{value:"Altcoin Migration",id:"altcoin-migration",children:[]},{value:"Verifiable Voting",id:"verifiable-voting",children:[]}],u={toc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Below are just a few of the many uses of assets, feel free to propose new uses if you find them."),Object(a.b)("h2",{id:"betting"},"Betting"),Object(a.b)("p",null,"Counterparty turns the Bitcoin blockchain into a betting platform and prediction market. Oracles can create broadcasts of information, and users can then place bets on these broadcasts. Funds are escrowed automatically by the protocol, and benefit from being stored securely inside the Bitcoin blockchain. Funds placed on bets are be provably inaccessible until the bet is resolved or expires. Oracles can set a fee fraction to receive for their betting feeds, providing incentive to run their broadcasts."),Object(a.b)("h2",{id:"tickets--coupons"},"Tickets & Coupons"),Object(a.b)("p",null,"Assets can be used as tickets to a music event, parking tickets, coupons, etc."),Object(a.b)("h2",{id:"token-controlled-access-tca"},"Token Controlled Access (TCA)"),Object(a.b)("p",null,"Token Controlled Access is the idea of granting access to private forums, chatrooms, games, projects or other social media based on the ownership of tokens. Different types of tokens represent different types of membership, and holders of that token can register and/or view the restricted content. To invite new users, smaller fractions of these tokens can be transfered. If the token is indivisible and scarce, it will limit the amount of users others are able to invite. These tokens are also publicly tradable on the DEX and therefore can have a monetary value, and/or one proportional to other types of these tokens."),Object(a.b)("h2",{id:"proof-of-publication"},"Proof of Publication"),Object(a.b)("p",null,"Using broadcasts, users can publish timestamped information onto the Bitcoin blockchain. This makes it possible to verifiy that something has been posted at a certain time, and it cannot be deleted."),Object(a.b)("h2",{id:"crowdfunding"},"Crowdfunding"),Object(a.b)("p",null,"Counterparty assets can be used for crowdfunding. You can issue a certain amount of assets and sell these to start your project. Due to the high amount of trust involved, it is better to use a Counterparty-based crowdfunding platform which can perform due-diligence on your project. This will provide your users trust, and demonstrate the legitimacy of your project. There is nothing stopping you from doing this on your own, but users may rightfully be suspicious about your project."),Object(a.b)("h2",{id:"derivatives"},"Derivatives"),Object(a.b)("p",null,"You can back Counterparty assets with tangible goods, such as gold."),Object(a.b)("h2",{id:"in-game-currency"},"In-game Currency"),Object(a.b)("p",null,"To integrate your multiplayer game into the global economy, Counterparty assets can also be used as in-game currency."),Object(a.b)("h2",{id:"altcoin-migration"},"Altcoin Migration"),Object(a.b)("p",null,"If you have an altcoin that seeks to fulfill a specific purpose, but do not wish to continue mining, you can migrate it to Counterparty with proof-of-burn."),Object(a.b)("h2",{id:"verifiable-voting"},"Verifiable Voting"),Object(a.b)("p",null,"Counterparty supports voting through the use of user-created tokens. This means that you can post the terms and options of your vote as a broadcast, and let users vote on its outcome with full transparency by using tokens."),Object(a.b)("p",null,"If you create a token (",Object(a.b)("inlineCode",{parentName:"p"},"EXAMPLE"),"), you can create any other tokens (such as EXAMPLEVOTE) and pay distributions of EXAMPLEVOTE to all holders of ",Object(a.b)("inlineCode",{parentName:"p"},"EXAMPLE")," in one single action. Create a distribution payment and choose EXAMPLEVOTE as the currency to distribute. This way, all holders of ",Object(a.b)("inlineCode",{parentName:"p"},"EXAMPLE")," will receive EXAMPLEVOTE in the amount you specify."),Object(a.b)("p",null,"Now all you need are as many different Bitcoin addresses as there are choices in your poll. For example: one Bitcoin address for yes, one for no. To cast their votes, holders of ",Object(a.b)("inlineCode",{parentName:"p"},"EXAMPLE")," can then send the EXAMPLEVOTE they have received to whichever address they agree with. The results of the poll will then be public and verifiable on the Bitcoin blockchain, and can be visualized in a ",Object(a.b)("a",{parentName:"p",href:"https://xchain.io"},"block explorer"),"."))}l.isMDXComponent=!0}}]);