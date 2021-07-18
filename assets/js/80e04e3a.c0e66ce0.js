(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),o=(a(0),a(126)),s={title:"Buy and sell assets (tokens) on the DEx using XCP"},l={unversionedId:"wallets/counterwallet-tutorials/buy-sell",id:"wallets/counterwallet-tutorials/buy-sell",isDocsHomePage:!1,title:"Buy and sell assets (tokens) on the DEx using XCP",description:'This tutorial takes you through the process of buying and consequently selling a Counterparty-issued asset (or token/coin) from Counterwallet. By "Counterparty-issued" we mean "issued on the Counterparty platform by its users" as the Counterparty Project does not issue assets (XCP is the only asset that was issued by the Project).',source:"@site/docs/wallets/counterwallet-tutorials/buy-sell.md",slug:"/wallets/counterwallet-tutorials/buy-sell",permalink:"/Documentation/docs/wallets/counterwallet-tutorials/buy-sell",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/wallets/counterwallet-tutorials/buy-sell.md",version:"current",sidebar:"wallets",previous:{title:"Voting with Tokens",permalink:"/Documentation/docs/wallets/counterwallet-tutorials/voting"},next:{title:"Creating an Armory Offline Wallet for Cold Storage",permalink:"/Documentation/docs/wallets/counterwallet-tutorials/create-armory-addresses"}},i=[{value:"Buy",id:"buy",children:[]},{value:"Sell",id:"sell",children:[]}],c={toc:i};function u(e){var t=e.components,s=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'This tutorial takes you through the process of buying and consequently selling a Counterparty-issued asset (or token/coin) from Counterwallet. By "Counterparty-issued" we mean "issued on the Counterparty platform by its users" as the Counterparty Project does not issue assets (XCP is the only asset that was issued by the Project).'),Object(o.b)("p",null,"First, let's summarize how things work:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"All Counterparty assets can be traded on the Counterparty Decentralized Exchange and most Counterwallet sellers denominate their asset in XCP. \xa0It is possible, but rare, to sell your asset A for another asset B, although that may be interesting in some cases. Some main advantages of decentralized crypto-exchanges are obviously decentralization (no counterparty risk) and a lower cost of filled orders.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Some popular Counterparty-listed assets are available on traditional (centralized) crypto-exchanges such as Poloniex and MasterXchange where they are usually available denominated in BTC. This article covers only the DEx, but just so that you know the same asset can be traded on the DEx (usually denominated in XCP) and externally (usually denominated in BTC). Some advantages of centralized crypto-exchanges include the speed of trading and usually a better liquidity.\xa0")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In order to buy an XCP-denominated asset, the user needs to complete the following steps:"))),Object(o.b)("p",null,"a) Create a wallet if you already don't have one (this one is easy, but make absolutely sure to write down your pass phrase). In case you'd like to practice first, there is a testnet (a network with \"fake\" (test) assets) wallet (",Object(o.b)("a",{parentName:"p",href:"https://testnet.counterwallet.co/"},"link"),") where you can open two wallets and practice without any risk or cost - see\xa0",Object(o.b)("a",{parentName:"p",href:"https://counterpartytalk.org/t/what-do-i-need-to-start-using-counterwallet/1156"},"What do I need to start using Counterwallet"),". It is simpler, more reliable, faster and more secure to use Counterwallet in the private browsing mode (in Chrome, CTRL+SHIFT+N, in Firefox, CTRL+SHIFT+P) which disables extensions/addons (see\xa0",Object(o.b)("a",{parentName:"p",href:"https://counterpartytalk.org/t/what-precautions-and-best-practices-can-i-use-for-counterwallet/1165"},"this for additional security-related"),"\xa0ideas)."),Object(o.b)("p",null,"b) Buy some XCP on a and send XCP\xa0",Object(o.b)("a",{parentName:"p",href:"https://counterpartytalk.org/t/why-do-i-need-small-amounts-of-bitcoin-to-do-things/1142"},"and a small amount of BTC"),"\xa0(e.g. 0.01) to your wallet address."),Object(o.b)("p",null,"c) Understand the fees (see\xa0",Object(o.b)("a",{parentName:"p",href:"https://counterpartytalk.org/t/what-is-the-difference-between-total-and-real-estimated-total-when-placing-an-order/1178"},"What is the difference between Total and Real Estimated Total when placing an order?"),"\xa0and\xa0",Object(o.b)("a",{parentName:"p",href:"https://counterpartytalk.org/t/what-is-the-difference-between-miners-fee-and-redeemable-fee/1188"},"What is the difference between 'miner's fee' and 'redeemable fee'?"),"), and\xa0",Object(o.b)("a",{parentName:"p",href:"https://counterpartytalk.org/t/how-to-recognize-fraudulent-counterparty-assets/1170"},"how to recognize fake (fraudulent) assets"),")"),Object(o.b)("p",null,"d) Place a buy order on the DEx. If your offer gets matched within the duration of your order, your it will be settled. Otherwise it'll fail. \xa0In case you change your mind or prices change, you can\xa0",Object(o.b)("strong",{parentName:"p"},"cancel\xa0"),"your order before it expires (see\xa0",Object(o.b)("a",{parentName:"p",href:"https://counterpartytalk.org/t/when-is-a-dex-order-considered-active-and-how-can-i-cancel-it/1180"},'When is an order considered "active" and how can I cancel it?'),")"),Object(o.b)("p",null,"Now that we covered the basics, let's walk through buy and sell scenarios."),Object(o.b)("p",null,"Before we move on let's remind ourselves that the default order validity (which can be changed in Counterwallet\xa0",Object(o.b)("strong",{parentName:"p"},"Settings"),"\xa0and which does not persist between logons) is 1000 blocks of the Bitcoin blockchain, so if you trade in unstable assets you may want to change that to a lower value or even switch to a centralized crypto-exchange where it normally doesn't cost anything to place (and cancel) an order. See KB articles under 3d (above) for additional details."),Object(o.b)("h3",{id:"buy"},"Buy"),Object(o.b)("p",null,"In Counterwallet's left-hand menu find\xa0",Object(o.b)("strong",{parentName:"p"},"Exchange ",">"," Markets"),". If you're after a popular asset, you may already see it among\xa0",Object(o.b)("strong",{parentName:"p"},"Top Pairs"),". Make sure you get the correct asset name(s)."),Object(o.b)("p",null,"If not, move to the right and under\xa0",Object(o.b)("strong",{parentName:"p"},"Select Another Pair\xa0"),"start typing the asset (token) name you're interested in. As you type Counterwallet will list available assets to save you time. Default unit of denomination is\xa0",Object(o.b)("strong",{parentName:"p"},"XCP"),", but you can select\xa0",Object(o.b)("strong",{parentName:"p"},"Other\xa0"),"to enter another\xa0and as we mentioned above it is entirely possible that someone is selling WOOD for WATER. In that case you'd need have some WATER to buy WOOD and then you'd enter WOOD under\xa0",Object(o.b)("strong",{parentName:"p"},"Token 1"),"\xa0and WATER under\xa0",Object(o.b)("strong",{parentName:"p"},"Token 2"),". \xa0On a DEx level top assets (and their recent price trends) can be seen under\xa0",Object(o.b)("strong",{parentName:"p"},"More ",">"," Top Assets"),"."),Object(o.b)("p",null,"Here we keep it simple and look for TESTASSETONE/XCP."),Object(o.b)("p",null,Object(o.b)("img",{src:a(217).default})),Object(o.b)("p",null,"Once you click on TESTASSETONE, you will see the market. If it's any liquid, you'll see some buy and sell orders. We're buying so we're looking for Sell orders. At the very bottom of the screen we can see one sell offer: somebody is selling 22 TESTASSETONE in exchange for 2.2 XCP. \xa0"),Object(o.b)("p",null,Object(o.b)("img",{src:a(218).default}),"  "),Object(o.b)("p",null,"If you're happy with that price, simply click on it and Counterwallet will populate your Buy Order form. Make sure the price is acceptable because matched orders cannot be cancelled! (It is not rare to hear that someone paid 0.001 for an asset that normally costs 0.0001.)"),Object(o.b)("p",null,"A populated buy form can be modified (",Object(o.b)("strong",{parentName:"p"},"Price, Amount"),"). Visually inspect all fields (especially if\xa0",Object(o.b)("strong",{parentName:"p"},"Total"),"\xa0is a large number) to make sure one last time and then press the Buy button."),Object(o.b)("p",null,Object(o.b)("img",{src:a(219).default}),"    "),Object(o.b)("p",null,"Now your order will remain valid until it's matched, cancelled or expired (whichever comes faster - see related KB mentioned under 3d, above).\xa0"),Object(o.b)("p",null,"Orders can be cancelled in two places - in\xa0",Object(o.b)("strong",{parentName:"p"},"Exchange ",">"," Open Orders\xa0"),"and on the trading page for each asset pair where you have placed orders. The first location gives you a quicker way to see all your pending orders and cancel several on the same page. Orders can be\xa0partially\xa0matched and\xa0filled."),Object(o.b)("p",null,"You can monitor your order status using\xa0",Object(o.b)("a",{parentName:"p",href:"https://xchain.io/"},"https://xchain.io/"),"."),Object(o.b)("h3",{id:"sell"},"Sell"),Object(o.b)("p",null,"Selling is executed the same way as buying, just in the opposite direction, so please refer to Buy section for details."),Object(o.b)("p",null,"The key part here is to carefully enter the price and quantity. Just because someone is offering 0.001 for your token that's normally selling for 0.01 doesn't mean you should click on their offer to auto-populate Sell order form with their values. If you are selling an asset that's also listed elsewhere (say, SJCX) you may want to check the price on other exchanges and see recently traded prices under\xa0",Object(o.b)("strong",{parentName:"p"},"More ",">"," Top Assets"),"."))}u.isMDXComponent=!0},126:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),b=n,h=d["".concat(s,".").concat(b)]||d[b]||p[b]||o;return a?r.a.createElement(h,l(l({ref:t},c),{},{components:a})):r.a.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var c=2;c<o;c++)s[c]=a[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},217:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/counterparty-dex-find-asset-to-buy1-d66c225abaaded6e129b5b190fcb34ff.jpg"},218:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/counterparty-dex-select-sell-offer-f4febea94f414ba885f46e67b73d9bc8.jpg"},219:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/counterparty-dex-populate-buy-order-386eb86d12d2b583c8c605da648a941f.jpg"}}]);