<template lang="pug">
  div.navModule
    img(src="../assets/img/Record.png")
    tab-group(:nodeList="nodeList")
</template>

<script>
import tabGroup from './common/tabGroup.vue'
export default {
  data () {
    return {
      nodeList: [
        { name: '相册' },
        { name: '日记' },
        { name: '时间轴' }
      ]
    }
  },
  components: {
    tabGroup
  }
}
</script>

<style lang="scss">
  div.navModule{
    padding: 5px;
    & img {
      margin: 0 35px;
    }
  }
</style>
