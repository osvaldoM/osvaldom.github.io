<template>
<div>
  <h1>Posts tagged: {{ $page.tag.title }}</h1>

  <hr class="my-5"/>

  <ul class="tags flex mt-10 items-center overflow-x-auto">
    <span class="mr-4">Tags:</span>
    <li class="">
      <g-link to="/blog" class="post-tag py-4">
        All articles
      </g-link>
    </li>
    <li class="" v-for="edge in tags" :key="edge.node.id">
      <g-link :to="edge.node.path" class="post-tag">
        {{ edge.node.title }}
      </g-link>
    </li>
  </ul>

  <div class="content mt-10">
    <post-list v-bind:posts="$page.tag.belongsTo.edges"></post-list>
  </div>
</div>
</template>

<page-query>
query Tag ($id: ID!, $page: Int) {
  tag: tag (id: $id) {
    title
    id
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
        id
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
  computed: {
    tags(){
      const currentTag = this.$page.tag;
      return this.$page.tags.edges.sort((tag1, tag2) => {
        if(tag1.node.id === currentTag.id) {
          return -1;
        } else if (tag2.node.id === currentTag.id) {
          return 1
        }
        return 0;
      });
    }
  }
}
</script>

<style scoped>
.post-tag {
  @apply rounded-full bg-gray-200 mr-2 px-4 py-1.5;
}

.post-tag.active--exact {
  @apply bg-gray-800 text-white;
}
</style>
