<template>
  <div class="my-index">
     <div>
        <input type="file" name="" v-on:change="changeFile(this)" id="file">
        <img v-bind:src="my_url" alt="">
     </div>
     <button type="button" class="uploading" v-on:click="upLoading">检验</button>
  </div>
</template>

<script>
export default {
  name: 'Car',
  data () {
    return {
      my_url:'#',
    }
  },
  methods:{
    changeFile (data){
      var that = this;
      let file = document.getElementById("file").files[0];
      let fr = new FileReader();
      let dataUrl = fr.readAsDataURL(file);
      fr.onload = function(e){
         that.my_url=this.result;
      }
     let params ={
      params:{
         "grant_type":'client_credentials',
        "client_id":'kLn87DlEXEFnKgvQVIGBS3uV',
        "client_secret":'WGdW43eq7iaURbNeoC2gUmsMrQeq2MpG'
      }
     }
       that.$http.jsonp('https://aip.baidubce.com/oauth/2.0/token', params).then(function(res){
        console.log(res);
      },function(err){
        console.log(err)
      })
    
      // that.$http.jsonp('https://aip.baidubce.com/rest/2.0/image-classify/v1/car?access_token='+token,{url:

      // }).then(function(response){

      // }).catch(function(error){

      // })

    },
    upLoading(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
</style>
