<template lang="pug">
  .mui-btn.mui-btn--danger {{ category.name }}
</template>

<script>
  export default {
    name: 'category',
    props: ['category']
  }
</script>

<style lang="scss" scoped>

</style>
