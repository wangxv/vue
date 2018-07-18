<template>
  <div class="signin">
    <h1>登录页面</h1>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data () {
    return {
      msg: '登录'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 h2 {
  font-weight: normal;
}
.he-button{
  width:200px;
  height:40px;
  border:none;
  outline:none;
  background:#000;
  color:#fff;
  font-size:16px;
  border-radius:5px;
  box-shadow: 1px 1px 3px #000;
  margin-top:130px;
  cursor:pointer;
}
a {
  color: #42b983;
  text-decoration:none;
}
</style>
