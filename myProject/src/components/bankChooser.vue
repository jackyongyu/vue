<template>
  <div class="chooser-component">
    <div class="chooser-list">
      <li
        v-for="(item,index) in banks"
        :key="index"
        @click="chosenSelection(index)"
        :titile="item.label"
        :class="[item.name,{active:index===nowIndex}]"
      ></li>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nowIndex: 0,
      banks: [
        {
          id: 101,
          label: "中国工商银行",
          name: "gongshang"
        },
        {
          id: 301,
          label: "中国招商银行",
          name: "zhaoshang"
        },
        {
          id: 201,
          label: "中国建设银行",
          name: "jianshe"
        },
        {
          id: 401,
          label: "中国银行",
          name: "zhongyin"
        }
      ]
    };
  },
  methods: {
    chosenSelection(index) {
      this.nowIndex = index
      this.$emit('on-change',this.banks[index])
    }
  }
};
</script>

<style scoped>
.chooser-comonent {
  position: relative;
  display: inline-block;
}
.chooser-list li.active {
  border: 1px solid #4fc08d;
}
.chooser-list li {
  display: inline-block;
  width: 117px;
  height: 32px;
  background-image: url(../assets/bank/banklogo.jpg);
  background-repeat: no-repeat;
  cursor: pointer;
  border: 1px solid #e3e3e3;
  margin:5px;
}
.gongshang {
  background-position: -6px -10px;
}
.zhaoshang {
  background-position: -146px -14px;
}
.jianshe {
  background-position: -286px -10px;
}
.zhongyin {
  background-position: -426px -10px;
}
</style>
