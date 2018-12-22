<template>
	<div id="zhuanqu">
		<div class="warp">
		    <Header title='干果' back='true'></Header>
		    <div class='wall'></div>
			<div class='img'>
				<img src="../../../static/logo.jpg" alt="">
			</div>
			<Productlist :list='ganguolist'></Productlist>
			
			<div class="bottom"></div>
			<TabBar></TabBar>
		</div>
	</div>
</template>

<script>
import Header from 'common/Header'
import TabBar from 'common/TabBar'
import Productlist from 'common/Productlist'
	export default{
	name:'Zhuanqu',
	components:{Header,Productlist,TabBar},
	props:['list'],
	data(){
		return {
			name:'专区',
			ganguolist:[
				{name:'59.9元礼包',imgPath:'../../../static/product7.jpg',fre:'true',grade:'true',newprice:'59.90',oldprice:'75.00'},
				{name:'68元礼包',imgPath:'../../../static/product7.jpg',fre:'true',grade:'true',newprice:'68.00',oldprice:'65.00'},
				{name:'88元礼包',imgPath:'../../../static/product7.jpg',fre:'true',grade:'true',newprice:'88.00',oldprice:'95.00'},
				{name:'59.9元礼包',imgPath:'../../../static/product7.jpg',fre:'true',grade:'true',newprice:'59.90',oldprice:'75.00'},
				{name:'68元礼包',imgPath:'../../../static/product7.jpg',fre:'true',grade:'true',newprice:'68.00',oldprice:'65.00'},
				{name:'88元礼包',imgPath:'../../../static/product7.jpg',fre:'true',grade:'true',newprice:'88.00',oldprice:'95.00'},
				{name:'59.9元礼包',imgPath:'../../../static/product7.jpg',fre:'true',grade:'true',newprice:'59.90',oldprice:'75.00'},
				{name:'68元礼包',imgPath:'../../../static/product7.jpg',fre:'true',grade:'true',newprice:'68.00',oldprice:'65.00'},
				{name:'88元礼包',imgPath:'../../../static/product7.jpg',fre:'true',grade:'true',newprice:'88.00',oldprice:'95.00'},
				{name:'128元礼包',imgPath:'../../../static/product7.jpg',fre:'true',grade:'true',newprice:'128.00',oldprice:'145.00'}
			]
			
		}
	}
	}
</script>

<style lang="less" scoped>
@import url('../../style/main.less');
#zhuanqu{
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
	.bottom{
		.h(60)
	}
}

</style>