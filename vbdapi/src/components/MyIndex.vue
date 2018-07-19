<template>
  <div class="my-index">
    <router-link to="/car" class="my-car">
      <div class="car-search">车型识别</div>
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

.my-car {
  width: 150px;
  height: 150px;
  background-image: url('../assets/search.png');
  background-repeat: no-repeat;
  background-size: 150px;
  /* background-color:rgb(255,0,255,0.5);*/
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  box-shadow: 2px 2px 12px #B734B7;
  cursor: pointer;
  text-decoration: none;
}

.car-search {
  color: #3EB27C;
  font-size: 20px;
  font-weight: bold;

  padding: 10px 0;
}

</style>
