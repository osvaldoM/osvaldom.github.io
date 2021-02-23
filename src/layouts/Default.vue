<template>
  <div class="bg-gradient-to-r from-rose-400 to-orange-300 py-10 relative">
    <div class="container page-container mx-auto bg-white rounded-3xl px-24 py-5 shadow-2xl relative">
      <header class="header flex justify-between items-center mb-6" v-on:mousemove="throttledRotateArrow">
        <strong>
          <g-link class="nav__link" to="/">
  <!--          {{ $static.metadata.siteName }}-->
            <g-image src="~/assets/images/osvaldo.png" width="50"/>
          </g-link>
        </strong>
        <nav class="nav -mr-24">
          <ul class="flex">
            <li class="nav__item">
              <g-link class="nav__link font-semibold transition-all delay-75 duration-500 ease-in-out" to="/"  v-on:mouseover.native="pullArrow">Home</g-link>
            </li>
            <li class="nav__item">
              <g-link class="nav__link font-semibold transition-all delay-75 duration-500 ease-in-out" to="/portfolio/" v-on:mouseover.native="pullArrow">Portfolio</g-link>
            </li>
            <li class="nav__item">
              <g-link class="nav__link font-semibold transition-all delay-75 duration-500 ease-in-out" to="/blog/" v-on:mouseover.native="pullArrow">Blog</g-link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <slot/>
      </main>

      <footer class="mt-20 absolute bottom-4 left-0 w-full px-24">
        <ul class="home-links flex">
          <li><a href="https://github.com/osvaldoM" target="_blank" rel="noopener">GitHub</a></li>
          <li><a href="https://twitter.com/impurefunction" target="_blank" rel="noopener">Twitter</a></li>
          <li><a href="https://stackoverflow.com/users/story/4043487" target="_blank" rel="noopener">Stackoverflow</a></li>
          <li><a href="https://docs.google.com/document/d/1F8QXk3HaH0zGRcebRWAYwowFziFeIJcy7rnZuvNBXp8/edit?usp=sharing" target="_blank" rel="noopener">Resume</a></li>
          <li class="ml-auto"><span class=""> copyright@{{ $static.metadata.year }}</span></li>
        </ul>
      </footer>
      <div class="striker-container bg-white rounded-full flex justify-center items-center ">
        <img class="max-w-full striker-svg fill-current text-rose-400" svg-inline src="~/assets/svg/bow-and-arrow.svg" alt="responsive web app icon" width="100px" height="100px"/>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
    year
  }
}
</static-query>

<script>
import { gsap } from "gsap";
import {throttle} from 'lodash-es'
import {addEventListenerList} from "../util/Util";

const initPullArrow = () => {
  let tl = gsap.timeline();
  const $topCircle = document.querySelector('.top-circle');
  const $bottomCircle = document.querySelector('.bottom-circle');
  const topCircleCenter = [$topCircle.cx.baseVal.value, $topCircle.cy.baseVal.value];
  const bottomCircleCenter = [$topCircle.cx.baseVal.value, $bottomCircle.cy.baseVal.value];
  let isExecutingUnstoppableAnimation = false;
  return (event) => {
    if(isExecutingUnstoppableAnimation)
      return;

    if(event.type === 'mouseover') {
      if (tl.reversed() || tl.paused()) {
        tl.play();
        return;
      }
      tl.to('.top-line', {svgOrigin: `${topCircleCenter.join(' ')}`, duration:0.4, rotation: `35`}, 0);
      tl.to('.bottom-line', {svgOrigin: `${bottomCircleCenter.join(' ')}`, duration:0.4, rotation: `-35`}, 0);
      tl.to('.arrow', {duration:0.4, x: `-180`}, 0);
    } else if(event.type === 'mouseout') {
      tl.reverse();
    } else if(event.type === 'click') {
      let tween1 = gsap.to('.top-line', {svgOrigin: `${topCircleCenter.join(' ')}`, duration:0.4, rotation: `-15`}, 0);
      let tween2 = gsap.to('.bottom-line', {svgOrigin: `${bottomCircleCenter.join(' ')}`, duration:0.4, rotation: `15`}, 0);
      tl.to('.arrow', {
        x: event.pageX*10,
        // y: (event.pageY*8)-600,
        duration: 0.4,
        onStart: function () {
          isExecutingUnstoppableAnimation = true;
        },
        onComplete: function (){
          tl.remove(this)
          tl.remove(tween1);
          tl.remove(tween2);
          tl.pause(0);
          isExecutingUnstoppableAnimation = false;
          event.target.classList.add('active--exact')
        }
      });
    }
  }
}

const rotateArrow = (event) => {
  const $arrowContainer = document.querySelector('.striker-container');
  const center = [$arrowContainer.offsetLeft + $arrowContainer.offsetWidth / 2, $arrowContainer.offsetTop + $arrowContainer.offsetHeight / 2]
  const angle = Math.atan2(event.pageX - center[0], -(event.pageY - center[1])) *(180/Math.PI)
  gsap.to('.arrow-group', {transformOrigin: `${center.join(',')}`, duration:0.2, rotation: `${angle-93}`});
}


export default {
  name: "App",
  created() {
  },
  mounted() {
    gsap.set('.arrow-group', {transformOrigin: "50% 50%"});

    const $linkList = document.querySelectorAll('.nav__link');
    const pullArrow = initPullArrow();
    addEventListenerList($linkList, 'mouseover', pullArrow);
    addEventListenerList($linkList, 'mouseout', pullArrow);
    addEventListenerList($linkList, 'click', pullArrow);
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
  //margin-left: 20px;
}
.nav__item {
  min-width: 8rem;
}

.nav__link.active--exact {
  @apply rounded-2xl bg-rose-400 py-2 px-4 text-white
}

.striker-container {
  position: absolute;
  top: 660px;
  left: -80px;
  width: 160px;
  height: 160px;
  z-index: 5;
  //overflow: visible;
}

.striker-svg {
  overflow: visible;
}
.arrow-group {
  //fill: blue;
}

.page-container {
  min-height: 1000px;
}
</style>
