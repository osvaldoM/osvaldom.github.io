<template>
  <Layout>
    <h1 class="text-5xl">Blog</h1>

    <p class="">Thoughts derived from my everyday experiences</p>

    <div class="content mt-5">
      <ul v-for="edge in $page.articles.edges" :key="edge.node.id">
        <li class="mb-5">
          <div class="flex items-center">
            <span class="text-black mr-5"> March 2020</span> <span class="text-purple-600"> mysql</span>
          </div>
          <h2 class="text-4xl">
            <g-link class="underline" :to="`/blog/articles/${edge.node.id}`"> {{ edge.node.title }}</g-link>
          </h2>
        </li>
      </ul>
    </div>

  </Layout>
</template>

<page-query>
query {
  articles: allArticle(sortBy: "title", order: ASC) {
    edges {
      node {
        id
        title
      }
    }
  }
}
</page-query>

<script>
    export default {
        metaInfo: {
            title: 'About us'
        }
    }
</script>
