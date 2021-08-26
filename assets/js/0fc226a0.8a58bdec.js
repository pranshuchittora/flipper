"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[972],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>d,mdx:()=>v,useMDXComponents:()=>c,withMDXComponents:()=>u});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){return function(t){var n=c(t.components);return i.createElement(e,a({},t,{components:n}))}},c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||f[d]||a;return n?i.createElement(m,l(l({ref:t},s),{},{components:n})):i.createElement(m,l({ref:t},s))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36742:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var i=n(63366),r=n(67294),a=n(73727),o=n(52263),l=n(13919),p=n(10412),s=(0,r.createContext)({collectLink:function(){}}),u=n(44996),c=n(18780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const f=function(e){var t,n,f=e.isNavLink,m=e.to,v=e.href,g=e.activeClassName,h=e.isActive,b=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,w=void 0===y||y,_=(0,i.Z)(e,d),N=(0,o.default)().siteConfig,x=N.trailingSlash,O=N.baseUrl,F=(0,u.useBaseUrlUtils)().withBaseUrl,D=(0,r.useContext)(s),k=m||v,P=(0,l.Z)(k),S=null==k?void 0:k.replace("pathname://",""),A=void 0!==S?(n=S,w&&function(e){return e.startsWith("/")}(n)?F(n):n):void 0;A&&P&&(A=(0,c.applyTrailingSlash)(A,{trailingSlash:x,baseUrl:O}));var K,E=(0,r.useRef)(!1),C=f?a.OL:a.rU,I=p.default.canUseIntersectionObserver;(0,r.useEffect)((function(){return!I&&P&&null!=A&&window.docusaurus.prefetch(A),function(){I&&K&&K.disconnect()}}),[A,I,P]);var T=null!==(t=null==A?void 0:A.startsWith("#"))&&void 0!==t&&t,R=!A||!P||T;return A&&P&&!T&&!b&&D.collectLink(A),R?r.createElement("a",Object.assign({href:A},k&&!P&&{target:"_blank",rel:"noopener noreferrer"},_)):r.createElement(C,Object.assign({},_,{onMouseEnter:function(){E.current||null==A||(window.docusaurus.preload(A),E.current=!0)},innerRef:function(e){var t,n;I&&e&&P&&(t=e,n=function(){null!=A&&window.docusaurus.prefetch(A)},(K=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(K.unobserve(t),K.disconnect(),n())}))}))).observe(t))},to:A||""},f&&{isActive:h,activeClassName:g}))}},13919:(e,t,n)=>{function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,{b:()=>i,Z:()=>r})},44996:(e,t,n)=>{n.r(t),n.d(t,{useBaseUrlUtils:()=>a,default:()=>o});var i=n(52263),r=n(13919);function a(){var e=(0,i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var a=void 0===i?{}:i,o=a.forcePrependBaseUrl,l=void 0!==o&&o,p=a.absolute,s=void 0!==p&&p;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},58215:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(67294);const r=function(e){var t=e.children,n=e.hidden,r=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:(e,t,n)=>{n.d(t,{Z:()=>c});var i=n(67294),r=n(79443);const a=function(){var e=(0,i.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var o=n(86010);const l="tabItem_1uMI",p="tabItemActive_2DSg";var s=37,u=39;const c=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,c=e.values,d=e.groupId,f=e.className,m=a(),v=m.tabGroupChoices,g=m.setTabGroupChoices,h=(0,i.useState)(r),b=h[0],y=h[1],w=i.Children.toArray(e.children),_=[];if(null!=d){var N=v[d];null!=N&&N!==b&&c.some((function(e){return e.value===N}))&&y(N)}var x=function(e){var t=e.currentTarget,n=_.indexOf(t),i=c[n].value;y(i),null!=d&&(g(d,i),setTimeout((function(){var e,n,i,r,a,o,l,s;(e=t.getBoundingClientRect(),n=e.top,i=e.left,r=e.bottom,a=e.right,o=window,l=o.innerHeight,s=o.innerWidth,n>=0&&a<=s&&r<=l&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case u:var i=_.indexOf(e.target)+1;n=_[i]||_[0];break;case s:var r=_.indexOf(e.target)-1;n=_[r]||_[_.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":n},f)},c.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.default)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return _.push(e)},onKeyDown:O,onFocus:x,onClick:x},n)}))),t?(0,i.cloneElement)(w.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:(e,t,n)=>{n.d(t,{Z:()=>i});const i=(0,n(67294).createContext)(void 0)},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,i=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var r,a=e.split(/[#?]/)[0],o="/"===a||a===i?a:(r=a,n?function(e){return e.endsWith("/")?e:e+"/"}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));return e.replace(a,o)}},18780:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return i(r).default}});var a=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return i(a).default}})},29964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},18873:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>d,metadata:()=>f,toc:()=>m,default:()=>g});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=n(44996),l=n(36742),p=n(55064),s=n(58215),u=["components"],c={id:"react-native-ios",title:"Manually set up your React Native iOS App",sidebar_label:"Manual iOS Setup"},d=void 0,f={unversionedId:"getting-started/react-native-ios",id:"getting-started/react-native-ios",isDocsHomePage:!1,title:"Manually set up your React Native iOS App",description:"These instructions are aimed at people manually adding Flipper to a React Native 0.62+ app.",source:"@site/../docs/getting-started/react-native-ios.mdx",sourceDirName:"getting-started",slug:"/getting-started/react-native-ios",permalink:"/docs/getting-started/react-native-ios",editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/getting-started/react-native-ios.mdx",version:"current",frontMatter:{id:"react-native-ios",title:"Manually set up your React Native iOS App",sidebar_label:"Manual iOS Setup"},sidebar:"setup",previous:{title:"Manual Android Setup",permalink:"/docs/getting-started/react-native-android"},next:{title:"Troubleshooting Issues",permalink:"/docs/troubleshooting"}},m=[{value:"Dependencies",id:"dependencies",children:[{value:"React Native 0.63+",id:"react-native-063",children:[]},{value:"React Native 0.62",id:"react-native-062",children:[]}]},{value:"Initialization",id:"initialization",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]},{value:"Further Steps",id:"further-steps",children:[]}],v={toc:m};function g(e){var t=e.components,n=(0,r.Z)(e,u);return(0,a.mdx)("wrapper",(0,i.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"These instructions are aimed at people manually adding Flipper to a React Native 0.62+ app.\nThis should only be necessary if you have an existing app that cannot be upgraded with the\n",(0,a.mdx)("a",{parentName:"p",href:"https://reactnative.dev/docs/upgrading"},"React Native Upgrade tool"),"."),(0,a.mdx)("h2",{id:"dependencies"},"Dependencies"),(0,a.mdx)("h3",{id:"react-native-063"},"React Native 0.63+"),(0,a.mdx)("p",null,"If using React Native 0.63 or later, your ",(0,a.mdx)("inlineCode",{parentName:"p"},"ios/Podfile")," should look like this:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-ruby"},"platform :ios, '10.0'\n\nrequire_relative '../node_modules/react-native/scripts/react_native_pods'\nrequire_relative '../node_modules/@react-native-community/cli-platform-ios/native_modules'\n\ntarget 'your-app-name' do\n  config = use_native_modules!\n  use_react_native!(path: config['reactNativePath'])\n\n  # Enables Flipper.\n  #\n  # Note that if you have use_frameworks! enabled, Flipper will not work and\n  # you should disable these next few lines.\n  use_flipper!({'Flipper' => '0.58.0'}) # should match the version of your Flipper client app\n  post_install do |installer|\n    flipper_post_install(installer)\n  end\nend\n")),(0,a.mdx)("p",null,"Install the dependencies by running ",(0,a.mdx)("inlineCode",{parentName:"p"},"cd ios && pod install"),". Then continue to ",(0,a.mdx)("a",{parentName:"p",href:"#initialization"},"Initialization"),"."),(0,a.mdx)("h3",{id:"react-native-062"},"React Native 0.62"),(0,a.mdx)("p",null,"In 0.62, the setup includes a bit more code (which was moved to a helper in 0.63). Add all of the code below to your ",(0,a.mdx)("inlineCode",{parentName:"p"},"ios/Podfile"),":"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-ruby"},"platform :ios, '9.0'\n\ndef flipper_pods()\n  flipperkit_version = '0.104.0' # should match the version of your Flipper client app\n  pod 'FlipperKit', '~>' + flipperkit_version, :configuration => 'Debug'\n  pod 'FlipperKit/FlipperKitLayoutPlugin', '~>' + flipperkit_version, :configuration => 'Debug'\n  pod 'FlipperKit/SKIOSNetworkPlugin', '~>' + flipperkit_version, :configuration => 'Debug'\n  pod 'FlipperKit/FlipperKitUserDefaultsPlugin', '~>' + flipperkit_version, :configuration => 'Debug'\n  pod 'FlipperKit/FlipperKitReactPlugin', '~>' + flipperkit_version, :configuration => 'Debug'\nend\n\n# Post Install processing for Flipper\ndef flipper_post_install(installer)\n  file_name = Dir.glob(\"*.xcodeproj\")[0]\n  app_project = Xcodeproj::Project.open(file_name)\n  app_project.native_targets.each do |target|\n    target.build_configurations.each do |config|\n      cflags = config.build_settings['OTHER_CFLAGS'] || '$(inherited) '\n      unless cflags.include? '-DFB_SONARKIT_ENABLED=1'\n        puts 'Adding -DFB_SONARKIT_ENABLED=1 in OTHER_CFLAGS...'\n        cflags << '-DFB_SONARKIT_ENABLED=1'\n      end\n      config.build_settings['OTHER_CFLAGS'] = cflags\n    end\n    app_project.save\n  end\n  installer.pods_project.save\nend\n\ntarget 'your-app-name' do\n  ...\n  # Replace the existing yoga import with the following (adding modular_headers):\n  pod 'Yoga', :path => '../node_modules/react-native/ReactCommon/yoga', :modular_headers => true\n  ...\n  use_native_modules!\n\n  # For enabling Flipper.\n  # Note that if you use_framework!, flipper will not work.\n  # Disable these lines if you are doing use_framework!\n  flipper_pods()\n  post_install do |installer|\n    flipper_post_install(installer)\n  end\nend\n")),(0,a.mdx)("p",null,"Install the dependencies by running ",(0,a.mdx)("inlineCode",{parentName:"p"},"cd ios && pod install"),". You can now\nimport and initialize Flipper in your AppDelegate."),(0,a.mdx)("h2",{id:"initialization"},"Initialization"),(0,a.mdx)("p",null,"The code below enables the following integrations:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Layout Inspector"),(0,a.mdx)("li",{parentName:"ul"},"Network"),(0,a.mdx)("li",{parentName:"ul"},"Shared Preferences"),(0,a.mdx)("li",{parentName:"ul"},"Crash Reporter")),(0,a.mdx)(p.Z,{defaultValue:"ios",values:[{label:"iOS",value:"ios"},{label:"Swift",value:"swift"}],mdxType:"Tabs"},(0,a.mdx)(s.Z,{value:"ios",mdxType:"TabItem"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-objc"},"...\n#if DEBUG\n#ifdef FB_SONARKIT_ENABLED\n#import <FlipperKit/FlipperClient.h>\n#import <FlipperKitLayoutPlugin/FlipperKitLayoutPlugin.h>\n#import <FlipperKitLayoutPlugin/SKDescriptorMapper.h>\n#import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>\n#import <FlipperKitReactPlugin/FlipperKitReactPlugin.h>\n#import <FlipperKitUserDefaultsPlugin/FKUserDefaultsPlugin.h>\n#import <SKIOSNetworkPlugin/SKIOSNetworkAdapter.h>\n#endif\n#endif\n\n@implementation AppDelegate\n\n- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions\n{\n  [self initializeFlipper:application];\n  ...\n}\n\n- (void) initializeFlipper:(UIApplication *)application {\n  #if DEBUG\n  #ifdef FB_SONARKIT_ENABLED\n    FlipperClient *client = [FlipperClient sharedClient];\n    SKDescriptorMapper *layoutDescriptorMapper = [[SKDescriptorMapper alloc] initWithDefaults];\n    [client addPlugin: [[FlipperKitLayoutPlugin alloc] initWithRootNode: application withDescriptorMapper: layoutDescriptorMapper]];\n    [client addPlugin: [[FKUserDefaultsPlugin alloc] initWithSuiteName:nil]];\n    [client addPlugin: [FlipperKitReactPlugin new]];\n    [client addPlugin: [[FlipperKitNetworkPlugin alloc] initWithNetworkAdapter:[SKIOSNetworkAdapter new]]];\n    [client start];\n  #endif\n  #endif\n}\n\n@end\n"))),(0,a.mdx)(s.Z,{value:"swift",mdxType:"TabItem"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-swift"},"...\n#if DEBUG\n#if FB_SONARKIT_ENABLED\nimport FlipperKit\n#endif\n#endif\n\n@UIApplicationMain\nclass AppDelegate: UIResponder, UIApplicationDelegate {\n\n  func application(\n      _ application: UIApplication,\n      didFinishLaunchingWithOptions\n      launchOptions: [UIApplication.LaunchOptionsKey: Any]?\n    ) -> Bool {\n    initializeFlipper(with: application)\n    ...\n  }\n\n  private func initializeFlipper(with application: UIApplication) {\n    #if DEBUG\n    #if FB_SONARKIT_ENABLED\n      let client = FlipperClient.shared()\n      let layoutDescriptorMapper = SKDescriptorMapper(defaults: ())\n      FlipperKitLayoutComponentKitSupport.setUpWith(layoutDescriptorMapper)\n      client?.add(FlipperKitLayoutPlugin(rootNode: application, with: layoutDescriptorMapper!))\n      client?.add(FKUserDefaultsPlugin(suiteName: nil))\n      client?.add(FlipperKitReactPlugin())\n      client?.add(FlipperKitNetworkPlugin(networkAdapter: SKIOSNetworkAdapter()))\n      client?.add(FlipperReactPerformancePlugin.sharedInstance())\n      client?.start()\n    #endif\n    #endif\n  }\n}\n")))),(0,a.mdx)("p",null,"Lastly, open the Flipper desktop app, and run ",(0,a.mdx)("inlineCode",{parentName:"p"},"yarn ios")," in your terminal."),(0,a.mdx)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.mdx)("p",null,"See the ",(0,a.mdx)(l.default,{to:(0,o.default)("/docs/troubleshooting"),mdxType:"Link"},"troubleshooting page")," for help with known problems."),(0,a.mdx)("h2",{id:"further-steps"},"Further Steps"),(0,a.mdx)("p",null,"To create your own plugins and integrate with Flipper using JavaScript, check out our ",(0,a.mdx)(l.default,{to:(0,o.default)("/docs/tutorial/react-native"),mdxType:"Link"},"writing plugins for React Native")," tutorial!"))}g.isMDXComponent=!0},86010:(e,t,n)=>{function i(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}n.r(t),n.d(t,{default:()=>r})}}]);