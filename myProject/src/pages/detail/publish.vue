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
          <div class="sales-board-line-left">产品类型：</div>
           <Selection></Selection>
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
import Selection from '../../components/selection'
export default {
  name: "Court",
  components:{
    Selection,
  },
}
</script>

<style>
</style>
