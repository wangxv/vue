<template>
  <div class="myindex">
    <img class="logo" src="../assets/logo7.png" alt="" />
    <ul>
      <li v-for='item in tabList'>
        <router-link v-bind:to="item.url">
          <button type="" class="item-botton">{{item.title}}</button>
        </router-link>
        </a>
      </li>
    </ul>
    <h3>排行</h3>
    <ul class="musictop">
      <li v-for="item in topList" class="musictop-item">
          <div class="item-img"><img v-bind:src="item.picUrl" alt=""></div>
          <div>
             <h5 class="item-title">{{item.topTitle}}</h5>
              <ul class="item-singer">
                <li v-for="item1 in item.songList" class="singer-item">
                    <span class="singer-name">{{item1.singername}}</span>
                    <span class="song-name">{{item1.songname}}</span>
                </li>
              </ul>
             
          </div>
           <a href="" class="music-to"> > </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'RangkingList',
  data() {
    return {

      tabList: [{ url: '/index', title: '首页' }, { url: '/singer', title: '歌手' }, { url: '/rangkingList', title: '排行' }, { url: '/broadcastingStation', title: '电台' }, { url: '/search', title: '搜索' }, { url: '/classificationList', title: '分类歌单' }, ],
     
        topList: [{
            "id": 4,
            "listenCount": 19400000,
            "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_4_300_214360296.jpg",
            "songList": [{
                "singername": "王北车",
                "songname": "陷阱"
              },
              {
                "singername": "吴亦凡",
                "songname": "中国魂"
              },
              {
                "singername": "何流",
                "songname": "春花香"
              }
            ],
            "topTitle": "巅峰榜·流行指数",
            "type": 0
          },
          {
            "id": 26,
            "listenCount": 20000000,
            "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_26_300_214003654.jpg",
            "songList": [{
                "singername": "胡66",
                "songname": "浪人琵琶"
              },
              {
                "singername": "Olly Murs",
                "songname": "That Girl"
              },
              {
                "singername": "尤长靖",
                "songname": "傲红尘"
              }
            ],
            "topTitle": "巅峰榜·热歌",
            "type": 0
          },
          {
            "id": 27,
            "listenCount": 14981580,
            "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_27_300_214713358.jpg",
            "songList": [{
                "singername": "冯提莫",
                "songname": "梦的游戏"
              },
              {
                "singername": "胡夏",
                "songname": "知道不知道"
              },
              {
                "singername": "房东的猫",
                "songname": "云烟成雨"
              }
            ],
            "topTitle": "巅峰榜·新歌",
            "type": 0
          },
          {
            "id": 54,
            "listenCount": 9400000,
            "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_54_300_214731563.jpg",
            "songList": [{
                "singername": "田燚",
                "songname": "我我 (Live)"
              },
              {
                "singername": "邓典",
                "songname": "Perfect (Live)"
              },
              {
                "singername": "蔡维泽",
                "songname": "视线所及只剩生活 (Live)"
              }
            ],
            "topTitle": "巅峰榜·明日之子",
            "type": 0
          },
          {
            "id": 28,
            "listenCount": 19300000,
            "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_28_300_214360296.jpg",
            "songList": [{
                "singername": "王北车",
                "songname": "陷阱"
              },
              {
                "singername": "李袁杰",
                "songname": "醉千年"
              },
              {
                "singername": "贺敬轩",
                "songname": "但愿余生都是你"
              }
            ],
            "topTitle": "巅峰榜·网络歌曲",
            "type": 0
          },
          {
            "id": 5,
            "listenCount": 4550840,
            "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_5_300_214250426.jpg",
            "songList": [{
                "singername": "周笔畅",
                "songname": "无人岛"
              },
              {
                "singername": "吴亦凡",
                "songname": "中国魂"
              },
              {
                "singername": "王菲",
                "songname": "偶遇"
              }
            ],
            "topTitle": "巅峰榜·内地",
            "type": 0
          },
          {
            "id": 6,
            "listenCount": 3760520,
            "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_6_300_214350724.jpg",
            "songList": [{
                "singername": "许靖韵",
                "songname": "K歌之王"
              },
              {
                "singername": "罗大佑",
                "songname": "夜是秋月明"
              },
              {
                "singername": "尤长靖",
                "songname": "傲红尘"
              }
            ],
            "topTitle": "巅峰榜·港台",
            "type": 0
          },
          {
            "id": 3,
            "listenCount": 10096450,
            "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_3_300_214231566.jpg",
            "songList": [{
                "singername": "Jason Mraz",
                "songname": "Might As Well Dance"
              },
              {
                "singername": "Niall Horan",
                "songname": "Finally Free"
              },
              {
                "singername": "Justin Timberlake",
                "songname": "SoulMate"
              }
            ],
            "topTitle": "巅峰榜·欧美",
            "type": 0
          },
          {
            "id": 16,
            "listenCount": 6956020,
            "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_16_300_214353733.jpg",
            "songList": [{
                "singername": "TWICE (트와이스)",
                "songname": "Dance The Night Away"
              },
              {
                "singername": "구구단 세미나 (gugudan SEMINA)",
                "songname": "샘이나 (SEMINA)"
              },
              {
                "singername": "Apink (에이핑크)",
                "songname": "1도 없어 (一点都没有)"
              }
            ],
            "topTitle": "巅峰榜·韩国",
            "type": 0
          },
          {
            "id": 29,
            "listenCount": 5166220,
            "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_29_300_204586755.jpg",
            "songList": [{
                "singername": "房东的猫",
                "songname": "云烟成雨"
              },
              {
                "singername": "王菲",
                "songname": "偶遇"
              },
              {
                "singername": "鞠婧祎",
                "songname": "叹云兮"
              }
            ],
            "topTitle": "巅峰榜·影视金曲",
            "type": 0
          },
          {
            "id": 17,
            "listenCount": 1960000,
            "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_17_300_214270266.jpg",
            "songList": [{
                "singername": "SILENT SIREN (サイレント・サイレン)",
                "songname": "19 Summer Note."
              },
              {
                "singername": "w-inds.",
                "songname": "Temporary"
              },
              {
                "singername": "大塚愛 (おおつか あい)",
                "songname": "あっかん  べ (做鬼脸)"
              }
            ],
            "topTitle": "巅峰榜·日本",
            "type": 0
          },
          {
            "id": 201,
            "listenCount": 224419,
            "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/20150127163830.jpg",
            "songList": [{
                "singername": "王鹤棣",
                "songname": "For You"
              },
              {
                "singername": "MAMAMOO",
                "songname": "너나 해"
              },
              {
                "singername": "尤长靖",
                "songname": "傲红尘"
              }
            ],
            "topTitle": "巅峰榜·MV",
            "type": 0
          },
          {
            "id": 52,
            "listenCount": 1990000,
            "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_52_300_214295371.jpg",
            "songList": [{
                "singername": "左颜",
                "songname": "想要爱他"
              },
              {
                "singername": "牛奶咖啡",
                "songname": "胜利之光"
              },
              {
                "singername": "苏阳",
                "songname": "胸膛"
              }
            ],
            "topTitle": "巅峰榜·腾讯音乐人原创榜",
            "type": 0
          },
          {
            "id": 36,
            "listenCount": 3719660,
            "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_36_300_200732009.jpg",
            "songList": [{
                "singername": "刘霜",
                "songname": "曾经最美"
              },
              {
                "singername": "冯鑫",
                "songname": "成都"
              },
              {
                "singername": "胡慧",
                "songname": "分手快乐"
              }
            ],
            "topTitle": "巅峰榜·K歌金曲",
            "type": 0
          }
        ]
      }
    
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin:0;
  padding:0;
}
.logo {
  width: 100px;
  height: 100%;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

li {
  display: inline-block;
  margin: 5px 10px;
}

.item-botton {
  padding: 5px 15px;
  height: 40px;
  background: #12A562;
  border: none;
  outline: none;
  color: #fff;
  font-size: 14px;
  border-radius: 5px;
  box-shadow: 1px 1px 4px #127648;
}
.musictop{
  display:flex;
  flex-direction: row;
  flex-wrap:wrap;
  justify-content: center;
}
.musictop-item{
  display:flex;
  flex-direction: row;
  flex-wrap:wrap;
  justify-content: center;
  align-items: center;
  background:#000;
  box-shadow: 1px 1px 5px #000;
  border-radius:5px;
  color:#fff;
  padding:30px 0;
}
.music-to{
  font-size:30px;
 text-decoration: none;
 color:#fff;
 padding-right:20px;
}
.item-img img{
  width:100px;
  height:100px;
  border:1px solid #000;
}
.item-singer{
 display:flex;
  flex-direction: column;
  flex-wrap:wrap;


}
.singer-item{
  width:180px;
  height:30px;
  line-height:30px;
  font-size:12px;
  margin:0 5px;
  text-align:center;
}
</style>
