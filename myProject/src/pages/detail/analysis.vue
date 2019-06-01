<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>流量分析</h2>
      <p>网站流量分析，是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的，如果出于其他方面的目的，对网站流量分析会有其他相应的解释。</p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-form">
        <div class="sales-board-line">
          <div class="sales-board-line-left">购买数量：</div>
          <div class="sales-board-line-right"></div>
        </div>
        <div class="sales-board-line">
          <div class="sales-board-line-left">产品类型：</div>
          <div class="sales-board-line-right">
            <Selection></Selection>
          </div>
        </div>
        <div class="sales-board-line">
          <div class="sales-board-line-left">有效时间：</div>
          <div class="sales-board-line-right">半年</div>
        </div>
        <div class="sales-board-line">
          <div class="sales-board-line-left">产品版本：</div>
          <div class="sales-board-line-right"></div>
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
      <h2>产品说明</h2>
      <p>
        产品说明书制作，是以文体的方式对某产品进行相对的详细表述，使人认识、了解到某产品。
        产品说明书制作要实事求是，制作产品说明书时不可为达到某种目的而夸大产品的作用和性能，
        这是制作产品说明书的职业操守。产品说明书是一种常见的说明文，是生产者向消费者全面、明确地介绍产品名称、用途、性质、性能
        、原理、构造、规格、使用方法、保养维护、注意事项等内容而写的准确、简明的文字材料。
      </p>
    </div>
  </div>
</template>

<script>
import Selection from "../../components/selection";
export default {
  name: "Analysis",
  components: {
    Selection
  }
};
</script>

<style>
</style>
