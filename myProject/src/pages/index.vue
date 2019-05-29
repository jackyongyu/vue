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
      <div class="index-left-block index-left-block-last">
        <h2>最新消息</h2>
        <ul class="productList newList">
          <li v-for="(item,index) in newList" :key="index">
            <a :herf="item.url">{{item.title}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <div class="index-boardlist-block">
        <div
          class="boardlist-item"
          v-for="(item,index) in boardList"
          :key="index"
          :class="{'line-last':index%2!==0}"
        >
          <div class="boardlist-item-innner" :class="'broadlist-item-'+item.id">
            <h2>{{item.title}}</h2>
            <p>{{item.description}}</p>
            <div class="index-board-button">
              <a class="button">立即购买</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created: function() {
    this.$http.get("apis/newList").then(
      res => {
        this.newList = res.data;
      },
      function(error) {
        console.log(error);
      }
    );
  },
  data() {
    return {
      newList: [],
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
  width: 370px;
}
.index-right {
  float: right;
  width: 800px;
}
.index-left-block {
  margin-bottom: 10px;
  background: #fff;
}
.index-left-block-last {
  padding-bottom: 10px;
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
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 2px;
  color: #fff;
}
.newList {
  padding-top: 20px;
  padding-bottom: 15px;
}
.newList a {
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inherit;
}
.index-boardlist-block {
  overflow: hidden;
}
.boardlist-item {
  float: left;
  width: 375px;
  padding: 10px;
  background: #fff;
  margin-right: 5px;
  margin-bottom: 20px;
}
.boardlist-item h2,
.boardlist-item p,
.index-board-button {
  margin-bottom: 8px;
  margin-left: 100px;
}

.button {
  display: inline-block;
  padding: 5px 5px;
  background: #73c15b;
  border-radius: 2px;
  cursor: pointer;
  color: #fff;
}
.line-last {
  margin-right: 0;
}

.broadlist-item-gun {
  background: url(../assets/0.jpg) no-repeat;
  background-size: 70px;
}
.broadlist-item-folk {
  background: url(../assets/1.jpg) no-repeat;
  background-size: 70px;
}
.broadlist-item-triangle {
  background: url(../assets/2.jpg) no-repeat;
  background-size: 70px;
}
.broadlist-item-pen {
  background: url(../assets/3.jpg) no-repeat;
  background-size: 70px;
}
</style>

