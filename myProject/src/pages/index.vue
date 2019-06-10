<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <div v-for="(product,index) in productList" :key="index">
          <h3>{{product.title}}</h3>
          <ul>
            <li v-for="(item,index) in product.list" :key="index">
              <a :herf="item.url">
                {{item.name}}
                <span v-if="item.hot" class="hot">HOT</span>
              </a>
            </li>
          </ul>
          <div v-if="!product.last" class="hr"></div>
          <div/>
        </div>
      </div>
      <div class="index-left-block lastest-new">
        <h2>最新消息</h2>
        <ul>
          <li v-for="(item,index) in newList" :key="index">
            <a :herf="item.url">{{item.title}}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="index-right">
      <slider-show :slides="imgsrcList" :slidesTime="2000" @onchange="dosthWhenslidechange"></slider-show>
      <div class="index-board-list">
        <router-link :to="'/orderList'">
          <div
            class="index-board-item"
            v-for="(item,index) in boardList"
            :key="index"
            :class="[{'line-last':index%2!==0}]"
          >
            <div class="index-board-item-inner" :class="'index-board-'+item.id">
              <h2>{{item.title}}</h2>
              <p>{{item.description}}</p>
              <div class="index-board-button">
                <a class="button">立即购买</a>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="index-board-another"></div>
    </div>
  </div>
</template>
<script>
import sliderShow from "../components/sliderShow";
export default {
  components: {
    "slider-show": sliderShow
  },
  created: function() {
    console.log(this.$http);
    this.$http.get("api/newList").then(
      res => {
        console.log(res.data.newList);
        this.newList = res.data;
      },
      function(error) {
        console.log(error);
      }
    );
  },
  methods: {
    dosthWhenslidechange() {}
  },
  data() {
    return {
      imgsrcList: [
        {
          title: "smoke",
          herf: "/detail/count",
          src: require("../assets/slider0.jpg")
        },
        {
          title: "photo",
          herf: "/detail/analysis",
          src: require("../assets/slider1.jpg")
        },
        {
          title: "butterfly",
          herf: "/detail/forecast",
          src: require("../assets/slider2.jpg")
        },
        {
          title: "snow",
          herf: "/detail/publish",
          src: require("../assets/slider3.jpg")
        }
      ],
      newList: [],
      productList: {
        pc: {
          title: "PC产品",
          last: false,
          list: [
            {
              name: "流量统计",
              url: "www.liuliang.com"
            },
            {
              name: "速度统计",
              url: "www.sd.com",
              hot: false
            },
            {
              name: "广告统计",
              url: "www.gg.com",
              hot: true
            },
            {
              name: "销量统计",
              url: "www.xl.com"
            }
          ]
        },
        app: {
          title: "应用产品",
          last: true,
          list: [
            {
              name: "产品助手",
              url: "www.cp.com"
            },
            {
              name: "91的手游",
              url: "www.91.com",
              hot: true
            },
            {
              name: "插队",
              url: "www.cd.com"
            },
            {
              name: "电影公众",
              url: "www.dy.com"
            }
          ]
        }
      },
      boardList: [
        {
          title: "开放产品",
          description: "开放产品实现优化产品的作用",
          id: "gun",
          saleout: false
        },
        {
          title: "品牌营销",
          description: "品牌营销实现优化产品的作用",
          id: "folk",
          saleout: false
        },
        {
          title: "使命必达",
          description: "使命必达实现优化产品的作用",
          id: "triangle",
          saleout: false
        },
        {
          title: "勇攀高峰",
          description: "勇攀高峰实现优化产品的作用",
          id: "pen",
          saleout: false
        }
      ]
    };
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
}
.index-left-block h2 {
  background-color: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
.index-left-block li a {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
    vertical-align: middle
}
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-gun {
  background: url(../assets/board/0.jpg) no-repeat;
  background-size: 110px;
  background-position-y: 0;
  background-position-x: 0;
}
.index-board-folk {
  background: url(../assets/board/1.jpg) no-repeat;
  background-size: 110px;
  background-position-y: 0;
  background-position-x: 0;
}
.index-board-triangle {
  background: url(../assets/board/2.jpg) no-repeat;
  background-size: 110px;
  background-position-y: 0;
  background-position-x: 0;
}
.index-board-pen {
  background: url(../assets/board/3.jpg) no-repeat;
  background-size: 110px;
  background-position-y: 0;
  background-position-x: 0;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-new {
  min-height: 512px;
}
.hot {
  background: red;
  color: #fff;
  font-size: 10px;
  border-radius: 2px;
  padding: 0 4px;
  line-height: 1.2;
  display: inline-block;
}
</style>

