<template>
  <div class="bg-gradient-to-r from-rose-400 to-orange-300 relative py-2 xl:py-10 px-2 xl:px-20">
    <div class="container page-container mx-auto bg-white rounded-3xl px-2 xl:px-24 py-32 xl:py-5 shadow-2xl relative">
      <header class="header fixed bottom-0 left-0 xl:static flex justify-between items-center mb-6 w-full xl:w-auto px-4 xl:px-0"
              v-on:mousemove="throttledRotateArrow">
        <g-link class="hidden xl:block" to="/" exact>
<!--          {{ $static.metadata.siteName }}-->
          <g-image src="~/assets/images/osvaldo.png" width="50"/>
        </g-link>
        <nav class="nav xl:-mr-24 w-full xl:w-auto">
          <ul class="flex justify-between">
            <li class="nav__item">
              <g-link class="nav__link font-semibold transition-all delay-75 duration-500 ease-in-out" exact to="/" >Home</g-link>
            </li>
            <li class="nav__item">
              <g-link class="nav__link font-semibold transition-all delay-75 duration-500 ease-in-out" to="/portfolio/">Portfolio</g-link>
            </li>
            <li class="nav__item">
              <g-link class="nav__link font-semibold transition-all delay-75 duration-500 ease-in-out" to="/blog/">Blog</g-link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <slot/>
      </main>

      <footer class="mt-20 absolute bottom-4 left-0 w-full px-24 hidden xl:block">
        <ul class="home-links flex">
          <li class="mr-2"><a href="https://github.com/osvaldoM" target="_blank" rel="noopener">GitHub</a></li>
          <li class="mr-2"><a href="https://twitter.com/impurefunction" target="_blank" rel="noopener">Twitter</a></li>
          <li class="mr-2"><a href="https://stackoverflow.com/users/story/4043487" target="_blank" rel="noopener">Stackoverflow</a></li>
          <li class="mr-2"><a href="https://docs.google.com/document/d/1F8QXk3HaH0zGRcebRWAYwowFziFeIJcy7rnZuvNBXp8/edit?usp=sharing" target="_blank" rel="noopener">Resume</a></li>
          <li class="ml-auto"><span class=""> copyright@{{ $static.metadata.year }}</span></li>
        </ul>
      </footer>
      <div class="striker-container bg-white rounded-full flex justify-center items-center ">
        <img class="max-w-full striker-svg fill-current text-rose-400" svg-inline src="~/assets/svg/bow-and-arrow-o.svg" alt="responsive web app icon" width="70px"/>
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
import {addEventListenerList, screenToSVG} from "../util/Util";

const initPullArrow = () => {
  const svg = document.querySelector('.striker-svg');
  const $arrowContainer = document.querySelector('.striker-container');
  const center = [
      $arrowContainer.getBoundingClientRect().left + $arrowContainer.getBoundingClientRect().width / 2,
      $arrowContainer.getBoundingClientRect().top + $arrowContainer.getBoundingClientRect().height / 2
  ];
  const $arrow = document.querySelector('.arrow');
  const $topLine = document.querySelector('.top-line');
  const $bottomLine = document.querySelector('.bottom-line');
  const $topCircle = document.querySelector('.top-circle');
  const $bottomCircle = document.querySelector('.bottom-circle');
  const topCircleCenter = [$topCircle.cx.baseVal.value, $topCircle.cy.baseVal.value];
  const bottomCircleCenter = [$topCircle.cx.baseVal.value, $bottomCircle.cy.baseVal.value];
  let isExecutingUnstoppableAnimation = false;
  let tl = gsap.timeline();

  return (event) => {
    if(isExecutingUnstoppableAnimation)
      return;

    if(event.type === 'mouseover') {
      if (tl.reversed() || tl.paused()) {
        tl.play();
        return;
      }
      tl.to($topLine, {svgOrigin: `${topCircleCenter.join(' ')}`, duration:0.4, rotation: `35`}, 0);
      tl.to($bottomLine, {svgOrigin: `${bottomCircleCenter.join(' ')}`, duration:0.4, rotation: `-35`}, 0);
      tl.to($arrow, {duration:0.4, x: `-40`}, 0);
    } else if(event.type === 'mouseout') {
      tl.reverse();
    } else if(event.type === 'click') {
      let tween1 = gsap.to($topLine, {svgOrigin: `${topCircleCenter.join(' ')}`, duration:0.4, rotation: `-15`}, 0);
      let tween2 = gsap.to($bottomLine, {svgOrigin: `${bottomCircleCenter.join(' ')}`, duration:0.4, rotation: `15`}, 0);

      const x1 = svg.getBoundingClientRect().left,
          y1 = svg.getBoundingClientRect().top,
          x2 = event.pageX,
          y2 = event.pageY;
      const hypotenuse = Math.hypot(x2-x1, y2-y1);

      const svgPoint = screenToSVG(svg, (x1 + hypotenuse), y1);

      tl.to($arrow, {
        transformOrigin: '0,0',
        x: svgPoint.x - $arrow.getBoundingClientRect().width,
        duration: 0.3,
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
  const center = [
    $arrowContainer.getBoundingClientRect().left + $arrowContainer.getBoundingClientRect().width / 2,
    $arrowContainer.getBoundingClientRect().top + $arrowContainer.getBoundingClientRect().height / 2
  ];
  const angle = Math.atan2(event.pageX - center[0], -(event.pageY - center[1])) *(180/Math.PI)
  gsap.to('.arrow-group', {transformOrigin: `50% 50%`, duration:0.2, rotation: `${angle-90}`});
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

.nav__link.active {
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

.striker-container {
  position: fixed;
  top: 10px;
  left: 0;
  width: 80px;
  height: 80px;
}

.striker-svg {
  overflow: visible;
  width: 70px;
  height: auto;
}

.striker-svg {
  width: 40px;
}

.striker-svg.animating {
  position: relative;
  top:10px;
}
.arrow-group {
  //fill: blue;
}

.page-container {
  min-height: 1000px;
  padding-bottom: 90px;
}
</style>
