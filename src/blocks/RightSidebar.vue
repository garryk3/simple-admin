<template lang="pug">
  .mui-col-md-2.right-sidebar
    a.mui-btn.mui-btn--flat.mui-btn--primary(href="/") Перейти на сайт
</template>

<script>
  import Category from '@/blocks/Category'
  export default {
    name: 'left-sidebar',
    data () {
      return {
        catNames: [
          {
            name: 'exmaple'
          },
          {
            name: 'exmaple2'
          }
        ]
      }
    },
    components: {
      Category
    }
  }
</script>

<style lang="scss" scoped>
  .article {


  }
</style>
