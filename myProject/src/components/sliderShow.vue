<template>
  <div class="slider-wrap" @mouseover="clearInt" @mouseout="rebuiltInt">
    <div class="slider-img-wrap">
      <a :href="this.slides[sliderIndex].herf">
        <img :src="this.slides[sliderIndex].src" alt>
      </a>
    </div>
    <div class="slider-title">{{this.slides[sliderIndex].title}}</div>
    <ul class="slider-piont-wrap">
      <li @click="arriveTo(preIndex)">&lt;</li>
      <li>
        <a v-for="(item,index) in this.slides" :key="index" @click="arriveTo(index)" :class="{onExcetion : index===sliderIndex}">{{index+1}}</a>
      </li>
      <li @click="arriveTo(nextIndex)">&gt;</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "sliderShow",
  props: {
    slides: {
      type: Array,
      default: []
    },
    slidesTime:{
      type:Number,
      default:500,
    },
  },
  data() {
    return {
      sliderIndex: 0
    };
  },
  computed: {
    //error:切换太快会报错
    preIndex() {
      if (this.sliderIndex === 0) return this.slides.length - 1;
      return this.sliderIndex - 1;
    },
    nextIndex() {
      if (this.sliderIndex === this.slides.length-1) return 0
        return this.sliderIndex + 1;
    }
  },
  methods: {
    arriveTo(index) {
      this.sliderIndex = index;
      this.$emit('onchange',index)
    },
    runInt () {
      this.setInt=setInterval(()=>{
        this.arriveTo(this.nextIndex)
      },this.slidesTime)
    },
    clearInt() {
      clearInterval(this.setInt)
    },
    rebuiltInt(){
      this.runInt()
    }
  },
  mounted(){
    this.runInt()
  }
};
</script>

<style>
a:hover {
  text-decoration: none;
}
.slider-wrap {
  width: 800px;
  height: 400px;
  background: #999;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
}
.slider-title {
  position: absolute;
  width: 800px;
  height: 40px;
  background:rgba(225, 225, 225, 0.2);
  bottom: 0;
  line-height: 40px;
  padding-left: 20px;
}
.slider-piont-wrap {
  position: absolute;
  width: 200px;
  height: 20px;
  bottom: 10px;
  right: 100px;
  line-height: 20px;
}
.slider-piont-wrap li {
  float: left;
  margin-right: 10px;
}
.slider-piont-wrap li:nth-of-type(2) {
  margin-right: 0px;
}
.slider-piont-wrap li a {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  text-align: center;
  color: #666;
}
.slider-img-wrap img {
  width: 100%;
}
.onExcetion{
  text-decoration: underline !important;
}
</style>