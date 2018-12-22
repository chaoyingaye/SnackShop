<template>
	<div id="shopcar">
    <Header title="我的购物车" back='true'></Header>
			<TabBar></TabBar>
	</div>
</template>

<script>
	import Header from 'common/Header'

	import TabBar from 'common/TabBar'
	export default{
	name:'Shopcar',
	components:{Header,TabBar},
	data(){
		return {
			name:'购物车页面'
		}
	}
	}
</script>

<style lang="less" scoped>
@import url('../../../style/main.less');

</style>