import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import Home from 'pages/Home/Home';
import Categray from 'pages/Categray/Categray';
import Shopcar from 'pages/Shopcar/Shopcar';
import My from 'pages/My/My';
import Err from 'common/Err';
import Zhuanqu from 'common/Zhuanqu';
import Goodsdetail from 'pages/Goodsdetail/Goodsdetail';
let router=new VueRouter({
	routes:[
	//vue中页面的切换是监听hash值的变化
			{path:'/',redirect:'/home'},
			{path:'/zhuanqu/:title',component:Zhuanqu},
			{path:'/home',component:Home},
			{path:'/categray',component:Categray},
			{path:'/shopcar',component:Shopcar},
			{path:'/goodsdetail',component:Goodsdetail},
			{path:'/my',component:My},
			{path:'/nofind',component:Err},
			{path:'**',redirect:'/nofind'}
			]
})
export default router
/*router的配置项*/