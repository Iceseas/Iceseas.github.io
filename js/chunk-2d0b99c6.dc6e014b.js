(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b99c6"],{"344c":function(t,e,c){"use strict";c.r(e);var i=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"main_page_init"},[c("p",{staticClass:"title_init title_2"},[t._v("Checkbox 多选框")]),c("p",{staticClass:"title_init title_4"},[t._v("一组备选项中进行多选")]),c("p",{staticClass:"title_init title_3"},[t._v("单独使用")]),c("p",{staticClass:"title_init"},[t._v("单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。")]),c("div",{staticClass:"component_show_block"},[c("kiwi-checkbox",{model:{value:t.checked1,callback:function(e){t.checked1=e},expression:"checked1"}})],1),c("p",{staticClass:"title_init"},[t._v("查看代码")]),t._m(0),c("p",{staticClass:"title_init title_3"},[t._v("禁用状态")]),t._m(1),c("div",{staticClass:"component_show_block"},[c("kiwi-checkbox",{attrs:{disabled:""},model:{value:t.checked1,callback:function(e){t.checked1=e},expression:"checked1"}}),c("kiwi-checkbox",{attrs:{disabled:""},model:{value:t.checked2,callback:function(e){t.checked2=e},expression:"checked2"}})],1),c("p",{staticClass:"title_init"},[t._v("查看代码")]),t._m(2),c("p",{staticClass:"title_init title_3"},[t._v("自定义选项")]),c("div",{staticClass:"component_show_block"},[c("kiwi-checkbox",{model:{value:t.checked3,callback:function(e){t.checked3=e},expression:"checked3"}},[t._v("篮球")]),c("kiwi-checkbox",{model:{value:t.checked4,callback:function(e){t.checked4=e},expression:"checked4"}},[t._v("足球")])],1),c("p",{staticClass:"title_init"},[t._v("查看代码")]),t._m(3),c("p",{staticClass:"title_init title_3"},[t._v("多选框组")]),t._m(4),c("div",{staticClass:"component_show_block"},[c("kiwi-checkbox-group",{model:{value:t.checkboxGroupValue,callback:function(e){t.checkboxGroupValue=e},expression:"checkboxGroupValue"}},[c("kiwi-checkbox",{attrs:{val:"a"}},[t._v("选项1")]),c("kiwi-checkbox",{attrs:{val:"b"}},[t._v("选项2")])],1),t._v(" 打印绑定的checkboxGroupValue值： "+t._s(t.checkboxGroupValue)+" ")],1),c("p",{staticClass:"title_init"},[t._v("查看代码")]),t._m(5),c("p",{staticClass:"title_init title_3"},[t._v("Checkbox Attributes")]),c("table",{staticClass:"attributes_table"},[c("thead",[c("tr",t._l(t.attributes_type,(function(e){return c("td",{key:e},[t._v(t._s(e))])})),0)]),c("tbody",t._l(t.attributes_content,(function(e){return c("tr",{key:e.name},[c("td",[t._v(t._s(e.name))]),c("td",[t._v(t._s(e.explain))]),c("td",[t._v(t._s(e.type))]),c("td",[t._v(t._s(e.items))]),c("td",[t._v(t._s(e.default))])])})),0)]),c("p",{staticClass:"title_init title_3"},[t._v("Checkbox Events")]),t._m(6),c("p",{staticClass:"title_init title_3"},[t._v("Checkbox-group Attributes")]),c("table",{staticClass:"attributes_table"},[c("thead",[c("tr",t._l(t.attributes_type,(function(e){return c("td",{key:e},[t._v(t._s(e))])})),0)]),t._m(7)]),c("p",{staticClass:"title_init title_3"},[t._v("Checkbox Events")]),t._m(8)])},a=[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"component_show_block"},[c("pre",[t._v('      默认使用：\n      <kiwi-checkbox v-model="checked1"></kiwi-checkbox>\n      export default {\n        data(){\n          return {\n            checked1: false,\n          }\n        }\n      }\n    ')])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("p",{staticClass:"title_init"},[t._v("你可以使用 "),c("span",{staticClass:"highlight_code"},[t._v("disabled")]),t._v(" 属性来定义按钮是否可用，它接受一个 "),c("span",{staticClass:"highlight_code"},[t._v("Boolean")]),t._v(" 值。 ")])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"component_show_block"},[c("pre",[t._v('      默认使用：\n      <kiwi-checkbox v-model="checked1" disabled></kiwi-checkbox>\n      <kiwi-checkbox v-model="checked2" disabled></kiwi-checkbox>\n      export default {\n        data(){\n          return {\n            checked1: false,\n            checked2: true,\n          }\n        }\n      }\n    ')])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"component_show_block"},[c("pre",[t._v('      自定选项：\n      <kiwi-checkbox v-model="checked3">篮球</kiwi-checkbox>\n      <kiwi-checkbox v-model="checked4">足球</kiwi-checkbox>\n      export default {\n        data(){\n          return {\n            checked3: false,\n            checked4: true,\n          }\n        }\n      }\n    ')])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("p",{staticClass:"title_init"},[t._v("结合 "),c("span",{staticClass:"highlight_code"},[t._v("kiwi-checkbox-group")]),t._v(" 标签和子元素 "),c("span",{staticClass:"highlight_code"},[t._v("kiwi-checkbox")]),t._v("， "),c("span",{staticClass:"highlight_code"},[t._v("val")]),t._v("为绑定的值 只需要在 "),c("span",{staticClass:"highlight_code"},[t._v("kiwi-checkbox-group")]),t._v(" 绑定 "),c("span",{staticClass:"highlight_code"},[t._v("v-model")]),t._v("会返回一个数组 ")])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"component_show_block"},[c("pre",[t._v('      单选框组:\n      <kiwi-checkbox-group v-model="checkboxGroupValue">\n        <kiwi-checkbox val="a">选项1</kiwi-checkbox>\n        <kiwi-checkbox val="b">选项2</kiwi-checkbox>\n      </kiwi-checkbox-group>\n      export default {\n        data(){\n          return {\n            checkboxGroupValue: [],\n          }\n        }\n      }\n    ')])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("table",{staticClass:"attributes_table"},[c("thead",[c("tr",[c("td",[t._v("事件名称")]),c("td",[t._v("说明")]),c("td",[t._v("回调参数")])])]),c("tbody",[c("tr",[c("td",[t._v("change")]),c("td",[t._v("绑定值变化时触发的事件")]),c("td",[t._v("选中的 Checkbox val 值")])])])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("tbody",[c("tr",[c("td",[t._v("value / v-model")]),c("td",[t._v("选中一组多选框的绑定值")]),c("td",[t._v("Array")]),c("td",[t._v("-")]),c("td",[t._v("-")])])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("table",{staticClass:"attributes_table"},[c("thead",[c("tr",[c("td",[t._v("事件名称")]),c("td",[t._v("说明")]),c("td",[t._v("回调参数")])])]),c("tbody",[c("tr",[c("td",[t._v("groupChange")]),c("td",[t._v("绑定值变化时触发的事件")]),c("td",[t._v("选中的 Checkbox val 值")])])])])}],s=c("83ab"),n=c("bef4"),l={components:{kiwiCheckbox:s["a"],kiwiCheckboxGroup:n["a"]},data(){return{checked1:!1,checked2:!0,checked3:!1,checked4:!0,checkboxGroupValue:[],attributes_type:["参数","说明","类型","可选值","默认值"],attributes_content:[{name:"val",explain:"结合kiwi-checkbox-group使用时子复选框绑定的值",type:"string / number / boolean",items:"-",default:"-"},{name:"value / v-model",explain:"kiwi-checkbox单独使用时的绑定值",type:"boolean",items:"-",default:"-"},{name:"disabled",explain:"是否禁用",type:"boolean",items:"-",default:"false"},{name:"name",explain:"原生name值",type:"string",items:"-",default:"-"}]}},methods:{}},o=l,_=c("2877"),k=Object(_["a"])(o,i,a,!1,null,"44d1b9e4",null);e["default"]=k.exports}}]);
//# sourceMappingURL=chunk-2d0b99c6.dc6e014b.js.map