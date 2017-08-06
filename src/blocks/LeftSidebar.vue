<template lang="pug">
  .mui-col-md-2.left-sidebar
    h3 Категории
    Category(
      v-for="(category, key, index) in catNames",
      v-bind:category="category",
      v-bind:key="key - index"
    )
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
