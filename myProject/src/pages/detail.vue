<template>
  <div class="detail-wrap">
    <div class="detail-left">
      <div class="product-board">
        <img :src="product" alt>
        <ul>
          <router-link
            v-for="(item,index) in products"
            :key="index"
            tag="li"
            :to="item.path"
            active-class="active"
          >{{item.name}}</router-link>
        </ul>
      </div>
    </div>
    <div class="detail-right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      products: [
        {
          name: "数据统计",
          path: "court",
          active: "false"
        },
        {
          name: "数据分析",
          path: "analysis",
          active: "false"
        },
        {
          name: "数据预测",
          path: "forecast",
          active: "false"
        },
        {
          name: "数据发布",
          path: "publish",
          active: "false"
        }
      ],
      imgMap: {
        "/detail/publish": require("../assets/board/0.jpg"),
        "/detail/analysis": require("../assets/board/1.jpg"),
        "/detail/forecast": require("../assets/board/2.jpg"),
        "/detail/court": require("../assets/board/3.jpg")
      }
    };
  },
  computed: { 
    product() {
      return this.imgMap[this.$route.path]
    }
  }
};
</script>

<style>
.detail-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.detail-left {
  float: left;
  width: 200px;
  text-align: center;
}
.detail-right {
  float: right;
  width: 980px;
  margin-left: 20px;
}
.product-board {
  background: #fff;
  padding: 20px 0;
}
.product-board img {
  width: 130px;
}
.product-board ul {
  margin-top: 20px;
}
.product-board li {
  text-align: left;
  padding: 10px 15px;
  cursor: pointer;
}
.product-board li.active,
.product-board li:hover {
  background: #4fc08d;
  color: #fff;
}
.product-board li a {
  display: block;
}
.sales-board {
  background: #fff;
}
.sales-board-intro h2 {
  font-size: 20px;
  padding: 20px;
  font-weight:550;
}
.sales-board-intro p {
  background: #f7fcff;
  padding: 10px 20px;
  color: #999;
  line-height: 1.8;
}
.sales-board-form {
  padding: 30px 20px;
  font-size: 14px;
}
.sales-board-line {
  clear: both;
  padding-bottom: 20px;
}
.sales-board-line-left {
  display: inline-block;
  width: 100px;
}
.sales-board-line-right {
  display: inline-block;
  width: 75%;
}
.sales-board-des {
  border-top: 20px solid #f0f2f5;
  padding: 15px 20px;
  line-height: 1.6;
}
.sales-board-des h2 {
  font-size: 20px;
  padding-bottom: 15px;
      font-weight: 550;
}
.sales-board-des h3 {
  font-size: 18px;
  font-weight: bold;
  padding: 20px 0 10px 0;
      font-weight: 500;
}
.sales-board-des li {
  margin-top: 20px;
}
.sales-board--table {
  width: 100%;
  margin-top: 20px;
}
.sales-board--table th {
  background: #4fc08d;
  color: #fff;
}
.sales-board-table td {
  border: 1px solid #f0f2f5;
  padding: 15px;
}
</style>
