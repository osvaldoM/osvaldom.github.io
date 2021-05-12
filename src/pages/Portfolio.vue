<template>
  <div>
<!--    <h1>Portfolio coming soon.</h1>-->

<!--    <p>In the meantime, you can see what I've been up to in one of the links below:</p>-->

<!--    <ul class="flex flex-col xl:flex-row">-->
<!--      <li class="mr-2"><a class="underline" href="https://docs.google.com/document/d/1F8QXk3HaH0zGRcebRWAYwowFziFeIJcy7rnZuvNBXp8/edit?usp=sharing" target="_blank" rel="noopener">Résumé</a></li>-->
<!--      <li class="mr-2"><a class="underline" href="https://github.com/osvaldoM" target="_blank" rel="noopener">GitHub</a></li>-->
<!--      <li class="mr-2"><a class="underline" href="https://twitter.com/impurefunction" target="_blank" rel="noopener">Twitter</a></li>-->
<!--      <li class="mr-2"><a class="underline" href="https://stackoverflow.com/users/story/4043487" target="_blank" rel="noopener">Stackoverflow</a></li>-->
<!--    </ul>-->

    <portfolio-modal>

    </portfolio-modal>

  </div>
</template>

<script>
import PortfolioModal from "../components/PortfolioModal";
export default {
  components: {PortfolioModal},
  metaInfo: {
    title: 'Portfolio'
  },
  comments: {
    PortfolioModal
  }
}
</script>

<style>


.stack-list {
  /*display: flex;*/
}
.stack-list-item {

}
</style>
