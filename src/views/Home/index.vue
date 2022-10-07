<template>
  <div>
    <p class="title">推荐歌单</p>
    <van-row gutter="6">
      <van-col span="8" v-for="obj in reList" :key="obj.id">
        <van-image width="100%" height="3rem" fit="cover" :src="obj.picUrl" />
        <p class="song_name">{{ obj.name }}</p>
      </van-col>
    </van-row>
    <p class="title">最新音乐</p>
    <!-- <van-cell
      :title="obj.name"
      center
      :label="obj.song.artists[0].name + '-' + obj.name"
      v-for="obj in hotList"
      :key="obj.id"
    >
      <!使用 right-icon 插槽来自定义右侧图标 -->
    <!-- <template #right-icon>
        <van-icon name="play-circle-o" size="25" />
      </template>
    </van-cell> -->
    <song-item
      v-for="obj in hotList"
      :key="obj.id"
      :name="obj.name"
      :author="obj.song.artists[0].name + '-' + obj.name"
      :id="obj.id"
    ></song-item>
  </div>
</template>

<script>
import { recommendMusicAPI } from "@/api";
import { hotMusicAPI } from "@/api";
import SongItem from "@/components/SongItem";

export default {
  data() {
    return {
      reList: [], // 推荐歌单数据
      hotList: [],
    };
  },
  async created() {
    const res = await recommendMusicAPI({
      limit: 6,
    });
    const hotRes = await hotMusicAPI({
      limit: 10,
    });
    this.reList = res.data.result;
    this.hotList = hotRes.data.result;
  },
  components: {
    SongItem,
  },
};
</script>
 
<style>
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}
.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}
</style>