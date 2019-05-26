<template>
  <div>
  {{ msg }}
  <button @click="emitmyEvent">emit</button>
  </div>
</template>

<script>
export default {
  name: 'ComponentA',
  data () {
    return {
      msg: 'this is CompnentsA'
    }
  },
  methods: {
    emitmyEvent () {
      this.$emit ( "my-emit",this.msg )
    }
  }
}
</script>