<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>数据发布</h2>
      <p>可视化数据管理与发布系统，是一套基于Web界面、实现关系型数据库可视化数据录入、更新、发布以及安全控制的软件工具。</p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-form">
        <div class="sales-board-line">
          <div class="sales-board-line-left">购买数量：</div>
          <div class="sales-board-line-right"></div>
        </div>
        <div class="sales-board-line">
          <div class="sales-board-line-left">行业：</div>
          <Selection></Selection>
        </div>
        <div class="sales-board-line">
          <div class="sales-board-line-left">产品版本：</div>
          <div class="sales-board-line-right"></div>
        </div>
        <div class="sales-board-line">
          <div class="sales-board-line-left">有效时间：</div>
          <div class="sales-board-line-right">半年</div>
        </div>
        <div class="sales-board-line">
          <div class="sales-board-line-left">总价：</div>
          <div class="sales-board-line-right">500元</div>
        </div>
        <div class="sales-board-line">
          <div class="sales-board-line-left">&nbsp;</div>
          <div class="sales-board-line-right">
            <div class="button">立即购买</div>
          </div>
        </div>
      </div>
    </div>

    <div class="sales-board-des">
      <h3>产品说明</h3>
      <p>
        产品说明书制作，是以文体的方式对某产品进行相对的详细表述，使人认识、了解到某产品。
        产品说明书制作要实事求是，制作产品说明书时不可为达到某种目的而夸大产品的作用和性能，
        这是制作产品说明书的职业操守。
      </p>
    </div>
  </div>
</template>

<script>
import Selection from "../../components/selection";
export default {
  name: "Court",
  components: {
    Selection
  }
};
</script>

<style>
</style>
