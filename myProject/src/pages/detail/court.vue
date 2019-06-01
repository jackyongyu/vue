<template>
  <div>
    this is courtPage
  <Selection :selectionsData="productType"></Selection>
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
