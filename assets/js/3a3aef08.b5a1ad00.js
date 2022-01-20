(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(n),p=r,f=d["".concat(i,".").concat(p)]||d[p]||u[p]||o;return n?a.a.createElement(f,l(l({ref:t},s),{},{components:n})):a.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(126)),i={title:"Counterwallet-Specific"},l={unversionedId:"advanced/federated-node/counterwallet",id:"advanced/federated-node/counterwallet",isDocsHomePage:!1,title:"Counterwallet-Specific",description:"If you are setting up a Counterwallet server, you will next need to create a counterwallet.conf.json configuration file.",source:"@site/docs/advanced/federated-node/counterwallet.md",slug:"/advanced/federated-node/counterwallet",permalink:"/Documentation/docs/advanced/federated-node/counterwallet",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/advanced/federated-node/counterwallet.md",version:"current",sidebar:"advanced",previous:{title:"Node Administration",permalink:"/Documentation/docs/advanced/federated-node/administration"},next:{title:"Bitcoin Core with ``addrindex`` Patch",permalink:"/Documentation/docs/advanced/installation/bitcoin-core"}},c=[{value:"Getting a SSL Certificate",id:"getting-a-ssl-certificate",children:[]},{value:"Monitoring the Server",id:"monitoring-the-server",children:[]},{value:"Creating a configuration file",id:"creating-a-configuration-file",children:[]}],s={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If you are setting up a Counterwallet server, you will next need to create a ",Object(o.b)("inlineCode",{parentName:"p"},"counterwallet.conf.json")," configuration file.\nInstructions for doing that are detailed in the ",Object(o.b)("em",{parentName:"p"},"Counterwallet Configuration File")," section later in this document. Once creating this file, open up a web browser, and go to the IP address/hostname of the server. You will then be presented to accept your self-signed SSL certificate, and after doing that, should see the Counterwallet login screen."),Object(o.b)("h3",{id:"getting-a-ssl-certificate"},"Getting a SSL Certificate"),Object(o.b)("p",null,"By default, the system is set up to use a self-signed SSL certificate. If you are hosting your services for others,\nyou should get your own SSL certificate from your DNS registrar so that your users don't see a certificate warning when\nthey visit your site."),Object(o.b)("p",null,"Once you have that certificate, create a nginx-compatible ",Object(o.b)("inlineCode",{parentName:"p"},".pem")," file. Copy that ",Object(o.b)("inlineCode",{parentName:"p"},".pem")," file to ",Object(o.b)("inlineCode",{parentName:"p"},"federatednode/config/counterwallet/ssl/counterwallet.pem")," and the cooresponding certificate ",Object(o.b)("inlineCode",{parentName:"p"},".key")," file to ",Object(o.b)("inlineCode",{parentName:"p"},"federatednode/config/counterwallet/ssl/counterwallet.key"),". (Note that there will be a ",Object(o.b)("inlineCode",{parentName:"p"},"counterwallet.key")," and ",Object(o.b)("inlineCode",{parentName:"p"},"counterwallet.pem")," file already there, which are the default, self-signed certificates, and can be safely overridden.) Then, restart the ",Object(o.b)("inlineCode",{parentName:"p"},"counterwallet")," service for the new certificate to take effect."),Object(o.b)("h3",{id:"monitoring-the-server"},"Monitoring the Server"),Object(o.b)("p",null,"To monitor the server, you can use a 3rd-party service such as ",Object(o.b)("a",{parentName:"p",href:"http://www.pingdom.com"},"Pingdom")," or ",Object(o.b)("a",{parentName:"p",href:"http://statuscake.com"},"StatusCake"),".\nThe federated node allows these (and any other monitoring service) to query the basic status of the Federated Node via making a HTTP GET call to one of the following URLs:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/_api/")," (for mainnet)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/_t_api/")," (for testnet)")),Object(o.b)("p",null,"If all services are up, a HTTP 200 response with the following data will be returned:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{"counterparty-server": "OK", "counterblock_ver": "1.3.0", "counterparty-server_ver": "9.31.0", "counterblock": "OK",\n"counterblock_check_elapsed": 0.0039348602294921875, "counterparty-server_last_block": {\n"block_hash": "0000000000000000313c4708da5b676f453b41d566832f80809bc4cb141ab2cd", "block_index": 311234,\n"block_time": 1405638212}, "local_online_users": 7, "counterparty-server_check_elapsed": 0.003687143325805664,\n"counterblock_error": null, "counterparty-server_last_message_index": 91865}\n')),Object(o.b)("p",null,"Note the ",Object(o.b)("inlineCode",{parentName:"p"},'"counterparty-server": "OK"')," and ",Object(o.b)("inlineCode",{parentName:"p"},'"counterblock": "OK"')," items."),Object(o.b)("p",null,"If all services but ",Object(o.b)("inlineCode",{parentName:"p"},"counterparty-server")," are up, a HTTP 500 response with ",Object(o.b)("inlineCode",{parentName:"p"},'"counterparty-server": "NOT OK"'),", for instance."),Object(o.b)("p",null,"If ",Object(o.b)("inlineCode",{parentName:"p"},"counterblock")," is not working properly, ",Object(o.b)("inlineCode",{parentName:"p"},"nginx")," will return a HTTP 503 (Gateway unavailable) or 500 response."),Object(o.b)("p",null,"If ",Object(o.b)("inlineCode",{parentName:"p"},"nginx")," is not working properly, either a HTTP 5xx response, or no response at all (i.e. timeout) will be returned."),Object(o.b)("h3",{id:"creating-a-configuration-file"},"Creating a configuration file"),Object(o.b)("p",null,"Counterwallet can be configured via editing the ",Object(o.b)("inlineCode",{parentName:"p"},"counterwallet.conf.json")," file, via issuing the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"sudo docker exec -it federatednode_counterwallet_1 vim /counterwallet/counterwallet.conf.json\n")),Object(o.b)("p",null,"This file will contain a valid JSON-formatted object, containing an a number of possible configuration properties. For example::"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n  "servers": [ "counterblock1.mydomain.com", "counterblock2.mydomain.com", "counterblock3.mydomain.com" ],\n  "forceTestnet": true,\n  "googleAnalyticsUA": "UA-48454783-2",\n  "googleAnalyticsUA-testnet": "UA-48454783-4",\n  "rollbarAccessToken": "39d23b5a512f4169c98fc922f0d1b121Click to send altcoins to this BTC address ",\n  "disabledFeatures": ["betting"],\n  "restrictedAreas": {\n    "pages/betting.html": ["US"],\n    "pages/openbets.html": ["US"],\n    "pages/matchedbets.html": ["US"],\n    "dividend": ["US"]\n  },\n}\n')),Object(o.b)("p",null,"Here's a description of the possible fields:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Required fields:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"servers"),": Counterwallet should work out-of-the-box in a scenario where you have a single Counterblock Federated Node that both hosts the static site content, as well as the backend Counterblock API services. However, Counterwallet can also be set up to work in MultiAPI mode, where it can query more than one server (to allow for both redundancy and load balancing). To do this, set this ",Object(o.b)("inlineCode",{parentName:"li"},"servers")," parameter as a list of multiple server URIs. Each URI can have a ",Object(o.b)("inlineCode",{parentName:"li"},"http://")," or ",Object(o.b)("inlineCode",{parentName:"li"},"https://")," prefix (we strongly recommend using HTTPS), and the strings must ",Object(o.b)("em",{parentName:"li"},"not")," end in a slash (just leave it off). If the server hostname does not start with ",Object(o.b)("inlineCode",{parentName:"li"},"http://")," or ",Object(o.b)("inlineCode",{parentName:"li"},"https://"),", then ",Object(o.b)("inlineCode",{parentName:"li"},"https://")," is assumed.")),Object(o.b)("p",null,"If you just want to use the current server (and don't have a multi-server setup), just specify this as ",Object(o.b)("inlineCode",{parentName:"p"},"[]")," (empty list).*"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Optional fields:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"forceTestnet"),": Set to true to always use testnet (not requiring 'testnet' in the FQDN, or the '?testnet=1' parameter in the URL."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"googleAnalyticsUA")," / ",Object(o.b)("strong",{parentName:"li"},"googleAnalyticsUA-testnet"),": Set to enable google analytics for mainnet/testnet. You must have a google analytics account."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"rollbarAccessToken"),": Set to enable client-side error tracking via rollbar.com. Must have a rollbar account."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"disabledFeatures"),": Set to a list of zero or more features to disable in the UI. Possible features are:\n",Object(o.b)("inlineCode",{parentName:"li"},"betting"),", ",Object(o.b)("inlineCode",{parentName:"li"},"dividend"),", ",Object(o.b)("inlineCode",{parentName:"li"},"exchange"),", ",Object(o.b)("inlineCode",{parentName:"li"},"leaderboard"),", ",Object(o.b)("inlineCode",{parentName:"li"},"portfolio"),", ",Object(o.b)("inlineCode",{parentName:"li"},"stats")," and ",Object(o.b)("inlineCode",{parentName:"li"},"history"),". Normally\nthis can just be ",Object(o.b)("inlineCode",{parentName:"li"},"[]")," (an empty list) to not disable anything."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"restrictedAreas"),': Set to an object containing a specific page path as the key (or "dividend" for dividend functionality),\nand a list of one or more ISO 2-letter country codes as the key value, to allow for country-level blacklisting of pages/features.')),Object(o.b)("p",null,"Once done, save this file and make sure it exists on all servers you are hosting Counterwallet static content on, and restart the ",Object(o.b)("inlineCode",{parentName:"p"},"counterwallet")," service. Now, when you go to your Counterwallet site, the server will read in this file immediately after loading the page, and set the list of\nbackend API hosts from it automatically."))}b.isMDXComponent=!0}}]);