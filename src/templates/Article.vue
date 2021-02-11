<template>

  <article v-if="$page.article">
    <h1 v-html="$page.article.title"></h1>
    <div class="markdown-body" v-html="$page.article.content"></div>
  </article>

</template>

<page-query>
query ($id: ID!) {
  article(id: $id) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.article.title
    }
  }
}
</script>

<style scoped>

</style>
