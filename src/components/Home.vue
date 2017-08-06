<template lang="pug">
  div.admin__center-block
    .mui-btn.mui-btn--raised.mui-btn--primary(v-on:click="test") Создать категорию
    router-link.mui-btn.mui-btn--raised.mui-btn--primary(to='/create') Создать статью
</template>

<script>
  export default {
    name: 'home',
    methods: {
      test: function () {
        console.log(this.$http)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .admin {


  }
</style>
