(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=o,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||a;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var o=n(3),r=n(7),a=(n(0),n(126)),i={title:"Writing counterblock Plug-in Modules"},s={unversionedId:"develop/counterblock/modules",id:"develop/counterblock/modules",isDocsHomePage:!1,title:"Writing counterblock Plug-in Modules",description:"`counterblock` is a modular application that allows developers to turn on or off various bits of its out-of-the-box functionality, as well as extending it with new functionality, through its plug-in architecture.",source:"@site/docs/develop/counterblock/modules.md",slug:"/develop/counterblock/modules",permalink:"/docs/develop/counterblock/modules",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/develop/counterblock/modules.md",version:"current",sidebar:"develop",previous:{title:"Counterblock API",permalink:"/docs/develop/counterblock/api"},next:{title:"Contributing",permalink:"/docs/develop/contributing"}},l=[{value:"Built-in Modules",id:"built-in-modules",children:[]},{value:"Custom Module Development",id:"custom-module-development",children:[{value:"Processors: Hooking into runtime functionality",id:"processors-hooking-into-runtime-functionality",children:[]},{value:"MessageProcessor",id:"messageprocessor",children:[]},{value:"MempoolMessageProcessor",id:"mempoolmessageprocessor",children:[]},{value:"BlockProcessor",id:"blockprocessor",children:[]},{value:"StartUpProcessor",id:"startupprocessor",children:[]},{value:"CaughtUpProcessor",id:"caughtupprocessor",children:[]},{value:"RollbackProcessor",id:"rollbackprocessor",children:[]}]},{value:"Other integration points",id:"other-integration-points",children:[{value:"config.state",id:"configstate",children:[]},{value:"Enhancing the API",id:"enhancing-the-api",children:[]},{value:"start_task",id:"start_task",children:[]}]},{value:"Module configuration file",id:"module-configuration-file",children:[]},{value:"Command-line functions",id:"command-line-functions",children:[]}],c={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"counterblock")," is a modular application that allows developers to turn on or off various bits of its out-of-the-box functionality, as well as extending it with new functionality, through its plug-in architecture."),Object(a.b)("p",null,"This document introduces the built-in modules, as well as discussing how you can write your own custom modules for ",Object(a.b)("inlineCode",{parentName:"p"},"counterblock")," that extend its functionality beyond what is possible out of the box."),Object(a.b)("h2",{id:"built-in-modules"},"Built-in Modules"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"counterblock")," ships with the following built-in modules:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"assets"),": Implements basic asset functionality, such as extended asset info parsing, basic asset-related APIs, and more."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"betting"),": Implements betting-specific API calls, tasks, and more."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"dex"),": Implements API methods, order book and market info parsing, and more for Counterparty's distributed exchange. (Requires that the ",Object(a.b)("inlineCode",{parentName:"li"},"assets")," module be loaded for use.)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"transaction_stats"),": Handles the compliation of transaction statistics."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"counterwallet"),": Implements Counterwallet-specific API calls, tasks, and more. (Requires that the ",Object(a.b)("inlineCode",{parentName:"li"},"assets")," module be loaded for use.)")),Object(a.b)("p",null,"Any of these above modules may be enabled or disabled, allowing you to tune ",Object(a.b)("inlineCode",{parentName:"p"},"counterblock")," to your exact needs out of the box."),Object(a.b)("h2",{id:"custom-module-development"},"Custom Module Development"),Object(a.b)("p",null,"A ",Object(a.b)("inlineCode",{parentName:"p"},"counterblock")," module is simply a python module that utilizes a special plug-in API, to provide runtime integration into the ",Object(a.b)("inlineCode",{parentName:"p"},"counterblock")," base code."),Object(a.b)("p",null,"For some examples of modules in use, check out the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/CounterpartyXCP/counterblock/tree/master/counterblock/lib/modules"},"modules directory")," of the ",Object(a.b)("inlineCode",{parentName:"p"},"counterblock")," respository. These built-in modules are written just like any custom module would be, and provide a good launching point to see what is possible."),Object(a.b)("h3",{id:"processors-hooking-into-runtime-functionality"},"Processors: Hooking into runtime functionality"),Object(a.b)("p",null,"Most of the API functionality follows a specific Python decorator type syntax, to integrate into things like blockchain message processing, block level processing, startup/initialization processing and more. The general syntax is:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"    from lib.processor import <processor_name>\n    \n    @<processor_name>.subscribe(enabled=<bool>, priority=<int>)\n    def my_function(param1, param2):\n        bla = do_foo()\n")),Object(a.b)("p",null,"Some other notes on processors:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"If not specified, the defaults are ",Object(a.b)("inlineCode",{parentName:"li"},"enabled=true, priority=0"),"."),Object(a.b)("li",{parentName:"ul"},"When a processor is triggered methods are run in order of priority from highest to lowest."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"Please note that any priority less than ",Object(a.b)("inlineCode",{parentName:"em"},"0")," or greater than ",Object(a.b)("inlineCode",{parentName:"em"},"1000")," is reserved for internal ",Object(a.b)("inlineCode",{parentName:"em"},"counterblock"),"\nfunctionality, and custom plugins should only utilize priority settings under this number."))),Object(a.b)("h3",{id:"messageprocessor"},"MessageProcessor"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"MessageProcessor")," runs once for each message as obtained from the ",Object(a.b)("inlineCode",{parentName:"p"},"counterpartyd")," message feed, for all activity that has been confirmed on the blockchain (i.e. at least 1 Bitcoin confirmation). ",Object(a.b)("inlineCode",{parentName:"p"},"msg")," will pass the message in the same format as the ",Object(a.b)("inlineCode",{parentName:"p"},"get_messages")," counterpartyd api method, msg_data corresponds to ",Object(a.b)("inlineCode",{parentName:"p"},"json.loads(msg['bindings'])"),". "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"    @MessageProcessor.subscribe(enabled=True, priority=90) \n    def custom_received_xcp_alert(msg, msg_data):\n        if msg['category'] != 'sends': return\n        if message['status'] != 'valid': return\n        if not msg_data['destination'] in MY_ADDRESS_LIST: return\n        if not msg_data['asset'] == 'XCP': return \n        print('Received %s XCP at My Address %s from %s' %(\n            (float(msg_data['quantity'])/10**8), msg_data['destination'], msg_data['source']))\n        return\n")),Object(a.b)("p",null,"Note that with ",Object(a.b)("inlineCode",{parentName:"p"},"MessageProcessor")," handlers, you can return ",Object(a.b)("inlineCode",{parentName:"p"},"'ABORT_THIS_MESSAGE_PROCESSING'")," to prevent the running of further MessageProcessors (i.e. of lesser priority than the current one) for the message being currently processed."),Object(a.b)("h3",{id:"mempoolmessageprocessor"},"MempoolMessageProcessor"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"MempoolMessageProcessor")," works similar to ",Object(a.b)("inlineCode",{parentName:"p"},"MessageProcessor"),", however, for messages out the mempool (i.e.\nthat are not confirmed and included on the blockchain yet). The format of the data supplied to the processor is slightly different though, and looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"    @MempoolMessageProcessor.subscribe(enabled=True, priority=90) \n    def custom_received_xcp_alert(msg, msg_data):\n        assert msg['_message_index'] == 'mempool'\n        assert msg['tx_hash']\n        assert msg['command']\n        assert msg['category']\n        assert msg_data #the actual message data\n        assert msg['timestamp']\n        assert msg['viewed_in_block']\n        \n        #prevent running of further MempoolMessageProcessor's of lesser priority for the message being processed\n        return 'ABORT_THIS_MESSAGE_PROCESSING'\n")),Object(a.b)("h3",{id:"blockprocessor"},"BlockProcessor"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"BlockProcessor")," run once per new block, after all ",Object(a.b)("inlineCode",{parentName:"p"},"MessageProcessor")," functions have completed. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"    @BlockProcessor.subscribe(priority=0) \n    def alertBlock(): \n        print('Finished processing messages for this block')\n")),Object(a.b)("h3",{id:"startupprocessor"},"StartUpProcessor"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"StartUpProcessor")," runs once on ",Object(a.b)("inlineCode",{parentName:"p"},"counterblock")," startup. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"    @StartUpProcessor.subscribe()\n    def my_db_config(): \n        config.my_db = pymongo.Connection()['my_db'] \n")),Object(a.b)("h3",{id:"caughtupprocessor"},"CaughtUpProcessor"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"CaughtUpProcessor")," runs once when ",Object(a.b)("inlineCode",{parentName:"p"},"counterblock")," catches up to the latest Counterpartyd block. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"    @CaughtUpProcessor.subscribe()\n    def caughtUpAlert(): \n        print('counterblock is now caught up to Counterpartyd!') \n")),Object(a.b)("h3",{id:"rollbackprocessor"},"RollbackProcessor"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"RollbackProcessor")," runs whenever the ",Object(a.b)("inlineCode",{parentName:"p"},"counterblock")," database is rolled back (either due to a blockchain\nreorg, or an explicit rollback command being specified to ",Object(a.b)("inlineCode",{parentName:"p"},"counterblock")," via the command line)."),Object(a.b)("p",null,"Note that if this processor runs and ",Object(a.b)("inlineCode",{parentName:"p"},"None")," is passed as ",Object(a.b)("inlineCode",{parentName:"p"},"max_block_index"),", it means that there was a reparse of\nall block data."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"    @RollbackProcessor.subscribe()\n    def rollbackAlert(max_block_index): \n        print('counterblock block database rolled back! Anything newer than block index %i removed!' % max_block_index) \n")),Object(a.b)("h2",{id:"other-integration-points"},"Other integration points"),Object(a.b)("h3",{id:"configstate"},"config.state"),Object(a.b)("p",null,"A number of internal state variables that a module may need to access are stored in ",Object(a.b)("inlineCode",{parentName:"p"},"config.state"),"."),Object(a.b)("p",null,"For example, if you want to run a process for every new block (but not when counterblock is catching up): "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"    @BlockProcessor.subscribe() \n    def my_custom_block_event(): \n        if not (config.state['cpd_latest_block_index'] - config.state['my_latest_block']['block_index']) == 1: \n            return\n        #Do stuff here\n")),Object(a.b)("h3",{id:"enhancing-the-api"},"Enhancing the API"),Object(a.b)("p",null,"To add an API method for ",Object(a.b)("inlineCode",{parentName:"p"},"counterblock")," to provide: "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"    from lib.processor import API\n    \n    #(note that the dispatcher add_method does not take arguments) \n    @API.add_method\n    def my_foo_api_method(): \n        return 'bar'\n")),Object(a.b)("p",null,"Upon doing the above, ",Object(a.b)("inlineCode",{parentName:"p"},"my_foo_api_method")," is now a valid API method, and callable from any client that that utilizes your ",Object(a.b)("inlineCode",{parentName:"p"},"counterblock")," JSON RPC API."),Object(a.b)("h3",{id:"start_task"},"start_task"),Object(a.b)("p",null,"To start a task that runs in a seperate lightweight thread (either immediately, or with a delay), use ",Object(a.b)("inlineCode",{parentName:"p"},"start_task"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'    from lib.processor import start_task\n    \n    def run_my_task():\n        print("Foo bar!!")\n        #start again in 5 minutes\n        start_task(run_my_task, delay=5*60)\n        \n    #start task the first time with no delay\n    start_task(run_my_task)\n')),Object(a.b)("h2",{id:"module-configuration-file"},"Module configuration file"),Object(a.b)("p",null,"After creating your module, you will need to tell ",Object(a.b)("inlineCode",{parentName:"p"},"counterblock")," about it, so that it can load it on startup. To do this, you should edit (or create) a file called ",Object(a.b)("inlineCode",{parentName:"p"},"modules.conf")," (or ",Object(a.b)("inlineCode",{parentName:"p"},"modules.testnet.conf")," for testnet), which should be located in the counterblock ",Object(a.b)("inlineCode",{parentName:"p"},"config-dir")," (",Object(a.b)("inlineCode",{parentName:"p"},"~xcp/.config/counterblock")," on a federated node)."),Object(a.b)("p",null,"To load your custom module, specify the module's path under ",Object(a.b)("inlineCode",{parentName:"p"},"[LoadModule]")," relative to the ",Object(a.b)("inlineCode",{parentName:"p"},"counterblock base-dir"),". i.e.:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"[LoadModule]\n'lib/vendor' = True\n")),Object(a.b)("p",null,"The above configuration would look for a ",Object(a.b)("inlineCode",{parentName:"p"},"vendor.py"),", or ",Object(a.b)("inlineCode",{parentName:"p"},"vendor")," folder (with required ",Object(a.b)("inlineCode",{parentName:"p"},"__init__.py")," file present), and load the plugin code from there. Note that you should not include any ",Object(a.b)("inlineCode",{parentName:"p"},".py")," suffix on the filename."),Object(a.b)("p",null,"To change the default behavior for ",Object(a.b)("inlineCode",{parentName:"p"},"counterblock")," modules/events, change the corresponding processor config. For instance:"),Object(a.b)("p",null,"To disable a processor:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"#(must be bool)\n[BlockProcessor]\ngenerate_wallet_stats = False\n")),Object(a.b)("p",null,"To change a processor's priority:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"#(must be int) \n[MessageProcessor]\nparse_issuance = 5\n")),Object(a.b)("p",null,"To change priority and enable:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"#(tuple, order does not matter)\n[MessageProcessor]\nparse_issuance = 5, True \nparse_issuance = True, 5\n")),Object(a.b)("p",null,"Here's an extensive ",Object(a.b)("inlineCode",{parentName:"p"},"counterblock")," ",Object(a.b)("inlineCode",{parentName:"p"},"modules.conf")," example config file:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"[MessageProcessor]\n#Tweak core messaging processing\n# (don't use these unless you know what you're doing)\nhandle_exceptional = True\nhandle_invalid = True\nparse_insert = True\nhandle_reorg = True\nparse_issuance = 10, True\nparse_balance_change = True\nparse_trade_book = True\nparse_broadcast = True\n\n[StartUpProcessor]\n#Enable/disable core functionality (all enabled by\n# default, don't use these unless you know what you're doing)\nstart_cpd_blockfeed = True\ncheck_blockchain_service = True\nexpire_stale_orders = True\nstart_api = True\n\n[LoadModule]\n#Load custom modules\nlib/modules/reparse_timer = True\n")),Object(a.b)("p",null,"Please note that function names must be exact."),Object(a.b)("h2",{id:"command-line-functions"},"Command-line functions"),Object(a.b)("p",null,"Counterblock also provides the ability to load/unload/disable/etc modules via the command line. (Although, please note that we recommend manually editing the appropriate ",Object(a.b)("inlineCode",{parentName:"p"},"modules")," config file(s), at least for starters.)"),Object(a.b)("p",null,"To enable a custom module, run the following command:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"counterblock enmod 'lib/vendor'\n")),Object(a.b)("p",null,"To disable a loaded module:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"counterblock dismod 'lib/vendor' \n")),Object(a.b)("p",null,"To list loaded modules and processors:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"counterblock listmod\n")))}b.isMDXComponent=!0}}]);