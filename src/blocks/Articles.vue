<template lang="pug">
      form.mui-form#createForm(method='post', action='admin/add-article', enctype="multipart/form-data")
        .mui-row
          .mui-col-md-4
            .mui-textfield
              label Заголовок страницы
              input.admin__input#title(type="text", placeholder='title')
            .mui-textfield
              label Название статьи
              input.admin__input#name(type="text", placeholder='h1')
            .mui-textfield
              label Ключевые слова
              input.admin__input#meta(type="text", placeholder='meta')
          .mui-col-md-4
            .mui-textfield
              label Главное изображение
              input.admin__input#file(type="file", placeholder='img')
          .mui-col-md-4
            .mui-textfield.admin__editor-1
              label Краткое описание
              #editor
        .mui-textfield.admin__editor-2
          label Текст статьи
          #editor2
        .mui-row
          .mui-col-md-4
            .mui-textfield
              label Галерея (загрузите необходимое количество изображений)
              input.admin__input#gallery(type="file", placeholder='img', multiple)
        input.mui-btn.mui-btn--raised(type="submit", value="Сохранить")
        router-link.mui-btn.mui-btn--raised(to="/") Закрыть

</template>

<script>
  export default {
    name: 'articles'
  }
</script>

<style lang="scss" scoped>
  .article {


  }
</style>
