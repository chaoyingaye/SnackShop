<template>
  <div id="Banner">
    <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in bannerList" :key="index">
        	<img :src='item.imagePath'/>
        </div>
    </div>
</div>
  </div>
</template>

<script>
import Swiper from 'Swiper'
import Vue from 'vue'
export default{
  name: 'Banner',
  data () {
    return {
    	bannerList:[{imagePath:'../../../../static/swiper1.jpg',name:'优谷源品1'},
    							{imagePath:'../../../../static/swiper1.jpg',name:'优谷源品2'}]
    }
  },
  props:['banners'],
  methods:{
  	initSwiper(){
  		var mySwiper = new Swiper ('.swiper-container', {
	    loop: true, // 循环模式选项
	  })     
  	},
    getBannerData(){
		this.bannerList=this.banners;
	  		Vue.nextTick(()=>{
	  			this.initSwiper()
	  		})
	}
},
watch:{
	banners(){
		this.getBannerData()
	}
},
  created(){   
//this.initSwiper()
  }
//destroyed(){
	//没必要用
//	this.mySwiper=null;
//}
}
</script>

<style lang="less">
	@import url("../../../../node_modules/swiper/dist/css/swiper.css");
    @import url("../../../style/main.less");
    img{
    	.w(375);
    	.h(200);
    }
</style>

<!--banners 只有两种情况下改变 一是刷新 二是切换   原因 banners值变在home的created 切换时将原来的删除重建-->
	
	
