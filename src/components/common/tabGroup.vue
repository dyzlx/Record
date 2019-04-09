<template lang="pug">
  div.tabGroup
    ul.node(v-for="(item, index) in nodeList"
     :key = index
     :class="activeTab === index ? 'active-klass' : ''"
     @click="updateActiveTab(index)"
    ) {{ item.name }}
      span.down(v-if="item.children")
      li(v-if="item.children"
        v-for="(childItem, index) in item.children") {{ childItem.name }}
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    nodeList: Array,
    activeTab: Number
  },
  methods: {
    updateActiveTab: function (index) {
      this.$emit('update:activeTab', index)
    }
  }
}
</script>

<style lang="scss">
div.tabGroup{
  display: inline-block;
  margin-left: 15px;
  >ul {
    display: inline-block;
    font-size: 26px;
    padding: 10px 10px 7px;
    margin: 0 10px 8px;
    vertical-align: bottom;
    border-bottom: 3px solid #fff;
    cursor: pointer;
  }
  >ul.active-klass{
    color: #409EFF;
    border-bottom: 3px solid #409EFF;
  }
}
</style>
