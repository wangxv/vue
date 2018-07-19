<template>
  <div class="myindex">
    <img class="logo" src="../assets/logo7.png" alt=""/>
    <ul>
      <li v-for='item in tabList'>
        <router-link v-bind:to="item.url">
          <button type="" class="item-botton">{{item.title}}</button>
        </router-link>
        </a>
      </li>
    </ul>
    <ul class="mv">
      <li v-for='item in mvlist' class="mv-item">
        <img class="mv-img" v-bind:src='item.picurl' alt="">
        <div class="mv-title">{{item.mvtitle}}</div>
        <div class="mv-desc">{{item.mvdesc}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'MyIndex',
  data() {
    return {  
      tabList: [{ url: '/index', title: '首页' },{ url: '/singer', title: '歌手' }, { url: '/rangkingList', title: '排行' },  { url: '/broadcastingStation', title: '电台' }, { url: '/search', title: '搜索' }, { url: '/classificationList', title: '分类歌单' },],
      
      mvlist:[{mvdesc:'青峰首度创造献唱主题曲',mvtitle:'窗 (《扶摇》 电视剧片尾曲)',picurl:'http://y.gtimg.cn/music/photo_new/T015R640x360M101000kNSKf3u7zHb.jpg'},{mvdesc:'青峰首度创造献唱主题曲',mvtitle:'窗 (《扶摇》 电视剧片尾曲)',picurl:'http://y.gtimg.cn/music/photo_new/T015R640x360M101000kNSKf3u7zHb.jpg'},{mvdesc:'青峰首度创造献唱主题曲',mvtitle:'窗 (《扶摇》 电视剧片尾曲)',picurl:'http://y.gtimg.cn/music/photo_new/T015R640x360M101000kNSKf3u7zHb.jpg'},{mvdesc:'青峰首度创造献唱主题曲',mvtitle:'窗 (《扶摇》 电视剧片尾曲)',picurl:'http://y.gtimg.cn/music/photo_new/T015R640x360M101000kNSKf3u7zHb.jpg'},{mvdesc:'青峰首度创造献唱主题曲',mvtitle:'窗 (《扶摇》 电视剧片尾曲)',picurl:'http://y.gtimg.cn/music/photo_new/T015R640x360M101000kNSKf3u7zHb.jpg'},{
        mvdesc:'豪车游艇画面非常炫',mvtitle:'Power',picurl:'http://y.gtimg.cn/music/common/upload/t_mv_latest_rec/304147.jpg'
      },{
        mvdesc:'豪车游艇画面非常炫',mvtitle:'Power',picurl:'http://y.gtimg.cn/music/common/upload/t_mv_latest_rec/304147.jpg'
      },]
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo{
    width:100px;
    height:100%;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap:wrap;

}

li {
  display: inline-block;
  margin: 5px 10px;
}

.item-botton{
  padding:5px 15px;
  height:40px;
  background: #12A562;
  border:none;
  outline:none;
  color:#fff;
  font-size:14px;
  border-radius:5px;
  box-shadow: 1px 1px 4px #127648;
}
.mv{
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.mv-item{
  width:150px;
/*  height:150px;*/
  border-radius:5px;
  margin:10px;
  padding:10px;
  border:1px solid #666;
}
.mv-img{
    width:130px;
    height:130px;
}
.mv-title{
  color:#0876BF;
  font-size:16px;
  text-align:center;
}
.mv-desc{
  font-size:14px;
  text-align: center;
}

</style>
