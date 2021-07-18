(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),r=(n(0),n(126)),i={title:"Installation"},l={unversionedId:"advanced/federated-node/installation",id:"advanced/federated-node/installation",isDocsHomePage:!1,title:"Installation",description:"On Linux and OS X, install as a non-root sudo-er from home directory.",source:"@site/docs/advanced/federated-node/installation.md",slug:"/advanced/federated-node/installation",permalink:"/Documentation/docs/advanced/federated-node/installation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/advanced/federated-node/installation.md",version:"current",sidebar:"advanced",previous:{title:"Pre-installation",permalink:"/Documentation/docs/advanced/federated-node/pre-installation"},next:{title:"Node Administration",permalink:"/Documentation/docs/advanced/federated-node/administration"}},c=[{value:"Post-installation tasks",id:"post-installation-tasks",children:[]}],s={toc:c};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"On Linux and OS X, install as a non-root sudo-er from home directory."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Clone and check out the code")),Object(r.b)("p",null,"On all OS, clone federatednode repo and enter cloned directory:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"git clone https://github.com/CounterpartyXCP/federatednode.git\ncd federatednode\n")),Object(r.b)("p",null,"On Linux and OS X:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"sudo ln -sf `pwd`/fednode.py /usr/local/bin/fednode\n")),Object(r.b)("p",null,"On Windows (if using Docker Quickstart Terminal, a.k.a MINGW64):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'mkdir ~/bin\necho "python.exe \\"`pwd`\\\\fednode.py\\" \\$*" > ~/bin/fednode\nchmod +x ~/bin/fednode\n')),Object(r.b)("p",null,"On Windows (if using Windows Command prompt):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"> C:\\Windows\\fednode.bat echo python.exe %CD%\\fednode.py \\%*\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Build and link the containers")),Object(r.b)("p",null,"Run the following command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"fednode install <CONFIG> <BRANCH>\n")),Object(r.b)("p",null,"Where ",Object(r.b)("inlineCode",{parentName:"p"},"<CONFIG>")," is one of the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"base"))," if you want to run ",Object(r.b)("inlineCode",{parentName:"li"},"counterparty-server")," and ",Object(r.b)("inlineCode",{parentName:"li"},"bitcoind")," only"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"counterblock"))," if you want to run everything in ",Object(r.b)("inlineCode",{parentName:"li"},"base"),", with the addition of ",Object(r.b)("inlineCode",{parentName:"li"},"counterblock")," and its dependencies (",Object(r.b)("inlineCode",{parentName:"li"},"mongodb")," and ",Object(r.b)("inlineCode",{parentName:"li"},"redis"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"full"))," if you would like to run a ",Object(r.b)("em",{parentName:"li"},"full federated node configuration"),", which is all services on the ",Object(r.b)("a",{parentName:"li",href:"#services"},"list above"))),Object(r.b)("p",null,"And where ",Object(r.b)("inlineCode",{parentName:"p"},"<BRANCH>")," is one of the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"master"))," (stable and recommended)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"develop"))," (cutting edge, likely with bugs)")),Object(r.b)("p",null,"For example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"# install a base configuration for the master branch\nfednode install base master\n\n# install a full configuration for the develop branch\nfednode install full develop\n")),Object(r.b)("p",null,"In some cases (slow host, limited bandwidth), you may experience a failure to install due to download timeouts which happen because of network unstability. In that case consider changing Docker's ",Object(r.b)("inlineCode",{parentName:"p"},"max-concurrent-downloads")," value to 1 or 2 from default 3. To do that create a custom ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/docker/daemon.json")," daemon options file and restart Docker service."),Object(r.b)("p",null,"As mentioned earlier, the install script may stop if ports used by Federated Node services are used by other applications. While it is not recommended to run Federated Node alongside production services, small changes can make the evaluation of Federated Node easier. For example you may change ports used by existing applications (or disable said applications) or run Federated Node inside of a virtual machine."),Object(r.b)("p",null,"For example, the original mongodb can be reconfigured to listen on port 28018 and counterblock's mongodb can use the default port 27017. The Federated Node install script makes it possible to specify the interface used by its mongodb container (example below), but it currently does not have the ability to do this for other services or get around port conflicts."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"fednode install --mongodb-interface 127.0.0.2 counterblock master\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Wait for initial sync")),Object(r.b)("p",null,"After installation, the services will be automatically started. To check the status, issue:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"fednode ps\n")),Object(r.b)("p",null,"If you have existing instances of Bitcoin Core (either mainnet or testnet), at this point you could stop all services listed in ",Object(r.b)("inlineCode",{parentName:"p"},"fednode ps")," output, change configuration files (of counterparty and counterblock, for example) and point them to your existing Bitcoin Core. Configuration files can be found in various service directories located under federatednode/config."),Object(r.b)("p",null,"Once the containers are installed and running, keep in mind that it will take some time for ",Object(r.b)("inlineCode",{parentName:"p"},"bitcoind")," to download the blockchain data. Once this is done, ",Object(r.b)("inlineCode",{parentName:"p"},"counterparty-server")," will fully start and sync, followed by ",Object(r.b)("inlineCode",{parentName:"p"},"counterblock")," (if in use). At that point, the server will be usable."),Object(r.b)("p",null,"You may check the sync status by tailing the appropriate service logs, e.g. for Bitcoin Core and Counterparty server on mainnet:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"fednode tail bitcoin\nfednode tail counterparty\n")),Object(r.b)("a",{name:"accessing"}),"**Access the system**",Object(r.b)("p",null,"Once running, the system listens on the following ports:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"counterparty-server"),": 4000/tcp (mainnet), 14000/tcp (testnet)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"counterblock"),": 4001/tcp (mainnet), 14001/tcp (testnet)")),Object(r.b)("p",null,"For ",Object(r.b)("inlineCode",{parentName:"p"},"counterparty-server"),", use RPC username ",Object(r.b)("inlineCode",{parentName:"p"},"rpc")," and default password ",Object(r.b)("inlineCode",{parentName:"p"},"rpc"),"."),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"counterwallet")," is installed, access to the following URLs will be possible:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"http://<host>/")," \u2014 directs to ",Object(r.b)("inlineCode",{parentName:"li"},"https")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"https://<host>/")," - main production URL (uses minified JS/CSS)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"https://<host>/src/")," - development URL (uses un-minified JS/CSS)")),Object(r.b)("h2",{id:"post-installation-tasks"},"Post-installation tasks"),Object(r.b)("p",null,"Ensure that your firewall software is enabled. If you want to provide access from external systems, you can allow through some or all of the ",Object(r.b)("a",{parentName:"p",href:"#accessing"},"appropriate ports"),". In addition, if you are running a node in a production scenario, it is recommended that you properly secure it."),Object(r.b)("p",null,"You may also want to tighten ownership and permissions on all conf files in federatednode/config subdirectories, but keep in mind that you should be the only user with access to the operating system that runs Federated Node containers: Federated Node is not designed for shared OS environments."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Ubuntu Linux")),Object(r.b)("p",null,"Ubuntu Linux users can optionally run a little script that will issue a number of commands to assist with securing their systems:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"cd extras/host_security\nsudo ./run.py\n")),Object(r.b)("p",null,"Note that this script will make several modifications to your host system as it runs. Please review what it does ",Object(r.b)("a",{parentName:"p",href:"https://github.com/CounterpartyXCP/federatednode/blob/master/extras/host_security/run.py"},"here")," before using it."),Object(r.b)("p",null,"If you expect to run a busy Federated Node that requires counterblock, you can consider making the following performance tweaks for mongodb and redis. Please do not make these changes to the host if you're not comfortable with them because they impact not only Docker but the entire OS."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Disable huge memory pages (for redis and mongodb): on Ubuntu 16.04 add ",Object(r.b)("inlineCode",{parentName:"li"},'echo "never" > /sys/kernel/mm/transparent_hugepage/enabled')," to /etc/rc.local and run ",Object(r.b)("inlineCode",{parentName:"li"},"sudo systemctl enable rc-local.service"),". Reboot and check with ",Object(r.b)("inlineCode",{parentName:"li"},"cat /sys/kernel/mm/transparent_hugepage/enabled")," (expected setting: ",Object(r.b)("inlineCode",{parentName:"li"},"[never]"),")."),Object(r.b)("li",{parentName:"ul"},"Edit /etc/sysctl.conf (for redis): add ",Object(r.b)("inlineCode",{parentName:"li"},"net.core.somaxconn = 511")," and ",Object(r.b)("inlineCode",{parentName:"li"},"vm.overcommit_memory = 1")," and run ",Object(r.b)("inlineCode",{parentName:"li"},"sudo sysctl -p"),".")))}d.isMDXComponent=!0},126:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=d(n),u=a,m=b["".concat(i,".").concat(u)]||b[u]||p[u]||r;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);