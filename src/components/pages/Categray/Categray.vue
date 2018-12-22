<template>
	<div id="categray">
    <Header title="商品分类" back='true'></Header>
    <div class="searchwrap">
    	<div class="search">
    		<input type="text" placeholder="请输入搜索关键词"/>
    	</div>
    </div>
    <div class='box'>
			<div class="left">
				<ul>
					<li v-for='(item,index) in selnav'
						@click='sel(item.class)'
						:class="selected==item.class?'navsel':''"
					>{{item.name}}</li>
          <!--{{this.$store.state.name}}-->
				</ul>
			</div>
			<div class="right ">
				<div class='right-box animated '
					 :class="selected"
				      >
					<div class='categray-box' v-for='(item,index) in selnav'>
						<div class='categrayDetail-box'>
							 <div class='list-box'>
							 	<div v-for='ite in item.list' @click='goDetail(ite)'>
							 		<img :src='ite.imgPath' alt="">
							 		<span>{{ite.name}}</span>
							 	</div>
							 	
							 </div>
						</div>
					</div>	
				</div>
				
			</div>
		</div>
	    
	</div>
</template>

<script>
	import Header from 'common/Header'
	
	export default{
	name:'Categray',
	components:{Header},
	data(){
		return {
			name:'全部商品 分类界面',
			selnav:[
			{name:'亚麻籽油',class:'categray1',list:[
				{name:'亚麻菜籽油',imgPath:'../../../static/product3.jpg',fre:'true',newprice:'148.00',oldprice:'156.00'},
				{name:'亚麻菜籽油',imgPath:'../../../static/product4.jpg',fre:'true',newprice:'58.00',oldprice:'69.00'},
				{name:'亚麻菜籽油',imgPath:'../../../static/product5.jpg',fre:'true',newprice:'188.00',oldprice:'195.00'},
				{name:'亚麻菜籽油',imgPath:'../../../static/product6.jpg',fre:'true',newprice:'108.00',oldprice:'128.00'}
			
			]},
			{name:'坚果系列',class:'categray2',list:[
				{name:'59.9元礼包',imgPath:'../../../static/product7.jpg',fre:'true',grade:'true',newprice:'59.90',oldprice:'75.00'},
				{name:'68元礼包',imgPath:'../../../static/product7.jpg',fre:'true',grade:'true',newprice:'68.00',oldprice:'65.00'},
				{name:'88元礼包',imgPath:'../../../static/product7.jpg',fre:'true',grade:'true',newprice:'88.00',oldprice:'95.00'},
				{name:'128元礼包',imgPath:'../../../static/product7.jpg',fre:'true',grade:'true',newprice:'128.00',oldprice:'145.00'}
			]},
			{name:'粮食',class:'categray3',list:[
				{name:'亚麻菜籽油',imgPath:'../../../static/product3.jpg',fre:'true',newprice:'148.00',oldprice:'156.00'},
				{name:'亚麻菜籽油',imgPath:'../../../static/product4.jpg',fre:'true',newprice:'58.00',oldprice:'69.00'},
				{name:'亚麻菜籽油',imgPath:'../../../static/product5.jpg',fre:'true',newprice:'188.00',oldprice:'195.00'},
				{name:'亚麻菜籽油',imgPath:'../../../static/product6.jpg',fre:'true',newprice:'108.00',oldprice:'128.00'}
			
			]},
			{name:'礼包',class:'categray4',list:[
				{name:'59.9元礼包',imgPath:'../../../static/product7.jpg',fre:'true',grade:'true',newprice:'59.90',oldprice:'75.00'},
				{name:'68元礼包',imgPath:'../../../static/product7.jpg',fre:'true',grade:'true',newprice:'68.00',oldprice:'65.00'},
				{name:'88元礼包',imgPath:'../../../static/product7.jpg',fre:'true',grade:'true',newprice:'88.00',oldprice:'95.00'},
				{name:'128元礼包',imgPath:'../../../static/product7.jpg',fre:'true',grade:'true',newprice:'128.00',oldprice:'145.00'}
			]},
			{name:'牛肉干',class:'categray5',list:[
			    {name:'手撕牛肉干',title:'200g内蒙古特级',imgPath:'../../../static/product1.jpg',fre:'true',newprice:'45.00',oldprice:'58.00'},
				{name:'手撕牛肉干',title:'200g内蒙古特级',imgPath:'../../../static/product1.jpg',fre:'true',newprice:'128.00',oldprice:'145.00'},
				{name:'手撕牛肉干（片）',title:'200g',imgPath:'../../../static/product2.jpg',fre:'true',newprice:'32.00',oldprice:'45.00'},
				{name:'手撕牛肉干（片）',title:'600g',imgPath:'../../../static/product2.jpg',fre:'true',newprice:'90.00',oldprice:'45.00'}
			
			]}
			],
			selected:'categray1'
		}
	},
	methods:{
		sel(item){
			this.selected=item
		},
		goDetail(item){
			this.$router.push({path:'/goodsdetail'})
		}
	}
	}
