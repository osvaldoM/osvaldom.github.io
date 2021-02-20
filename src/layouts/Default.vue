<template>
  <div class="bg-gradient-to-r from-rose-400 to-orange-300 py-10 relative">
    <div class="container mx-auto bg-white rounded-3xl px-24 py-5 shadow-2xl">
      <header class="header flex justify-between items-center mb-6" v-on:mousemove="throttledRotateArrow">
        <strong>
          <g-link to="/">
  <!--          {{ $static.metadata.siteName }}-->
            <g-image src="~/assets/images/osvaldo.png" width="50"/>
          </g-link>
        </strong>
        <nav class="nav">
          <g-link class="nav__link font-semibold" to="/"  v-on:mouseover.native="pullArrow">Home</g-link>
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
      <img class="max-w-full text-white" svg-inline src="~/assets/svg/bow-and-arrow.svg" alt="responsive web app icon" width="60px"/>
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
import {throttle} from 'lodash-es'
import {addEventListenerList, $$, $} from "../Util";

const initPullArrow = () => {
  const tl = gsap.timeline();
  const $topCircle = $('.top-circle');
  const $bottomCircle = $('.bottom-circle');
  const topCircleCenter = [$topCircle.cx.baseVal.value, $topCircle.cy.baseVal.value];
  const bottomCircleCenter = [$topCircle.cx.baseVal.value, $bottomCircle.cy.baseVal.value];
  return (event) => {
    console.log(event.type);
    if(event.type === 'mouseover') {
      if (tl.reversed()) {
        tl.play();
        return;
      }
      tl.to('.top-line', {svgOrigin: `${topCircleCenter.join(' ')}`, duration:0.4, rotation: `-45`}, 0);
      tl.to('.bottom-line', {svgOrigin: `${bottomCircleCenter.join(' ')}`, duration:0.4, rotation: `45`}, 0);
      tl.to('.arrow', {duration:0.4, x: `180`}, 0);
    } else {
      tl.reverse(0);
    }
  }
}

const rotateArrow = (event) => {
  const $arrowContainer = $('.striker-container');
  const center = [$arrowContainer.offsetLeft + $arrowContainer.offsetWidth / 2, $arrowContainer.offsetTop + $arrowContainer.offsetHeight / 2]
  const angle = Math.atan2(event.pageX - center[0], -(event.pageY - center[1])) *(180/Math.PI)
  gsap.to('.arrow-group', {transformOrigin: `${center.join(',')}`, duration:0.2, rotation: `${angle-90}`});
}


export default {
  name: "App",
  created() {
    console.log('created component')
  },
  mounted() {
    gsap.to(".home-links", {duration: 2, x: 300});

    gsap.set('.arrow-group', {transformOrigin: "50% 50%"});

    const $linkList = $$('.nav__link');
    const pullArrow = initPullArrow();
    addEventListenerList($linkList, 'mouseover', pullArrow);
    addEventListenerList($linkList, 'mouseout', pullArrow);
  },
  methods: {
    throttledRotateArrow: throttle(rotateArrow, 300),
    pullArrow: () => {}
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
