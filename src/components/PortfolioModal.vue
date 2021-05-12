<template>
  <div class="portfolio-modal">
  <base-modal :is-modal-visible="isModalVisible" v-on="$listeners">
    <section slot="header">

    </section>
    <section slot="body">
      <div class="horizontal-sliders">
        <section class="portfolio-item flex" id="emprego-main">
          <div class="portfolio-item-section">
            <h2 class="text-5xl text-white">
              <a class="external-link" target="_blank" href="https://www.emprego.co.mz"> emprego.co.mz</a>
            </h2>
            <p class="text-white font-bold">The biggest job portal in Mozambique with more than
              <strong class="text-xl">300k+</strong> active users and <strong class=" text-xl">40k+</strong> daily visits</p>

            <picture>
              <source
                  type="image/avif"
                  sizes="100vw"
                  srcset="@/assets/images/portfolio/emprego-home-1920.avif 1920w,
              @/assets/images/portfolio/emprego-home-960.avif 960w,
              @/assets/images/portfolio/emprego-home-640.avif 640w,
              @/assets/images/portfolio/emprego-home-480.avif 480w,
              @/assets/images/portfolio/emprego-home-384.avif 384w,
              @/assets/images/portfolio/emprego-home-320.avif 320w">
              <img
                  alt="The author should add a description of what appears in the image."
                  src="@/assets/images/portfolio/emprego-home.png"
                  srcset="@/assets/images/portfolio/emprego-home-1920.png 1920w,
              @/assets/images/portfolio/emprego-home-960.png 960w,
              @/assets/images/portfolio/emprego-home-640.png 640w,
              @/assets/images/portfolio/emprego-home-480.png 480w,
              @/assets/images/portfolio/emprego-home-384.png 384w,
              @/assets/images/portfolio/emprego-home-320.png 320w"
                  sizes="100vw"
                  loading="lazy"
                  decoding="async"
                  height="975"
                  width="1920"
                  style="content-visibility: auto; width: 1200px; max-width: 100%; height: auto;" class="shadow-2xl">
            </picture>
          </div>
          <div class="portfolio-item-section flex flex-col justify-center text-white">
            <div class="">
              <img alt="See more" class="portfolio-details-arrow portfolio-details-arrow-right bounce-right" height="100px" width="100px"
                   src="~/assets/icons/arrow-circle-right.svg" svg-inline @click="scrollIntoView('#emprego-details')" />
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
        <section class="portfolio-item flex" id="emprego-details">
          <div class="portfolio-item-section">
            <h2 class="text-5xl text-white">
              <a class="external-link" target="_blank" href="https://www.emprego.co.mz"> emprego.co.mz</a>
            </h2>
            <p class="text-white font-bold">The biggest job portal in Mozambique with more than
              <strong class="text-xl">300k+</strong> active users and <strong class=" text-xl">40k+</strong> daily visits</p>

            <picture>
              <source
                  type="image/avif"
                  sizes="100vw"
                  srcset="@/assets/images/portfolio/emprego-home-1920.avif 1920w,
              @/assets/images/portfolio/emprego-home-960.avif 960w,
              @/assets/images/portfolio/emprego-home-640.avif 640w,
              @/assets/images/portfolio/emprego-home-480.avif 480w,
              @/assets/images/portfolio/emprego-home-384.avif 384w,
              @/assets/images/portfolio/emprego-home-320.avif 320w">
              <img
                  alt="The author should add a description of what appears in the image."
                  src="@/assets/images/portfolio/emprego-home.png"
                  srcset="@/assets/images/portfolio/emprego-home-1920.png 1920w,
              @/assets/images/portfolio/emprego-home-960.png 960w,
              @/assets/images/portfolio/emprego-home-640.png 640w,
              @/assets/images/portfolio/emprego-home-480.png 480w,
              @/assets/images/portfolio/emprego-home-384.png 384w,
              @/assets/images/portfolio/emprego-home-320.png 320w"
                  sizes="100vw"
                  loading="lazy"
                  decoding="async"
                  height="975"
                  width="1920"
                  style="content-visibility: auto; width: 1200px; max-width: 100%; height: auto;" class="shadow-2xl">
            </picture>
          </div>
          <div class="portfolio-item-section flex flex-col justify-center text-white">
            <div class="">
              <img alt="See more" class="portfolio-details-arrow portfolio-details-arrow-left bounce-right" height="100px" width="100px"
                   src="~/assets/icons/arrow-circle-left.svg" svg-inline @click="scrollIntoView('#emprego-main')"/>
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
    </section>
  </base-modal>
  </div>
</template>

<script>
import anime from "animejs";
import {checkFetchResponseStatus} from "../util/Util";
import BaseModal from "./base-components/BaseModal";

import smoothscroll from 'smoothscroll-polyfill';

export default {
  name: "PortfolioModal",
  components: {BaseModal},
  props: {
    isModalVisible : {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
    }
  },
  created(){
    smoothscroll.polyfill();
  },
  mounted() {
  },
  methods: {
    scrollIntoView(target) {
      document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    }
  },
  destroyed() {
    document.body.classList.remove('modal-open');
  }
}
</script>

<style lang="scss">

:root {
  --emprego-green: #499769
}

.portfolio-item {
  height: 100vh;
  background-color: var(--emprego-green);
  padding: 40px;
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
  .portfolio-details-arrow {
    position: absolute;
    top: 20%;
    cursor: pointer;
  }
  .portfolio-details-arrow-left {
    left: 20px;
  }

  .portfolio-details-arrow-right {
    right: 40px;
  }
  .portfolio-details-arrow:hover{
    border: 2px solid white;
    border-radius: 50%;
  }
  .bounce-right {
    animation: bounce-right .5s infinite alternate;
  }
  @keyframes bounce-right {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateX(-15px);
    }
  }

  .horizontal-sliders {
    display: flex;
    flex-shrink: 0;
    width: 100vw;
    overflow-x: scroll;
  }
</style>
