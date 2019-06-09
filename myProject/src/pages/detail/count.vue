<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>数据统计</h2>
      <p>
        统计数据是统计工作活动过程中所取得的反映国民经济和社会现象的数字资料以及与之相联系的其他资料的总称。统计数据是对现象进行测量的结果。比如， 对经济活动总量的测量可以得到国内生产总值（GDP）数据；对股票价格变动水平的测量可以得到股票价格指数的数据；对人口性别的测量可以得到男或女这样的数据。下面从不同角度说明统计数据的分类。统计数据作为统计工作日产品，
        从统计工作过程来看，统计数据质量是“符合标准”，要准确的反映客观现实
      </p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-form">
        <div class="sales-board-line">
          <div class="sales-board-line-left">产品数量：</div>
          <div class="sales-board-line-right">
            <Count :max="20" :min="1" @on-change="courtChange('countNum',$event)"></Count>
          </div>
        </div>
        <div class="sales-board-line">
          <div class="sales-board-line-left">选用地区：</div>
          <Selection :selectionsData="productType" @on-change="courtChange('product',$event)"></Selection>
        </div>
        <div class="sales-board-line">
          <div class="sales-board-line-left">有效时间：</div>
          <div class="sales-board-line-right">一年</div>
        </div>
        <div class="sales-board-line">
          <div class="sales-board-line-left">总价：</div>
          <div class="sales-board-line-right">{{price+'元'}}</div>
        </div>
        <div class="sales-board-line">
          <div class="sales-board-line-left">&nbsp;</div>
          <div class="sales-board-line-right">
            <div class="button" @click="gotoShopping">立即购买</div>
          </div>
        </div>
      </div>
    </div>

    <div class="sales-board-des">
      <h2>用户行为指标</h2>
      <ul>
        <li>
          网站流量指标常用来对网站效果进行评价，主要指标包括：独立访问者数量、
          重复访问者数量、页面浏览数、每个访问者的页面浏览数和某些具体文件或页面的统计指标。
        </li>
        <li>网站流量指标常用来对网站效果进行评价。</li>
        <li>
          主要指标包括：独立访问者数量、
          重复访问者数量、页面浏览数、每个访问者的页面浏览数和某些具体文件或页面的统计指标。
        </li>
        <li>
          网站流量指标常用来对网站效果进行评价，主要指标包括：独立访问者数量、
          重复访问者数量、页面浏览数、每个访问者的页面浏览数和某些具体文件或页面的统计指标。
        </li>
      </ul>
    </div>
    <Dialog :isShow="isShowPayDialog" @closetoDialog="closeDialog">
      <table class="buy-dialog-table">
        <tr>
          <th>购买数量</th>
          <th>产品类型</th>
          <th>有效时间</th>
          <th>总价</th>
        </tr>
        <tr>
          <td>{{countNum}}</td>
          <td>{{product.label}}</td>
          <td>一年</td>
          <td>{{price}}</td>
        </tr>
      </table>
      <h3>请选择银行</h3>
      <bank-chooser @on-change="onchangBanks"></bank-chooser>
      <div class="button buy-dialog-btn" @click="confirmBuy">确认购买</div>
    </Dialog>
    <check-order
      :is-show-check-dialog="isShowCheckDialog"
      :order-id="orderId"
      @on-close-check-dialog="hideCheckOrder"
    ></check-order>
  </div>
</template>

<script>
import Selection from "../../components/selection";
import Count from "../../components/counter";
import Dialog from "../../components/dialog";
import BankChooser from "../../components/bankChooser";
import CheckOrder from "../../components/checkOrder";
import _ from "lodash";
export default {
  name: "Court",
  components: {
    Selection,
    Count,
    Dialog,
    BankChooser,
    CheckOrder
  },
  data() {
    return {
      isShowPayDialog: false,
      countNum: 1,
      product: {},
      price: 0,
      bankId: "",
      isShowCheckDialog: false,
      orderId: null,
      productType: [
        {
          label: "初级",
          value: 0
        },
        {
          label: "中级",
          value: 1
        },
        {
          label: "高级",
          value: 2
        }
      ]
    };
  },
  methods: {
    gotoShopping() {
      this.isShowPayDialog = true;
    },
    closeDialog() {
      this.isShowPayDialog = false;
    },
    onchangBanks(bankObj) {
      this.bankId = bankObj;
    },
    hideCheckOrder(){
      this.isShowCheckDialog=false
    },
    courtChange(attr, val) {
      this[attr] = val;
      this.getPrice();
    },
    getPrice() {
      // let productArray=_.map(this.product,(item)=>{
      //   return item.value
      // })
      let reqPrams = {
        countNumer: this.countNum,
        productTyper: this.product.value
      };
      this.$http.post("/api/getPrice", reqPrams).then(res => {
        this.price = res.data.amount;
      });
    },
    confirmBuy() {
      let reqPrams = {
        countNumer: this.countNum,
        productTyper: this.product.value,
        bankerId: this.bankId
      };
      this.$http.post("/api/createOrder", reqPrams).then(
        res => {
          this.orderId = res.data.id;
          this.isShowCheckDialog = true;
          this.isShowPayDialog = false;
        },
        err => {

        }
      );
    }
  },
  mounted() {
    this.countNum = 1;
    this.product = this.productType[0];
    this.getPrice();
  }
};
</script>

<style scoped>
.buy-dialog {
  font-size: 16px;
  font-weight: bold;
}
.buy-dialog-btn {
  margin-top: 20px;
}
.buy-dialog-table {
  width: 100%;
  margin-bottom: 20px;
}
.buy-dialog-table td,
.buy-dialog-table th {
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 5px 0;
}
.buy-dialog-table th {
  background: #4fc08d;
  color: #fff;
  border: 1px solid #4fc08d;
}
</style>
