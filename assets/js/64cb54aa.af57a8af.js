"use strict";(self.webpackChunktil_remaster=self.webpackChunktil_remaster||[]).push([[3386],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return m}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return r?t.createElement(d,i(i({ref:n},s),{},{components:r})):t.createElement(d,i({ref:n},s))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4094:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var t=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={},c="Miscellaneous Libraries",u={unversionedId:"Basics/useful refs/Misc lib",id:"Basics/useful refs/Misc lib",title:"Miscellaneous Libraries",description:"Arrow - Datetime libraty",source:"@site/docs-python/Basics/useful refs/Misc lib.md",sourceDirName:"Basics/useful refs",slug:"/Basics/useful refs/Misc lib",permalink:"/docs-python/Basics/useful refs/Misc lib",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Basic Plugin",permalink:"/docs-python/Basics/useful refs/bare_basic_plugin"}},s=[{value:"Arrow - Datetime libraty",id:"arrow---datetime-libraty",children:[],level:2},{value:"Fire - CLI Generator",id:"fire---cli-generator",children:[],level:2}],p={toc:s};function f(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"miscellaneous-libraries"},"Miscellaneous Libraries"),(0,o.kt)("h2",{id:"arrow---datetime-libraty"},"Arrow - Datetime libraty"),(0,o.kt)("p",null,"Arrow is a library that unifies the different built-in modules that a developer has to juggle to manage datetime in any python application. It is UTC by default, is timezone aware and respects the ISO 8601 standard."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Common commands\n\n## Now\nutc = arrow.utcnow() # => 2013-05-11T21:23:58.970460+00:00\n\n## Timedelta\nutc = utc.shift(hours=-1)\n\n## Replace/Update select props\nnew_utc = arw.replace(hour=4, minute=40)\n\n## Switch timezone\nlocal = utc.to('US/Pacific')\n\n## Formatting\nlocal.format('YYYY-MM-DD HH:mm:ss ZZ')\n\nlocal.humanize() # => 'an hour ago'\n\n\n## Range\narrow.utcnow().span('hour') # => (<Arrow [2013-05-07T05:00:00+00:00]>, <Arrow [2013-05-07T05:59:59.999999+00:00]>)\n\n")),(0,o.kt)("h2",{id:"fire---cli-generator"},"Fire - CLI Generator"),(0,o.kt)("p",null,"A google library to create CLI in python. Fire can take any object/function as input and convert to CLI. We can considered it like a debugger that has been repurposed to be a CLI generator"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Class\nimport fire\n\nclass Calculator(object):\n  """A simple calculator class."""\n\n  def double(self, number):\n    return 2 * number\n\nif __name__ == \'__main__\':\n  fire.Fire(Calculator)\n\n## python calculator.py double --number=15  \n## python calculator.py double 10\n\n# Function\nimport fire\n\ndef hello(name="World"):\n  return "Hello %s!" % name\n\nif __name__ == \'__main__\':\n  fire.Fire(hello)\n\n## python hello.py \n## python hello.py --name=David\n')))}f.isMDXComponent=!0}}]);