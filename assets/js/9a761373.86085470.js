(self.webpackChunk=self.webpackChunk||[]).push([[8675],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,g=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3919:(e,t,r)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:()=>n,Z:()=>o})},4996:(e,t,r)=>{"use strict";r.d(t,{C:()=>i,Z:()=>a});var n=r(2263),o=r(3919);function i(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,a=i.forcePrependBaseUrl,u=void 0!==a&&a,s=i.absolute,l=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(u)return t+r;var c=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+c:c}(i,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},7167:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>u,metadata:()=>s,toc:()=>l,default:()=>p});var n=r(4034),o=r(9973),i=(r(7294),r(3905)),a=r(4996),u={id:"network-plugin",title:"Network"},s={unversionedId:"features/network-plugin",id:"features/network-plugin",isDocsHomePage:!1,title:"Network",description:"\u2192 See setup instructions for the Network plugin",source:"@site/../docs/features/network-plugin.mdx",sourceDirName:"features",slug:"/features/network-plugin",permalink:"/docs/features/network-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/features/network-plugin.mdx",version:"current",frontMatter:{id:"network-plugin",title:"Network"},sidebar:"features",previous:{title:"Navigation",permalink:"/docs/features/navigation-plugin"},next:{title:"Databases",permalink:"/docs/features/databases-plugin"}},l=[],c={toc:l};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u2192 ",(0,i.kt)("a",{parentName:"p",href:"/docs/setup/network-plugin"},"See setup instructions for the Network plugin")),(0,i.kt)("p",null,"Use the Network inspector to inspect outgoing network traffic in your apps. You can easily browse all requests being made and their responses. The plugin also supports gzipped responses."),(0,i.kt)("img",{alt:"Network plugin",src:(0,a.Z)("img/network.png")}),(0,i.kt)("p",null,"All request sent from the device will be listed in the plugin. Click on a request to see details like headers and body. You can filter the table for domain, method or status by clicking on the corresponding value in the table."))}p.isMDXComponent=!0}}]);