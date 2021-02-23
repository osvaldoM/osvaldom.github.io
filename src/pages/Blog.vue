<template>
  <div>
    <h1 class="text-5xl mb-10">Blog</h1>

    <p class="">Thoughts derived from my everyday experiences</p>

    <hr class="my-5"/>

    <ul class="tags flex mt-10 items-center">
      <span class="mr-4">Tags:</span>
      <li class="tag" v-for="edge in $page.tags.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">
          {{edge.node.title}}
        </g-link>
      </li>
    </ul>

    <div class="content mt-10">
      <ul>
        <li class="mb-20" v-for="edge in $page.articles.edges" :key="edge.node.id">
          <article class="">
          <h2 class="text-4xl mb-4">
            <g-link class="underline" :to="`/blog/articles/${edge.node.id}`"> {{ edge.node.title }}</g-link>
          </h2>
          <p>{{edge.node.summary}} -><g-link class="underline" :to="`/blog/articles/${edge.node.id}`">read more</g-link></p>
          <div class="mt-4 flex items-center justify-between">
            <ul class="">
              <li>
                <g-link class="tag"
                        v-for="tag in edge.node.tags"
                        :to="tag.path"
                        :key="tag.id">
                  #{{ tag.title }}
                </g-link>
              </li>
            </ul>
            <div class="text-sm">
              Published on
              <time class=" mr-5"> {{ edge.node.published }}</time>
            </div>
          </div>
          </article>
        </li>
      </ul>
    </div>

  </div>
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
  tags: allTag{
    edges {
      node {
        title
        path
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

<style lang="scss">

.tag {
  @apply rounded-full bg-gray-200 mr-2 px-4 py-1;
}

</style>
