<template>
    <Layout>
        <h1>Blog</h1>
        <p>This is where I drop my random thoughts derived from my everyday experiences</p>

        <div class="content">
                <div v-for="edge in $page.articles.edges" :key="edge.node.id">
                    <h2><g-link :to="`/blog/articles/${edge.node.id}`"> {{ edge.node.title }} </g-link></h2>
                </div>
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
