<template>
  <div class="portfolio-modal">
    <base-modal :is-modal-visible="isModalVisible" v-on="$listeners">
      <section slot="header">

      </section>
      <section slot="body">
        <div class="vertical-sliders" ref="vertical-sliders-container">
          <div id="emprego-section" class="horizontal-sliders">
            <section class="portfolio-item emprego-item flex">
              <div class="portfolio-item-section">
                <h2 class="text-5xl text-white">
                  <a class="external-link" target="_blank" href="https://www.emprego.co.mz"> emprego.co.mz</a>
                </h2>
                <p class="text-white font-bold">The biggest job portal in Mozambique with more than
                  <strong class="text-xl">300k+</strong> active users and <strong class=" text-xl">40k+</strong> daily visits
                </p>
                <div class="carousel">
                  <carousel  arrows-outside :bullets="false" transition-speed="400" 3d>
                    <slide v-for="node in empregoImages" :key="node.id">
                      <template v-slot:content>
                        <g-image :src="require(`!!assets-loader!@/${node.fileInfo.path.replace('src/', '')}`)"
                                 class="carousel__image carousel__image--emprego"></g-image>
                      </template>
                    </slide>
                  </carousel>
                </div>
              </div>
              <div class="portfolio-item-section flex flex-col justify-center text-white">
                <div class="navigation-arrow__container">
                  <button aria-label="go to next portfolio item">
                    <img alt="See more" class="navigation-arrow navigation-arrow--down bounce-bottom"
                         src="~/assets/icons/arrow-circle-right.svg" svg-inline @click="scrollIntoView('#biscate-section')"/>
                  </button>
                </div>
                <h2 class="">
                  tech stack
                </h2>
                <ul class="stack-list">
                  <li class="stack-list__item">Php backend + Wordpress custom theme</li>
                  <li class="stack-list__item">Apache + nginx</li>
                  <li class="stack-list__item">AWS + GCP</li>
                  <li class="stack-list__item">Backbone</li>
                  <li class="stack-list__item">SCSS</li>
                  <li class="stack-list__item">GULP + deployer</li>
                  <li class="stack-list__item">Apache cordova</li>
                </ul>
                <h2 class="">
                  features
                </h2>
                <ul class="stack-list">
                  <li class="stack-list__item">Apply to Vacancies</li>
                  <li class="stack-list__item">Create online cv and export as PDF</li>
                </ul>
                <ul class="stack-list">
                  <li class="stack-list__item">Post vacancies</li>
                  <li class="stack-list__item">Filter candidates</li>
                  <li class="stack-list__item">Create custom application questionnaires</li>
                </ul>
                <ul class="stack-list">
                  <li class="stack-list__item">Content management system</li>
                  <li class="stack-list__item">Transactional emails</li>
                </ul>
              </div>
            </section>
          </div>
          <div id="biscate-section" class="horizontal-sliders">
            <section class="portfolio-item biscate-item flex">
              <div class="portfolio-item-section">
                <h2 class="text-5xl text-white">
                  <a class="external-link" target="_blank" href="https://www.biscate.co.mz"> biscate.co.mz</a>
                </h2>
                <p class="text-white font-bold">fast and convenient service that connects informal workers to customers through an online platform.</p>
                <div class="carousel">
                  <carousel arrows-outside :bullets="false" transition-speed="400" 3d>
                    <slide v-for="node in biscateImages" :key="node.id">
                      <template v-slot:content>
                        <g-image :src="require(`!!assets-loader!@/${node.fileInfo.path.replace('src/', '')}`)" class="carousel__image carousel__image--biscate"></g-image>
                      </template>
                    </slide>
                  </carousel>
                </div>
              </div>
              <div class="portfolio-item-section flex flex-col justify-center text-white">
                <div class="navigation-arrow__container">
                  <button aria-label="go to next portfolio item">
                    <img alt="See more" class="navigation-arrow navigation-arrow--down bounce-bottom"
                         src="~/assets/icons/arrow-circle-right.svg" svg-inline @click="scrollIntoView('#biscate-section')"/>
                  </button>
                  <button aria-label="go to next previous portfolio item">
                    <img alt="See more" class="navigation-arrow navigation-arrow--up bounce-top" height="100px"
                         src="~/assets/icons/arrow-circle-right.svg" svg-inline @click="scrollIntoView('#emprego-section')"/>
                  </button>
                </div>
                <h2 class="">
                  tech stack
                </h2>
                <ul class="stack-list">
                  <li class="stack-list__item">Php backend + node-smpp</li>
                  <li class="stack-list__item">Apache + nginx + pm2</li>
                  <li class="stack-list__item">AWS</li>
                  <li class="stack-list__item">Backbone</li>
                  <li class="stack-list__item">SCSS</li>
                  <li class="stack-list__item">Apache cordova</li>
                </ul>
                <h2 class="">
                  features
                </h2>
                <ul class="stack-list">
                  <li class="stack-list__item">Search for workers</li>
                  <li class="stack-list__item">Automatic matching of worker with job</li>
                  <li class="stack-list__item">Hire and rate worker</li>
                  <li class="stack-list__item">Multi-platform access(web + mobile + USSD)</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </section>
    </base-modal>
  </div>
