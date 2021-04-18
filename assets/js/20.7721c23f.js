(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{361:function(t,a,r){"use strict";r.r(a);var e=r(2),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("数据结构基础，了解数据结构的分类，认识一下抽象数据类。")]),t._v(" "),r("h1",{attrs:{id:"顺序结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#顺序结构"}},[t._v("#")]),t._v(" 顺序结构")]),t._v(" "),r("p",[r("strong",[t._v("内存中元素紧挨在一起的数据结构为顺序结构")]),t._v("。在C语言中，声明一个整数结构类型长度为"),r("code",[t._v("5")]),t._v("的数组时，内存中会留出5个整数长度的连续空间用于存储数组。实际上，数组的指针可以说是指向在数组中的第一个元素。当要修改第4个元素时，计算机是找到了数组指针地址，跳跃3个整数长度的距离，从而找到第4个元素的位置。")]),t._v(" "),r("h1",{attrs:{id:"链式结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#链式结构"}},[t._v("#")]),t._v(" 链式结构")]),t._v(" "),r("p",[r("strong",[t._v("内存中元素可连续也可不连续，通过指针寻找和连接元素的数据结构为链式结构")]),t._v("。在Java语言中，链表（Linked List）和树（Tree）都属于链式结构。他们属于抽象的结构类型，类型所包含的元素被称为节点（Node）。链表节点中的值可以为整数类、浮点类、字符串等，包括抽象数据类；但链表节点中还会包含有节点的一个后继元素指针。树节点对比链表节点的不同在于树节点中可以包含有多个后继元素指针。总结起来就是"),r("strong",[t._v("链式结构节点在内存中连续摆放不是必须的")]),t._v("，当计算机查找某个节点时，会走遍目标节点前的所有节点，从而顺着第一个节点的指针找到目标指针。")]),t._v(" "),r("h1",{attrs:{id:"比较顺序结构和链式结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#比较顺序结构和链式结构"}},[t._v("#")]),t._v(" 比较顺序结构和链式结构")]),t._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"顺序结构和链式结构在内存中的不同","data-src":"/gallery/data-structure-random-linked-ram.png",loading:"lazy"}})]),t._v(" "),r("ul",[r("li",[t._v("顺序结构在内存中有固定最大长度，而链式结构在内存中没有，所以在流动数据多的情况下，链式结构对空间利用更灵活。")]),t._v(" "),r("li",[t._v("顺序结构在内存中是元素之间是连续的，而链式结构在内存中很可能是不连续的，所以在查找元素时，通过地址计算公式查找，顺序结构的效率更高。")]),t._v(" "),r("li",[t._v("在首部添加元素或删除中间某个元素的情况下，链式结构的效率会更高，因为对比顺序结构，链式结构不需要重新排列。")]),t._v(" "),r("li",[t._v("顺序结构最大长度难以确定的情况下，会产生太多的储存空间“碎片”，而链式结构原本就是“碎片化”的。")])]),t._v(" "),r("h1",{attrs:{id:"c语言数据类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#c语言数据类型"}},[t._v("#")]),t._v(" C语言数据类型")]),t._v(" "),r("p",[t._v("原子/基本类型：short, int, long, float, double, char\n结构/构造类型：数组, struct, union, enum\n其他：指针，空（void）")]),t._v(" "),r("h1",{attrs:{id:"抽象数据类型-abstract-data-type"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#抽象数据类型-abstract-data-type"}},[t._v("#")]),t._v(" 抽象数据类型（Abstract Data Type）")]),t._v(" "),r("p",[t._v("区别于基本数据类型，基本数据类型有设定数据占用空间的极限、数据表示的方式和内存中结构的特性；抽象数据类型基于基本数据类型形成更复杂的数据类型，例如链表（Linked List）和树（Tree）都属于抽象数据类。颜色（Color）、坐标（Point）等结构类也都属于抽象数据类。")]),t._v(" "),r("blockquote",[r("p",[t._v("所谓抽象数据类型就是把数据类型和相关操作捆绑在一起。")])]),t._v(" "),r("p",[t._v("Color抽象数据类:\n由Red、Green和Blue，3个范围为0-255的整数值表示颜色范围，加上一个范围为0-1的浮点型Alpha数值表示透明度。")]),t._v(" "),r("p",[t._v("Point抽象数据类:\n由x、y和z，3个整数值表示三维空间中的坐标。")]),t._v(" "),r("h1",{attrs:{id:"抽象数据类型伪代码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#抽象数据类型伪代码"}},[t._v("#")]),t._v(" 抽象数据类型伪代码")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("ADT 抽象数据类型名\nData\n  数据元素之间逻辑关系的定义\nOperation\n  操作\nendADT\n")])])]),r("blockquote",[r("p",[t._v("本文参考：\n"),r("a",{attrs:{href:"https://www.bilibili.com/video/BV1jW411K7yg",target:"_blank",rel:"noopener noreferrer"}},[t._v("【C语言描述】《数据结构和算法》（小甲鱼）"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=s.exports}}]);