(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{143:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),b=i,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||r;return t?a.a.createElement(f,l(l({ref:n},u),{},{components:t})):a.a.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},145:function(e,n,t){"use strict";t.r(n);var i=t(0),a=t(20);n.default=function(){var e=Object(i.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},148:function(e,n,t){"use strict";function i(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=i(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=i(e))&&(a&&(a+=" "),a+=n);return a}},150:function(e,n,t){"use strict";var i=t(0),a=t(151);n.a=function(){var e=Object(i.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},151:function(e,n,t){"use strict";var i=t(0),a=Object(i.createContext)(void 0);n.a=a},153:function(e,n,t){"use strict";var i=t(0),a=t.n(i),r=t(150),o=t(148),l=t(55),c=t.n(l),u=37,s=39;n.a=function(e){var n=e.lazy,t=e.block,l=e.children,p=e.defaultValue,d=e.values,b=e.groupId,f=e.className,g=Object(r.a)(),m=g.tabGroupChoices,h=g.setTabGroupChoices,v=Object(i.useState)(p),y=v[0],O=v[1];if(null!=b){var j=m[b];null!=j&&j!==y&&d.some((function(e){return e.value===j}))&&O(j)}var w=function(e){O(e),null!=b&&h(b,e)},P=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},f)},d.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===n,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===n}),key:n,ref:function(e){return P.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case s:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case u:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(P,e.target,e)},onFocus:function(){return w(n)},onClick:function(){w(n)}},t)}))),n?Object(i.cloneElement)(l.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},l.map((function(e,n){return Object(i.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))}},154:function(e,n,t){"use strict";var i=t(3),a=t(0),r=t.n(a);n.a=function(e){var n=e.children,t=e.hidden,a=e.className;return r.a.createElement("div",Object(i.a)({role:"tabpanel"},{hidden:t,className:a}),n)}},156:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return a})),t.d(n,"useAllPluginInstancesData",(function(){return r})),t.d(n,"usePluginData",(function(){return o}));var i=t(145);function a(){var e=Object(i.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function r(e){var n=a()[e];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return n}function o(e,n){void 0===n&&(n="default");var t=r(e)[n];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+n);return t}},157:function(e,n,t){"use strict";var i=this&&this.__awaiter||function(e,n,t,i){return new(t||(t=Promise))((function(a,r){function o(e){try{c(i.next(e))}catch(n){r(n)}}function l(e){try{c(i.throw(e))}catch(n){r(n)}}function c(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}c((i=i.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let a=!1,r=0;const o={};n.call=function(e){return i(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));a||(a=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in o||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?o[n].resolve(e.data.response):o[n].reject(new Error(e.data.error)),delete o[n]})));const n=r++,t=new Promise(((e,t)=>{o[n]={resolve:e,reject:t}})),i={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},l="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(i,l),t}))}},161:function(e,n,t){"use strict";(function(e){var i=this&&this.__createBinding||(Object.create?function(e,n,t,i){void 0===i&&(i=t),Object.defineProperty(e,i,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,i){void 0===i&&(i=t),e[i]=n[t]}),a=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&i(n,e,t);return a(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.uidocs=n.bloks=void 0,n.bloks=r(t(163)),n.uidocs=r(t(164));const o=["internal","external"];let l;try{l=t(156).usePluginData}catch(d){l=null}function c(e){return s(e),p()?"internal"in e?u(e.internal):[]:"external"in e?u(e.external):[]}function u(e){return"function"==typeof e?e():e}function s(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const n=Object.keys(e).filter((e=>!o.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${o}`)}function p(){return e.env.FB_INTERNAL||l&&l("internaldocs-fb").FB_INTERNAL}n.fbContent=c,n.fbInternalOnly=function(e){return c({internal:e})},n.validateFbContentArgs=s,n.isInternal=p,n.FbInternalOnly=function(e){return p()?e.children:null},n.OssOnly=function(e){return p()?null:e.children}}).call(this,t(162))},162:function(e,n){var t,i,a=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(e){t=r}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(e){i=o}}();var c,u=[],s=!1,p=-1;function d(){s&&c&&(s=!1,c.length?u=c.concat(u):p=-1,u.length&&b())}function b(){if(!s){var e=l(d);s=!0;for(var n=u.length;n;){for(c=u,u=[];++p<n;)c&&c[p].run();p=-1,n=u.length}c=null,s=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(n){try{return i.call(null,e)}catch(n){return i.call(this,e)}}}(e)}}function f(e,n){this.fun=e,this.array=n}function g(){}a.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];u.push(new f(e,n)),1!==u.length||s||l(b)},f.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=g,a.addListener=g,a.once=g,a.off=g,a.removeListener=g,a.removeAllListeners=g,a.emit=g,a.prependListener=g,a.prependOnceListener=g,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},163:function(e,n,t){"use strict";var i=this&&this.__awaiter||function(e,n,t,i){return new(t||(t=Promise))((function(a,r){function o(e){try{c(i.next(e))}catch(n){r(n)}}function l(e){try{c(i.throw(e))}catch(n){r(n)}}function c(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}c((i=i.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const a=t(157);n.getSpecInfo=function(e){return i(this,void 0,void 0,(function*(){return yield a.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},164:function(e,n,t){"use strict";var i=this&&this.__awaiter||function(e,n,t,i){return new(t||(t=Promise))((function(a,r){function o(e){try{c(i.next(e))}catch(n){r(n)}}function l(e){try{c(i.throw(e))}catch(n){r(n)}}function c(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}c((i=i.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getApi=n.docsets=void 0;const a=t(157);n.docsets={BLOKS_CORE:"887372105406659"},n.getApi=function(e){return i(this,void 0,void 0,(function*(){const{name:n,framework:t,docset:i}=e;return yield a.call({module:"uidocs",api:"getApi",args:{name:n,framework:t,docset:i}})}))}},95:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return u})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return b}));var i=t(3),a=t(7),r=(t(0),t(143)),o=t(153),l=t(154),c=t(161),u={id:"create-plugin",title:"Client Plugin API"},s={unversionedId:"extending/create-plugin",id:"extending/create-plugin",isDocsHomePage:!1,title:"Client Plugin API",description:"FlipperPlugin",source:"@site/../docs/extending/create-plugin.mdx",slug:"/extending/create-plugin",permalink:"/docs/extending/create-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/extending/create-plugin.mdx",version:"current",sidebar:"extending",previous:{title:"Desktop Plugin API",permalink:"/docs/extending/js-plugin-api"},next:{title:"Error Handling",permalink:"/docs/extending/error-handling"}},p=[{value:"FlipperPlugin",id:"flipperplugin",children:[]},{value:"Using FlipperConnection",id:"using-flipperconnection",children:[]},{value:"Push data to the desktop",id:"push-data-to-the-desktop",children:[{value:"Using a plugin instance to send data",id:"using-a-plugin-instance-to-send-data",children:[]}]},{value:"Background Plugins",id:"background-plugins",children:[]}],d={rightToc:p};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"flipperplugin"},"FlipperPlugin"),Object(r.b)("p",null,"The plugin implementation that runs on the (mobile) application side of things is called the ",Object(r.b)("em",{parentName:"p"},"client plugin")," in Flipper terminology.\nTo build a client plugin, implement the ",Object(r.b)("inlineCode",{parentName:"p"},"FlipperPlugin")," interface."),Object(r.b)("p",null,"The ID that is returned from your implementation needs to match the ",Object(r.b)("inlineCode",{parentName:"p"},"name")," defined in your JavaScript counterpart's ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(r.b)(o.a,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"},{label:"C++",value:"cpp"},{label:"React Native (JS)",value:"rn"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"android",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),'public class MyFlipperPlugin implements FlipperPlugin {\n  private FlipperConnection mConnection;\n\n  @Override\n  public String getId() {\n    return "MyFlipperPlugin";\n  }\n\n  @Override\n  public void onConnect(FlipperConnection connection) throws Exception {\n    mConnection = connection;\n  }\n\n  @Override\n  public void onDisconnect() throws Exception {\n    mConnection = null;\n  }\n\n  @Override\n  public boolean runInBackground() {\n    return false;\n  }\n}\n'))),Object(r.b)(l.a,{value:"ios",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objective-c"}),'@interface MyFlipperPlugin : NSObject<FlipperPlugin>\n@end\n\n@implementation MyFlipperPlugin\n\n- (NSString*)identifier { return @"MyFlipperPlugin"; }\n- (void)didConnect:(FlipperConnection*)connection {}\n- (void)didDisconnect {}\n- (BOOL)runInBackground {}\n\n@end\n'))),Object(r.b)(l.a,{value:"cpp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),'class MyFlipperPlugin : public FlipperPlugin {\npublic:\n  std::string identifier() const override { return "MyFlipperPlugin"; }\n  void didConnect(std::shared_ptr<FlipperConnection> conn) override;\n  void didDisconnect() override;\n  bool runInBackground() override;\n};\n'))),Object(r.b)(l.a,{value:"rn",mdxType:"TabItem"},Object(r.b)("div",{class:"warning"},Object(r.b)("p",null,"Please note that using Flipper from JavaScript in React Native requires the package ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.npmjs.com/package/react-native-flipper"}),Object(r.b)("inlineCode",{parentName:"a"},"react-native-flipper"))," to be installed in the hosting application.")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"import {addPlugin} from 'react-native-flipper';\n\naddPlugin({\n  getId() {\n    return 'MyFlipperPlugin';\n  },\n  onConnect(connection) {\n    console.log(\"connected\");\n  },\n  onDisconnect() {\n    console.log(\"disconnected\");\n  },\n  runInBackground() {\n    return false;\n  }\n})\n")))),Object(r.b)("h2",{id:"using-flipperconnection"},"Using FlipperConnection"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"onConnect")," will be called when your plugin becomes active. This will provide a ",Object(r.b)("inlineCode",{parentName:"p"},"FlipperConnection")," allowing you to register receivers for desktop method calls and respond with data."),Object(r.b)(o.a,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"},{label:"C++",value:"cpp"},{label:"React Native (JS)",value:"rn"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"android",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),'connection.receive("getData", new FlipperReceiver() {\n  @Override\n  public void onReceive(FlipperObject params, FlipperResponder responder) throws Exception {\n    responder.success(\n        new FlipperObject.Builder()\n            .put("data", MyData.get())\n            .build());\n  }\n});\n'))),Object(r.b)(l.a,{value:"ios",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objective-c"}),'@interface MyFlipperPlugin : NSObject<FlipperPlugin>\n@end\n\n@implementation MyFlipperPlugin\n\n- (NSString*)identifier { return @"MyFlipperPlugin"; }\n\n- (void)didConnect:(FlipperConnection*)connection\n{\n  [connection receive:@"getData" withBlock:^(NSDictionary *params, FlipperResponder *responder) {\n    [responder success:@{\n      @"data":[MyData get],\n    }];\n  }];\n}\n\n- (void)didDisonnect {}\n\n@end\n'))),Object(r.b)(l.a,{value:"cpp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),'void MyFlipperPlugin::didConnect(std::shared_ptr<FlipperConnection> conn) {\n  conn->receive("getData", [](const folly::dynamic &params,\n                             std::unique_ptr<FlipperResponder> responder) {\n    dynamic response = folly::dynamic::object("data", getMyData());\n    responder->success(response);\n  });\n}\n'))),Object(r.b)(l.a,{value:"rn",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),'addPlugin({\n  getId() {\n    return \'MyFlipperPlugin\';\n  },\n  onConnect(connection) {\n    console.log("connected");\n    connection.receive("getData", (data, responder) => {\n      console.log("incoming data", data);\n      // respond with some data\n      responder.success({\n        ack: true\n      });\n    });\n  },\n  // ...as-is\n})\n')))),Object(r.b)("h2",{id:"push-data-to-the-desktop"},"Push data to the desktop"),Object(r.b)("p",null,"You don't have to wait for the desktop to request data though, you can also push data directly to the desktop. If the JS plugin subscribes to the same method, it will receive the data."),Object(r.b)(o.a,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"},{label:"C++",value:"cpp"},{label:"React Native (JS)",value:"rn"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"android",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),'connection.send("MyMessage",\n    new FlipperObject.Builder()\n        .put("message", "Hello")\n        .build()\n'))),Object(r.b)(l.a,{value:"ios",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objective-c"}),'[connection send:@"getData" withParams:@{@"message":@"hello"}];\n'))),Object(r.b)(l.a,{value:"cpp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),'void MyFlipperPlugin::didConnect(std::shared_ptr<FlipperConnection> conn) {\n  dynamic message = folly::dynamic::object("message", "hello");\n  conn->send("getData", message);\n}\n'))),Object(r.b)(l.a,{value:"rn",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),'addPlugin({\n  getId() {\n    return \'MyFlipperPlugin\';\n  },\n  onConnect(connection) {\n    console.log("connected");\n    connection.send("newRow", { message: "Hello" });\n  },\n  // ...as-is\n})\n')))),Object(r.b)("h3",{id:"using-a-plugin-instance-to-send-data"},"Using a plugin instance to send data"),Object(r.b)("p",null,"It is often useful to get an instance of a Flipper plugin to send data to it. Flipper makes this simple with built-in support."),Object(r.b)(c.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(r.b)("h4",{id:"dependency-injection-android-only"},"Dependency Injection (Android only)"),Object(r.b)("p",null,"The preferred method to obtain a plugin instance is to use dependency injection when available.\nFor apps like fb4a that use dependency injection, a Module should have already been created by the create-plugin script.\nThis module will define a Singleton instance of your plugin that gets added to the FlipperClient."),Object(r.b)("p",null,"You should use this instance of the plugin, by having it injected into your product code by the DI framework.\nAlternatively, you can modify the plugin's injection module so that it injects a component into the FlipperPlugin.")),Object(r.b)("h4",{id:"using-flipperclient-to-obtain-a-plugin-instance"},"using FlipperClient to obtain a plugin instance"),Object(r.b)("p",null,"Plugins should be treated as singleton instances as there can only be one ",Object(r.b)("inlineCode",{parentName:"p"},"FlipperClient")," and each ",Object(r.b)("inlineCode",{parentName:"p"},"FlipperClient")," can only have one instance of a certain plugin. The Flipper API makes this simple by offering a way to get the current client and query it for plugins."),Object(r.b)("p",null,'Plugins are identified by the string that their identifier method returns, in this example, "MyFlipperPlugin". Note that null checks may be required as plugins may not be initialized, for example in production builds.'),Object(r.b)(o.a,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"android",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"final FlipperClient client = AndroidFlipperClient.getInstanceIfInitialized(context);\nif (client != null) {\n  final MyFlipperPlugin plugin = client.getPluginByClass(MyFlipperPlugin.class);\n  plugin.sendData(myData);\n}\n"))),Object(r.b)(l.a,{value:"ios",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objective-c"}),'FlipperClient *client = [FlipperClient sharedClient];\nMyFlipperPlugin *myPlugin = [client pluginWithIdentifier:@"MyFlipperPlugin"];\n[myPlugin sendData:myData];\n'))),Object(r.b)(l.a,{value:"cpp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),'auto& client = FlipperClient::instance();\nauto myPlugin = client.getPlugin<MyFlipperPlugin>("MyFlipperPlugin");\nif (myPlugin) {\n  myPlugin->sendData(myData);\n}\n')))),Object(r.b)("p",null,"Here, ",Object(r.b)("inlineCode",{parentName:"p"},"sendData")," is an example of a method that might be implemented by the Flipper plugin."),Object(r.b)("h2",{id:"background-plugins"},"Background Plugins"),Object(r.b)("p",null,"In some cases you may want to provide data to Flipper even when your plugin is not currently active. Returning true in ",Object(r.b)("inlineCode",{parentName:"p"},"runInBackground()")," will result in ",Object(r.b)("inlineCode",{parentName:"p"},"onConnect")," being called as soon as Flipper connects, and allow you to use the connection at any time. See the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"client-plugin-lifecycle"}),"Client Plugin Lifecycle")," for more details."),Object(r.b)("p",null,"This should be used in combination with a ",Object(r.b)("inlineCode",{parentName:"p"},"persistedStateReducer")," on the desktop side. See the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"js-plugin-api#background-plugins"}),"JS Plugin API")," for details."),Object(r.b)("p",null,"The benefit is that the desktop plugin can process this data in the background and fire notifications. It also reduces the number of renders and time taken to display the data when the plugin becomes active."),Object(r.b)("div",{class:"warning"},Object(r.b)("p",null,"Please note that a background plugin could keep some data in memory until a Flipper connection is available, for example to keep statistics about the app startup process.\nHowever, a plugin shouldn't assume it will eventually get a connection, since this depends on whether the user has enabled the plugin on the Desktop side.\nSo make sure to not store unbounded amounts of data!")))}b.isMDXComponent=!0}}]);