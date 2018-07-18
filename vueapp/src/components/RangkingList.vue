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
     <h3>排行</h3>
  </div>
</template>
<script>
export default {
  name: 'RangkingList',
  data() {
    return {
      
      tabList: [{ url: '/index', title: '首页' },{ url: '/singer', title: '歌手' }, { url: '/rangkingList', title: '排行' },  { url: '/broadcastingStation', title: '电台' }, { url: '/video', title: '视频' }, { url: '/classificationList', title: '分类歌单' },]
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
</style>