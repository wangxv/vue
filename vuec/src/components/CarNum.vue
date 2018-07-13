<template>
    <div>
      <div class="mycom">
          <span class="mycom-key" v-on:click="mycancel">取消</span>
          <span class="mycom-key" v-on:click="myaffirm">确认</span>

           <span class="mycom-pro" v-for="item in provlist" :key="item" v-on:click="getkey">{{item}}</span>

           <span class="mycom-munum" v-for="item in mynum" :key="item" v-on:click="getkey">{{item}}</span>

           <span class="mycom-alphabetlist" v-for="item in alphabetlists" :key="item" v-on:click="getkey">{{item}}</span>
           <span class="mycom-mykey"  v-on:click="mydelete">{{mykey}}</span>
      </div>

    </div>
</template>
<script>
export default {
  name: "CarNum",
  data() {
    return {
      alphabetlists: [
        "Q",
        "W",
        "E",
        "R",
        "T",
        "Y",
        "U",
        "I",
        "O",
        "A",
        "S",
        "D",
        "F",
        "G",
        "H",
        "J",
        "K",
        "P",
        "Z",
        "X",
        "C",
        "V",
        "B",
        "N",
        "M",
        "L"
      ],
      provlist: ["港", "澳", "学", "警", "领"],
      mynum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      mykey: "删除",
      myvalue: ""
    };
  },
  methods: {
    getkey: function(e) {
      this.$data.myvalue += e.target.innerHTML;
      this.$emit("mychangeKey", this.$data.myvalue);
    },
    mycancel: function() {
      this.$emit("mycancelKey", "cancel");
    },
    myaffirm: function() {
      this.$emit("myaffirmKey", "ffirmkey");
    },
    mydelete: function() {
      var str = this.$data.myvalue;
      if (str.length != 0) {
        str = str.slice(0, str.length - 1);
        this.$data.myvalue = str;
      }
      this.$emit("mychangeKey", this.$data.myvalue);
    }
  }
};
</script>


<style >
.mycom {
  width: 352px;
  padding: 20px;
  border: 1px solid #000;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.mycom-key {
  width: 40%;
  text-align: center;
  line-height: 30px;
  border: 1px solid #ccc;
  margin: 5px;
  padding: 10px;
  cursor: pointer;
}
.mycom-pro {
  width: 10%;
  text-align: center;
  line-height: 30px;
  border: 1px solid #ccc;
  margin: 5px;
  padding: 11px;
  cursor: pointer;
}
.mycom-munum {
  width: 3%;
  text-align: center;
  line-height: 10px;
  border: 1px solid #ccc;
  margin: 5px;
  padding: 6px;
  cursor: pointer;
}
.mycom-alphabetlist {
  width: 5%;
  text-align: center;
  line-height: 20px;
  border: 1px solid #ccc;
  margin: 5px;
  padding: 10px;
  cursor: pointer;
}
.mycom-mykey {
  width: 5%;
  flex-grow: 2;
  text-align: center;
  line-height: 20px;
  border: 1px solid #ccc;
  margin: 5px;
  padding: 10px;
  cursor: pointer;
}
</style>
