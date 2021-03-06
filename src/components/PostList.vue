<template>
  <ul>
    <li class="mb-20" v-for="edge in posts" :key="edge.node.id">
      <article class="">
        <h2 class="text-4xl mb-4">
          <g-link class="underline" :to="`/blog/articles/${edge.node.id}`"> {{ edge.node.title }}</g-link>
        </h2>
        <p>{{edge.node.summary}} ...<g-link class="underline" :to="`/blog/articles/${edge.node.id}`">read more</g-link></p>
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

</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default: null,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
