<template>

  <article class="article" v-if="$page.article">
    <h1 v-html="$page.article.title"></h1>
    <div class="markdown-body" v-html="$page.article.content"></div>
  </article>

</template>

<page-query>
query ($id: ID!) {
  article(id: $id) {
    id
    title
    content
    published (format: "MMMM D, Y")
    updated (format: "MMMM D, Y")
    summary
    tags {
      title
      path
    }
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

<style lang="scss" scoped>

  .article ul {
    list-style: disc;
    @apply mb-6;
  }
  .article li {
    @apply ml-8
  }
  .article a {
    @apply underline
  }
</style>
