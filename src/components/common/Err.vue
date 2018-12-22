<template>
    <div>
    	页面错误
    	<!--<router-link to="/">点击跳转回首页</router-link>-->
   		<span>3秒后自动跳转</span>
    </div>
</template>

<script>

export default {
  name: 'Err',
  components: {
    
  },
mounted(){
	setTimeout(()=>{
//		this.$router.push('/')
     this.$router.replace('/')
	},1500);
}
}
</script>

<style lang="less" scoped>
@import url("../../style/main.less");

</style>
