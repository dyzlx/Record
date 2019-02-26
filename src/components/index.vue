<template lang="pug">
  div#app
    div#head
      nav-module
    div#content
      div#left
      classify-module
      div#right
      content-module
</template>

<script>
import navModule from './navModule.vue'
import classifyModule from './classifyModule.vue'
import contentModule from './contentModule.vue'
export default {
  name: 'Record',
  components: {
    navModule,
    classifyModule,
    contentModule
  },
  data () {
    return {

    }
  },
  created () {
    console.log('mounted')
  }
}
</script>

<style lang="scss">
div#app{
  width: 100%;
  height: 100%;
  position: relative;
  div#head {
    height: 70px;
    width: 100%;
  }
  div#content {
    position: absolute;
    left: 0;
    bottom: 0;
    top: 70px;
    width: 100%;
    div#left {
      width: 250px;
      height: 100%;
      position: absolute;
    }
    div#right {
      position: absolute;
      right: 0;
      height: 100%;
      width: auto;
      left: 250px;
      border: 2px solid #ccc;
      border-right: 0;
      border-bottom: 0;
      border-radius: 10px 0 0 0;
    }
  }
}
</style>
