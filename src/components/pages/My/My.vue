<template>
	<div id="my">
    <Header title="个人中心" back='true'></Header>
		<TabBar></TabBar>
	</div>
</template>

<script>
		import TabBar from 'common/TabBar'
import Header from 'common/Header'

	export default{
	name:'My',
	components:{Header,TabBar},
	data(){
		return {
			name:'这是my页面'
		}
	}
	}
</script>

<style lang="less" scoped>
@import url('../../../style/main.less');

</style>