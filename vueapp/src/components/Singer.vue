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
     <h3>歌手</h3>
      <div >
          <button type="" class="search-button" @click="getSinger">获取歌手列表</button>
          <ul class="singer-list" v-if="isshow">
             <li  v-for="item in singerList" class="singer-item">
               <div><img v-bind:src="item.avatar_small" alt="" class="singer-img"></div>
               <div class="singer-info">
                 <div class="singer-name">{{item.name}}</div>
                 <div class="singer-countery">{{item.country}}</div>
                 <div class="singer-songs">{{item.songs_total}}</div>
               </div>
             </li>
          </ul>
      </div>
  </div>
</template>
<script>
export default {
  name: 'Singer',
  data() {
    return {
       tabList: [{ url: '/index', title: '首页' },{ url: '/singer', title: '歌手' }, { url: '/rangkingList', title: '排行' },  { url: '/broadcastingStation', title: '电台' }, { url: '/search', title: '搜索' }, { url: '/classificationList', title: '分类歌单' },],
       singerList:[],
       isshow:true,
    }
  },
  methods:{
    getSinger(){
       this.$http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?from=qianqian&version=2.1.0&method=baidu.ting.artist.get72HotArtist&format=jsonℴ=1&offset=0&limit=50').then(function(res){
             console.log(res);
             if(res.body.artist){
               this.isshow = true;
               this.singerList = res.body.artist;
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
   width:200px;
   height:50px;
   border:none;
   background:#1C1CC9;
   border-radius:5px;
   color:#fff;
   outline:none;
   box-shadow:1px 1px 5px #1C1CC9;
}
.singer-list{
  display:flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

}
.singer-item{
    display:flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
   width:180px;
   height:180px;
   box-shadow: 4px 5px 9px #127CC1;
   border-radius:45px 35px 25px 0;
  background: -webkit-linear-gradient(180deg, #79C4F2, #1C90DB); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(180deg, #79C4F2, #1C90DB); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(180deg, #79C4F2, #1C90DB); /* Firefox 3.6 - 15 */
  background: linear-gradient(180deg, #79C4F2, #1C90DB); /* 标准的语法 */
  
}
.singer-img{
   width:100px;
   height:100px;
   border-radius:50%;
   box-shadow: 0px 0px 18px #fff;
}
.singer-info{
  display:flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  font-weight: bold;
 color:#fff;
 margin-left:5px;
 font-size:14px;
}
.singer-name{
  color:#fff;
}
.singer-countery{
  color:#fff;
}
.singer-songs{
 /* color:#033658;*/
}
</style>