</script>

<style lang="less" scoped>
@import url('../../../style/main.less');
#categray{
	.searchwrap{
		position: fixed;
		.top(55);
		.w(375);
		.h(80);
		border-top:2px solid @bg;
		border-bottom: 5px solid @bg;
		.search{
			background: @bg;
			border-radius: 25px;
			.w(340);
			.h(45);
			.m_t(18);.m_l(18);
		}
		input{
			border-radius: 25px;
			background: @bg;
			border: none;
			.w(300);
			.h(43);
			.lh(43);
			.m_l(35);
			.fs(18);
		}
	}
	.box{
		position: fixed;
		.top(142);
		height:100%;
		.w(375);
		display: flex;
		.left{
          .w(95);
          height: 100%;
          border-right:10px solid @bg;
          box-sizing: border; 
          .fs(17);
          ul{
          	li{
          		.w(95);
          		.h(50);
          		.lh(50);
          		text-align:center;
          		box-sizing:border;
          		border-bottom:3px solid @bg; 
          	}
          	.navsel{
          		background:@bg; 
          		border-left:3px solid red; 
          		color: red;
          	}
          }
		}
		.right{
			.w(280);
			height: 100%;
			.right-box{
				height: 100%;
				.categray-box{
					height: 100%;
				}
				.categrayDetail-box{
					height: 100%;
					overflow-y: scroll;
					.fs(16);
					.w(270); 
					margin:0px auto;
					.img{
						width: 100%;
						img{
							width: 100%;
						}
					}
					.categray-title{
						.h(35);
						.lh(35);
 						color:@themecolor;
 						text-align: center;
					}
					.categray-title span::before,.categray-title span::after{
					   content:'';
					   display: inline-block;
					   .w(35);
					   .h(1);
					   position: relative;
					   .top(-6);
					   margin:0px 15px;
					   background:#979797;
					}
					.list-box{
						width: 100%;
						display: flex;
						flex-wrap:wrap;
						align-content: flex-start;
						justify-content: space-around;
						div{
							.m_t(10);
						    width:45%;					/*.w(90);*/
							.h(150);
							.p_b(10);
							display: flex;
							flex-direction:column;
							justify-content: space-between;
							align-items: center;
							img{
								/*.w(65);.h(65);*/
								width: 100%;.h(120);
							}
							span{
								.fs(14);
								text-align: center;
							}
						}
					}
				}
			}
				.animated{
				/*transition: all 500ms ease-in-out;*/
			}
			.categray1{
				transform:translate(0,0%);
			}
			.categray2{
				transform:translate(0,-100%);
			}
			.categray3{
				transform:translate(0,-200%);
			}
			.categray4{
				transform:translate(0,-300%);
			}
			.categray5{
				transform:translate(0,-400%);
			}
			
		}
	}}
</style>