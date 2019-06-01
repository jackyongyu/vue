<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>数据统计</h2>
      <p>统计数据是统计工作活动过程中所取得的反映国民经济和社会现象的数字资料以及与之相联系的其他资料的总称。统计数据是对现象进行测量的结果。比如， 对经济活动总量的测量可以得到国内生产总值（GDP）数据；对股票价格变动水平的测量可以得到股票价格指数的数据；对人口性别的测量可以得到男或女这样的数据。下面从不同角度说明统计数据的分类。统计数据作为统计工作日产品，
        从统计工作过程来看，统计数据质量是“符合标准”，要准确的反映客观现实</p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-form">
        <div class="sales-board-line">
          <div class="sales-board-line-left">产品类型：</div>
          <div class="sales-board-line-right"></div>
        </div>
        <div class="sales-board-line">
          <div class="sales-board-line-left">选用地区：</div>
           <Selection :selectionsData="productType"></Selection>
        </div>
        <div class="sales-board-line">
          <div class="sales-board-line-left">有效时间：</div>
          <div class="sales-board-line-right">一年</div>
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
  data(){
   return{
     productType:[
       {
         label:'初级',
         value:0,
       },
        {
         label:'中级',
         value:0,
       },
        {
         label:'高级',
         value:0,
       },
     ]

   }
  }
};
</script>

<style>
</style>
