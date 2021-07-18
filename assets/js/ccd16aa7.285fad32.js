(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{118:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),i=(r(0),r(126)),o={title:"Using multisig with Counterwallet"},s={unversionedId:"wallets/counterwallet-tutorials/multisig",id:"wallets/counterwallet-tutorials/multisig",isDocsHomePage:!1,title:"Using multisig with Counterwallet",description:"Counterparty and Counterwallet support a basic form of multisig. Here\u2019s an example of the process involved with creating and sending to and from a multisig address. Currently, 1-of-2, 2-of-2, 1-of-3, 2-of-3 and 3-of-3 multisig are supported at the moment.",source:"@site/docs/wallets/counterwallet-tutorials/multisig.md",slug:"/wallets/counterwallet-tutorials/multisig",permalink:"/Documentation/docs/wallets/counterwallet-tutorials/multisig",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/wallets/counterwallet-tutorials/multisig.md",version:"current",sidebar:"wallets",previous:{title:"Decentralized Exchange",permalink:"/Documentation/docs/wallets/counterwallet-tutorials/dex-trade"},next:{title:"Show QR Code for Address",permalink:"/Documentation/docs/wallets/counterwallet-tutorials/show-qrcode"}},l=[{value:"Creating a 2-of-3 multisig address:",id:"creating-a-2-of-3-multisig-address",children:[]},{value:"To Receive BTC or a Counterparty asset to the multisig address:",id:"to-receive-btc-or-a-counterparty-asset-to-the-multisig-address",children:[]},{value:"To Send BTC or a Counterparty asset from the multisig address:",id:"to-send-btc-or-a-counterparty-asset-from-the-multisig-address",children:[]}],c={toc:l};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Counterparty and Counterwallet support a basic form of multisig. Here\u2019s an example of the process involved with creating and sending to and from a multisig address. Currently, 1-of-2, 2-of-2, 1-of-3, 2-of-3 and 3-of-3 multisig are supported at the moment. "),Object(i.b)("p",null,"In this example, we\u2019ll use a ",Object(i.b)("strong",{parentName:"p"},"2-of-3")," multisig. With our multisig support, you may send and receive Bitcoin or any Counterparty asset (including XCP) in Counterwallet."),Object(i.b)("h2",{id:"creating-a-2-of-3-multisig-address"},"Creating a 2-of-3 multisig address:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create 3 separate Counterwallet accounts. (Each one will normally be owned by a separate person, although this is not a requirement.)"),Object(i.b)("li",{parentName:"ul"},"Each new wallet will have 1 Bitcoin/Counterparty address by default. That will be utilized for the multisig"),Object(i.b)("li",{parentName:"ul"},"Send some Bitcoin to each address in each of the 3 wallets"),Object(i.b)("li",{parentName:"ul"},"For each address in each of the 3 wallets, send a very small amount (e.g. 0.0001) from them back to the sender address. This is necessary to broadcast each address' public key onto the blockchain, which Counterparty multisig currently requires to operate."),Object(i.b)("li",{parentName:"ul"},"In the first Counterwallet, click ",Object(i.b)("strong",{parentName:"li"},"Create New Address"),", then choose ",Object(i.b)("strong",{parentName:"li"},"Create Multisig Address")),Object(i.b)("li",{parentName:"ul"},"On the dialog that appears, select 2-of-3 for ",Object(i.b)("strong",{parentName:"li"},"Type"),", and enter the 3 addresses from the 3 separate Counterwallet accounts"),Object(i.b)("li",{parentName:"ul"},"A multisig address entry will be created in that first Counterwallet account. Get that address by clicking on address area of the titlebar for it, and copying it. It will be in a format like: ",Object(i.b)("em",{parentName:"li"},"2_1HrSbJR3fcjCDrp2mMJCzGrWR7jtYu4wq5_1Dzfoo4QmhMtHNthmC8hZBry3KPS9FUtgo_152f1muMCNa7goXYhYAQC61hxEgGacmncB_3")),Object(i.b)("li",{parentName:"ul"},"Send a bit of BTC (e.g .001, .005, etc) to this multisig address from another address in your Counterwallet. This will be necessary for sending things ",Object(i.b)("em",{parentName:"li"},"from")," the multi-sig address")),Object(i.b)("h2",{id:"to-receive-btc-or-a-counterparty-asset-to-the-multisig-address"},"To Receive BTC or a Counterparty asset to the multisig address:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You can send to this address from another Counterwallet address just like you would with any other address, e.g. click ",Object(i.b)("strong",{parentName:"li"},"Send")," for the appropriate asset in the appropriate sending address, paste in the full multisig address (as in above), and click ",Object(i.b)("strong",{parentName:"li"},"Send")," again.")),Object(i.b)("h2",{id:"to-send-btc-or-a-counterparty-asset-from-the-multisig-address"},"To Send BTC or a Counterparty asset from the multisig address:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Log into the Counterwallet for the first multisig signer (which will have the entry for the multisig address)"),Object(i.b)("li",{parentName:"ul"},"For the multisig address, click Address Actions, click ",Object(i.b)("strong",{parentName:"li"},"Send")," for the appropriate asset, and fill out the required info."),Object(i.b)("li",{parentName:"ul"},"A raw unsigned TX will be produced once the Send dialog\u2019s ",Object(i.b)("strong",{parentName:"li"},"Send")," button is clicked "),Object(i.b)("li",{parentName:"ul"},"On the 1st address that makes up that multisig (which, following this example, should be in that same Counterwallet account), click ",Object(i.b)("strong",{parentName:"li"},"Address Actions"),", then click ",Object(i.b)("strong",{parentName:"li"},"Sign Transaction")),Object(i.b)("li",{parentName:"ul"},"Paste in the unsigned transaction and click ",Object(i.b)("strong",{parentName:"li"},"Sign")),Object(i.b)("li",{parentName:"ul"},"Copy the resultant text and send (email, etc) to the 2nd party"),Object(i.b)("li",{parentName:"ul"},"The 2nd party will then do the same thing (sign the transaction in their Counterwallet account from their address that makes up 1 of the 3-of-3 multisig), except instead of clicking Sign, they will click ",Object(i.b)("strong",{parentName:"li"},"Sign and Broadcast"),", as they will be the last signer."),Object(i.b)("li",{parentName:"ul"},"(",Object(i.b)("strong",{parentName:"li"},"NOTE:")," If you were doing this with a 3-of-3 multisig address, for instance, the 2nd party would instead just click ",Object(i.b)("strong",{parentName:"li"},"Sign")," and then send to the 3rd party, who would do ",Object(i.b)("strong",{parentName:"li"},"Sign and Broadcast"),". I.e. you will get as many signatures as you need, and the last party will sign and broadcast the transaction.)"),Object(i.b)("li",{parentName:"ul"},"Upon clicking this, the fully signed multisig transaction is broadcast on the network and, once confirmed, the sent funds are disbursed.")))}u.isMDXComponent=!0},126:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),u=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=u(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),p=a,b=d["".concat(o,".").concat(p)]||d[p]||m[p]||i;return r?n.a.createElement(b,s(s({ref:t},c),{},{components:r})):n.a.createElement(b,s({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);