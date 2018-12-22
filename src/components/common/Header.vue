<template>
  <div id="header" >
  	<div v-if="back" @click="goback" class="iconfont icon-fanhui"></div>
  	<span>{{title}}</span>
  </div>
</template>

<script>
import '../../iconfont1/demo.css'
import '../../iconfont1/iconfont.css'
export default {
  name: 'Header',
  props:['back','title'],
  methods:{
  	goback(){
  		this.$router.go(-1)
  	}
  }
 }
</script>

<style lang="less" scoped>
@import url("../../style/main.less");

#header{
	background:#fff;
	.w(375);
	.h(45);
	.lh(45);
	.fs(18);
	/*.hhh{
		.p_b(70);
	}*/
	letter-spacing:2px;
	color:rgb(1,1,1);
	position:fixed;
	top:0;
	z-index:999;
	div{
		position:absolute;
		.left(15);
		.top(1);
		font-weight:900;
	}
	span{
		position:absolute;
		.left(30);
		font-weight:600;
		/*font-family:"宋体"*/
	}
}
</style>
