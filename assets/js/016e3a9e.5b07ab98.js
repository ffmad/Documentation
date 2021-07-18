(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),h=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=h(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=h(n),m=a,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?r.a.createElement(d,s(s({ref:t},l),{},{components:n})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return h}));var a=n(3),r=n(7),o=(n(0),n(126)),i={title:"On Lighning Network"},s={unversionedId:"basics/faq/lightning-network",id:"basics/faq/lightning-network",isDocsHomePage:!1,title:"On Lighning Network",description:"[TOC]",source:"@site/docs/basics/faq/lightning-network.md",slug:"/basics/faq/lightning-network",permalink:"/docs/basics/faq/lightning-network",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/basics/faq/lightning-network.md",version:"current",sidebar:"basics",previous:{title:"On Smart contracts",permalink:"/docs/basics/faq/smart-contracts"},next:{title:"Getting Support on the Forums",permalink:"/docs/basics/support"}},c=[{value:"What are Payment channels?",id:"what-are-payment-channels",children:[]},{value:"What is the Lightning Network?",id:"what-is-the-lightning-network",children:[]},{value:"How do payment channels help Counterparty users?",id:"how-do-payment-channels-help-counterparty-users",children:[]},{value:"What are some potential uses for payment channels/micropayments?",id:"what-are-some-potential-uses-for-payment-channelsmicropayments",children:[]},{value:"Could payment channels be useful for any kind of transaction?",id:"could-payment-channels-be-useful-for-any-kind-of-transaction",children:[]},{value:"What is P2SH?",id:"what-is-p2sh",children:[]},{value:"What are atomic swaps and OTC markets?",id:"what-are-atomic-swaps-and-otc-markets",children:[]},{value:"How do I start using all of this technology with Counterparty?",id:"how-do-i-start-using-all-of-this-technology-with-counterparty",children:[]}],l={toc:c};function h(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"[TOC]"),Object(o.b)("h3",{id:"what-are-payment-channels"},"What are Payment channels?"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Payment channels")," allow two users of Bitcoin to transact commitments to pay back and forth between each other much faster and more fluidly than Bitcoin\u2019s 10 minute block times would normally allow. These commitments are exchanged between the users outside of the Bitcoin blockchain. Once the users are done, they can close the payment channel by publishing the last commitment(s) to the blockchain, which will finalize the amount actually transacted."),Object(o.b)("p",null,"An ideal use case for the technology is ",Object(o.b)("strong",{parentName:"p"},"micropayments"),": Imagine a user making numerous very small payments (e.g. .0001 BTC) to Big Music Company as she listens to songs over a certain period. Without payment channels, the Bitcoin transaction fees from these small payments would be as much or more than the payments themselves, and each payment would take on average 10 minutes to clear."),Object(o.b)("p",null,"Shawn Wilkinson of ",Object(o.b)("a",{parentName:"p",href:"https://storj.io/"},"Storj")," (a Counterparty project) provides a ",Object(o.b)("a",{parentName:"p",href:"http://super3.org/introduction-to-micropayment-channels/"},"good overview")," of payment channels (which goes into detail on both unidirectional and bidirectional channels."),Object(o.b)("h3",{id:"what-is-the-lightning-network"},"What is the Lightning Network?"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"Lightning Network"),", which is still under development, will allow for secure, instant off-chain payments between two arbitrary participants. The Lightning Network is one of the primary methods of scaling Bitcoin to have credit card network-like transaction throughput, while preserving its decentralized qualities."),Object(o.b)("p",null,"Lightning Network technology uses bidirectional payment channels as its central component. Much like the internet routes data packets from one network point to another network point, the Lightning Network routes payments across multiple interconnected payment channels. This eliminates the need to construct a new payment channel for every party that you want to transact with. Instead, you may have a channel set up with a party you have an established relationship with, such as a payment provider like Coinbase, who (possibly through multiple degrees of separation) has a payment channel connection to the final end party."),Object(o.b)("p",null,"Because the individual participants\u2019 transactions utilize Bitcoin cryptography and are eventually committed back to the Bitcoin blockchain, transactions on the Lightning Network are essentially as secure as if they were transacted directly on Bitcoin, but without the same cost, speed and scalability limitations."),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"https://lightning.network/"},"Lightning Network site")," includes more information."),Object(o.b)("h3",{id:"how-do-payment-channels-help-counterparty-users"},"How do payment channels help Counterparty users?"),Object(o.b)("p",null,"Previously, individual Counterparty transactions were committed directly to the Bitcoin blockchain. This is very secure, but is impacted by Bitcoin\u2019s 10 minute block times and per-transaction fees. With payment channels, Counterparty users gain the ability perform certain actions very rapidly and cheaply, such as incrementally swapping XCP for BTC or paying TOKENABC for increased use of a service. The benefits of this are especially apparent when the amounts transacted are small, and/or performed frequently or on an on-going basis."),Object(o.b)("h3",{id:"what-are-some-potential-uses-for-payment-channelsmicropayments"},"What are some potential uses for payment channels/micropayments?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Rewarding users for specific actions they take, such as contributing content to a blog, or writing a review"),Object(o.b)("li",{parentName:"ul"},"Incrementally purchasing a service offering, such as paying for additional storage use with ",Object(o.b)("a",{parentName:"li",href:"https://storj.io/"},"Storj")),Object(o.b)("li",{parentName:"ul"},"Buying in-game items with Counterparty-based games such as ",Object(o.b)("a",{parentName:"li",href:"http://spellsofgenesis.com/"},"Spells of Genesis")," or ",Object(o.b)("a",{parentName:"li",href:"https://itunes.apple.com/gb/app/sarutobi/id932194840?mt=8"},"SaruTobi")),Object(o.b)("li",{parentName:"ul"},"Payments for other digital/virtual goods, such as a \u201ccontributor\u201d badge on a forum"),Object(o.b)("li",{parentName:"ul"},"Referral network payments"),Object(o.b)("li",{parentName:"ul"},"Small/regular donations to charities, projects or individuals (such as musicians and writers of very neat open source software (",Object(o.b)("em",{parentName:"li"},"hint, hint!"),"))"),Object(o.b)("li",{parentName:"ul"},"Enabling rental of Counterparty asset names")),Object(o.b)("h3",{id:"could-payment-channels-be-useful-for-any-kind-of-transaction"},"Could payment channels be useful for any kind of transaction?"),Object(o.b)("p",null,"Theoretically, any Counterparty transaction could be sent in a payment channel. However, the technology is by far most appropriate for send transactions, where one would transfer a Counterparty asset much like one would transfer Bitcoin."),Object(o.b)("p",null,"Payment channels don\u2019t remove the need for on-chain transactions (and indeed, each payment channel is started from and ends with an on-chain transaction). Instead, they enable certain use-cases such as rapid incremental payments, and microtransactions."),Object(o.b)("h3",{id:"what-is-p2sh"},"What is P2SH?"),Object(o.b)("p",null,"Most commonly in Bitcoin, transactions are made to a specific user\u2019s public key hash (colloquially known as a Bitcoin address), and are spendable by that user\u2019s corresponding private key."),Object(o.b)("p",null,"With ",Object(o.b)("strong",{parentName:"p"},"\u201cPay-to-script-hash\u201d (P2SH)"),", transactions are sent to the hash of a \u201credeem script\u201d, which is a special ",Object(o.b)("a",{parentName:"p",href:"https://en.bitcoin.it/wiki/Script"},"Bitcoin script")," (e.g. a Bitcoin smart contract) that can be written to do a variety of things. To \u201cexecute\u201d the script and operate on some or all of the sent funds, another party will broadcast an additional transaction that provides the original script content, along with any required signatures. "),Object(o.b)("p",null,"The P2SH support implemented in Counterparty makes payment channels possible, as payment channels (and Lightning Network, for that matter) require the use of these redeem scripts to work. P2SH is also commonly used for multisignature transactions since the signing process is generally more compact and streamlined than the earlier method (\u201cbare multisig\u201d)."),Object(o.b)("p",null,"You can tell if a Bitcoin address is for a P2SH destination because it will start with \u20183\u2019 on Bitcoin mainnet. Given this, you may notice that many exchanges, for instance, utilize these \u20183\u2019 addresses for deposits. The redeem script in use with that is most definitely a multisig script of some kind, allowing secure, multi-party handling of deposited funds by the exchange."),Object(o.b)("h3",{id:"what-are-atomic-swaps-and-otc-markets"},"What are atomic swaps and OTC markets?"),Object(o.b)("p",null,"P2SH support, the same technology implemented in Counterparty that makes payment channels possible, also makes on-chain \u201catomic swaps\u201d possible."),Object(o.b)("p",null,"With an ",Object(o.b)("strong",{parentName:"p"},"atomic swap"),", two parties perform a special process of exchanging information that completes by the parties broadcasting several transactions that they both have signed. These transactions end up exchanging (i.e. \u201cswapping\u201d) some quantity of one asset from one party in exchange for another. This is done in a way where one party can\u2019t cheat the other."),Object(o.b)("p",null,"The use of atomic swaps can be useful to enable the use of things like ",Object(o.b)("strong",{parentName:"p"},"over the counter (OTC) markets")," and ",Object(o.b)("strong",{parentName:"p"},"dark pools"),". With either structure, a third party (often known as a bookrunner) would maintain a list of bids and offers between buyers and sellers of one asset for another, such as XCP and BTC. That list may be publically published, or not. Interested parties would contact the bookrunner and place buy and sell offers. The bookrunner would match buyers to sellers, who would then perform the trade themselves utilizing an atomic swap. Using this model, risk is greatly minimized, as the bookrunner does not have to hold any assets (and thus cannot run away with them)."),Object(o.b)("p",null,"The concept of an OTC market may sound antiquated but in reality they are a major boon to markets, especially for large holders who can then enter or exit a market or accumulate an asset without much price \u201cslippage\u201d, as would oftentimes occur on an exchange. In mainstream finance, OTC markets comprise over 40% of stock trading, as well as the vast majority of bond and derivative trading (",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Over-the-counter_(finance)"},"source 1"),", ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Derivatives_market"},"source 2"),")."),Object(o.b)("h3",{id:"how-do-i-start-using-all-of-this-technology-with-counterparty"},"How do I start using all of this technology with Counterparty?"),Object(o.b)("p",null,"This technology is all in various stages of development, with some of it being complete (P2SH, for instance) and some in very early states on Counterparty (such as bidirectional payment channels and Lightning Network support)."),Object(o.b)("p",null,"We will be publishing guides for users and developers as the respective technology becomes available and matures. Until that point, feel free to check out ",Object(o.b)("a",{parentName:"p",href:"https://github.com/CounterpartyXCP/counterparty-lib/tree/develop"},"the newest source code")," and ask questions on #dev on ",Object(o.b)("a",{parentName:"p",href:"http://slack.counterparty.io/"},"our official Slack chat"),"."))}h.isMDXComponent=!0}}]);