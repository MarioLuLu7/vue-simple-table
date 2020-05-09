<template>
  <i class="vs-check-box" :class="state_map[state]" @click="$emit('check')"></i>
</template>

<script>
export default {
  name: 'check-box',
  props: {
    state: {
      type: String,
      default: 'no'
    }
  },
  data() {
    return {
      state_map: {
        no: 'vs-no-check',
        check: 'vs-check',
        harf: 'vs-harf-check'
      }
    }
  }
}
</script>
<style lang="scss">
.vs-check-box{
  background-size: 20px !important;
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  cursor: pointer;
}
</style>