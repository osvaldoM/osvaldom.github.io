<template>
  <div class="bg-gradient-to-r from-rose-400 to-orange-300 py-10 relative">
    <div class="container mx-auto bg-white rounded-3xl px-24 py-5 shadow-2xl">
      <header class="header flex justify-between items-center mb-6">
        <strong>
          <g-link to="/">
  <!--          {{ $static.metadata.siteName }}-->
            <g-image src="~/assets/images/osvaldo.png" width="50"/>
          </g-link>
        </strong>
        <nav class="nav">
          <g-link class="nav__link font-semibold" to="/" v-on:mouseover.native="pullArrow">Home</g-link>
          <g-link class="nav__link font-semibold" to="/portfolio/" v-on:mouseover.native="pullArrow">Portfolio</g-link>
          <g-link class="nav__link font-semibold" to="/blog/" v-on:mouseover.native="pullArrow">Blog</g-link>
        </nav>
      </header>

      <main>
        <slot/>
      </main>

      <footer class="mt-80">
        <ul class="home-links flex">
          <li><a href="https://github.com/osvaldoM" target="_blank" rel="noopener">GitHub</a></li>
          <li><a href="https://twitter.com/impurefunction" target="_blank" rel="noopener">Twitter</a></li>
          <li><a href="https://stackoverflow.com/users/story/4043487" target="_blank" rel="noopener">Stackoverflow</a></li>
          <li><a href="https://docs.google.com/document/d/1F8QXk3HaH0zGRcebRWAYwowFziFeIJcy7rnZuvNBXp8/edit?usp=sharing" target="_blank" rel="noopener">Resume</a></li>
          <li class="ml-auto"><span class=""> copyright@2021</span></li>
        </ul>
      </footer>
    </div>
    <div class="striker-container default-gradient rounded-full absolute flex align-middle justify-center">
      <img class="max-w-full text-white" svg-inline src="~/assets/svg/bow-and-arrow-2.svg" alt="responsive web app icon" width="60px"/>
    </div>
  </div>
</template>

<static-query>
query {
metadata {
siteName
}
}
</static-query>

<script>
import { gsap } from "gsap";

export default {
  name: "App",
  created() {
    console.log('created component')
  },
  mounted() {
    gsap.to(".home-links", {duration: 2, x: 300});

    // gsap.set('.arrow-group', {transformOrigin: "50% 50%"});
  },
  methods: {
    pullArrow(event) {
      const $arrowContainer = document.querySelector('.striker-container');
      const center = [$arrowContainer.offsetLeft + $arrowContainer.offsetWidth / 2, $arrowContainer.offsetTop + $arrowContainer.offsetHeight / 2]
      var angle = Math.atan2(event.pageX - center[0], -(event.pageY - center[1])) *(180/Math.PI)

      console.log(angle);
      gsap.to('.arrow-group', {transformOrigin: `${center.join(',')}`, duration:0.4, rotation: `${angle-90}`});
    }
  }
}

</script>

<style lang="scss">
/*@font-face {*/
/*  font-family: Northwell;*/
/*  src: url('../assets/Northwell.otf');*/
/*  font-weight: normal;*/
/*}*/
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.header {
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
.nav__link.active--exact {
  @apply rounded-2xl bg-rose-400 py-2 px-4 text-white
}

.striker-container {
  bottom: 980px;
  left: 200px;
  width: 140px;
  height: 140px;
}
</style>
