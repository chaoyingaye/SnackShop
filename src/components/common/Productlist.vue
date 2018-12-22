<template>
	<div id="productlist">
	   <div class="contain">
	       <div v-for="(item,index) in list"
	       	@click="goDetail(item)">
	           <img :src='item.imgPath'/>
	           <h1>{{item.name}}</h1>
	           <h2>{{item.title}}</h2><br />
	           <i v-if='item.fre'>包邮</i>
	           <b v-if='item.grade'>特级</b><br />
	           <span>￥{{item.newprice}}</span>
	           <u>￥{{item.oldprice}}</u>
	           <em>购物车</em>
	       </div>
	   </div>
	</div >
</template>

<script>

	export default{
	name:'Productlist', 
	props:['list'],
	components:{},
	data(){
		return {
			name:'专区',
			/*list:
			[
				{name:'59.9元礼包',imgPath:'../../../static/product7.jpg',fre:'true',grade:'true',newprice:'59.90',oldprice:'75.00'},
				{name:'68元礼包',imgPath:'../../../static/product7.jpg',fre:'true',grade:'true',newprice:'68.00',oldprice:'65.00'},
				{name:'88元礼包',imgPath:'../../../static/product7.jpg',fre:'true',grade:'true',newprice:'88.00',oldprice:'95.00'},
				{name:'128元礼包',imgPath:'../../../static/product7.jpg',fre:'true',grade:'true',newprice:'128.00',oldprice:'145.00'}
			]*/
		}
	},
	 methods:{
  	goDetail(){
  		this.$router.push({path:'/goodsdetail'})
  	}
  }
	}
</script>

<style lang="less" scoped>
@import url('../../style/main.less');
#productlist{
	.contain{
		.w(360);
		margin:0 auto;
		/*background:pink;*/
		display:flex;
		flex-wrap:wrap;
		justify-content: space-between;
		div{
			width:48%;
			.p_t(25);
			.p_b(10);
			.fs(15);
			img{
				width:100%;
			}
			h1{ display: inline;
				font-weight: 600;
			}
			h2{  .fs(10);
			display: inline;
				color: #666666;
			}
			span{
				font-weight: 600;
				color:darkred;
			}
			u{
				text-decoration: line-through;
				color: #666666;
				.fs(13);
			}
			i,b{
				display:inline-block;
				color:darkred;
				.fs(13);
				.padding(0,2,0,2);
				text-align: center;
				border: 2px solid darkred;
				border-radius: 3px;
				font-weight: 600;
				.m_b(10);
				.m_t(5);
			}
			b{
				.m_l(10);
			}
			em{
				.m_r(2);
				.fs(13);
			}
		}
	}
}

</style>