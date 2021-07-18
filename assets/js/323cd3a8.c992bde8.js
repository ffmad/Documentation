(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),p=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(l,".").concat(u)]||d[u]||s[u]||r;return n?i.a.createElement(m,c(c({ref:t},b),{},{components:n})):i.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var b=2;b<r;b++)l[b]=n[b];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(126)),l={title:"API Changes"},c={unversionedId:"develop/api/api-changes",id:"develop/api/api-changes",isDocsHomePage:!1,title:"API Changes",description:"This section documents any changes to the API, for version numbers where there were API-level modifications.",source:"@site/docs/develop/api/api-changes.md",slug:"/develop/api/api-changes",permalink:"/docs/develop/api/api-changes",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/develop/api/api-changes.md",version:"current",sidebar:"develop",previous:{title:"Technical Specification",permalink:"/docs/develop/api/api"},next:{title:"Counterblock API",permalink:"/docs/develop/counterblock/api"}},o=[{value:"9.58.0",id:"9580",children:[]},{value:"9.55.5",id:"9555",children:[]},{value:"9.55.4",id:"9554",children:[]},{value:"9.55.3",id:"9553",children:[]},{value:"9.55.2",id:"9552",children:[]},{value:"9.53.0",id:"9530",children:[]},{value:"9.52.0",id:"9520",children:[]},{value:"9.51.0",id:"9510",children:[]},{value:"9.49.4",id:"9494",children:[]},{value:"9.49.3",id:"9493",children:[]},{value:"9.43.0",id:"9430",children:[]},{value:"9.32.0",id:"9320",children:[]},{value:"9.25.0",id:"9250",children:[]},{value:"9.24.1",id:"9241",children:[]}],b={toc:o};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This section documents any changes to the API, for version numbers where there were API-level modifications."),Object(r.b)("p",null,"There will be no incompatible API pushes that do not either have:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A well known set cut over date in the future"),Object(r.b)("li",{parentName:"ul"},"Or, a deprecation process where the old API is supported for an amount of time")),Object(r.b)("h3",{id:"9580"},"9.58.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Added ",Object(r.b)("inlineCode",{parentName:"li"},"P2SH")," support and ",Object(r.b)("inlineCode",{parentName:"li"},"MPMA")," support:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Explanation of the new array parameters for ",Object(r.b)("inlineCode",{parentName:"li"},"create_send")),Object(r.b)("li",{parentName:"ul"},"Explanation of the new ",Object(r.b)("inlineCode",{parentName:"li"},"p2sh_pretx_txid")," parameter"),Object(r.b)("li",{parentName:"ul"},"Example to sign the new kind of ",Object(r.b)("inlineCode",{parentName:"li"},"P2SH transaction"))))),Object(r.b)("h3",{id:"9555"},"9.55.5"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"create_*: adds ",Object(r.b)("inlineCode",{parentName:"li"},"extended_tx_info")," parameter to create methods")),Object(r.b)("h3",{id:"9554"},"9.55.4"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"No changes")),Object(r.b)("h3",{id:"9553"},"9.55.3"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"create_send: Added ",Object(r.b)("inlineCode",{parentName:"li"},"memo"),", ",Object(r.b)("inlineCode",{parentName:"li"},"memo_is_hex")," and ",Object(r.b)("inlineCode",{parentName:"li"},"use_enhanced_send")," parameters"),Object(r.b)("li",{parentName:"ul"},"get_sends: Added support for ",Object(r.b)("inlineCode",{parentName:"li"},"memo")," and ",Object(r.b)("inlineCode",{parentName:"li"},"memo_hex")," filters"),Object(r.b)("li",{parentName:"ul"},"get_sends: Returns ",Object(r.b)("inlineCode",{parentName:"li"},"memo")," and ",Object(r.b)("inlineCode",{parentName:"li"},"memo_hex")," in the search results")),Object(r.b)("h3",{id:"9552"},"9.55.2"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"create_issuance: subassets longname are supported in the ",Object(r.b)("inlineCode",{parentName:"li"},"asset")," parameter")),Object(r.b)("h3",{id:"9530"},"9.53.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Add min_message_index to get_blocks API call")),Object(r.b)("h3",{id:"9520"},"9.52.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Added getrawtransaction and getrawtransaction_batch methods to the API"),Object(r.b)("li",{parentName:"ul"},"Added optional custom_inputs parameter to API calls, which allows for controlling the exact UTXOs to use in transactions (contributed by Tokenly)")),Object(r.b)("h3",{id:"9510"},"9.51.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Deprecated ",Object(r.b)("inlineCode",{parentName:"li"},"get_asset_info(assets)")," API method. Use ",Object(r.b)("inlineCode",{parentName:"li"},"get_issuances()")," and ",Object(r.b)("inlineCode",{parentName:"li"},"get_supply()")," instead."),Object(r.b)("li",{parentName:"ul"},"Deprecated ",Object(r.b)("inlineCode",{parentName:"li"},"get_xcp_supply()")," API method in favor of ",Object(r.b)("inlineCode",{parentName:"li"},"get_supply(asset)"),"."),Object(r.b)("li",{parentName:"ul"},"Changed ",Object(r.b)("inlineCode",{parentName:"li"},"get_unspent_txouts")," API method parameter and return values."),Object(r.b)("li",{parentName:"ul"},"Added HTTP Rest API."),Object(r.b)("li",{parentName:"ul"},"Authentication on JSON\u2010RPC API is off by default"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"rpc_password")," configuration parameter is no longer mandatory")),Object(r.b)("h3",{id:"9494"},"9.49.4"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"do_*"),", ",Object(r.b)("inlineCode",{parentName:"li"},"sign_tx")," and ",Object(r.b)("inlineCode",{parentName:"li"},"broadcast_tx")," methods have been completely deprecated. See the section ",Object(r.b)("a",{parentName:"li",href:"#Wallet-Integration"},"Wallet Integration"),"."),Object(r.b)("li",{parentName:"ul"},"Added REST API.")),Object(r.b)("h3",{id:"9493"},"9.49.3"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"*","_issuance: ",Object(r.b)("inlineCode",{parentName:"li"},"callable"),", ",Object(r.b)("inlineCode",{parentName:"li"},"call_date")," and ",Object(r.b)("inlineCode",{parentName:"li"},"call_price")," are no longer valid parameters"),Object(r.b)("li",{parentName:"ul"},"*","_callback: removed"),Object(r.b)("li",{parentName:"ul"},"Bitcoin addresses may everywhere be replaced by pubkeys."),Object(r.b)("li",{parentName:"ul"},'The API will no longer search the local wallet for pubkeys, so they must be passed to the API manually if being used for the first time. Otherwise, you may get a "not published in blockchain" error.')),Object(r.b)("h3",{id:"9430"},"9.43.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"create_issuance: ",Object(r.b)("inlineCode",{parentName:"li"},"callable")," is also accepted"),Object(r.b)("li",{parentName:"ul"},"create_*: ",Object(r.b)("inlineCode",{parentName:"li"},"null")," is used as default value for missing parameters")),Object(r.b)("h3",{id:"9320"},"9.32.0"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Summary:")," API framework overhaul for performance and simplicity"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'"/api" with no trailing slash no longer supported as an API endpoint (use "/" or "/api/" instead)'),Object(r.b)("li",{parentName:"ul"},'We now consistently reject positional arguments with all API methods. Make sure your API calls do not use positional\narguments (e.g. use {"argument1": "value1", "argument2": "value2"} instead of ','["value1", "value2"]',")")),Object(r.b)("h3",{id:"9250"},"9.25.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"new do",Object(r.b)("em",{parentName:"li"},"* methods: like create"),Object(r.b)("em",{parentName:"li"},", but also sign and broadcast the transaction. Same parameters as create_"),", plus optional privkey parameter.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"backwards incompatible changes")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"create_*: accept only dict as parameters"),Object(r.b)("li",{parentName:"ul"},"create_bet: ",Object(r.b)("inlineCode",{parentName:"li"},"bet_type")," must be a integer (instead string)"),Object(r.b)("li",{parentName:"ul"},"create_bet: ",Object(r.b)("inlineCode",{parentName:"li"},"wager")," and ",Object(r.b)("inlineCode",{parentName:"li"},"counterwager")," args are replaced by ",Object(r.b)("inlineCode",{parentName:"li"},"wager_quantity")," and ",Object(r.b)("inlineCode",{parentName:"li"},"counterwager_quantity")),Object(r.b)("li",{parentName:"ul"},"create_issuance: parameter ",Object(r.b)("inlineCode",{parentName:"li"},"lock")," (boolean) removed (use LOCK in description)"),Object(r.b)("li",{parentName:"ul"},"create_issuance: parameter ",Object(r.b)("inlineCode",{parentName:"li"},"transfer_destination")," replaced by ",Object(r.b)("inlineCode",{parentName:"li"},"destination")),Object(r.b)("li",{parentName:"ul"},"DatabaseError: now a DatabaseError is returned immediately if the database is behind the backend, instead of after fourteen seconds")),Object(r.b)("h3",{id:"9241"},"9.24.1"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Summary:")," New API parsing engine added, as well as dynamic get method composition in ",Object(r.b)("inlineCode",{parentName:"p"},"api.py"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Added ",Object(r.b)("inlineCode",{parentName:"li"},"sql")," API method"),Object(r.b)("li",{parentName:"ul"},"Filter params: Added ",Object(r.b)("inlineCode",{parentName:"li"},"LIKE"),", ",Object(r.b)("inlineCode",{parentName:"li"},"NOT LIKE")," and ",Object(r.b)("inlineCode",{parentName:"li"},"IN"))))}p.isMDXComponent=!0}}]);