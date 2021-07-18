(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),p=o,m=u["".concat(i,".").concat(p)]||u[p]||b[p]||a;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(3),r=n(7),a=(n(0),n(126)),i={title:"Pre-installation"},l={unversionedId:"advanced/federated-node/pre-installation",id:"advanced/federated-node/pre-installation",isDocsHomePage:!1,title:"Pre-installation",description:"Windows",source:"@site/docs/advanced/federated-node/pre-installation.md",slug:"/advanced/federated-node/pre-installation",permalink:"/Documentation/docs/advanced/federated-node/pre-installation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/advanced/federated-node/pre-installation.md",version:"current",sidebar:"advanced",previous:{title:"Getting started",permalink:"/Documentation/docs/advanced/federated-node/getting-started"},next:{title:"Installation",permalink:"/Documentation/docs/advanced/federated-node/installation"}},c=[{value:"Windows",id:"windows",children:[]},{value:"OS X",id:"os-x",children:[]},{value:"Linux",id:"linux",children:[]}],s={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"windows"},"Windows"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"NOTE"),": Installation on Windows is still in ",Object(a.b)("em",{parentName:"p"},"BETA")," state, and we cannot promise a fully-working environment. ",Object(a.b)("a",{parentName:"p",href:"https://github.com/CounterpartyXCP/federatednode/issues"},"Please report")," any bugs you find."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Python 3.5.x"),": ",Object(a.b)("a",{parentName:"li",href:"https://www.python.org/downloads/"},"Download and install"),' the latest Python 3.5.x release. Make sure you check the box "Add Python 3.5 to PATH" on the first page. (If you get an error during installation, make sure your windows system is fully updated via Windows Update.)'),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Docker"),": If using Windows 10, we recommend to ",Object(a.b)("a",{parentName:"li",href:"https://docs.docker.com/engine/installation/windows/"},"install Docker for Windows"),". For all other versions of Windows, ",Object(a.b)("a",{parentName:"li",href:"https://docs.docker.com/toolbox/toolbox_install_windows/"},"install Docker Toolbox"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Git"),": Make sure ",Object(a.b)("inlineCode",{parentName:"li"},"git")," is installed. If not, install it from ",Object(a.b)("a",{parentName:"li",href:"https://git-scm.com/download/win"},"here")," (note that if using Docker Toolbox, it will install it by default).")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"If using Docker for Windows"),":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'After installing Docker for Windows, launch the "Docker" application and allow it to set itself up (a reboot may be required).'),Object(a.b)("li",{parentName:"ul"},'Next, you will need to enable access to your host hard drive so that some of the shared volumes work properly. To do this, right click on the Docker Whale icon in your system tray. Then go to "Docker Settings" and then "Shared Drives". Turn on access to the drive on which the ',Object(a.b)("inlineCode",{parentName:"li"},"federatednode"),' folder will reside (most likely your "C" drive).'),Object(a.b)("li",{parentName:"ul"},"Finally, launch ",Object(a.b)("a",{parentName:"li",href:"https://technet.microsoft.com/en-us/library/cc947813(v=ws.10).aspx"},"a command prompt as Administrator"))),Object(a.b)("a",{name:"docker-toolbox-note"})," **If using Docker Toolbox**:",Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'After installation completes, launch the "Docker Quickstart Terminal" and let it configure itself.'),Object(a.b)("li",{parentName:"ul"},"Once this finishes, you will need to resize the Virtual Machine that Docker Toolbox uses to run the Docker containers. Note that it currently limits this VM to 1GB of memory and  20GB hard disk space total by default (shared across ",Object(a.b)("em",{parentName:"li"},"all")," containers). You will need to update this to ",Object(a.b)("em",{parentName:"li"},"at least")," 2 or 4GB memory and 50-100GB space. To do this, execute commands like the following (replacing the numbers in the second command as appropriate, based on the ",Object(a.b)("a",{parentName:"li",href:"#requirements"},"system requirements"),"):")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'docker-machine rm default\ndocker-machine create --driver virtualbox --virtualbox-disk-size "100000" --virtualbox-memory "4096" default\n')),Object(a.b)("p",null,"Then, relaunch the Docker Quickstart Terminal, and verify that ",Object(a.b)("inlineCode",{parentName:"p"},"docker ps")," functions normally (if not, restart the system and try the command again)."),Object(a.b)("h3",{id:"os-x"},"OS X"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Python 3.5.x"),": ",Object(a.b)("a",{parentName:"li",href:"https://www.python.org/downloads/"},"Download and install"),' the latest Python 3.5.x release. Make sure you check the box "Add Python 3.5 to PATH" on the first page.'),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Docker"),": If using OS X Yosemite or higher, we recommend to ",Object(a.b)("a",{parentName:"li",href:"https://docs.docker.com/engine/installation/mac/"},"install Docker for Mac"),". For Older Macs, ",Object(a.b)("a",{parentName:"li",href:"https://docs.docker.com/toolbox/toolbox_install_mac/"},"install Docker Toolbox"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Git"),": Make sure ",Object(a.b)("inlineCode",{parentName:"li"},"git")," is installed. If not, install it from ",Object(a.b)("a",{parentName:"li",href:"https://git-scm.com/download/mac"},"here")," (note that if using Docker Toolbox, it will install it by default).")),Object(a.b)("p",null,"If using ",Object(a.b)("strong",{parentName:"p"},"Docker for Mac"),', launch the "Docker" application and allow it to set itself up, then open a terminal prompt.'),Object(a.b)("p",null,"If using ",Object(a.b)("strong",{parentName:"p"},"Docker Toolbox"),', launch the "Docker Quickstart Terminal" once installation finishes, and follow the instructions on resizing your VM ',Object(a.b)("a",{parentName:"p",href:"#docker-toolbox-note"},"above"),"."),Object(a.b)("h3",{id:"linux"},"Linux"),Object(a.b)("p",null,"(Instructions are provided for Ubuntu Linux. Other Linuxes will be similar. Use a sudo-er account, but not root)"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Update system & install dependencies")),Object(a.b)("p",null,"Make sure you have Python 3.5. (Ubuntu 14.04 for instance uses Python 3.4 by default), but 16.04 uses 3.5. If you have an Ubuntu version older than 3.4, you can update your Python with ",Object(a.b)("a",{parentName:"p",href:"http://askubuntu.com/a/682875"},"these instructions"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"sudo apt-get update && sudo apt-get upgrade\nsudo apt-get -y install git curl coreutils\n")),Object(a.b)("p",null,"Install docker-ce and docker-compose (see ",Object(a.b)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"here")," for more info, here we use v1.16.1):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"sudo -i # become root\ncurl -fsSL https://get.docker.com/ | sh\ncurl -L https://github.com/docker/compose/releases/download/1.16.1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose\nchmod +x /usr/local/bin/docker-compose\nexit # leave root shell\n")))}d.isMDXComponent=!0}}]);