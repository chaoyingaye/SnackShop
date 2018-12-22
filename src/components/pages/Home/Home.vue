<template>
	<div id="home">
	    <Header title="零食铺子旗舰商城"></Header>
	    <div class='wall'></div>
		<div class='img'>
			<img src="../../../../static/logo.jpg" alt="">
		</div>
		<Banner></Banner>
		<div @click="tocategray">
			<img src='../../../../static/pic1.jpg' alt="">
		</div>
		
		<div class='img img1' @click="tocategray">
			<img src='../../../../static/chanpinzq.jpg' alt="">
		</div>
		<div class="sort">
			<div v-for='(item,index) in sortlist' 
				:key='index'
				@click='zhuanqu(item.to)'
				>
				<img :src="item.imgPath"/>
				<span>{{item.name}}</span>
			</div>
		</div>
	
		<div class='img img1' @click="zhuanqu('ganguo')">
			<img src='../../../../static/ganguozq.jpg' alt="">
		</div>
		<Productlist :list='ganguolist'></Productlist>
		
		<div class='img img1' >
			<img src="../../../../static/lingshizq.jpg" alt="">
		</div>
		<Productlist :list='lingshilist'></Productlist>
		
		<div class='img img1' >
			<img src='../../../../static/shenghuozq.jpg' alt="">
		</div>
		<Productlist :list='shenghuolist'></Productlist>
		
		<div class="bottom">
			<img src='../../../../static/bottom.jpg'/>
		</div>
		<TabBar></TabBar>
	</div>
</template>

<script>
import Header from 'common/Header'
import TabBar from 'common/TabBar'
import Productlist from 'common/Productlist'
import Banner from 'pages/Home/Banner'
	export default{
	name:'Home',
	components:{Header,Banner,Productlist,TabBar},
	data(){
		return {
			name:'首页',
			sortlist:[{imgPath:'../../../../static/Screenshot_20181221-215033_03.jpg',to:'ganguo',name:'干果'},
					  {imgPath:'../../../../static/Screenshot_20181221-215033_05.jpg',to:'niurou',name:'牛肉干'},
					  {imgPath:'../../../../static/Screenshot_20181221-215033_07.jpg',to:'shenghuo',name:'米面'},
					  {imgPath:'../../../../static/Screenshot_20181221-215033_09.jpg',to:'shenghuo',name:'粮油'},],
			ganguolist:[
				{name:'59.9元礼包',imgPath:'../../../static/product7.jpg',fre:'true',grade:'true',newprice:'59.90',oldprice:'75.00'},
				{name:'68元礼包',imgPath:'../../../static/product7.jpg',fre:'true',grade:'true',newprice:'68.00',oldprice:'65.00'},
				{name:'88元礼包',imgPath:'../../../static/product7.jpg',fre:'true',grade:'true',newprice:'88.00',oldprice:'95.00'},
				{name:'128元礼包',imgPath:'../../../static/product7.jpg',fre:'true',grade:'true',newprice:'128.00',oldprice:'145.00'}
			],
			lingshilist:[
				{name:'手撕牛肉干',title:'200g内蒙古特级',imgPath:'../../../static/product1.jpg',fre:'true',newprice:'45.00',oldprice:'58.00'},
				{name:'手撕牛肉干',title:'200g内蒙古特级',imgPath:'../../../static/product1.jpg',fre:'true',newprice:'128.00',oldprice:'145.00'},
				{name:'手撕牛肉干（片）',title:'200g',imgPath:'../../../static/product2.jpg',fre:'true',newprice:'32.00',oldprice:'45.00'},
				{name:'手撕牛肉干（片）',title:'600g',imgPath:'../../../static/product2.jpg',fre:'true',newprice:'90.00',oldprice:'45.00'}
			],
			shenghuolist:[
				{name:'亚麻菜籽油',imgPath:'../../../static/product3.jpg',fre:'true',newprice:'148.00',oldprice:'156.00'},
				{name:'亚麻菜籽油',imgPath:'../../../static/product4.jpg',fre:'true',newprice:'58.00',oldprice:'69.00'},
				{name:'亚麻菜籽油',imgPath:'../../../static/product5.jpg',fre:'true',newprice:'188.00',oldprice:'195.00'},
				{name:'亚麻菜籽油',imgPath:'../../../static/product6.jpg',fre:'true',newprice:'108.00',oldprice:'128.00'}
			]
		}
	},
	methods:{
		tocategray(){
			this.$router.push({path:'/categray'})
		},
		zhuanqu(title){
			this.$router.push({path:`/zhuanqu/title`})
		}
		
	}
	}
</script>

<style lang="less" scoped>
@import url('../../../style/main.less');
#home{
	#header{
		.p_b(60);
	}
	.wall{
		.m_t(45);
		.h(60);
		/*position:fixed;
		background:pink;*/
	}
	.img{
		img{
			.w(375);
			.h(61.5)
		}
	}
	.img1{
		img{
			.h(50)
		}
	}
	.bottom{
		.m_b(60);
		img{
			.h(50)
		}
	}
	.sort{
		display: flex;
		justify-content:space-around;
		.p_t(10);
		.p_b(10);
		div{
			flex-direction: column;
			display: flex;
		    justify-content: space-between;
		    text-align:center;
		    img{
		    	.w(50);
		    	.h(60);
		    }
		    span{
		    	.fs(18)
		    }
		}
	}
}


</style>