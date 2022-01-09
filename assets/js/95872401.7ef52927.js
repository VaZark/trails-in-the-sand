"use strict";(self.webpackChunktil_remaster=self.webpackChunktil_remaster||[]).push([[5761],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),f=r,p=c["".concat(i,".").concat(f)]||c[f]||m[f]||o;return n?a.createElement(p,l(l({ref:t},d),{},{components:n})):a.createElement(p,l({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},283:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],s={},i="Managers",u={unversionedId:"django/db/Managers",id:"django/db/Managers",title:"Managers",description:"What are Managers ?",source:"@site/docs-python/django/db/Managers.md",sourceDirName:"django/db",slug:"/django/db/Managers",permalink:"/docs-python/django/db/Managers",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Extensible design with Django Polymorphic",permalink:"/docs-python/django/db/Extensible design with Django Polymorphic"},next:{title:"Model migration across apps",permalink:"/docs-python/django/db/Migrating model across apps"}},d=[{value:"What are Managers ?",id:"what-are-managers-",children:[],level:2},{value:"Custom Manager",id:"custom-manager",children:[{value:"Custom Manager with different Querysets",id:"custom-manager-with-different-querysets",children:[],level:3}],level:2},{value:"Final Fallback",id:"final-fallback",children:[],level:2}],m={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"managers"},"Managers"),(0,o.kt)("h2",{id:"what-are-managers-"},"What are Managers ?"),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},"Manager")," is used to the interface through which database query operations are provided to Django models. Each model has atleast one Manager. The default manager is called ",(0,o.kt)("em",{parentName:"p"},"objects"),"."),(0,o.kt)("p",null,"We can build custom managers when we need to"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Modify the initial QuerySet the Manager returns."),(0,o.kt)("li",{parentName:"ul"},"Add extra Manager methods : To add \u201ctable-level\u201d functionality to your models")),(0,o.kt)("h2",{id:"custom-manager"},"Custom Manager"),(0,o.kt)("p",null,"It is very straightforward to change the default manager."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class CustomManager(models.Manager):\n    def get_queryset(self):\n        return super().get_queryset().exclude(name__istartswith='AZ')\n\n    def filter_1(self):\n        return self.filter(field_1__gte=45)\n\n    def filter_2(self, val):\n        return self.filter(field_2__lt=val)\n\nclass SampleModel(models.Model):\n    name = models.CharField(max_length=30)\n    field_1 = models.IntegerField(default=0)\n    field_2 = models.FloatField(max_length=10)\n\n    custom_manager = CustomManager()\n    # overriding objects field will alter the default manager\n\n    class Meta:\n        base_manager_name = 'custom_manager' # sets the default manager to use for connecting with related fields\n")),(0,o.kt)("p",null,"However, these methods are not chainable. This is because the operations are called over the Queryset used. If chainable methods are required, define them under a Custom Queryset and feed it to out Custom Manager"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"\nclass CustomQueryset(models.QuerySet):\n    def filter_1(self):\n        return self.filter(field_1__gte=45)\n\n    def filter_2(self, val):\n        return self.filter(field_2__lt=val)\n\nclass CustomManager(models.Manager):\n    def get_queryset(self):\n        return CustomQueryset.(self.model, using=self._db)\n\n    def table_lvl_operation(self):\n        pass\n\nclass SampleModel(models.Model):\n    name = models.CharField(max_length=30)\n    field_1 = models.IntegerField(default=0)\n    field_2 = models.FloatField(max_length=10)\n\n    custom_manager = CustomManager()\n    # Once we've defined a custom manager on our model, objects won't be defined for the model anymore\n    # overriding objects field is useful to treat the custom manager without breaking convention\n")),(0,o.kt)("h3",{id:"custom-manager-with-different-querysets"},"Custom Manager with different Querysets"),(0,o.kt)("p",null,"If the model needs both a custom Manager and a custom QuerySet or a custom Manager with different queryset, ",(0,o.kt)("inlineCode",{parentName:"p"},"from_queryset()")," returns a subclass of your base Manager with a copy of the custom QuerySet methods"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class CustomManager(models.Manager):\n    def manager_only_method(self):\n        return\n\nclass CustomQuerySet(models.QuerySet):\n    def queryset_method(self):\n        return\n\n## Runs manager_only method on the qs returned by queryset_method\nMyManager = CustomManager.from_queryset(CustomQuerySet) \nclass MyModel(models.Model):\n    objects = MyManager()\n")),(0,o.kt)("h2",{id:"final-fallback"},"Final Fallback"),(0,o.kt)("p",null,"The raw() manager method can be used to perform raw SQL queries that return model instances. This method takes a raw SQL query, executes it, and returns a ",(0,o.kt)("em",{parentName:"p"},"RawQuerySet")," instance. This ",(0,o.kt)("em",{parentName:"p"},"RawQuerySet")," instance can be iterated over like a normal ",(0,o.kt)("em",{parentName:"p"},"QuerySet")," to provide object instances"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It automatically maps fields in the query to fields on the model."),(0,o.kt)("li",{parentName:"ul"},"Matching is done by name. This means that you can use SQL\u2019s AS clauses to map fields in the query to model fiel"),(0,o.kt)("li",{parentName:"ul"},"The fields that are omitted from the SQL query will be loaded on demand by another hit to the DB"),(0,o.kt)("li",{parentName:"ul"},"The primary key field can\u2019t be left out in any query.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"Model.objects.raw('SELECT * FROM app_model'):\n")))}c.isMDXComponent=!0}}]);