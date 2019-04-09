<template lang="pug">
  div.navModule
    img(src="../assets/img/Record.png")
    tab-group(:nodeList="nodeList" :activeTab.sync="activeTab")
</template>

<script>
import tabGroup from './common/tabGroup.vue'
export default {
  data () {
    return {
      nodeList: [
        { name: '网盘', index: 0 },
        { name: '分享', index: 1 }
      ],
      activeTab: 0
    }
  },
  components: {
    tabGroup
  },
  watch: {
    activeTab: {
      immediate: true,
      handler (val) {

      }
    }
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