</template>
<static-query>
query {
  portfolioImages:allPortfolioImage {
    totalCount
    edges {
      node {
        path
        fileInfo {
          name
          extension
          path
        }
      }
    }
  }
}
</static-query>
<script>
import anime from "animejs";
import BaseModal from "./base-components/BaseModal";

import smoothscroll from 'smoothscroll-polyfill';

import {VueperSlides as Carousel, VueperSlide as Slide} from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

const portfolioImagesByProject = (portfolioImages, projectName) => {
  if(!portfolioImages)
    return [];
  return portfolioImages.edges
      .filter(edge => edge.node.fileInfo.path.includes(projectName))
      .map(edge => edge.node);
}

export default {
  name: "PortfolioModal",
  components: {
    BaseModal,
    Carousel,
    Slide
  },
  props: {
    isModalVisible: {
      type: Boolean,
      default: true
    }
  },
  data(){
    return {}
  },
  created(){
    smoothscroll.polyfill();
  },
  computed: {
    biscateImages() {
      return portfolioImagesByProject(this.$static.portfolioImages, 'biscate');
    },
    empregoImages() {
      return portfolioImagesByProject(this.$static.portfolioImages, 'emprego');
    }
  },
  mounted(){
  },
  methods: {
    scrollIntoView(target){
      document.querySelector(target).scrollIntoView({behavior: 'smooth'});
    }
  },
  destroyed(){
    document.body.classList.remove('modal-open');
  }
}
</script>

<style lang="scss">

:root {
  --emprego-primary: #499769;
  --biscate-primary: #ba0000;
}
.stack-list {
  margin-bottom: 1rem;
  &__item {
    display: flex;
    margin-left: .6rem;
    margin-bottom: .4rem;
    z-index: 2;
    position: relative;

    &:before {
      content: "";
      display: block;
      width: 1.5em;
      height: 1.5em;
      background: #ffff00a3;
      margin-right: .6rem;
      left: .6rem;
      border-radius: 33% 67% 65% 35%/46% 62% 38% 54%;
    }
  }
}

.carousel {
  width: 900px;

  &__image {
    max-width: 100%;
    width: auto;
    &--emprego {
      background-color: var(--emprego-primary);
    }
    &--biscate {
      background-color: var(--biscate-primary);
    }
  }
}
.vueperslides__arrow {
  color: #ffffff;
}
.vueperslide {
  background-color: #ffffff;
}
.portfolio-item {
  height: 100vh;
  padding: 40px;
}

.emprego-item {
  background-color: var(--emprego-primary);
}

.biscate-item {
  background-color: var(--biscate-primary);
}

.portfolio-modal .modal-container {
  max-width: none;
  width: 100%;
  border-radius: 0;
  padding: 0;
}

.portfolio-modal .modal-body {
  margin: 0;
}

.portfolio-item {
  justify-content: space-around;
  width: 100vw;
  flex-shrink: 0;
  position: relative;
}

.portfolio-item-section {
  /*width: 45%;*/
}

a[target="_blank"]::after {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==);
  margin: 0 3px 0 5px;
}


.navigation-arrow {
  cursor: pointer;
  height:3.5rem;
  width:3.5rem;
  &__container {
    position: absolute;
    display: flex;
    bottom: 5%;
    right: 40px;
  }
  &--down {
    path {
      transform-box: fill-box;
      transform-origin: center;
      transform: rotate(90deg);
    }
  }
  &--up {
    path {
      transform-box: fill-box;
      transform-origin: center;
      transform: rotate(-90deg);
    }
  }
  &:hover {
    border: 2px solid white;
    border-radius: 50%;
  }
}
.horizontal-navigation-arrow {
  position: absolute;
  top: 20%;
  cursor: pointer;
}

.go-down {
  bottom: 0;
}

.portfolio-details-arrow-left {
  left: 20px;
}

.portfolio-details-arrow-right {
  right: 40px;
}

.portfolio-details-arrow-down {
}

.horizontal-navigation-arrow:hover {
  border: 2px solid white;
  border-radius: 50%;
}

.bounce-right {
  animation: bounce-right .5s infinite alternate;
}

.bounce-top {
  animation: bounce-top .5s infinite alternate;
}
.bounce-bottom {
  animation: bounce-bottom .5s infinite alternate;
}

@keyframes bounce-right {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateX(-15px);
  }
}

@keyframes bounce-top {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-15px);
  }
}
@keyframes bounce-bottom {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(15px);
  }
}

.horizontal-sliders {
  display: flex;
  flex-shrink: 0;
  width: 100vw;
  overflow-x: hidden;
}

.vertical-sliders {
  display: flex;
  flex-direction: column;
  height: 100vh;
  flex-shrink: 0;
  overflow-y: hidden;
}
</style>
