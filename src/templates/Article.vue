<template>

  <div v-if="$page.article">
    <p v-html="$page.article.title"></p>
    <div v-html="$page.article.content"></div>
  </div>

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
