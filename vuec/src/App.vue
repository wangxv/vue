<template>
 <div class="#app">
        <div class="inbox">
            <img src="./assets/img.png" alt="">
        </div>
        <div class="inbox">
            <div class="inbox-input">
                <div class="inbox-text">
                    <span>车牌号</span>
                </div>
                <div class="province" v-on:click="getProvince" >{{prokey}}</div>
                <div class="carnum"  v-on:click="getCarnum" >
                   <input type="text" class="inbox-carnum" placeholder="请输入车牌号" v-bind:value="carkey">
                </div>
            </div>
            <div class="inbox-input"  v-on:click="getPhone">
                <div class="inbox-text" >
                    <span>手机号</span>
                </div>
                <div>
                  <input type="text" class="inbox-phone" v-model="myphone">
                </div>
            </div>

        </div>
         <div class="inbox">
            <button class="inbox-button" v-on:click="mysubmit">提交</button>
        </div>
        <ProvinceKey  class="inbox" v-show='isshow' @changeKey="getkey"></ProvinceKey>
        <CarNum class="inbox" v-show='iscarshow' @mychangeKey="mygetkey"
        @mycancelKey="mycancelKey"  @myaffirmKey="myaffirmKey" ></CarNum>

    </div>

</template>

<script>
import ProvinceKey from "./components/ProvinceKey";
import CarNum from "./components/CarNum";

export default {
  name: "App",
  data() {
    return {
      isshow: false,
      iscarshow: false,
      prokey: "沪",
      carkey: "",
      myphone: ""
    };
  },
  components: {
    ProvinceKey,
    CarNum
  },
  methods: {
    getProvince: function(e) {
      this.$data.isshow = !this.$data.isshow;
    },
    getCarnum: function(e) {
      this.$data.iscarshow = !this.$data.iscarshow;
    },
    getkey: function(data) {
      this.$data.prokey = data;
      this.$data.isshow = !this.$data.isshow;
    },
    mygetkey: function(data) {
      this.$data.carkey = "";
      this.$data.carkey = data;
    },
    getPhone: function() {
      this.$data.iscarshow = false;
    },
    mycancelKey: function() {
      this.$data.iscarshow = false;
    },
    myaffirmKey: function() {
      var str = this.$data.prokey + this.$data.carkey;
      var reg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
      if (!reg.test(str)) {
        alert("请输入正确的车牌号");
      }
    },
    mysubmit: function() {
      var str = this.$data.prokey + this.$data.carkey;
      var reg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
      if (!reg.test(str)) {
        alert("请输入正确的车牌号");
      } else {
        if (this.$data.myphone.length == 0) {
          alert("请输入的手机号");
        } else {
          alert(
            "车牌：" +
              this.$data.prokey +
              " ● " +
              this.$data.carkey +
              "    手机号：" +
              this.$data.myphone
          );
        }
      }
    }
  }
};
</script>

<style>
.inbox {
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.inbox-input {
  width: 300px;
  height: 50px;
  border: 1px solid #f1f1f1;
  outline: none;
  margin: 20px;
  font-size: 16px;
  padding: 0 4px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  border-radius: 5px;
}

.inbox-text {
  text-align: center;
  margin-right: 10px;
}

.province {
  width: 40px;
  display: block;
  background: url("assets/ang.png") no-repeat 100%;
  font-size: 16px;
  margin-right: 5px;
  cursor: pointer;
}

.carnum {
  color: #999999;
}
.inbox-button {
  width: 300px;
  padding: 12px 40px;
  background: #000;
  color: #fff;
  border: none;
  font-size: 16px;
  border-radius: 5px;
  outline: none;
  box-shadow: 1px 1px 1px #000;
  margin-bottom: 10px;
}
.isshow {
  display: none;
}
.inbox-phone,
.inbox-carnum {
  border: none;
  outline: none;
  font-size: 16px;
}
</style>
