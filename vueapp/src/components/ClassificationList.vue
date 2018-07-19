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
      <h3>分类歌单</h3>
      <div>
          <button type="" class="search-button" @click="getMusic">获取歌单</button>
          <ul class="music-list">
             <li v-for="item in musicList" class="music-item">
               <div><img v-bind:src="pic_small" alt="" class="music-img"></div>
                <div class="item-title">{{item.title}}</div>

                <div>
                  <span class="item-author">{{item.author}}</span>
                  <span class="item-country">{{item.country}}</span>
                </div>
                <div class="item-info">{{item.info}}</div>
             </li>
          </ul>
      </div>
  </div>
</template>
<script>
export default {
  name: 'ClassificationList',
  data() {
    return {
      
      tabList: [{ url: '/index', title: '首页' },{ url: '/singer', title: '歌手' }, { url: '/rangkingList', title: '排行' },  { url: '/broadcastingStation', title: '电台' }, { url: '/search', title: '搜索'}, { url: '/classificationList', title: '分类歌单' },],
      musicList:[]
    }
  },
  methods:{
    getMusic(){
       this.$http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?from=qianqian&version=2.1.0&method=baidu.ting.plaza.getRecommendAlbum&format=json&offset=0&limit=50').then(function(res){
             console.log(res);
             if(res.body.plaze_album_list.RM.album_list.list){
               this.isshow = true;
               this.musicList = res.body.plaze_album_list.RM.album_list.list;
             }else{
                this.isshow = false;
             }
             
           },function(error){
              console.log(error);
           })

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
.search-button{
  width:150px;
  height:40px;
  border:none;
  outline:none;
  background:#F57CF5;
  color:#fff;
  border-radius:35px 0px 35px 0px;
  cursor:pointer;
  font-size:14px;
}
.music-list{
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap:wrap;
}
.music-item{
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap:wrap;
  padding:20px;
  border-radius:10px 0 0 0;
  background:#F7C6ED;
  color:#120562;
}
.item-title{
  color:#36986A;
  font-size:22px;
  font-weight: bold;
   text-shadow: 2px 2px 2px #000;
}
.item-author{
  padding:10px;
   color:#0D15ED;
  font-weight: bold;
  

}
.item-country{
   color:#0D15ED;
    font-weight: bold;
}
.item-info{
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
  
}
</style>
