(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{126:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),b=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=b(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=b(r),d=a,h=c["".concat(i,".").concat(d)]||c[d]||p[d]||o;return r?n.a.createElement(h,l(l({ref:t},u),{},{components:r})):n.a.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var a=r(3),n=r(7),o=(r(0),r(126)),i={title:"Bug Bounties"},l={unversionedId:"develop/bounties",id:"develop/bounties",isDocsHomePage:!1,title:"Bug Bounties",description:"According to\xa0Linus\u2019 Law, \u201cgiven enough eyeballs, all bugs are shallow\u201d. That\u2019s one of the reasons why Counterparty\u2019s source code is publicly available; but merely making the source code available doesn't accomplish anything if people don\u2019t read it!",source:"@site/docs/develop/bounties.md",slug:"/develop/bounties",permalink:"/Documentation/docs/develop/bounties",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/develop/bounties.md",version:"current",sidebar:"develop",previous:{title:"Contributing",permalink:"/Documentation/docs/develop/contributing"}},s=[{value:"Things that do not qualify under the bug bounty",id:"things-that-do-not-qualify-under-the-bug-bounty",children:[]},{value:"Bounties for counterparty-lib",id:"bounties-for-counterparty-lib",children:[]},{value:"Bounties for the Counterparty forums\xa0(counterpartytalk.org)",id:"bounties-for-the-counterparty-forums-counterpartytalkorg",children:[]},{value:"How to report a bug",id:"how-to-report-a-bug",children:[{value:"For security-related issues",id:"for-security-related-issues",children:[]},{value:"For code issues",id:"for-code-issues",children:[]},{value:"For website issues",id:"for-website-issues",children:[]}]},{value:"The fine print",id:"the-fine-print",children:[]},{value:"CREDITS",id:"credits",children:[]}],u={toc:s};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"According to\xa0",Object(o.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Linus"},"Linus\u2019 Law"),", \u201cgiven enough eyeballs, all bugs are shallow\u201d. That\u2019s one of the reasons why Counterparty\u2019s source code is publicly available; but merely making the source code available doesn't accomplish anything if people don\u2019t read it!"),Object(o.b)("p",null,"For this reason, Counterparty has a series of\xa0bug bounties. Similar to the bounties offered by\xa0",Object(o.b)("a",{parentName:"p",href:"http://www.mozilla.org/security/bug-bounty.html"},"Mozilla"),"\xa0and\xa0",Object(o.b)("a",{parentName:"p",href:"http://blog.chromium.org/2010/01/encouraging-more-chromium-security.html"},"Google"),", Counterparty bug bounties provide an opportunity for people who find bugs to be compensated. Unlike those programs, however, Counterparty\u2019s bug bounties are not limited to security vulnerabilities."),Object(o.b)("p",null,"Depending on the type of bug and when it is reported, different bounties will be awarded. Bounties are paid out in a mix of XCP and BTC (the ratio is negotiable), at the 3-day average of each to a fixed US Dollar value. "),Object(o.b)("h2",{id:"things-that-do-not-qualify-under-the-bug-bounty"},"Things that do not qualify under the bug bounty"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"counterpartytalk.org website")," (unless the issue is a serious misconfiguration where user security details are being leaked in a way that they can be proven to be exploited)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Counterwallet or counterblock")," (unless the issue allows for theft of funds, in that case the $1,500 bounty defined below would apply)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Please do not try XSS attacks in the Counterwallet chat box. It is annoying, and it has already been tested extensively")),Object(o.b)("li",{parentName:"ul"},"Vulnerabilities which are too broad or not documented properly (i.e. do not include a specific example relevant to a Counterparty-controlled site)"),Object(o.b)("li",{parentName:"ul"},"Bugs or issues with a third-party site, software, or service that we use, such as support.counterparty.io (freshdesk.com), which is not due to an improper configuration issue specific to us. Please submit any potential issues ",Object(o.b)("strong",{parentName:"li"},"to the maintainers of that site or providers of that service")),Object(o.b)("li",{parentName:"ul"},"Usability issues"),Object(o.b)("li",{parentName:"ul"},"Anything requiring social engineering"),Object(o.b)("li",{parentName:"ul"},"DOS/DDOS attacks"),Object(o.b)("li",{parentName:"ul"},"Missing HSTS (HttpOnly flags), Secure flag, Browser Cache vulnerabilities"),Object(o.b)("li",{parentName:"ul"},"CSRF that doesn\u2019t affect the victim"),Object(o.b)("li",{parentName:"ul"},"Referrer leakage to pages an attacker cannot control"),Object(o.b)("li",{parentName:"ul"},"Lack of explicit rate-limiting for counterwallet.io passphrase entry"),Object(o.b)("li",{parentName:"ul"},"The presence of unnecessary files, e.g. for backups, when these files do not expose any sensitive information"),Object(o.b)("li",{parentName:"ul"},"Anything that is the result of an automated Nessus/PCI scans (too general)"),Object(o.b)("li",{parentName:"ul"},"DNS issues (e.g. lack of an SPF record)"),Object(o.b)("li",{parentName:"ul"},"SSL certificate issues (such as lack of Perfect Forward Secrecy on our SSL certificates)"),Object(o.b)("li",{parentName:"ul"},"Bugs that have received mainstream tech media attention before the date of your disclosure (e.g. Heartbleed, Poodlebleed, etc)")),Object(o.b)("h2",{id:"bounties-for-counterparty-lib"},"Bounties for counterparty-lib"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Total USD amount (BTC/XCP mix)"),Object(o.b)("th",{parentName:"tr",align:null},"Type of bug"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"$1,500"),Object(o.b)("td",{parentName:"tr",align:null},"A flaw in the protocol that allows for theft or loss of funds")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"$1,000"),Object(o.b)("td",{parentName:"tr",align:null},"A bug in the reference client that leads to consensus issues")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"$750"),Object(o.b)("td",{parentName:"tr",align:null},"A bug which causes data corruption or loss")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"$200"),Object(o.b)("td",{parentName:"tr",align:null},"A bug which causes the application to crash")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"$100"),Object(o.b)("td",{parentName:"tr",align:null},"Other non-harmless bugs")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"$50"),Object(o.b)("td",{parentName:"tr",align:null},"Build breakage on a supported platform")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"$20"),Object(o.b)("td",{parentName:"tr",align:null},"'Harmless' bugs, e.g. cosmetic errors")))),Object(o.b)("p",null,"Bounties will be paid out for bugs found in the ",Object(o.b)("inlineCode",{parentName:"p"},"master")," branch of the official GitHub repositories."),Object(o.b)("h2",{id:"bounties-for-the-counterparty-forums-counterpartytalkorg"},"Bounties for the Counterparty forums\xa0(counterpartytalk.org)"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Total USD amount (BTC/XCP mix)"),Object(o.b)("th",{parentName:"tr",align:null},"Type of bug"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"$20-100"),Object(o.b)("td",{parentName:"tr",align:null},"Security issue on the website that is not present in the forums software used and that is not a known issue to the author(s)")))),Object(o.b)("p",null,"Beyond this, bounties do not apply to the Counterparty forums; ",Object(o.b)("strong",{parentName:"p"},"in particular,\xa0please do not run automated vulnerability scanners against the website\xa0\u2014 they are annoying and do not produce useful bug reports.")),Object(o.b)("h2",{id:"how-to-report-a-bug"},"How to report a bug"),Object(o.b)("h3",{id:"for-security-related-issues"},"For security-related issues"),Object(o.b)("p",null,"Email ",Object(o.b)("a",{parentName:"p",href:"mailto:dev@counterparty.io"},"the developers")," ",Object(o.b)("strong",{parentName:"p"},"privately with the details of the issue. Do not post the issue on github or anywhere else until the issue has been resolved.")),Object(o.b)("h3",{id:"for-code-issues"},"For code issues"),Object(o.b)("p",null,"We would strongly prefer if you create a pull-request on Github in the proper repository with the necessary fix (along with your Bitcoin address to claim the bounty). For more information, see ",Object(o.b)("a",{parentName:"p",href:"https://help.github.com/categories/63/articles"},"this link"),".\xa0"),Object(o.b)("h3",{id:"for-website-issues"},"For website issues"),Object(o.b)("p",null,"Please contact ",Object(o.b)("a",{parentName:"p",href:"mailto:support@counterparty.io"},"support")," with the error, along with your Bitcoin address."),Object(o.b)("h2",{id:"the-fine-print"},"The fine print"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A bounty will only be awarded to the first person who reports a bug, unless two or more people report the same bug at approximately the same time, in which case the bounty may be split between them."),Object(o.b)("li",{parentName:"ul"},"If the same bug appears in multiple locations it will normally only receive a single bounty."),Object(o.b)("li",{parentName:"ul"},"Reports of security-related bugs are not eligible for bounties if the bugs are publicly disclosed prior to being fixed."),Object(o.b)("li",{parentName:"ul"},"The issue must be described in necessary detail to address it."),Object(o.b)("li",{parentName:"ul"},"Only the discoverer of a bug is eligible for the associated bounty."),Object(o.b)("li",{parentName:"ul"},"Bounties will be confirmed and awarded within 10 days of their\nreporting. Inquiries on bounty status may be sent to ",Object(o.b)("a",{parentName:"li",href:"mailto:bounties@counterparty.io"},"bounties@counterparty.io")),Object(o.b)("li",{parentName:"ul"},"Bounties will not be awarded if it is illegal to do so."),Object(o.b)("li",{parentName:"ul"},"The classification of bugs, values of bounties, and conditions under which bounties are paid are subject to change without notice."),Object(o.b)("li",{parentName:"ul"},"The core Counterparty team has sole discretion to determine whether a bug report qualifies for a bounty and for which bounty it qualifies.")),Object(o.b)("h2",{id:"credits"},"CREDITS"),Object(o.b)("p",null,"Credit to the general structure of this program as well as much of the wording goes to ",Object(o.b)("a",{parentName:"p",href:"http://www.tarsnap.com/bugbounty.html"},"Tarsnap"),"."))}b.isMDXComponent=!0}}]);