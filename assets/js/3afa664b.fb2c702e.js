"use strict";(self.webpackChunktil_remaster=self.webpackChunktil_remaster||[]).push([[7497],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5931:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={},u="Cheatsheet for basic python",c={unversionedId:"Basics/Cheatsheet",id:"Basics/Cheatsheet",title:"Cheatsheet for basic python",description:"Static typing",source:"@site/docs-python/Basics/Cheatsheet.md",sourceDirName:"Basics",slug:"/Basics/Cheatsheet",permalink:"/docs-python/Basics/Cheatsheet",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basic Plugin",permalink:"/docs-python/Basics/useful refs/bare_basic_plugin"},next:{title:"Decorators",permalink:"/docs-python/Basics/Decorators"}},p=[{value:"Static typing",id:"static-typing",children:[],level:2},{value:"Functional",id:"functional",children:[{value:"Filter",id:"filter",children:[],level:3},{value:"map",id:"map",children:[],level:3},{value:"Reduce",id:"reduce",children:[],level:3},{value:"Accumulate",id:"accumulate",children:[],level:3},{value:"Generators",id:"generators",children:[],level:3}],level:2}],s={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cheatsheet-for-basic-python"},"Cheatsheet for basic python"),(0,l.kt)("h2",{id:"static-typing"},"Static typing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Variables"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"variable_name: type\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Function definition"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def function_name(parameter1: type) -> return_type:\n    pass\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Complex types"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from typing import Dict, List, Tuple\n\nLatLngVector = List[Tuple[float, float]]\n\npoints: LatLngVector = [\n    (25.91375, -60.15503),\n    (-11.01983, -166.48477),\n    (-11.01983, -166.48477)\n]\n")))),(0,l.kt)("p",null,"Python's static typing is optional and is not built into the python runtime. Thus, we have multiple solutions to perform the typechecking. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"mypy")," from python"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"pyre")," from facebook"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"pytype")," from google")),(0,l.kt)("h2",{id:"functional"},"Functional"),(0,l.kt)("h3",{id:"filter"},"Filter"),(0,l.kt)("p",null,"Applies a filter over the iterable based on the input given to return a filtered iterable. The function must return a boolean output. If it doesn't, it'll be treated as a success by default"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"iterable_out_obj = filter(function, iterable_obj)\n\neven = filter(lambda x: x % 2 == 0,  [1, 2, 5])) \n# even ==> [2]\n\nbroken = filter(lambda x: x % 2,  [1, 2, 5])) \n# broken ==> [1,2,5]\n")),(0,l.kt)("h3",{id:"map"},"map"),(0,l.kt)("p",null,"Applies a function over one or more iterable objects to return an iterable. The function used must have params that are equal to no of iterable objects passed. python zips the objects passed based on position. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# Single obj map\niterable_out_obj = map(function, iterable_obj)\n\n# Multiple obj map\niterable_out_obj = map(lambda x, y: x * y, [2, 4, 6], [1, 3, 5])) \n# iterable_out_obj ==> [2, 12, 30]\n")),(0,l.kt)("h3",{id:"reduce"},"Reduce"),(0,l.kt)("p",null,"It lives in a module called ",(0,l.kt)("inlineCode",{parentName:"p"},"functools")," in the standard library. It applies a function over an iterable to ",(0,l.kt)("em",{parentName:"p"},"reduce")," it to a single value"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from functools import reduce\n# Multiply all\nreduce(lambda acc, obj: acc * obj, [1,2,3,4,5], 3 ) # ==> 360\n")),(0,l.kt)("h3",{id:"accumulate"},"Accumulate"),(0,l.kt)("p",null,"It lives in a module called ",(0,l.kt)("inlineCode",{parentName:"p"},"itertools")," in the standard library. It can be imagined as a cross between map and reduce. It takes function and an iterable as input and returns iterable as output. The default function is summation."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from itertools import accumulate\n\nout = list(accumulate([1, 2, 3, 4]))\n# out => [1,3,6,10]\n\nout = list(accumulate([1, 2, 3, 4]), lambda acc, obj: acc * obj)\n# out => [1,2,6,24]\n")),(0,l.kt)("h3",{id:"generators"},"Generators"),(0,l.kt)("p",null,"It can be imagined to be a function that can returns different results multiple times. These generator functions are held in memory till they are properly exited or error out. They are primarily useful for lazy evaluation of infinite (or sufficiently long) lists which saves memory consumption."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'\ndef multi_yield():\n    # Can be called only 3 times\n    yield "FIRST OUT"\n    yield "SECOND OUT"\n    return "END"\nmulti_obj = multi_yield()\nnext(multi_obj)) # FIRST OUT\nnext(multi_obj)) # SECOND OUT\nnext(multi_obj)) # END\nnext(multi_obj)) # will error : StopIteration\n\ndef infini_yield():\n    # Can be called only 3 times\n\n    yield "FIRST OUT"\n\nnums_squared_gc = (i ** 2 for i in range(10000)) # Generator expression\n\nfrom itertools import cycle\ncycle([1,2,3]) # returns a generator object that loops forever\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Advanced functions")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"send()")," : yields"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"throw()")," : returns an error"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"close()")," : stops the generator")))}m.isMDXComponent=!0}}]);