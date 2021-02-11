<template>
  <Layout>
    <h1 class="text-5xl">Blog</h1>

    <p class="">Thoughts derived from my everyday experiences</p>

    <div class="content mt-5">
      <ul v-for="edge in $page.articles.edges" :key="edge.node.id">
        <li class="mb-5">
          <article class="">
            <div>
              Created at:
              <time class="text-black mr-5"> {{ edge.node.published }}</time>
              Last update: {{ edge.node.updated }}
            </div>
            <div class="text-white">
              <g-link class="rounded-xl bg-green-800 mr-2 px-2 py-1"
                  v-for="tag in edge.node.tags"
                  :to="tag.path"
                  :key="tag.id">
                #{{ tag.title }}
              </g-link>
            </div>
          </article>
          <h2 class="text-4xl">
            <g-link class="underline" :to="`/blog/articles/${edge.node.id}`"> {{ edge.node.title }}</g-link>
          </h2>
        </li>
      </ul>
    </div>

  </Layout>
</template>

<page-query>
query Articles ($page: Int) {
  articles: allArticle(sortBy: "date", order: DESC, perPage: 10, page: $page) @paginate{
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        published (format: "MMMM D, Y")
        updated (format: "MMMM D, Y")
        summary
        tags {
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import Article from "../templates/Article";

export default {
  components: {
    Article,
    Pager
  },
  metaInfo: {
    title: 'My blog'
  }
}
</script>
