<template lang="pug">
  div.classifyModule
    ui.classify(v-for="(item, index) in classifyData" :key="index")
      li.content
        svg(class="icon" aria-hidden="true")
          use(:xlink:href="item.icon")
        span {{item.name}}
      li.child(v-if="item.children" v-for="(every) in item.children")
        span {{every.name}}
</template>

<script>
export default {
  name: 'classifyModule',
  data () {
    return {
      classifyData: [
        {
          name: '全部文件',
          src: '',
          icon: '#icon-file1',
          children: [
            {name: '图片', src: '/img'},
            {name: '文档', src: '/audio'},
            {name: '视频', src: '/vedio'},
            {name: '种子', src: '/seeds'},
            {name: '音乐', src: '/music'},
            {name: '其他', src: '/others'}]
        },
        {
          name: '我的分享',
          src: '/share',
          icon: '#icon-share'
        },
        {
          name: '回收站',
          src: '/trash',
          icon: '#icon-trash'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  div.classifyModule {
    ul.classify{
      li.content{
        svg{

        }
        span{

        }
      }
      li.child{
      }
    }
  }
</style>
