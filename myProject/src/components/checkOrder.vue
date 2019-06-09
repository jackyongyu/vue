<template>
  <div>
    <Dialog :is-show="isShowCheckDialog" @on-close="checkStatus">
      请检查您的支付状态
      <div class="button" @click="checkStatus">支付成功</div>
      <div class="button" @click="checkStatus">支付失败</div>
    </Dialog>
    <Dialog :is-show="isShowSuccessDialog" @closetoDialog="closeSuccessDialog">购买成功</Dialog>
    <Dialog :is-show="isShowFailDialog">购买失败</Dialog>
  </div>
</template>

<script>
import Dialog from "./dialog";
export default {
  components: {
    Dialog
  },
  props: {
    isShowCheckDialog: {
      type: Boolean,
      default: false
    },
    orderId: {
      type: [Number, String]
    }
  },
  data() {
    return {
      isShowSuccessDialog: false,
      isShowFailDialog: false
    };
  },
  methods: {
    checkStatus() {
      this.$http.post("/api/checkOrder", { orderId: this.orderId }).then(
        res => {
          this.isShowSuccessDialog = true;
          this.$emit("on-close-check-dialog")
        },
        err => {
          this.isShowFailDialog = true;
          this.$emit("on-close-check-dialog")
        }
      );
    },
    closeSuccessDialog(){
        // this.isShowSuccessDialog=false
    }
  }
};
</script>

<style scoped>
</style>
