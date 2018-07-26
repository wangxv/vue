<template>
  <div class="my-index">
    <router-link to="/car" class="mywrapp">
      <div class="search">车型识别</div>
    </router-link>
    <router-link to="/logo" class="mywrapp">
      <div class="search">logo识别</div>
    </router-link>
     <router-link to="/greens" class="mywrapp">
      <div class="search">菜品识别</div>
    </router-link>
     <router-link to="/animal" class="mywrapp">
      <div class="search">动物识别</div>
    </router-link>
     <router-link to="/plant" class="mywrapp">
      <div class="search">植物识别</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'MyIndex',
  data() {
    return {

    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.my-index {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}

.mywrapp {
  width: 150px;
  height: 60px;
  background-image: url('../assets/search.png');
  background-repeat: no-repeat;
  background-size: 50px;
  /* background-color:rgb(255,0,255,0.5);*/
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
/*   align-items: flex-end; */
  box-shadow: 2px 2px 12px #B734B7;
  cursor: pointer;
  text-decoration: none;
  margin: 10px;
}

.search {
  color: #3EB27C;
  font-size: 20px;
  font-weight: bold;

  padding: 10px 0;
}

</style>
