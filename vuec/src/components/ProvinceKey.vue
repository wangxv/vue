<template>
    <div>
      <div class="mycom">
           <span class="mycom-item" v-for="item in prolists" :key="item" v-on:click="getkey">{{item}}</span>
      </div>
    </div>
</template>
<script>
export default {
  name: "ProvinceKey",
  data() {
    return {
      prolists: [
        "京",
        "沪",
        "浙",
        "苏",
        "粤",
        "鲁",
        "晋",
        "冀",
        "豫",
        "川",
        "渝",
        "辽",
        "吉",
        "黑",
        "皖",
        "鄂",
        "湘",
        "赣",
        "闽",
        "陕",
        "甘",
        "宁",
        "蒙",
        "津",
        "贵",
        "云",
        "桂",
        "琼",
        "青",
        "新",
        "藏",
        "港",
        "澳"
      ]

    };
  },
  methods:{
    getkey:function(e){

      this.$emit('changeKey',e.target.innerHTML);
    }
  }
};
</script>


<style >
.mycom{
   width:352px;
   padding:20px;
   border:1px solid #000;
}
.mycom-item {
  text-align: center;
  line-height: 30px;
  border:1px solid #ccc;
  margin:5px;
  padding:10px 15px;
  cursor:pointer;
}
</style>
