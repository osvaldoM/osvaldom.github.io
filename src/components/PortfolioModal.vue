<template>
  <div class="portfolio-modal">
  <base-modal :is-modal-visible="isModalVisible" v-on="$listeners">
    <section slot="header">

    </section>
    <section slot="body">
      <section class="portfolio-item flex">
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
            <img alt="See more" class="portfolio-details-arrow bounce-right hover:-rotate-180 cursor-pointer hover:border-white hover:border-2" height="100%" src="~/assets/icons/arrow-circle-right.svg" svg-inline height="100px" width="100px"/>
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
    </section>
  </base-modal>
  </div>
</template>

<script>
import anime from "animejs";
import {checkFetchResponseStatus} from "../util/Util";
import BaseModal from "./base-components/BaseModal";

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
  mounted() {
  },
  destroyed() {
    document.body.classList.remove('modal-open');
  }
}
</script>

<style>

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
</style>
