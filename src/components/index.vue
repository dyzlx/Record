<template lang="pug">
  div#app
    div#head
      nav-module
    div#left
      classify-module
    div#content
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

<style>
div#app{
  width: 100%;
  height: 100%;
  position: relative;
  /* & div#head {
    height: 70px;
    width: 100%;
    background: #ddd;
  }
  & div#left {
    position: absolute;
    top: 70px;
    border: 1px solid #ddd;
  } */
}
</style>
