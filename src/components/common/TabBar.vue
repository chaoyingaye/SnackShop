
<template>
  <ul id='tabbar'>
     <router-link 
     :to="item.path" 
     tag='li'
	 v-for='(item ,index) in navlist'
	 :key='index'
	 active-class='sel'
     >
     <i class="iconfont" v-html='item.icon'></i>
     <span>{{item.title}}</span>
 	</router-link>

   </ul>
</template>

<script>
import '../../iconfont1/demo.css'
import '../../iconfont1/iconfont.css'
export default {
  name: 'TabBar',
  components: {
    
  },
  data(){
  	return {
  		navlist:[{path:'/home',title:'首页',icon:'&#xe607;'},
  		{path:'/categray',title:'全部商品',icon:'&#xe63e;'},
  		{path:'/shopcar',title:'购物车',icon:'&#xe613;'},
  		{path:'/my',title:'我的',icon:'&#xe634;'}]
  	}
  }
}

</script>

<style lang="less" scoped>
@import url('../../style/main.less');

#tabbar{
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	.h(60);
	.fs(14);
/*justify-content:space-between;*/
	background: @tabBg;
	li{
		display: flex;
		justify-content:center;
		flex-direction: column;
      width: 25%;
      text-align:center;
      /*.lh(60);*/
      color:@tabColor;
     i{
     	.fs(25);
     	font-weight: 800;
     }
	}
	.sel{
		color: @tabSelColor;
	}
}
</style>
