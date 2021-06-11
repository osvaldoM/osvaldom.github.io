<template>
  <div class="portfolio-modal">
    <base-modal :is-modal-visible="isModalVisible" v-on="$listeners">
      <section slot="header">

      </section>
      <section slot="body">
        <div class="vertical-sliders">
          <div id="emprego-section" class="horizontal-sliders">
            <section class="portfolio-item emprego-item flex" id="emprego-main">
              <div class="portfolio-item-section">
                <h2 class="text-5xl text-white">
                  <a class="external-link" target="_blank" href="https://www.emprego.co.mz"> emprego.co.mz</a>
                </h2>
                <p class="text-white font-bold">The biggest job portal in Mozambique with more than
                  <strong class="text-xl">300k+</strong> active users and <strong class=" text-xl">40k+</strong> daily visits</p>
                <g-image src="@/assets/images/portfolio/emprego-home.png" width="1200px" style="content-visibility: auto; height: auto;"
                         class="shadow-2xl max-w-full"></g-image>
              </div>
              <div class="portfolio-item-section flex flex-col justify-center text-white">
                <div class="">
                  <img alt="See more" class="horizontal-navigation-arrow portfolio-details-arrow-right bounce-right" height="100px" width="100px"
                       src="~/assets/icons/arrow-circle-right.svg" svg-inline @click="scrollIntoView('#emprego-details')"/>
                </div>
                <h2 class="text-5xl">
                  tech stack
                </h2>
                <ul class="stack-list">
                  <li class="stack-list-item">Php backend + Wordpress custom theme</li>
                  <li class="stack-list-item">Apache + nginx</li>
                  <li class="stack-list-item">AWS</li>
                  <li class="stack-list-item">Backbone</li>
                  <li class="stack-list-item">SCSS</li>
                  <li class="stack-list-item">GULP + deployer</li>
                  <li class="stack-list-item">Apache cordova</li>
                </ul>
              </div>
            </section>
            <section class="portfolio-item emprego-item flex" id="emprego-details">
              <div class="portfolio-item-section">
                <h2 class="text-5xl text-white">Screens</h2>
                <div class="carousel">
                  <carousel autoplay arrows-outside bullets-outside transition-speed="400" 3d>
                    <slide>
                      <template v-slot:content>
                        <g-image src="@/assets/images/portfolio/emprego-home.png" width="1200px" class="carousel__image"></g-image>
                      </template>
                    </slide>
                    <slide>
                      <template v-slot:content>
                        <g-image src="@/assets/images/portfolio/emprego-home.png" width="1200px" class="carousel__image"></g-image>
                      </template>
                    </slide>
                  </carousel>
                </div>
              </div>
              <div class="text-white">
                <h2 class="">
                  Main features
                </h2>
                <h3>For candidates</h3>
                <ul class="stack-list">
                  <li class="stack-list-item">View Vacancies</li>
                  <li class="stack-list-item">Send and view applications</li>
                  <li class="stack-list-item">Create online cv and export as PDF</li>
                </ul>

                <h3>For companies</h3>
                <ul class="stack-list">
                  <li class="stack-list-item">Post vacancies</li>
                  <li class="stack-list-item">Filter candidates</li>
                  <li class="stack-list-item">Create custom application questionnaires</li>
                </ul>
                <h3>For sales and content managers</h3>
                <ul class="stack-list">
                  <li class="stack-list-item">Content management system</li>
                  <li class="stack-list-item">Transactional emails</li>
                </ul>
              </div>
            </section>
          </div>
          <div id="biscate-section" class="horizontal-sliders">
            <section class="portfolio-item biscate-item flex" id="biscate-main">
              <div class="portfolio-item-section">
                <h2 class="text-5xl text-white">
                  <a class="external-link" target="_blank" href="https://www.emprego.co.mz"> emprego.co.mz</a>
                </h2>
                <p class="text-white font-bold">The biggest job portal in Mozambique with more than
                  <strong class="text-xl">300k+</strong> active users and <strong class=" text-xl">40k+</strong> daily visits</p>

                <g-image src="@/assets/images/portfolio/emprego-home.png" width="1200px" style="content-visibility: auto; height: auto;"
                         class="shadow-2xl max-w-full"></g-image>
              </div>
              <div class="portfolio-item-section flex flex-col justify-center text-white">
                <div class="">
                  <img alt="See more" class="horizontal-navigation-arrow portfolio-details-arrow-right bounce-right" height="100px" width="100px"
                       src="~/assets/icons/arrow-circle-right.svg" svg-inline @click="scrollIntoView('#biscate-details')"/>
                </div>
                <h2 class="text-5xl">
                  tech stack
                </h2>
                <ul class="stack-list">
                  <li class="stack-list-item">Php backend + Wordpress custom theme</li>
                  <li class="stack-list-item">Apache + nginx</li>
                  <li class="stack-list-item">AWS</li>
                  <li class="stack-list-item">Backbone</li>
                  <li class="stack-list-item">SCSS</li>
                  <li class="stack-list-item">GULP + deployer</li>
                  <li class="stack-list-item">Apache cordova</li>
                </ul>
              </div>
            </section>
            <section class="portfolio-item flex" id="biscate-details">
              <div class="portfolio-item-section">
                <h2 class="text-5xl text-white">
                  <a class="external-link" target="_blank" href="https://www.emprego.co.mz"> emprego.co.mz</a>
                </h2>
                <p class="text-white font-bold">The biggest job portal in Mozambique with more than
                  <strong class="text-xl">300k+</strong> active users and <strong class=" text-xl">40k+</strong> daily visits</p>

                <g-image src="@/assets/images/portfolio/emprego-home.png" width="1200px" style="content-visibility: auto; height: auto;"
                         class="shadow-2xl max-w-full"></g-image>
              </div>
              <div class="portfolio-item-section flex flex-col justify-center text-white">
                <div class="">
                  <img alt="See more" class="horizontal-navigation-arrow portfolio-details-arrow-left bounce-right" height="100px" width="100px"
                       src="~/assets/icons/arrow-circle-left.svg" svg-inline @click="scrollIntoView('#biscate-main')"/>
                </div>
                <h2 class="text-5xl">
                  tech stack
                </h2>
                <ul class="stack-list">
                  <li class="stack-list-item">Php backend + Wordpress custom theme</li>
                  <li class="stack-list-item">Apache + nginx</li>
                  <li class="stack-list-item">AWS</li>
                  <li class="stack-list-item">Backbone</li>
                  <li class="stack-list-item">SCSS</li>
                  <li class="stack-list-item">GULP + deployer</li>
                  <li class="stack-list-item">Apache cordova</li>
                </ul>
              </div>
            </section>
          </div>
          <img alt="See more" class="vertical-navigation-arrow go-down bounce-top text-white" height="100px" width="100px"
               src="~/assets/icons/chevron-down.svg" svg-inline @click="scrollIntoView('#biscate-section')"/>
        </div>
      </section>
    </base-modal>
  </div>
</template>

<script>
import anime from "animejs";
import BaseModal from "./base-components/BaseModal";

import smoothscroll from 'smoothscroll-polyfill';

// import { Carousel, Slide } from 'vue-carousel';
import {VueperSlides as Carousel, VueperSlide as Slide} from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'


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
  mounted(){
    this.$nextTick(() => {
      // this.$refs.slide[0].$el.classList.add('VueCarousel-slide-active');
    });
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

.carousel {
  width: 900px;

  &__image {
    @apply shadow-2xl max-w-full;
  }
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

.horizontal-navigation-arrow {
  position: absolute;
  top: 20%;
  cursor: pointer;
}

.vertical-navigation-arrow {
  position: absolute;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
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
  overflow-y: scroll;
}
</style>
