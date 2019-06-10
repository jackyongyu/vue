<template>
  <div class="order-wrap">
    <div class="order-list-choose">
      <div class="order-list-option">
        选择产品：
        <Selection :selectionsData="productList" @on-change="onChangeProduct"></Selection>
      </div>
      <div class="order-list-option">
        开始日期：
        <date-picker @change="changeDateStart"></date-picker>
      </div>
      <div class="order-list-option">
        结束日期：
        <date-picker @change="changeDateEnd"></date-picker>
      </div>
      <div class="order-list-option">
        关键词：
        <input type="text" v-model.lazy="query" class="order-query">
      </div>
    </div>
    <div class="order-list-table">
      <table>
        <tr>
          <th v-for="(head,index) in tableHeads" :key="index">{{head.label}}</th>
        </tr>
        <tr v-for="(item,index) in tableDate" :key="index">
          <td v-for="(head,index) in tableHeads" :key="index">{{item[head.key]}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Selection from "../components/selection";
import datePicker from "../components/datePicker";
export default {
  components: {
    Selection,
    datePicker
  },
  data() {
    return {
      query: "",
      productId: 0,
      startDate: "",
      endDate: "",
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
      ],
      tableHeads: [
        {
          label: "订单号",
          key: "orderId"
        },
        {
          label: "购买商品",
          key: "product"
        },
        {
          label: "版本类型",
          key: "version"
        },
        {
          label: "有效时间",
          key: "period"
        },
        {
          label: "购买数量",
          key: "buyNum"
        },
        {
          label: "购买日期",
          key: "data"
        },
        {
          label: "总价",
          key: "amount"
        }
      ],
      tableDate: []
    };
  },
  watch: {
    query() {
      this.getTableDate();
    }
  },
  methods: {
    onChangeProduct(obj) {
      this.productId = obj.value;
      this.getTableDate();
    },
    changeDateStart(val) {
      this.startDate = val;
      this.getTableDate();
    },
    changeDateEnd(val) {
      this.endDate = val;
      this.getTableDate();
    },
    getTableDate() {
      let reqPrams = {
        query: this.query,
        productId: this.productId,
        startDate: this.startDate,
        endDate: this.endDate
      };
      console.log(reqPrams);

      this.$http.post("/api/getOrderList", reqPrams).then(
        res => {
           this.tableDate=res.data.list;
           console.log(this.tableDate);
           
        },
        err => {}
      );
    }
  },
  mounted() {
    this.getTableDate();
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
.order-list-table {
  margin-top: 20px;
}
.order-list-table table {
  width: 100%;
  background: #fff;
}
.order-list-table th,
.order-list-table td {
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 10px;
}
.order-list-table th {
  background: #4fc08d;
  color: #fff;
  border: 1px solid #4fc08d;
  cursor: pointer;
}
.order-list-table th:active {
  background: 335495e;
}
</style>
