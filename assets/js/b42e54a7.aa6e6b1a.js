(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var i=n(3),o=n(7),a=(n(0),n(126)),r={title:"Bitcoin Core with ``addrindex`` Patch"},c={unversionedId:"advanced/installation/bitcoin-core",id:"advanced/installation/bitcoin-core",isDocsHomePage:!1,title:"Bitcoin Core with ``addrindex`` Patch",description:"Bitcoin Core is used by Counterparty to interact with the Bitcoin blockchain.",source:"@site/docs/advanced/installation/bitcoin-core.md",slug:"/advanced/installation/bitcoin-core",permalink:"/Documentation/docs/advanced/installation/bitcoin-core",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/advanced/installation/bitcoin-core.md",version:"current",sidebar:"advanced",previous:{title:"Counterwallet-Specific",permalink:"/Documentation/docs/advanced/federated-node/counterwallet"},next:{title:"Counterparty Dependencies on Windows",permalink:"/Documentation/docs/advanced/installation/windows"}},l=[{value:"Download",id:"download",children:[]},{value:"Installation",id:"installation",children:[{value:"Windows Installer",id:"windows-installer",children:[]},{value:"Linux Binaries",id:"linux-binaries",children:[]}]},{value:"Configuration",id:"configuration",children:[]},{value:"Usage",id:"usage",children:[{value:"Usage on Testnet",id:"usage-on-testnet",children:[]},{value:"Leveraging existing blockchain data from a higher Bitcoin Core version",id:"leveraging-existing-blockchain-data-from-a-higher-bitcoin-core-version",children:[]}]}],b={toc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Bitcoin Core is used by Counterparty to interact with the Bitcoin blockchain."),Object(a.b)("h2",{id:"download"},"Download"),Object(a.b)("p",null,"Depending on your OS and other preferences, download one of the binaries or source code from the link below. Optionally you can verify the file's checksum and author's PGP signature. These binaries are built deterministically."),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/bitcoin/bitcoin/releases"},"https://github.com/bitcoin/bitcoin/releases")),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("h3",{id:"windows-installer"},"Windows Installer"),Object(a.b)("p",null,"Unlike the Linux binaries, the Windows packages are installers. Uninstall any older version and download and install a 32-bit or 64-bit version. A 32-bit version consumes slightly less memory and is recommended for regular desktop use."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"32-bit: ",Object(a.b)("inlineCode",{parentName:"li"},"C:\\Program Files (x86)\\Bitcoin")),Object(a.b)("li",{parentName:"ul"},"64-bit: ",Object(a.b)("inlineCode",{parentName:"li"},"C:\\Program Files\\Bitcoin"))),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"bitcoind.exe")," can be found in the ",Object(a.b)("inlineCode",{parentName:"p"},"daemon")," subdirectory. This path can be manually added to the system PATH variable."),Object(a.b)("h3",{id:"linux-binaries"},"Linux Binaries"),Object(a.b)("p",null,"The Linux binaries are precompiled executables + dependencies, and they're deployed by decompressing them into the desired location. Once that is done, they can be executed directly like so."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"    ./bitcoin-*/bin/bitcoind -help\n")),Object(a.b)("p",null,"You may want to do one or more of the following optional steps:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Move the binaries around."),Object(a.b)("li",{parentName:"ul"},"Edit your ",Object(a.b)("inlineCode",{parentName:"li"},"PATH")," variable to allow you to execute the binaries (",Object(a.b)("inlineCode",{parentName:"li"},"bitcoin-cli"),", ",Object(a.b)("inlineCode",{parentName:"li"},"bitcoind"),", ",Object(a.b)("inlineCode",{parentName:"li"},"bitcoin-qt"),") without specifying their path.")),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"Your Bitcoin Core configuration file should match this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"rpcuser=bitcoinrpc\nrpcpassword=<password>\nserver=1\ndaemon=1\nrpctimeout=300\ntxindex=1\naddrindex=1\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Choose a ",Object(a.b)("strong",{parentName:"li"},"secure password"),"."),Object(a.b)("li",{parentName:"ul"},"By default, on Windows, this file is located at ",Object(a.b)("inlineCode",{parentName:"li"},"%APPDATA%\\Bitcoin\\bitcoin.conf"),"."),Object(a.b)("li",{parentName:"ul"},"By default, on Linux, this file is located at ",Object(a.b)("inlineCode",{parentName:"li"},"~/.bitcoin/bitcoin.conf"),", and the permissions of the file should be set with ",Object(a.b)("inlineCode",{parentName:"li"},"chmod 600 ~/.bitcoin/bitcoin.conf"),".")),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"To run with the standard GUI interface, start Bitcoin Core (",Object(a.b)("inlineCode",{parentName:"p"},"./bitcoin-qt")," on Linux), and to run the daemon, execute ",Object(a.b)("inlineCode",{parentName:"p"},"bitcoind"),". A full list of options can be obtained like this:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Bitcoin Core: go to ",Object(a.b)("inlineCode",{parentName:"li"},"Help > Command-line options")," or execute ",Object(a.b)("inlineCode",{parentName:"li"},"./bitcoin-qt -help")),Object(a.b)("li",{parentName:"ul"},"bitcoind: run ",Object(a.b)("inlineCode",{parentName:"li"},"./bitcoind --help")," (",Object(a.b)("inlineCode",{parentName:"li"},"bitcoind.exe -help")," on Windows)")),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"bitcoin-cli")," to interact with Bitcoin Core."),Object(a.b)("h3",{id:"usage-on-testnet"},"Usage on Testnet"),Object(a.b)("p",null,"For testnet use, add ",Object(a.b)("inlineCode",{parentName:"p"},"testnet=1")," to a separate copy of the above configuration file or run bitcoind with ",Object(a.b)("inlineCode",{parentName:"p"},"-testnet")," from a script or the console. Examples:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"./bitcoind -testnet")," - start bitcoind on testnet using the default configuration file (blockchain data would be stored in the default data path under ",Object(a.b)("inlineCode",{parentName:"li"},"testnet3")," subdirectory)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"bitcoind.exe -testnet -datadir=E:\\testing\\testnet-blockchain")," - use the default configuration file, run on testnet, but place blockchain data in the specified data directory"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"bitcoin-qt.exe -conf=E:\\testing\\testnet.conf")," - start Bitcoin Core GUI and service using a custom configuration file (which presumably cointains ",Object(a.b)("inlineCode",{parentName:"li"},"testnet=1")," and other custom options that justify the creation of a testnet-specific configuration file)")),Object(a.b)("p",null,"To interact with a testnet instance of Bitcoin Core, use ",Object(a.b)("inlineCode",{parentName:"p"},"bitcoin-cli")," with the same ",Object(a.b)("inlineCode",{parentName:"p"},"testnet")," or ",Object(a.b)("inlineCode",{parentName:"p"},"conf")," options that were used to start it."),Object(a.b)("h3",{id:"leveraging-existing-blockchain-data-from-a-higher-bitcoin-core-version"},"Leveraging existing blockchain data from a higher Bitcoin Core version"),Object(a.b)("p",null,"Existing Bitcoin Core users with blockchain data created by a ",Object(a.b)("em",{parentName:"p"},"higher")," version of the official Bitcoin Core may not be able to reuse their blockchain data from a lower version of Bitcoin Core because higher Bitcoin Core releases may have a database (or wallet, if used) format that older Bitcoin Core versions cannot recognize."),Object(a.b)("p",null,"This changes from one Bitcoin Core version to another, so please check Bitcoin Core Release Notes for database (and wallet, if applicable) format changes."),Object(a.b)("p",null,"In cases where an in-place change is not possible or desired, you can setup a separate Bitcoin Core instance and add ",Object(a.b)("inlineCode",{parentName:"p"},"adddnode=<IP-address-of-newer-version-on-LAN>")," to the new instance's bitcoin.conf."))}s.isMDXComponent=!0},126:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=i,h=d["".concat(r,".").concat(p)]||d[p]||u[p]||a;return n?o.a.createElement(h,c(c({ref:t},b),{},{components:n})):o.a.createElement(h,c({ref:t},b))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var b=2;b<a;b++)r[b]=n[b];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);