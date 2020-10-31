(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{809:function(t,e,s){"use strict";s.r(e);var r=s(14),v=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"严格模式与非严格模式"}},[t._v("严格模式与非严格模式")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.jb51.net/article/174040.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("完整的区别可以参考这里:"),s("OutboundLink")],1)])]),t._v(" "),s("p",[s("code",[t._v("ECMAScript 5")]),t._v("引入了"),s("code",[t._v("严格模式(strict mode)")]),t._v("的概念。")]),t._v(" "),s("p",[t._v("严格模式是为"),s("code",[t._v("javaScript")]),t._v("定义了一种不同的解析与执行模型。")]),t._v(" "),s("p",[t._v("在严格模式下，"),s("code",[t._v("ECMAScript3")]),t._v("中的一些不确定的行为将得到处理，而且对某些不安全 的操作也会抛出错误。")]),t._v(" "),s("p",[s("strong",[t._v("要在整个脚本中启用严格模式，可以在js文件顶部添加如下代码：")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"use strict"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),s("p",[s("strong",[t._v("也可以指定函数在严格模式下执行")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"use strict"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//函数体")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])]),s("p",[s("strong",[t._v("严格模式对正常的 JavaScript语义做了一些更改：")])]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("严格模式通过抛出错误来消除了一些原有静默错误。")]),t._v(" "),s("li",[t._v("严格模式修复了一些导致 JavaScript引擎难以执行优化的缺陷：有时候，相同的代码，严格模式可以比非严格模式下运行得更快。")]),t._v(" "),s("li",[t._v("严格模式禁用了在ECMAScript的未来版本中可能会定义的一些语法。")])])]),t._v(" "),s("p",[s("strong",[t._v("详细的一些区别：")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("禁用"),s("code",[t._v("with")]),t._v("语法，使用将报错。因为解析"),s("code",[t._v("with")]),t._v("语法时作用域的情况会非常复杂，严重影响代码的解析与运行速度")])]),t._v(" "),s("li",[s("p",[t._v("禁止删除变量与函数。delete 变量 或delete 函数都将报错。")])]),t._v(" "),s("li",[s("p",[t._v("属性描述符（propertyDescriptor）相关:")]),t._v(" "),s("p",[s("strong",[t._v("能改变属性描述符的方法有：")]),t._v(" "),s("code",[t._v("Object.defineProperty")]),t._v("、\n"),s("code",[t._v("Object.defineProperties")]),t._v("、\n"),s("code",[t._v("Reflect.defineProperty")]),t._v("、\n"),s("code",[t._v("Reflect.defineProperties")]),t._v("、\n"),s("code",[t._v("Object.freeze")]),t._v(" 冻结对象的一切属性、\n"),s("code",[t._v("Object.seal")]),t._v(" 冻结对象的新增属性，即可以更改已存在的属性的值，和"),s("code",[t._v("writeable")]),t._v("有关，但是无法新增属性。")]),t._v(" "),s("p",[s("strong",[t._v("获取一个属性描述符的方法有:")]),t._v(" "),s("code",[t._v("Object.getOwnPropertyDescriptor")]),t._v("、\n"),s("code",[t._v("Object.getOwnPropertyDecriptors")]),t._v("、\n"),s("code",[t._v("Reflect.getOwnPropertyDescriptor")]),t._v("、\n"),s("code",[t._v("Reflect.getOwnPropertyDescriptors")])]),t._v(" "),s("p",[s("font",{attrs:{color:"red"}},[t._v("- 删除configurable = false的属性会报错")])],1),t._v(" "),s("p",[s("font",{attrs:{color:"red"}},[t._v("- 给writable = false的属性赋值会报错")])],1),t._v(" "),s("p",[s("font",{attrs:{color:"red"}},[t._v("- 给不允许扩展的object增加属性会报错")])],1),t._v(" "),s("p",[s("strong",[t._v("将object设置为不可扩展的方法有:")]),t._v(" "),s("code",[t._v("Object.freeze")]),t._v("、"),s("code",[t._v("Object.seal")]),t._v("、"),s("code",[t._v("Object.preventExtensions")]),t._v("、\n"),s("code",[t._v("Reflect.freeze")]),t._v("、"),s("code",[t._v("Reflect.seal")]),t._v("、"),s("code",[t._v("Reflect.preventExtensions")])]),t._v(" "),s("p",[s("strong",[t._v("判断一个object是否允许扩展可以用")]),t._v(" "),s("code",[t._v("Object.isExtensible")]),t._v("、"),s("code",[t._v("Reflect.isExtensible")])]),t._v(" "),s("p",[s("font",{attrs:{color:"red"}},[t._v("- 定义object时属性重名会报错")])],1),t._v(" "),s("p",[s("font",{attrs:{color:"red"}},[t._v("- 形参重复时会报错")])],1),t._v(" "),s("p",[s("font",{attrs:{color:"red"}},[t._v("- eval有独立作用域,eval不能作为变量名或函数名,类似关键字")])],1),t._v(" "),s("p",[s("font",{attrs:{color:"red"}},[t._v("- arguments是形参的副本（类似浅拷贝）,arguments不能作为变量名或函数名,类似关键字")])],1),t._v(" "),s("p",[s("font",{attrs:{color:"red"}},[t._v("- 禁用caller与callee")])],1)])])])}),[],!1,null,null,null);e.default=v.exports}}]);