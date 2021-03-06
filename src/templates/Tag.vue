<template>
<div>
  <h1>Posts tagged: {{ $page.tag.title }}</h1>

  <hr class="my-5"/>

  <ul class="tags flex mt-10 items-center">
    <span class="mr-4">Tags:</span>
    <li class="">
      <g-link to="/Blog" class="tag py-4">
        All articles
      </g-link>
    </li>
    <li class="" v-for="edge in $page.tags.edges" :key="edge.node.id">
      <g-link :to="edge.node.path" class="tag">
        {{ edge.node.title }}
      </g-link>
    </li>
  </ul>

  <div class="content mt-10">
    <post-list v-bind:posts="$page.tag.belongsTo.edges"></post-list>
  </div>
</div>
<!--    <ul>-->
<!--      <li v-for="post in $page.tag.belongsTo.edges" :key="post.node.id" >-->
<!--        <h3><g-link :to="post.node.path">{{ post.node.title }}</g-link></h3>-->
<!--        {{ post.node.date }}-->
<!--      </li>-->
<!--    </ul>-->
</template>

<page-query>
query Tag ($id: ID!, $page: Int) {
  tag: tag (id: $id) {
    title
    belongsTo (page: $page, perPage: 30) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Article {
            id
            title
            path
            summary
            published (format: "MMMM D, Y")
            updated (format: "MMMM D, Y")
            tags {
              title
            }
          }
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
import PostList from "../components/PostList";
import Article from "./Article";
import {Pager} from "gridsome";

export default {
  components: {
    PostList,
    Article,
    Pager
  },
  metaInfo() {
    return {
      title: `Tag: ${this.$page.tag.title}`
    }
  },
}
</script>

<style scoped>
.tag {
  @apply rounded-full bg-gray-200 mr-2 px-4 py-1.5;
}

.tag.active--exact {
  @apply bg-gray-800 text-white;
}
</style>
