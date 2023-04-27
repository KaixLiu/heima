<template>
  <div>
    <van-nav-bar title="首页" v-if="$route.path==='/layout/home'" fixed />
    <van-nav-bar title="搜索" v-else fixed/>
    <div class="main">
      <router-view></router-view>
    </div>
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/layout/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/layout/search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'MyLayout',
  data () {
    return {
      active: 0,
      svg: ''
    }
  },
  created () {
    // console.log(this.$route.path)
  }
}
</script>

<style lang="less" scoped>
.main {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>
