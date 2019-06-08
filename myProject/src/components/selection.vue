<template>
  <div class="selection-component">
    <div class="selection-show" @click="toggleDrop">
      <span>{{selectionsData[nowIndex].label}}</span>
      <div class="arrow"></div>
    </div>
    <div v-if="drop" class="selection-list">
      <ul>
        <li @click="chooseSelectons(index)" v-for="(item,index) in selectionsData" :key="index">{{selectionsData[index].label}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Selection",
  props: {
    selectionsData: {
      type: Array,
      default:[{
        "label":'初级', 
        "value":"0",
      }]
    }
  },
  data(){
    return{
      nowIndex:0,
      drop:false,
    }
  },
methods:{
  toggleDrop(){
    this.drop=!this.drop
  },
  chooseSelectons(index){
    this.drop=!this.drop
    this.nowIndex=index
    // console.log(typeof this.selectionsData[this.nowIndex]);
    this.$emit('on-change',this.selectionsData[this.nowIndex])
  }
}

};
</script>

<style scoped>
.selection-component {
  position: relative;
  display: inline-block;
}
.selection-show {
  border: 1px solid #e3e3e3;
  padding: 0 20px 0 10px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 25px;
  line-height: 25px;
  border-radius: 3px;

  width: 68px;
  background: #fff;
}
.selection-show .arrow {
  display: inline-block;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid #e3e3e3;
  width: 0;
  height: 0;
  margin-right: -14px;
  margin-left: 6px;
  margin-top: -1px;
  vertical-align: middle;

  position: absolute;
  right: 20px;
  top: 12px;
}
.selection-list {
  display: inline-block;
  position: absolute;
  left: 0;
  top: 25px;
  width: 100px;
  background: #fff;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  z-index: 5;
}
.selection-list li {
  padding: 5px 15px 5px 10px;
  border-left: 1px solid #e3e3e3;
  border-right: 1px solid #e3e3e3;
  cursor: pointer;
  background: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.selection-list li:hover {
  background: #e3e3e3;
}
</style>
