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
  data() {
    return {
      my_url: '#',
    }
  },
  methods: {
    changeFile(data) {
      var that = this;
      let file = document.getElementById("file").files[0];
      let fr = new FileReader();
      let dataUrl = fr.readAsDataURL(file);
      fr.onload = function(e) {
        that.my_url = this.result;
      }
      // let params = {
      //   params: {
      //     "grant_type": 'client_credentials',

      //     "client_id": 'kLn87DlEXEFnKgvQVIGBS3uV',
      //     "client_secret": 'WGdW43eq7iaURbNeoC2gUmsMrQeq2MpG'
      //   }
      // }

      that.axios({
        url:'https://aip.baidubce.com/oauth/2.0/token',
        methode:'get',
        header:{
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        },
        data:{
          grant_type: 'client_credentials',
          client_id: 'kLn87DlEXEFnKgvQVIGBS3uV',
          client_secret: 'WGdW43eq7iaURbNeoC2gUmsMrQeq2MpG'
        }
      }).then(function(res){
        console.log(res);
      }).catch(function(err){
        console.log(err)
      })

    },
    upLoading() {

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

</style>
