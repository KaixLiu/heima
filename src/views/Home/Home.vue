<template>
  <div>
    <p class="sellMus">推荐歌单</p>
    <van-row gutter="6">
      <van-col span="8" v-for="item in reList" :key="item.id">
        <van-image
          width="100%"
          height="3rem"
          fit="cover"
          :src="item.picUrl"
        ></van-image>
        <p class="song">{{ item.name }}</p>
      </van-col>
    </van-row>
    <p class="sellMus">最新音乐</p>
    <!-- 使用for循环循环最新音乐列表 -->
    <!-- 通过父向子传参，传递信息 -->
    <SongItem
      v-for="obj in songList"
      :key="obj.id"
      :name="obj.name"
      :author="obj.song.artists[0].name"
      :id="obj.id"
    ></SongItem>
  </div>
</template>

<script>
import { recommendMusicAPI, newMusicAPI } from '@/api/index.js'
// 导入最新音乐组件
import SongItem from '@/components/SongItem.vue'
export default {
  name: 'MyHome',
  data () {
    return {
      reList: [], // 推荐歌单列表数据
      songList: [] // 最新音乐列表数据
    }
  },
  components: {
    SongItem
  },
  created () {
    // 获取推荐歌单列表和最新音乐列表
    this.getRecommend()
  },
  methods: {
    async getRecommend () {
      const { data: res } = await recommendMusicAPI({ limit: 6 })
      if (res.code !== 200) return this.$Toast.fail('获取失败')
      this.reList = res.result
      const { data: res2 } = await newMusicAPI({ limit: 20 })
      this.songList = res2.result
    }
  }
}
</script>

<style lang="less" scoped>
.sellMus {
  padding: 0.2667rem 0.2667rem;
  margin: 0 0 0.2667rem 0;
  font-size: 15px;
  background-color: #eee;
}
.song {
  font-size: 0.3733rem;
  padding: 0 0.08rem;
  margin-bottom: 0.2667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; //对象作为伸缩盒子模型展示
  -webkit-box-orient: vertical; //设置伸缩盒子对象的子元素排列方式
  -webkit-line-clamp: 2; //显示行数
  overflow: hidden; //超出隐藏
}
</style>
