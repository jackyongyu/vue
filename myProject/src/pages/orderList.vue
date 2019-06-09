<template>
  <div class="order-wrap">
    <div class="order-list-choose">
      <div class="order-list-option">
        选择产品：
        <Selection :selectionsData="productList" @on-change="onChangeProduct"></Selection>
      </div>
      <div class="order-list-option">开始日期：</div>
      <div class="order-list-option">结束日期：</div>
      <div class="order-list-option">
        关键词：
        <input type="text" v-model="query" class="order-query">
      </div>
    </div>
    <div class="order-list-table">
      <table>
        <tr>
          <th></th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Selection from "../components/selection";
export default {
  components: {
    Selection
  },
  data() {
    return {
      query: "",
      productId: 0,
      productList: [
        {
          label: "数据统计",
          value: 0
        },
        {
          label: "数据预测",
          value: 1
        },
        {
          label: "流量分析",
          value: 2
        },
        {
          label: "广告发布",
          value: 3
        }
      ]
    };
  },
  methods: {
    onChangeProduct(obj) {
      this.productId=obj.value
    }
  }
};
</script>

<style scoped>
.order-wrap {
  width: 1200px;
  min-height: 800px;
  margin: 0 auto;
  overflow: hidden;
}
.order-query {
  height: 25px;
  line-height: 25px;
  border: 1px solid #e3e3e3;
  outline: none;
  text-indent: 10px;
}
.order-list-option {
  display: inline-block;
  padding-left: 15px;
}
.order-list-option:first-child {
  padding-left: 0px;
}
</style>
