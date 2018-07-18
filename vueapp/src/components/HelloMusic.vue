<template>
  <div class="hello">
    <img class="logo" src="../assets/logo1.png" alt=""/>
    <h2>{{ msg }}</h2>
    <router-link to='/index'>
      <button type="button" class="he-button">进入OMUSIC</button>
    </router-link>
    <router-link to='/signin'>
      <button type="button" class="he-button">登录</button>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'HelloMusic',
  data() {
    return {
      msg: 'Welcome to Your Music App'
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-weight: normal;
}

.he-button {
  width: 200px;
  height: 40px;
  border: none;
  outline: none;
  background: #000;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: 1px 1px 3px #000;
  margin-top: 130px;
  cursor: pointer;
}

a {
  color: #42b983;
  text-decoration: none;
}

</style>
