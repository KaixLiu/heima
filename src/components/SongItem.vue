<template>
  <div>
    <van-cell center :title="name" :label="author+ ' 一 ' +name">
      <template>
        <van-icon name="play-circle-o" size="0.6rem" @click="playFn"></van-icon>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'MySongItem',
  props: {
    name: String, // 歌名
    author: String, // 歌手
    id: Number // 歌曲id (标记这首歌曲-为将来跳转播放页做准备)
  },
  methods: {
    // 播放音乐
    playFn () {
      console.log('jj')
    }
  }
}
</script>

<style lang='less' scoped>
.van-cell {
  border-bottom: 1px solid lightgray;
}
</style>
