<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <div v-for="(product,index) in productList" :key="index">
          <h3>{{product.title}}</h3>
          <ul class="productList">
            <li v-for="(item,index) in product.list" :key="index">
              <a :herf="item.url">{{item.name}}</a>
              <span v-if="item.hot" class="hot">HOT</span>
            </li>
          </ul>
          <div/>
        </div>
      </div>
      <div class="index-left-block">
        <h2>最新消息</h2>
      </div>
    </div>
    <div class="index-right"></div>
  </div>
</template>
<script>
export default {
  name: "ExhibitionList",
  data() {
    return {
      product: "",
      productList: {
        pc: {
          title: "PC产品",
          list: [
            {
              name: "流量统计",
              url: "www.liuliang.com"
            },
            {
              name: "速度统计",
              url: "www.sd.com"
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
          list: [
            {
              name: "产品助手",
              url: "www.cp.com"
            },
            {
              name: "91的手",
              url: "www.91.com"
            },
            {
              name: "插队",
              url: "www.cd.com"
            },
            {
              name: "电影",
              url: "www.dy.com"
            }
          ]
        }
      }
    };
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.index-wrap {
  margin-top: 10px;
  margin-bottom: 10px;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 370px;
}
.index-right {
  float: right;
  width: 800px;
}
.index-left-block h2 {
  background-color: #73c15b;
  color: #fff;
  padding: 10px 15px;
}
.index-left-block h3 {
  padding: 15px;
}
.productList li {
  padding: 5px 25px;
    cursor: pointer;
}
.hot {
  background: red;
  font-size:10px;
  padding:2px 5px ;
  border-radius:2px;
  color:#fff;
}
</style>

