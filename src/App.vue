<template lang="pug">
  #app
    .mui-container-fluid.admin__container
      .mui-row
        h2.admin__header.mui-col-md-12 Панель редактора
      .mui-row
        LeftSidebar
        .mui-col-md-8
          router-view
        RightSidebar
</template>

<script>
  import Articles from '@/blocks/Articles'
  import Category from '@/blocks/Category'
  import LeftSidebar from '@/blocks/LeftSidebar'
  import RightSidebar from '@/blocks/RightSidebar'
  export default {
    name: 'app',
    components: {
      Articles,
      Category,
      LeftSidebar,
      RightSidebar
    }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
