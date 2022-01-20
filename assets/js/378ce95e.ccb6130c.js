(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(n),p=r,m=b["".concat(i,".").concat(p)]||b[p]||u[p]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(126)),i={title:"Getting started"},c={unversionedId:"advanced/federated-node/getting-started",id:"advanced/federated-node/getting-started",isDocsHomePage:!1,title:"Getting started",description:'This document describes how one can set up their own Counterparty "Federated Node" system, on Linux, Windows or OS X.',source:"@site/docs/advanced/federated-node/getting-started.md",slug:"/advanced/federated-node/getting-started",permalink:"/Documentation/docs/advanced/federated-node/getting-started",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/advanced/federated-node/getting-started.md",version:"current",sidebar:"advanced",previous:{title:"Using multisig with counterparty-server",permalink:"/Documentation/docs/advanced/advanced-usage/multisig"},next:{title:"Pre-installation",permalink:"/Documentation/docs/advanced/federated-node/pre-installation"}},s=[{value:"Node Services",id:"node-services",children:[]},{value:"Hardware / OS requirements",id:"hardware--os-requirements",children:[]}],l={toc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'This document describes how one can set up their own Counterparty "Federated Node" system, on Linux, Windows or OS X.'),Object(o.b)("p",null,'A Federated Node is a self-contained system that runs the some or all of the Counterparty software stack, via Docker. Each system operates as a Bitcoin and Counterparty "full node". Using this toolset, one can generally get started running the Counterparty software much quicker and more easily than a manual installation of the various components.'),Object(o.b)("p",null,"The document is primarily intended for power users and developers."),Object(o.b)("h3",{id:"node-services"},"Node Services"),Object(o.b)("a",{name:"services"}),"Services run on a Federated Node include some or all of the following:",Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"counterparty-server"),": ",Object(o.b)("inlineCode",{parentName:"li"},"counterparty-lib")," + ",Object(o.b)("inlineCode",{parentName:"li"},"counterparty-cli"),". Implements support for the core Counterparty protocol, via a provided REST API and command line interface."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"counterblock"),": Provides additional services (required by ",Object(o.b)("inlineCode",{parentName:"li"},"counterwallet")," and potentially other services) beyond those offered in the API provided by ",Object(o.b)("inlineCode",{parentName:"li"},"counterparty-server"),". It features a full-fledged JSON RPC-based API, and has an extensible architecture to support custom plugins."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"counterwallet"),": The reference Web wallet for Counterparty. This is a collection of HTML, CSS and javascript resources, served by ",Object(o.b)("inlineCode",{parentName:"li"},"nginx"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"bitcoind"),": Reference Bitcoin implementation, used by ",Object(o.b)("inlineCode",{parentName:"li"},"counterparty-server")," to sync to the Bitcoin blockchain."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"addrindexrs"),": Bitcoin address index service. Maintains an updated database of UTXOs for usage in the counterparty services."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"armory_utxsvr"),": A service used by ",Object(o.b)("inlineCode",{parentName:"li"},"counterblock")," with Counterwallet to support ",Object(o.b)("a",{parentName:"li",href:"http://counterparty.io/docs/create_armory_address/"},"Offline Armory transactions"),". This service requires Armory itself, which is automatically installed as part of the Federated Node setup procedure."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"nginx"),": Reverse proxies ",Object(o.b)("inlineCode",{parentName:"li"},"counterwallet")," access. Not used with ",Object(o.b)("inlineCode",{parentName:"li"},"counterparty-server"),"-only or ",Object(o.b)("inlineCode",{parentName:"li"},"counterblock"),"-only nodes."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"mongodb and redis"),": Used by ",Object(o.b)("inlineCode",{parentName:"li"},"counterblock"),".")),Object(o.b)("p",null,"Please note that Federated Node should not be installed on a system which already has one or more of conflicting services running on the ports used by Federated Node. The Federated Node install script checks that required ports are unused and exits to avoid conflict. If you have a non-essential Web, mongodb or other service running on the target system you can disable them or bind them to a different port to be able to pass the built-in check and avoid application conflicts."),Object(o.b)("h3",{id:"hardware--os-requirements"},"Hardware / OS requirements"),Object(o.b)("a",{name:"requirements"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Memory"),": 4GB RAM (",Object(o.b)("inlineCode",{parentName:"li"},"bitcoind"),", ",Object(o.b)("inlineCode",{parentName:"li"},"counterparty-server")," only), 8GB+ RAM (full stack)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Disk space:")," The exact disk space required will be dependent on what services are run on the node:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"For ",Object(o.b)("inlineCode",{parentName:"li"},"bitcoin")," databases: ",Object(o.b)("strong",{parentName:"li"},"~361GB")," (mainnet), ",Object(o.b)("strong",{parentName:"li"},"~32GB")," (testnet)"),Object(o.b)("li",{parentName:"ul"},"For ",Object(o.b)("inlineCode",{parentName:"li"},"addrindexrs")," database: ",Object(o.b)("strong",{parentName:"li"},"~63GB")," (mainnet), ",Object(o.b)("strong",{parentName:"li"},"~6GB")," (testnet)"),Object(o.b)("li",{parentName:"ul"},"For ",Object(o.b)("inlineCode",{parentName:"li"},"counterparty")," databases: ",Object(o.b)("strong",{parentName:"li"},"~5GB")," (mainnet), ",Object(o.b)("strong",{parentName:"li"},"~1GB")," (testnet)"),Object(o.b)("li",{parentName:"ul"},"For ",Object(o.b)("inlineCode",{parentName:"li"},"armory_utxsvr"),": ",Object(o.b)("strong",{parentName:"li"},"~291GB")," (mainnet), ",Object(o.b)("strong",{parentName:"li"},"~26GB")," (testnet)"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"OS:")," ",Object(o.b)("em",{parentName:"li"},"Please note that Ubuntu Linux is the recommended OS at this time, as most of our testing is performed on it. Windows and OS X support is considered in BETA."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Linux"),": We recommend Ubuntu 20.10 64-bit, but other, modern versions of Linux should work, as long as they support the newest released version of Docker"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Windows"),": Windows 7 or higher, or Server 2008 or higher. 64-bit required"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"OS X"),': 10.8 "Mountain Lion" or higher')))))}d.isMDXComponent=!0}}]);