(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2170fe"],{c4b9:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"main_page_init"},[i("p",{staticClass:"title_init title_2"},[t._v("Tabs 标签页")]),i("p",{staticClass:"title_init title_4"},[t._v("切换显示不同的内容")]),i("p",{staticClass:"title_init title_3"},[t._v("基础使用")]),t._m(0),i("div",{staticClass:"component_show_block"},[i("kiwi-tabs",{model:{value:t.activeTab,callback:function(a){t.activeTab=a},expression:"activeTab"}},[i("kiwi-tab-panel",{attrs:{label:"标签1",val:"1"}},[t._v("1")]),i("kiwi-tab-panel",{attrs:{label:"标签2",val:"2"}},[t._v("2")]),i("kiwi-tab-panel",{attrs:{label:"标签3",val:"3"}},[t._v("3")]),i("kiwi-tab-panel",{attrs:{label:"标签4",val:"4"}},[t._v("4")]),i("kiwi-tab-panel",{attrs:{label:"标签5",val:"5"}},[t._v("5")])],1)],1),i("p",{staticClass:"title_init"},[t._v("查看代码")]),t._m(1),i("p",{staticClass:"title_init title_3"},[t._v("加入icon")]),t._m(2),i("div",{staticClass:"component_show_block"},[i("kiwi-tabs",{model:{value:t.activeTab2,callback:function(a){t.activeTab2=a},expression:"activeTab2"}},[i("kiwi-tab-panel",{attrs:{label:"标签1",val:"1",iconName:"kiwi-icon-company"}},[t._v("1")]),i("kiwi-tab-panel",{attrs:{label:"标签2",val:"2",iconName:"kiwi-icon-camera"}},[t._v("2")]),i("kiwi-tab-panel",{attrs:{label:"",val:"3",iconName:"kiwi-icon-coupon"}},[t._v("3")]),i("kiwi-tab-panel",{attrs:{label:"",val:"4",iconName:"kiwi-icon-phone"}},[t._v("4")]),i("kiwi-tab-panel",{attrs:{label:"标签5",val:"5",iconName:"kiwi-icon-scan"}},[t._v("5")])],1)],1),i("p",{staticClass:"title_init"},[t._v("查看代码")]),t._m(3),i("p",{staticClass:"title_init title_3"},[t._v("Attributes")]),i("table",{staticClass:"attributes_table"},[i("thead",[i("tr",t._l(t.attributes_type,(function(a){return i("td",{key:a},[t._v(t._s(a))])})),0)]),i("tbody",t._l(t.attributes_content,(function(a){return i("tr",{key:a.name},[i("td",[t._v(t._s(a.name))]),i("td",[t._v(t._s(a.explain))]),i("td",[t._v(t._s(a.type))]),i("td",[t._v(t._s(a.items))]),i("td",[t._v(t._s(a.default))])])})),0)]),i("p",{staticClass:"title_init title_3"},[t._v("tab-panel Attributes")]),i("table",{staticClass:"attributes_table"},[i("thead",[i("tr",t._l(t.attributes_type,(function(a){return i("td",{key:a},[t._v(t._s(a))])})),0)]),i("tbody",t._l(t.attributes_item_content,(function(a){return i("tr",{key:a.name},[i("td",[t._v(t._s(a.name))]),i("td",[t._v(t._s(a.explain))]),i("td",[t._v(t._s(a.type))]),i("td",[t._v(t._s(a.items))]),i("td",[t._v(t._s(a.default))])])})),0)]),i("p",{staticClass:"title_init title_3"},[t._v("Radio Events")]),t._m(4)])},n=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("p",{staticClass:"title_init"},[t._v("使用 "),i("span",{staticClass:"highlight_code"},[t._v("v-model")]),t._v(" 绑定string类型的变量 ")])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"component_show_block"},[i("pre",[t._v('      默认tab组件:\n      <kiwi-tabs v-model="activeTab">\n        <kiwi-tab-panel label="标签1" val="1">1</kiwi-tab-panel>\n        <kiwi-tab-panel label="标签2" val="2">2</kiwi-tab-panel>\n        <kiwi-tab-panel label="标签3" val="3">3</kiwi-tab-panel>\n        <kiwi-tab-panel label="标签4" val="4">4</kiwi-tab-panel>\n        <kiwi-tab-panel label="标签5" val="5">5</kiwi-tab-panel>\n      </kiwi-tabs>\n      export default {\n      data(){\n        return {\n          activeTab: \'2\'\n        }\n      }\n    }\n    ')])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("p",{staticClass:"title_init"},[t._v("使用 "),i("span",{staticClass:"highlight_code"},[t._v("iconName")]),t._v(" 向 "),i("span",{staticClass:"highlight_code"},[t._v("kiwi-tab-panel")]),t._v(" 传递想要显示的icon ")])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"component_show_block"},[i("pre",[t._v('      默认tab组件:\n      <kiwi-tabs v-model="activeTab">\n        <kiwi-tab-panel label="标签1" val="1" iconName="kiwi-icon-company">1</kiwi-tab-panel>\n        <kiwi-tab-panel label="标签2" val="2" iconName="kiwi-icon-camera">2</kiwi-tab-panel>\n        <kiwi-tab-panel label="" val="3" iconName="kiwi-icon-coupon">3</kiwi-tab-panel>\n        <kiwi-tab-panel label="" val="4" iconName="kiwi-icon-phone">4</kiwi-tab-panel>\n        <kiwi-tab-panel label="标签5" val="5" iconName="kiwi-icon-scan">5</kiwi-tab-panel>\n      </kiwi-tabs>\n      export default {\n      data(){\n        return {\n          activeTab: \'2\'\n        }\n      }\n    }\n    ')])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("table",{staticClass:"attributes_table"},[i("thead",[i("tr",[i("td",[t._v("事件名称")]),i("td",[t._v("说明")]),i("td",[t._v("回调参数")])])]),i("tbody",[i("tr",[i("td",[t._v("tabClick")]),i("td",[t._v(" 在组件 Tabs 点击标签时触发")]),i("td",[t._v("被选中的标签 tab 实例")])])])])}],l={components:{},data(){return{activeTab:"2",activeTab2:"2",attributes_type:["参数","说明","类型","可选值","默认值"],attributes_content:[{name:"v-model",explain:"绑定值",type:"string",items:"-",default:"-"}],attributes_item_content:[{name:"label",explain:"标签显示值",type:"string",items:"-",default:"-"},{name:"val",explain:"标签绑定值",type:"string",items:"-",default:"-"},{name:"iconName",explain:"icon",type:"string",items:"-",default:"-"}]}}},s=l,_=i("2877"),c=Object(_["a"])(s,e,n,!1,null,"95960d54",null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d2170fe.4644df5c.js.map