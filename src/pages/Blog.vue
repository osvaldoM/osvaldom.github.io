<template>
  <div>
    <h1 class="text-5xl mb-10">Blog</h1>

    <p class="">Thoughts derived from my everyday experiences</p>

    <hr class="my-5"/>

    <ul class="post-tags flex mt-10 items-center overflow-x-auto">
      <span class="mr-4">tags:</span>
      <li class="">
        <g-link :to="currentRoute" class="post-tag py-4">
          All articles
        </g-link>
      </li>
      <li class="" v-for="edge in $page.tags.edges" :key="edge.node.id">
        <g-link :to="edge.node.path" class="post-tag">
          {{edge.node.title}}
        </g-link>
      </li>
    </ul>

    <div class="content mt-10">
      <post-list v-bind:posts="$page.articles.edges"></post-list>
    </div>

  </div>
</template>

<page-query>
query Articles ($page: Int) {
  articles: allArticle(sortBy: "published", order: DESC, perPage: 10, page: $page) @paginate{
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
import PostList from "../components/PostList";

export default {
  components: {
    PostList,
    Article,
    Pager
  },
  metaInfo: {
    title: 'My blog'
  },
  created() {
  },
  computed: {
    currentRoute: function (){
      return this.$route.path
    }
  }
}
</script>

<style lang="scss">

//@import 'prismjs/themes/prism.css';


</style>
