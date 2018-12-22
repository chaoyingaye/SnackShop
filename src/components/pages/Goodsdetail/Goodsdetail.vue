<template>
   <div id="goodsdetail">
   	<Header back='true' title='商品详情'></Header>
<div class="box">
	<div class="img-box">
		<img src='../../../../static/product7.jpg'/>
	</div>
	<div class="input-box">
		<div class="contain">
			<div>
				<span>数量</span>
				<span>1</span>
				<span>></span>
			</div>
			<div class="car">
				<span>加入购物车</span>
				<span>购物车</span>
			</div>
		</div>
	</div>
	<div class="info-box">
		<span class="stock">有货</span>
		<p>纯生龙岩500g</p>
		<p>￥10.0</p>
	</div>
	<div>
		<mt-navbar v-model="selected">
		  <mt-tab-item id="1">option A</mt-tab-item>
		  <mt-tab-item id="2">option B</mt-tab-item>
		  <mt-tab-item id="3">option C</mt-tab-item>
		</mt-navbar>
		
		<!-- tab-container -->
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="1">
		    <mt-cell v-for="n in 10" :key='n' :title="'content ' + n" />
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
		    <mt-cell v-for="n in 4" :key='n' :title="'content ' + n" />
		  </mt-tab-container-item>
		  <mt-tab-container-item id="3">
		    <mt-cell v-for="n in 6" :key='n' :title="'content ' + n" />
		  </mt-tab-container-item>
		</mt-tab-container>
   </div>
   </div>
</div>
</template>

<script>
import Header from 'common/Header'

export default{
  name: 'Goodsdetail',
  components:{
 Header
  },
  data(){
  	return{
      selected:'1',
     
  	}
  },
  methods:{
  	 onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    }
  },

}

</script>

<style lang="less" scoped>
@import url("../../../style/main.less");
#goodsdetail{
	.box{
		.p_t(45);
		.w(375);
		.img-box{
			.w(375);
			text-align:center;
			img{
				width:45%
			}
		}
	}
	.input-box{
		.contain{
			margin:0px auto;
			.w(340);
			.fs(14);
			color: #fff;
			border-radius: 40px;
			border: 1px solid #ab956d;
			background: #ab956d;
			display: flex;
			justify-content: space-between;
			.p_t(10);
			.p_b(10);
			div{
				display: flex;
				justify-content: space-around;
				width: 40%;
				.p_l(20);
				.p_r(20)
			}
			.car{
				border-left: 1px dotted #fff;
			}
		}
	}
	.info-box{
		text-align: center;
		.stock{
			.fs(16)
		}
		p{
			.fs(22);
		}
	}
}
</style>