(function(t){function e(e){for(var i,a,r=e[0],l=e[1],c=e[2],u=0,d=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);h&&h(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,r=1;r<n.length;r++){var l=n[r];0!==s[l]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={app:0},o=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/TencentTask/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var h=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0187":function(t,e,n){},"04f6":function(t,e,n){"use strict";n("b7c5")},"37c6":function(t,e,n){"use strict";n("0187")},"47c3":function(t,e,n){},"4eed":function(t,e,n){"use strict";n("abd5")},"56d7":function(t,e,n){"use strict";n.r(e);var i=n("2b0e"),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"task"},[e("h3",[t._v("第一题")]),e("Container")],1),e("div",{staticClass:"task"},[e("h3",[t._v("第二题")]),e("IconHover")],1)])},o=[],a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"icon-left",on:{click:function(e){return t.throttle(t.handleLeftClick,1e3)}}},[e("i",{staticClass:"iconfont icon-qiehuanqizuo"})]),e("div",{ref:"list",staticClass:"avatar-list",style:{transform:`translateX(${t.left}px)`,transition:t.transition+"s"},attrs:{draggable:"true"},on:{dragstart:function(t){t.preventDefault()},mousedown:t.handleMousedown,mouseup:t.handleMouseup,mousemove:t.handleMousemove,mouseleave:t.handleMouseleave,touchstart:t.handleTouchstart,touchend:t.handleTouchend,touchmove:t.handleTouchmove,touchleave:t.handleTouchleave}},t._l(t.avatarList,(function(t){return e("Avatar",{key:t.id})})),1),e("div",{staticClass:"icon-right",on:{click:function(e){return t.throttle(t.handleRightClick,1e3)}}},[e("i",{staticClass:"iconfont icon-qiehuanqiyou"})])])},r=[],l=function(){var t=this;t._self._c;return t._m(0)},c=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"avatar-container"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:"https://assets.codepen.io/1480814/av+1.png",alt:"a random avatar picture"}})])])}],h={},u=h,d=(n("4eed"),n("2877")),f=Object(d["a"])(u,l,c,!1,null,"f7db23ae",null),v=f.exports,g={components:{Avatar:v},data(){return{avatarList:[{id:1,name:"1"},{id:2,name:"2"},{id:3,name:"3"},{id:4,name:"4"},{id:5,name:"5"},{id:6,name:"6"},{id:7,name:"7"},{id:8,name:"8"},{id:9,name:"9"},{id:10,name:"10"},{id:11,name:"11"},{id:12,name:"12"}],total:12,clientWidth:0,listWidth:0,avatarWidth:140,left:0,isDrag:!1,preMouseX:0,dragLength:0,transition:1,timerId:null}},mounted(){this.clientWidth=window.innerWidth,this.listWidth=this.$refs.list.clientWidth,console.log(this.listWidth),console.log(this.curNums),window.addEventListener("resize",()=>{this.clientWidth=window.innerWidth,console.log(this.clientWidth),console.log(this.curNums)})},destroyed(){window.removeEventListener("resize",()=>{this.clientWidth=window.innerWidth,console.log(this.clientWidth),console.log(this.curNums)})},computed:{curNums(){const t=Math.floor((this.clientWidth-120)/this.avatarWidth);return console.log(t),t},moveLength(){return this.curNums>1?(this.curNums-1)*this.avatarWidth:this.curNums*this.avatarWidth}},methods:{handleRightClick(){console.log("right"),this.listWidth+this.left-this.moveLength<=this.clientWidth-240?(console.log("到达最右边"),this.left=-this.moveLength+(this.clientWidth-240+this.moveLength-this.listWidth)):this.left-=this.moveLength},handleLeftClick(){console.log("left"),this.left+this.moveLength>=0?(console.log("到达最左边"),this.left=0):this.left+=this.moveLength},throttle(t,e){this.timerId||(t(),this.timerId=setTimeout(()=>{this.timerId=null},e))},changeLeft(){this.left+this.dragLength>=0?console.log("不能继续向左拖动了"):this.left+this.dragLength+this.listWidth<=this.clientWidth-240?console.log("不能继续向右拖动了"):this.left+=this.dragLength},handleMousedown(t){console.log("鼠标按下",t),this.preMouseX=t.screenX,this.isDrag=!0,this.transition=0},handleMouseup(t){console.log("鼠标抬起",t),this.dragLength=t.screenX-this.preMouseX,this.isDrag=!1,this.transition=1},handleMousemove(t){this.isDrag&&(this.dragLength=t.screenX-this.preMouseX,this.preMouseX=t.screenX,this.changeLeft())},handleMouseleave(t){this.isDrag=!1,this.transition=1},handleTouchstart(t){console.log("手指触摸开始",t),this.isDrag=!0,this.transition=0,this.preMouseX=t.changedTouches[0].screenX},handleTouchend(t){console.log("手指触摸结束",t),this.isDrag=!1,this.transition=1},handleTouchmove(t){this.dragLength=t.changedTouches[0].screenX-this.preMouseX,this.preMouseX=t.changedTouches[0].screenX,this.changeLeft()},handleTouchleave(t){this.isDrag=!1,this.transition=1}}},p=g,m=(n("04f6"),Object(d["a"])(p,a,r,!1,null,"2574b7dd",null)),b=m.exports,L=function(){var t=this,e=t._self._c;return e("div",{staticClass:"icon-hover-container"},t._l(t.iconList,(function(n,i){return e("div",{key:i,staticClass:"icon"},[e("div",{staticClass:"container"},[e("i",{staticClass:"iconfont",class:n.name}),e("p",{staticClass:"title"},[t._v(t._s(n.title))])])])})),0)},w=[],y={data(){return{iconList:[{name:"icon-analysis",title:"统计"},{name:"icon-a-aroundprotection",title:"安全"},{name:"icon-audit",title:"报表"},{name:"icon-Availability",title:"检测"},{name:"icon-attacker",title:"战斗"}]}}},W=y,_=(n("37c6"),Object(d["a"])(W,L,w,!1,null,"1fd3ea1e",null)),C=_.exports,M={name:"App",components:{Container:b,IconHover:C}},T=M,X=(n("d88b"),Object(d["a"])(T,s,o,!1,null,"05f06b36",null)),k=X.exports;n("5a8b");i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(k)}}).$mount("#app")},"5a8b":function(t,e,n){},abd5:function(t,e,n){},b7c5:function(t,e,n){},d88b:function(t,e,n){"use strict";n("47c3")}});
//# sourceMappingURL=app.d1f399c2.js.map