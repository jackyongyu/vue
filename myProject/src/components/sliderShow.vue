<template>
  <div class="slider-wrap" @mouseover="clearInt" @mouseout="rebuiltInt">
    <div class="slider-img-wrap">
      <a :href="this.slides[sliderIndex].herf">
        <transition name="slide-trans">
          <img v-if="isShow" :src="this.slides[sliderIndex].src" alt>
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="this.slides[sliderIndex].src" alt>
        </transition>
      </a>
    </div>
    <div class="slider-title">{{this.slides[sliderIndex].title}}</div>
    <ul class="slider-piont-wrap">
      <li @click="arriveTo(preIndex)">&lt;</li>
      <li>
        <a
          v-for="(item,index) in this.slides"
          :key="index"
          @click="arriveTo(index)"
          :class="{onExcetion : index===sliderIndex}"
        >{{index+1}}</a>
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
    slidesTime: {
      type: Number,
      default: 500
    }
  },
  data() {
    return {
      sliderIndex: 0,
      isShow: true
    };
  },
  computed: {
    //error:切换太快会报错
    preIndex() {
      if (this.sliderIndex === 0) return this.slides.length - 1;
      return this.sliderIndex - 1;
    },
    nextIndex() {
      if (this.sliderIndex === this.slides.length - 1) return 0;
      return this.sliderIndex + 1;
    }
  },
  methods: {
    arriveTo(index) {
      this.$emit("onchange", index);
      this.isShow=false
      setTimeout(() => {
        this.isShow = true;
        this.sliderIndex = index;
      });
    },
    runInt() {
      this.setInt = setInterval(() => {
        this.arriveTo(this.nextIndex);
      }, this.slidesTime);
    },
    clearInt() {
      clearInterval(this.setInt);
    },
    rebuiltInt() {
      this.runInt();
    }
  },
  mounted() {
    this.runInt();
  }
};
</script>

<style scoped>
/* animation */
.slide-trans-enter-active {
  transition: all 0.5s;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transition: all 0.5s;
  transform: translateX(-900px);
}
/* extr */
.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  width: 900px;
  height: 350px;
  overflow: hidden;
}
.slide-show h2 {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #ffffff;
  background: #000;
  opacity: 0.5;
  bottom: 0;
  height: 30px;
  text-align: left;
  padding-left: 15px;
}
.slide-img {
  width: 100%;
}
.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
}
.slide-pages {
  position: absolute;
  bottom: 10px;
  right: 15px;
}
.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}
.slide-pages li .on {
  text-decoration: underline;
}

a:hover {
  text-decoration: none;
}
.slider-wrap {
  width: 900px;
  height: 400px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  margin: 15px 15px 15px 0;
}
.slider-title {
  position: absolute;
  width: 900px;
  height: 40px;
  background: rgba(225, 225, 225, 0.2);
  bottom: 0;
  line-height: 40px;
  padding-left: 20px;
}
.slider-piont-wrap {
  position: absolute;
  width: 200px;
  height: 20px;
  bottom: 10px;
  right: 0;
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
  position: absolute;
  top: 0;
}
.onExcetion {
  text-decoration: underline !important;
}
</style>