<template>
  <div class="my-index">
    <div class="greens-file">
      <input type="file" name="" v-on:change="changeFile(this)" id="file">
      <img v-bind:src="my_url" alt="" class="greens-img">
      <button type="button" class="uploading" v-on:click="upLoading">检验</button>
    </div>
   
    <div>
      <ul class="greens-list">
        <li v-for="item in greensData" class="greens-item">
          <div class="greens-name"><span>名称：</span>
            <span>{{item.name}}</span></div>
          <div class="greens-year"><span>热量:</span>
            <span>{{item.calorie}}</span></div>
          <div class="greens-score"><span>可信度：</span><span>{{item.probability | NumFormat}}</span></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Greens',
  data() {
    return {
      my_url: '#',
      greensData: [],
    }
  },
  filters:{
    NumFormat:function(value){
      if(!value){
        return '0.000'
      }
      value = Number(value).toFixed(3);
      return value;
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
    },
    upLoading() {
      let that = this;
      let access_token = '';
      let url = encodeURIComponent(that.headbase64(that.my_url));
      that.$http.get("/api/oauth/2.0/token", {

        params: {
          "grant_type": 'client_credentials',
          "client_id": 'kLn87DlEXEFnKgvQVIGBS3uV',
          "client_secret": 'WGdW43eq7iaURbNeoC2gUmsMrQeq2MpG'
        },
      }).then((response) => {
        console.log("取到access_token");
        var data = JSON.stringify({ 'image': url });
        that.$http.post("/api/rest/2.0/image-classify/v2/dish?access_token=" + response.body.access_token, 'image=' + url

          , { "emulateJSON": true }, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          },

        ).then((response) => {
          console.log('取到数据')
         if( response.body.result){
            that.animalData = response.body.result;
          }
        }, (response) => {
          console.log('失败')
          console.log(response)
        })
      }, (response) => {
        console.log('失败')
        console.log(response)
      })


    },
    headbase64(src) {
      let reg = /^data:image\/(jpeg|png|gif);base64,/g;
      return src.replace(reg, '');

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
  justify-content: center;
  align-content: center;
}

.greens-file {
  width: 250px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  border: 1px solid #ccc;
}

.file {
  width: 200px;
  height: 50px;
  border: 1px solid #ccc;
  outline: none;
  margin: 5px;
}

.greens-img {
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  padding: 20px;
  margin: 15px 0;
}

.uploading {
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #000;
  color: #fff;
  border-radius: 5px;
  border: none;
  box-shadow: 1px 1px 3px #000;
  margin: 20px;
  font-size: 20px;
}

.greens-list {
  width: 350px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}

.greens-item {
  width: 300px;
  display: flex;
  flex-direction: column;
  text-align: left;
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
}

.greens-name {
  color: #007ACC;
}

.greens-score {
  color: red;
}

</style>
