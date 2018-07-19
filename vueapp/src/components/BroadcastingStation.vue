<template>
  <div class="myindex">
    <img class="logo" src="../assets/logo7.png" alt="" />
    <ul>
      <li v-for='item in tabList'>
        <router-link v-bind:to="item.url">
          <button type="" class="item-botton">{{item.title}}</button>
        </router-link>
        </a>
      </li>
    </ul>
    <h3>电台</h3>
    <div>
      <button type="" class="search-button" @click="getBroadcasting">获取电台列表</button>
      <ul class="broadcast-list" v-if="isshow">
        <li v-for="item in broadcastList" class="broadcast-item">
          <h3>{{item.title}}</h3>
          <ul>
            <li v-for="item1 in item.channellist">
              <div><img v-bind:src="item1.thumb" alt="" class="broadcast-img"></div>
              <div class="broadcast-info">
                <div class="broadcast-name">{{item1.name}}</div>
                <button class="broadcast-button" @click="getChannellist(item1.ch_name)" v-bind:name="item1.ch_name">进入频道</button>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div  class="channel-music">
       <ul class="music-list">
         <li v-for="(item,index) in musicList" class="music-item">
            <div class="music-num">{{index+1}}</div>
            <div class="music-title">{{item.title}}</div>
            <div class="music-artist">{{item.artist}}</div>
         </li>
       </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BroadcastingStation',
  data() {
    return {

      tabList: [{ url: '/index', title: '首页' }, { url: '/singer', title: '歌手' }, { url: '/rangkingList', title: '排行' }, { url: '/broadcastingStation', title: '电台' }, { url: '/search', title: '搜索' }, { url: '/classificationList', title: '分类歌单' }, ],
      broadcastList: [],
      isshow: false,
      musicList: [],
    }
  },
  methods: {
    getBroadcasting() {
      this.$http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?from=qianqian&version=2.1.0&method=baidu.ting.radio.getCategoryList&format=json').then(function(res) {
        console.log(res);
        if (res.body.result) {
          this.isshow = true;
          this.broadcastList = res.body.result;
        } else {
          this.isshow = false;
        }


      }, function(error) {
        console.log(error);
      })

    },
    getChannellist(ch_name) {
      console.log(ch_name);
      this.$http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?from=qianqian&version=2.1.0&method=baidu.ting.radio.getChannelSong&format=json&pn=0&rn=20&channelname=' + ch_name).then(function(res) {
        console.log(res);
        if (res.body.result.songlist) {
          this.isshow = false;
          this.musicList = res.body.result.songlist;
        } else {
          this.isshow = true;
        }


      }, function(error) {
        console.log(error);
      })
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  width: 100px;
  height: 100%;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

li {
  display: inline-block;
  margin: 5px 10px;
}

.item-botton {
  padding: 5px 15px;
  height: 40px;
  background: #12A562;
  border: none;
  outline: none;
  color: #fff;
  font-size: 14px;
  border-radius: 5px;
  box-shadow: 1px 1px 4px #127648;
}

.search-button {
  width: 200px;
  height: 50px;
  border: none;
  background: #1C1CC9;
  border-radius: 5px;
  color: #fff;
  outline: none;
  box-shadow: 1px 1px 5px #1C1CC9;
}

.broadcast-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
}

.broadcast-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
}

.broadcast-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 0px 0px 18px #fff;
}

.broadcast-info {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  font-weight: bold;

  margin-left: 5px;
  font-size: 14px;
}

.broadcast-name {

}

.broadcast-button{
  width:80px;
  height:40px;
  background:#2E9D0D;
  border-radius: 15px 15px 15px 0;
  box-shadow: 2px 2px 5px #24890A;
  outline:none;
  border:none;
  color:#fff;
}
.channel-music{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.music-list{

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  

 
}
.music-item{
   display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  
}
.music-num{
  width:30px;
  height:30px;
  line-height: 30px;
  text-align: center;
  background:#F0150D;
  box-shadow: 1px 1px 5px #F0150D;
  border-radius:50%;
  color:#fff;
}
.music-title{
  padding:5px 15px;
  background:#7C7CE3;
   border-radius: 15px;
   margin:0 10px;

}
.music-artist{
  padding:5px 15px;
  background:#3939F5;
  color:#fff;
  font-size:14px;
  border-radius: 15px 0 15px 0;
}
</style>
