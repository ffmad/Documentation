(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=d(n),p=a,u=b["".concat(r,".").concat(p)]||b[p]||h[p]||s;return n?i.a.createElement(u,o(o({ref:t},c),{},{components:n})):i.a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var c=2;c<s;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),s=(n(0),n(126)),r={title:"Protocol Specification"},o={unversionedId:"advanced/protocol",id:"advanced/protocol",isDocsHomePage:!1,title:"Protocol Specification",description:"Summary",source:"@site/docs/advanced/protocol.md",slug:"/advanced/protocol",permalink:"/docs/advanced/protocol",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/advanced/protocol.md",version:"current",sidebar:"advanced",previous:{title:"Platform Architecture",permalink:"/docs/advanced/architecture"},next:{title:"Command-line (CLI) Guide",permalink:"/docs/advanced/cli"}},l=[{value:"Summary",id:"summary",children:[]},{value:"Transactions",id:"transactions",children:[]},{value:"Non\u2010Counterparty transactions",id:"noncounterparty-transactions",children:[]},{value:"mempool transactions",id:"mempool-transactions",children:[]},{value:"Assets",id:"assets",children:[]},{value:"Subassets",id:"subassets",children:[]},{value:"Memos",id:"memos",children:[]},{value:"Transaction Statuses",id:"transaction-statuses",children:[]},{value:"Message Types",id:"message-types",children:[{value:"Send",id:"send",children:[]},{value:"Order",id:"order",children:[]},{value:"Issue",id:"issue",children:[]},{value:"Broadcast",id:"broadcast",children:[]},{value:"Bet",id:"bet",children:[]},{value:"Dividend",id:"dividend",children:[]},{value:"Burn",id:"burn",children:[]},{value:"Cancel",id:"cancel",children:[]},{value:"Destroy",id:"destroy",children:[]},{value:"Dispenser",id:"dispenser",children:[]}]}],c={toc:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"summary"},"Summary"),Object(s.b)("p",null,"Counterparty is a suite of financial tools in a protocol built on top of\nthe Bitcoin blockchain and using the blockchain as a service for the\nreliable publication and timestamping of its messages."),Object(s.b)("p",null,"The reference implementation is ",Object(s.b)("inlineCode",{parentName:"p"},"counterparty-lib"),", which is hosted at ",Object(s.b)("a",{parentName:"p",href:"https://github.com/CounterpartyXCP/counterpartyd"},"GitHub"),"."),Object(s.b)("p",null,"This document describes exclusively the latest version of the\nCounterparty protocol. For historical protocol changes, see the\ncounterparty-lib ",Object(s.b)("a",{parentName:"p",href:"https://github.com/CounterpartyXCP/counterpartyd/blob/master/ChangeLog.md"},"ChangeLog"),"."),Object(s.b)("h2",{id:"transactions"},"Transactions"),Object(s.b)("p",null,"Counterparty messages have the following components:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Source addresses"),Object(s.b)("li",{parentName:"ul"},"Destination addresses (optional)"),Object(s.b)("li",{parentName:"ul"},"A quantity of bitcoins sent from the sources to the destinations, if it exists."),Object(s.b)("li",{parentName:"ul"},"A fee, in bitcoins, paid to the Bitcoin miners who include the transaction in a block."),Object(s.b)("li",{parentName:"ul"},"Some \u2018data\u2019, imbedded in specially constructed transaction outputs.")),Object(s.b)("p",null,"Every Bitcoin transaction carrying a Counterparty transaction has the\nfollowing possible outputs:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"zero or more destination outputs,"),Object(s.b)("li",{parentName:"ul"},"zero or more data outputs, and optional change outputs.")),Object(s.b)("p",null,"All data outputs follow all destination outputs. Change outputs (outputs after the last data\noutput) have no significance."),Object(s.b)("p",null,"For identification purposes, every Counterparty transaction\u2019s \u2018data\u2019\nfield is prefixed by the string ",Object(s.b)("inlineCode",{parentName:"p"},"CNTRPRTY"),", encoded in UTF\u20108. This\nstring is long enough that transactions with outputs containing\npseudo\u2010random data cannot be mistaken for valid Counterparty\ntransactions. In testing (i.e. using the TESTCOIN Counterparty network\non any blockchain), this string is \u2018XX\u2019."),Object(s.b)("p",null,"Counterparty data may be stored in three different types of outputs, or\nin some combinations of those formats. All of the data is obfuscated by\nARC4 encryption using the transaction identifier (TXID) of the first\nunspent transaction output (UTXO) as the encryption key."),Object(s.b)("p",null,"Multi\u2010signature data outputs are one\u2010of\u2010three outputs where the first\npublic key is that of the sender, so that the value of the output is\nredeemable, and the second two public keys encode the data, zero\u2010padded\nand prefixed with a length byte."),Object(s.b)("p",null,"The data may also be stored in ",Object(s.b)("inlineCode",{parentName:"p"},"OP_RETURN")," outputs or as fake\npubkeyhashes."),Object(s.b)("p",null,"The existence of the destination outputs, and the significance of the\nsize of the Bitcoin fee and the Bitcoins transacted, depend on the\nCounterparty message type, which is determined by the four bytes in the\ndata field that immediately follow the identification prefix. The rest\nof the data have a formatting specific to the message type, described in\nthe source code."),Object(s.b)("p",null,"The sources and destinations of a Counterparty transaction are Bitcoin\naddresses, and may be either ",Object(s.b)("inlineCode",{parentName:"p"},"OP_CHECKSIG")," and ",Object(s.b)("inlineCode",{parentName:"p"},"OP_CHECKMULTISIG"),"\nBitcoin ScriptPubkeys."),Object(s.b)("p",null,"All messages are parsed in order, one at a time, ignoring block\nboundaries."),Object(s.b)("p",null,"Orders, bets, order matches, bet matches and rock\u2010paper\u2010scissor matches\nare expired at the end of blocks."),Object(s.b)("h2",{id:"noncounterparty-transactions"},"Non\u2010Counterparty transactions"),Object(s.b)("p",null,"counterparty-lib supports the construction of two kinds of transactions\nthat are not themselves considered Counterparty transactions:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"BTC sends"),Object(s.b)("li",{parentName:"ul"},"BTC dividends to Counterparty assets")),Object(s.b)("p",null,"Neither of these two transactions is constructed with a data field."),Object(s.b)("h2",{id:"mempool-transactions"},"mempool transactions"),Object(s.b)("p",null,"Always have block index = 9999999 (",Object(s.b)("inlineCode",{parentName:"p"},"config.MEMPOOL_BLOCK_INDEX"),")."),Object(s.b)("p",null,"DB changes never persist across sessions."),Object(s.b)("h2",{id:"assets"},"Assets"),Object(s.b)("p",null,"All assets except BTC and XCP have the following properties:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Asset name"),Object(s.b)("li",{parentName:"ul"},"Asset ID"),Object(s.b)("li",{parentName:"ul"},"Description"),Object(s.b)("li",{parentName:"ul"},"Divisiblity"),Object(s.b)("li",{parentName:"ul"},"Callability"),Object(s.b)("li",{parentName:"ul"},"Call date (if callable)",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"may be delayed with later issuances"))),Object(s.b)("li",{parentName:"ul"},"Call price (if callable) (non\u2010negative)",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"may be increased with later issuances")))),Object(s.b)("p",null,"Newly registered asset names will be either (unique) strings of 4 to 12\nuppercase Latin characters (inclusive) not beginning with \u2018A\u2019, or\nintegers between 26^12 + 1 and 256^8 (inclusive), prefixed with \u2018A\u2019.\nAlphabetic asset names will carry a one\u2010time issuance fee (by burn) of\n0.5 XCP and numeric asset names will be freely available. \u2018BTC\u2019 and\n\u2018XCP\u2019 are the only three\u2010character asset names. Example asset names:\nBBBB, A100000000000000000."),Object(s.b)("p",null,"Assets may be either divisible or indivisible, and divisible assets are\ndivisible to eight decimal places. Assets also come with descriptions,\nwhich may be up to 52 single-byte characters long and updated at any time."),Object(s.b)("h2",{id:"subassets"},"Subassets"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Subasset names must meet following requirements :"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Begin with the parent asset name followed by a period (.)"),Object(s.b)("li",{parentName:"ul"},"Contain at least 1 character following the parent asset name and a period (.) (e.g. PIZZA.x)"),Object(s.b)("li",{parentName:"ul"},"Contain up to 250 characters in length including the parent asset name (e.g. PIZZA.REALLY-long-VALID-Subasset-NAME)"),Object(s.b)("li",{parentName:"ul"},"Contain only characters ",Object(s.b)("inlineCode",{parentName:"li"},"a-zA-Z0-9.-_@!")),Object(s.b)("li",{parentName:"ul"},"Cannot end with a period (.)"),Object(s.b)("li",{parentName:"ul"},"Cannot contain multiple consecutive periods (..)"))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"A subasset may only be issued from the same address that owns the parent asset at the time of the issuance")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"A subasset may be transferred to a new owner address after initial issuance")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"A subasset has an anti-spam issuance cost of 0.25 XCP"))),Object(s.b)("h2",{id:"memos"},"Memos"),Object(s.b)("p",null,"A Memo can be attached to a send transactions. When a shared public address is used for incoming transactions, a memo may be used to link an incoming payments with a specific user account identifier or invoice.  Memos do not need to be unique.  Multiple sends may have the same memo."),Object(s.b)("p",null,"The Memo is a numeric value expressed in hexadecimal or a UTF-8 encoded text string. Valid memos are no more than 34 bytes long."),Object(s.b)("h2",{id:"transaction-statuses"},"Transaction Statuses"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Offers")," (i.e. orders and bets) are given a status ",Object(s.b)("inlineCode",{parentName:"p"},"filled")," when their\n",Object(s.b)("inlineCode",{parentName:"p"},"give_remaining"),", ",Object(s.b)("inlineCode",{parentName:"p"},"get_remaining"),", ",Object(s.b)("inlineCode",{parentName:"p"},"wager_remaining"),",\n",Object(s.b)("inlineCode",{parentName:"p"},"counterwager_remaining"),", ",Object(s.b)("inlineCode",{parentName:"p"},"fee_provided_remaining")," or\n",Object(s.b)("inlineCode",{parentName:"p"},"fee_required_remaining")," are no longer positive quantities."),Object(s.b)("p",null,"Because order matches pending BTC payment may be expired, orders\ninvolving Bitcoin cannot be filled, but remain always with a status\n",Object(s.b)("inlineCode",{parentName:"p"},"open"),"."),Object(s.b)("h2",{id:"message-types"},"Message Types"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Send"),Object(s.b)("li",{parentName:"ul"},"Order"),Object(s.b)("li",{parentName:"ul"},"BTCPay"),Object(s.b)("li",{parentName:"ul"},"Issue"),Object(s.b)("li",{parentName:"ul"},"Broadcast"),Object(s.b)("li",{parentName:"ul"},"Bet"),Object(s.b)("li",{parentName:"ul"},"Dividend"),Object(s.b)("li",{parentName:"ul"},"Burn"),Object(s.b)("li",{parentName:"ul"},"Cancel"),Object(s.b)("li",{parentName:"ul"},"Destroy"),Object(s.b)("li",{parentName:"ul"},"Dispenser")),Object(s.b)("h3",{id:"send"},"Send"),Object(s.b)("p",null,"A ",Object(s.b)("strong",{parentName:"p"},"send")," message sends a quantity of any Counterparty asset from the\nsource address to the destination address. If the sender does not hold a\nsufficient quantity of that asset at the time that the send message is\nparsed (in the sequence of transactions), then the send is considered an\noversend."),Object(s.b)("p",null,"Oversends are handled as follows:"),Object(s.b)("p",null,"1) Oversends using the legacy send transaction type are valid and filled\nas much as they can be\n2) Oversends using the new default enhanced send transaction type after\nblock 489956 are invalid and none of the asset is sent"),Object(s.b)("p",null,"counterparty-lib supports sending bitcoins, for which no data output is\nused."),Object(s.b)("h3",{id:"order"},"Order"),Object(s.b)("p",null,"An \u2018order\u2019 is an offer to ",Object(s.b)("em",{parentName:"p"},"give")," a particular quantity of a particular\nasset and ",Object(s.b)("em",{parentName:"p"},"get")," some quantity of some other asset in return. No\ndistinction is drawn between a \u2018buy order\u2019 and a \u2018sell order\u2019. The\nassets being given are escrowed away immediately upon the order being\nparsed. That is, if someone wants to give 1 XCP for 2 BTC, then as soon\nas he publishes that order, his balance of XCP is reduced by one."),Object(s.b)("p",null,"When an order is seen in the blockchain, the protocol attempts to match\nit, deterministically, with another open order previously seen. Two\nmatched orders are called a \u2018order match\u2019. If either of a order match\u2019s\nconstituent orders involve Bitcoin, then the order match is assigned the\nstatus \u2018pending\u2019 until the necessary BTCPay transaction is published.\nOtherwise, the trade is completed immediately, with the protocol itself\nassigning the participating addresses their new balances."),Object(s.b)("p",null,"All orders are ",Object(s.b)("em",{parentName:"p"},"limit orders"),": an asking price is specified in the ratio\nof how much of one would like to get and give; an order is matched to\nthe open order with the best price below the limit, and the order match\nis made at ",Object(s.b)("em",{parentName:"p"},"that")," price. That is, if there is one open order to sell at\n.11 XCP/ASST, another at .12 XCP/ASST, and another at .145 XCP/BTC, then\na new order to buy at .14 XCP/ASST will be matched to the first sell\norder first, and the XCP and BTC will be traded at a price of .11\nXCP/ASST, and then if any are left, they\u2019ll be sold at .12 XCP/ASST. If\ntwo existing orders have the same price, then the one made earlier will\nmatch first."),Object(s.b)("p",null,"All orders allow for partial execution; there are no all\u2010or\u2010none orders.\nIf, in the previous example, the party buying the bitcoins wanted to buy\nmore than the first sell offer had available, then the rest of the buy\norder would be filled by the latter existing order. After all possible\norder matches are made, the current (buy) order is listed as an open\norder itself. If there exist multiple open orders at the same price,\nthen order that was placed earlier is matched first."),Object(s.b)("p",null,"Open orders expire after they have been open for a user\u2010specified number\nof blocks. When an order expires, all escrowed funds are returned to the\nparties that originally had them."),Object(s.b)("p",null,"Order Matches waiting for Bitcoin payments expire after twenty blocks; the\nconstituent orders are replenished."),Object(s.b)("p",null,"In general, there can be no such thing as a fake order, because the\nassets that each party is offering are stored in escrow. However, it is\nimpossible to escrow bitcoins, so those attempting to buy bitcoins may\nask that only orders which pay a fee in bitcoins to Bitcoin miners be\nmatched to their own. On the other hand, when creating an order to sell\nbitcoins, a user may pay whatever fee he likes. Partial orders pay\npartial fees. These fees are designated in the code as ",Object(s.b)("inlineCode",{parentName:"p"},"fee_required"),"\nand ",Object(s.b)("inlineCode",{parentName:"p"},"fee_provided"),", and as orders involving BTC are matched (expired),\nthese fees (required and provided) are debited (sometimes replenished),\nin proportion to the fraction of the order that is matched. That is, if\nan order to sell 1 BTC has a ",Object(s.b)("inlineCode",{parentName:"p"},"fee_provided")," of 0.01 BTC (a 1%), and\nthat order matches for 0.5 BTC initially, then the\n",Object(s.b)("inlineCode",{parentName:"p"},"fee_provided_remaining")," for that order will thenceforth be 0.005 BTC.\n",Object(s.b)("em",{parentName:"p"},"Provided")," fees, however, are not replenished upon failure to make BTC\npayments, or their anti\u2010trolling effect would be voided."),Object(s.b)("p",null,"Payments of bitcoins to close order matches waiting for bitcoins are\ndone with a ",Object(s.b)("strong",{parentName:"p"},"BTCpay")," message, which stores in its data field only\nthe string concatenation of the transaction hashes which compose the\nOrder Match which it fulfils."),Object(s.b)("h3",{id:"issue"},"Issue"),Object(s.b)("p",null,"Assets are issued with the ",Object(s.b)("strong",{parentName:"p"},"issuance")," message type: the user picks a\nname and a quantity, and the protocol credits his address accordingly.\nThe asset name must either be unique or be one previously issued by the\nsame address. When re\u2010issuing an asset, that is, issuing more of an\nalready\u2010issued asset, the divisibilities and the issuing address must\nmatch."),Object(s.b)("p",null,"The rights to issue assets under a given name may be transferred to any\nother address."),Object(s.b)("p",null,"Assets may be locked irreversibly against the issuance of further\nquantities and guaranteeing its holders against its inflation. To lock\nan asset, set the description to \u2018LOCK\u2019 (case\u2010insensitive)."),Object(s.b)("p",null,"Issuances of any non\u2010zero quantity, that is, issuances which do not\nmerely change, e.g., the description of the asset, involve a debit (and\ndestruction) of now 0.5 XCP."),Object(s.b)("p",null,"Asset descriptions in enhanced asset information schema may be of\narbitrary length."),Object(s.b)("h3",{id:"broadcast"},"Broadcast"),Object(s.b)("p",null,"A ",Object(s.b)("strong",{parentName:"p"},"broadcast")," message publishes textual and numerical information,\nalong with a timestamp, as part of a series of broadcasts called a\n\u2018feed\u2019. One feed is associated with one address: any broadcast from a\ngiven address is part of that address\u2019s feed. The timestamps of a feed\nmust increase monotonically."),Object(s.b)("p",null,"Bets are made on the numerical values in a feed, which values may be the\nprices of a currency, or parts of a code for describing discrete\npossible outcomes of a future event, for example. One might describe\nsuch a code with a text like, \u2018US QE on 2014-01-01: dec=1, const=2,\ninc=3\u2019 and announce the results with \u2018US QE on 2014-01-01: decrease!\u2019\nand a value of 1."),Object(s.b)("p",null,"The publishing of a single broadcast with a textual message equal to\n\u2018LOCK\u2019 (case\u2010insensitive) locks the feed, and prevents it both from\nbeing the source of any further broadcasts and from being the subject of\nany new bets. (If a feed is locked while there are open bets or\nunsettled bet matches that refer to it, then those bets and bet matches\nwill expire harmlessly.)"),Object(s.b)("p",null,"The text field may be of arbitrary length."),Object(s.b)("p",null,"A feed is identified by the address which publishes it."),Object(s.b)("p",null,"Broadcasts with a value of -2 cancel all open bets on the feed.\nBroadcasts with a value of -3 cancel all pending bet matches on the\nfeed. (This is equivalent to waiting for two weeks after the deadline.)\nBroadcasts with any other negative value are ignored for the purpose of\nbet settlement, but they still update the last broadcast time."),Object(s.b)("h3",{id:"bet"},"Bet"),Object(s.b)("p",null,"A bet is a wager that the value of a particular feed will be equal (or not\nequal) to a certain value \u2014 the ",Object(s.b)("em",{parentName:"p"},"target value")," \u2014 at the ",Object(s.b)("em",{parentName:"p"},"deadline"),". Bets have\ntheir wagers put in escrow upon being matched, and they are settled when the\nfeed that they rely on passes the deadline."),Object(s.b)("p",null,"Equal/NotEqual Bets cannot be leveraged.  However, for two Bets to be matched,\ntheir leverage levels, deadlines and target values must be identical.\nOtherwise, they are matched the same way that orders are, except a Bet\u2019s ",Object(s.b)("em",{parentName:"p"},"odds"),"\nare the multiplicative inverse of an order\u2019s price (odds = wager/counterwager):\neach Bet is matched, if possible, to the open Bet with the highest odds, as\nmuch as possible."),Object(s.b)("p",null,"Target values must be non\u2010negative, and Bet Matches (contracts) are not\naffected by broadcasts with a value of -1."),Object(s.b)("p",null,"Bets cannot have a deadline later than the timestamp of the last\nbroadcast of the feed that they refer to."),Object(s.b)("p",null,"Bets expire the same way that orders do, i.e. after a particular number\nof blocks. Bet Matches expire 2016 blocks after a block is seen with a\nblock timestamp after its deadline."),Object(s.b)("p",null,"Betting fees are proportional to the initial wagers, not the earnings.\nThey are taken from, not added to, the quantities wagered."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Because of the block time, and the non\u2010deterministic way in which\ntransactions are ordered in the blockchain, all contracts must not be\nincrementally settled, but the funds in question must be immediately\nput into escrow, and there must be a settlement date. Otherwise, one\ncould see a price drop coming, and \u2018fight\u2019 to hide the funds that\nwere going to be deducted.")),Object(s.b)("p",null,"Feed fees are deducted from the final settlement amount."),Object(s.b)("h3",{id:"dividend"},"Dividend"),Object(s.b)("p",null,"A dividend payment is a payment of some quantity of any Counterparty\nasset (including BTC) to every holder of a an asset (except BTC or XCP)\nin proportion to the size of their holdings. Dividend\u2010yielding assets\nmay be either divisible or indivisible. A dividend payment to any asset\nmay originate from any address. The asset for dividend payments and the\nassets whose holders receive the payments may be the same. Bitcoin\ndividend payments do not employ the Counterparty protocol and so are\nlarger and more expensive (in fees) than all other dividend payments."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"TODO: dividends on escrowed funds")),Object(s.b)("p",null,"There is a small anti-spam fee of 0.0002 XCP per recipient with dividends."),Object(s.b)("h3",{id:"burn"},"Burn"),Object(s.b)("p",null,"Balances in Counterparty\u2019s native currency, \u2018XCP\u2019, will be initialised\nby \u2018burning\u2019 bitcoins in miners\u2019 fees during a particular period of time\nusing the a ",Object(s.b)("strong",{parentName:"p"},"burn")," message type. The number of XCP earned per bitcoin\nis calculated thus:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"XCP_EARNED = BTC_BURNED * (1000 * (1 + .5 *\n             ((END_BLOCK - CURRENT_BLOCK) / (END_BLOCK - START_BLOCK))\n             ))\n")),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"END_BLOCK")," is the block after which the burn period is over (",Object(s.b)("strong",{parentName:"p"},"block #283810"),") and ",Object(s.b)("inlineCode",{parentName:"p"},"START_BLOCK")," is the block with which the burn period\nbegins (",Object(s.b)("strong",{parentName:"p"},"block #278310"),"). The earlier the burn, the better the price,\nwhich may be between 1000 and 1500 XCP/BTC."),Object(s.b)("p",null,"Burn messages have precisely the string \u2018ProofOfBurn\u2019 stored in the\n",Object(s.b)("inlineCode",{parentName:"p"},"OP_RETURN")," output."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"new data\u2010less burn"),Object(s.b)("li",{parentName:"ul"},"burn period is over")),Object(s.b)("h3",{id:"cancel"},"Cancel"),Object(s.b)("p",null,"Open offers may be cancelled, which cancellation is irrevocable."),Object(s.b)("p",null,"A ",Object(s.b)("em",{parentName:"p"},"cancel")," message contains only the hash of the Bitcoin transaction\nthat contains the order or bet to be cancelled. Only the address which\nmade an offer may cancel it."),Object(s.b)("h3",{id:"destroy"},"Destroy"),Object(s.b)("p",null,"A ",Object(s.b)("strong",{parentName:"p"},"destroy")," message sends a quantity of any Counterparty asset from the\nsource address to the default burn address. If the sender does not hold a\nsufficient quantity of that asset at the time that the destroy message is\nparsed (in the sequence of transactions), then the destroy is considered\ninvalid."),Object(s.b)("h3",{id:"dispenser"},"Dispenser"),Object(s.b)("p",null,"A dispenser message creates a special type of artifact on the counterparty db\nthat watches an address for incoming main chain asset (BTC). When any BTC reaches\na dispenser enabled address, the amount received gets divided by the dispenser\nmainchainrate (or satoshirate in the db). The quantity rounded down is the\nmultiplier to ",Object(s.b)("em",{parentName:"p"},"give_quantity")," that is sent to the first address on the sending\ntransaction. All dispensers that can match on an address are triggered by each\nBTC send that has a dispense multiplier of at least 1."),Object(s.b)("p",null,"A dispenser can be in either of two status: 0 (open) or 10 (closed)."))}d.isMDXComponent=!0}}]);