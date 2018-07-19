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
     <h3>搜索</h3>
     <div class="search-music">
          <input type="text" name="" name="search" class="search-input" v-model="musicName">
          <button type="" class="search-button" @click="searchMusic">搜索</button>
     </div>

     <div class="music-list">
       <ul v-if="isshow">
         <li v-for="item in musicList" class="music-item">
             <div>
                <img v-bind:src="item.image" alt="" class="music-img">
             </div>
             <div class="music-info">
               <div class="music-title">{{item.title}}</div>
               <div class="music-author"><span v-for="item1 in item.author">{{item1.name}}</span></div>
               
             </div>
             <a v-bind:href="item.mobile_link" class="music-link">听歌</a>
         </li>
       </ul>
     </div>
  </div>
</template>
<script>
export default {
  name: 'Search',
  data() {
    return {
      tabList: [{ url: '/index', title: '首页' },{ url: '/singer', title: '歌手' }, { url: '/rangkingList', title: '排行' },  { url: '/broadcastingStation', title: '电台' }, { url: '/search', title: '搜索' }, { url: '/classificationList', title: '分类歌单' },],
      musicName:'',
      musicList:[],
      isshow:false,
    }
  },
  methods:{
      searchMusic(){
            console.log(this.musicName)
           this.$http.jsonp('https://api.douban.com/v2/music/search?q='+this.musicName).then(function(res){
             if(res.body.musics){
               this.isshow = true;
               this.musicList = res.body.musics;
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
*{
  margin:0;
  padding:0;
}
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
.search-music{
   display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap:wrap;
  margin-top:20px;

}
.search-input{
   width:300px;
   height:50px;
   line-height: 50px;
   font-size:20px;
   border:1px solid #ccc;
   outline:none;
   background: #000;
   color:#fff;
   border-radius:5px;
   margin-right:10px;
   
}
.search-button{
  width:70px;
  height:50px;
  border:none;
  outline:none;
  background:#000;
  color:#fff;
  border-radius:5px;
  line-height: 50px;
  font-size:16px;


}
.music-list{
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap:wrap;

}
.music-item{
  display: flex;
  flex-direction: row;
  justify-content: center;
 align-items: center;
  flex-wrap:wrap;
  width:300px;
  height:200px;
  background:#000;
  box-shadow: 1px 1px 5px #000;
  text-decoration: none;
  border-radius:5px;
}
.music-img{
  width:100px;
  height:100px;
  border-radius:50%;
  margin-right:20px;
}
.music-info{
   display: flex;
   flex-direction: column;
   flex-wrap:wrap;
   align-items: center;
}
.music-title{
  width:100px;
 padding:5px;
 background:#F0D364;
 border-radius:5px;
 box-shadow:1px 1px 5px #E8BC15;
 color:#B70F2C;
 font-weight: bold;
 font-size:14px;
}
.music-author{
 width:100px;
 padding:5px;
 background:#F0D364;
 border-radius:5px;
 box-shadow:1px 1px 5px #E8BC15;
 color:#B70F2C;
 font-weight: bold;
 font-size:14px;
 margin-top:5px;
}
.music-link{
  display:block;
  width:50px;
  height:50px;
  line-height: 50px;
  text-align: center; 
  border-radius:50%;
  text-decoration: none;
  color:#fff;
  background:red;
  margin-top:5px;
  font-size:14px;
  align-self:flex-end;
}
</style>