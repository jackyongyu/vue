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
          <div class="sales-board-line-left">购买数量：</div>
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
      <h2>产品说明</h2>
      <p></p>
      <h3>用户行为指标</h3>
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
