webpackJsonp([1],{"/j1Z":function(t,i){},"5KGY":function(t,i){},"7aOq":function(t,i){},NHnr:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("7+uW"),n={render:function(){var t=this.$createElement,i=this._self._c||t;return i("nav",{staticClass:"nav nav-lg justified menu"},[i("router-link",{attrs:{to:"/"}},[this._v("潮食汇")]),this._v(" "),i("router-link",{attrs:{to:"/favorite"}},[this._v("我的收藏")]),this._v(" "),i("router-link",{attrs:{to:"/platform"}},[this._v("商家平台")])],1)},staticRenderFns:[]};var a={name:"app",data:function(){return{transitionName:""}},watch:{$route:function(t,i){t.meta.index>i.meta.index?this.transitionName="slide-left":this.transitionName="slide-right"}},components:{AppMenu:s("VU/8")({},n,!1,function(t){s("/j1Z")},"data-v-221b2cda",null).exports}},r={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("transition",{attrs:{name:this.transitionName,mode:"out-in"}},[i("router-view")],1),this._v(" "),i("app-menu")],1)},staticRenderFns:[]};var c=s("VU/8")(a,r,!1,function(t){s("5KGY")},null,null).exports,o=s("/ocq"),l=s("aozt"),v=s.n(l),p=function(t){return v.a.get("/static/shoplist.json",{params:t})},h=s("POcy"),d=s.n(h);e.a.use(d.a);var u={name:"Home",data:function(){return{shopList:[],expandingShow:!1,activeFilter:0}},methods:{refresh:function(t){var i=this;p().then(function(s){i.shopList=s.data,t()})},infinite:function(t){var i=this;p().then(function(s){i.shopList=i.shopList.concat(s.data),t()})},filterClick:function(t){this.expandingShow=!this.expandingShow,this.expandingShow?this.activeFilter=t:this.activeFilter=0},expandingHide:function(){this.expandingShow=!1,this.activeFilter=0}},components:{},mounted:function(){var t=this;p().then(function(i){t.shopList=i.data})}},m={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"warp"},[t._m(0),t._v(" "),s("div",{staticClass:"shop-content"},[s("div",{staticClass:"filter container",attrs:{"data-spm":"filter"}},[s("div",{staticClass:"filter-bar row"},[s("span",{staticClass:"bar-item cell",class:{"text-accent":1==t.activeFilter},on:{click:function(i){t.filterClick(1)}}},[t._v("菜系  "),s("i",{staticClass:"icon icon-chevron-down"})]),t._v(" "),s("span",{staticClass:"bar-item cell",class:{"text-accent":2==t.activeFilter},on:{click:function(i){t.filterClick(2)}}},[t._v("排序  "),s("i",{staticClass:"icon icon-chevron-down"})]),t._v(" "),s("span",{staticClass:"bar-item cell",class:{"text-accent":3==t.activeFilter},on:{click:function(i){t.filterClick(3)}}},[t._v("安全等级  "),s("i",{staticClass:"icon icon-chevron-down"})])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.expandingShow,expression:"expandingShow"}],staticClass:"expanding"},[t._m(1)]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.expandingShow,expression:"expandingShow"}],staticClass:"mask",on:{click:t.expandingHide}})]),t._v(" "),s("scroller",{attrs:{"on-refresh":t.refresh,"on-infinite":t.infinite}},[s("div",{staticClass:"shop-content-list"},t._l(t.shopList,function(i){return s("div",{staticClass:"shop-content-list-item row"},[s("div",{staticClass:"icon-part pin"},[s("img",{staticClass:"shop-logo",attrs:{alt:i.zp_name,src:i.mtzp+"?x-oss-process=image/resize,m_lfit,w_80,limit_0/auto-orient,0/sharpen,93/quality,q_100","data-src-checked":"true"}})]),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"title-wrap"},[s("span",{staticClass:"title"},[t._v(t._s(i.zp_name))])]),t._v(" "),s("div",{staticClass:"security-level"},[s("span",{staticClass:"text-gray small"},[t._v("食品安全等级："+t._s(i.dj))])]),t._v(" "),s("div",{staticClass:"delivery"},[s("span",{staticClass:"distance text-gray small"},[t._v("距离"+t._s(i.dis))]),t._v(" "),s("span",{staticClass:"pull-right text-gray small"},[t._v(t._s(i.sq))])])])])}))])],1)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"search-tool"},[i("input",{staticClass:"input",attrs:{name:"zp_name",type:"text",placeholder:"请输入商家名称或商圈"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"sort list with-divider"},[i("span",{staticClass:"sort-item item"},[this._v("默认")]),this._v(" "),i("span",{staticClass:"sort-item item"},[this._v("离我最近")]),this._v(" "),i("span",{staticClass:"sort-item item"},[this._v("最新发布")])])}]};var f=s("VU/8")(u,m,!1,function(t){s("rolk")},"data-v-6037c83f",null).exports,_={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    我的收藏\n")])},staticRenderFns:[]};var C=s("VU/8")({},_,!1,function(t){s("Zi5X")},"data-v-274643ef",null).exports,x={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    商家平台\n")])},staticRenderFns:[]};var w=s("VU/8")({},x,!1,function(t){s("7aOq")},"data-v-5d1ee512",null).exports;e.a.use(o.a);var g=new o.a({routes:[{path:"/",name:"Home",component:f,meta:{index:0}},{path:"/favorite",component:C,name:"favorite",meta:{index:1}},{path:"/platform",component:w,name:"platform",meta:{index:2}}]});e.a.config.productionTip=!1,new e.a({el:"#app",router:g,components:{App:c},template:"<App/>"})},Zi5X:function(t,i){},rolk:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.3bf96d68b2eed5ccb83b.js.map