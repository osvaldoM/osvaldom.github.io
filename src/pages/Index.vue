<template>
  <div>
    <section class="heading-area flex flex-col-reverse xl:flex-row items-center xl:items-start xl:mt-40">
      <div class="flex-grow-0 xl:mr-48">
        <p class="text-xl mb-2 pt-8 xl:pt-0 text-center xl:text-left intro-text-1">Hi, my name is Osvaldo, </p>

        <p class="text-2xl font-semibold mb-6 text-center xl:text-left ml2">
          I love making beautiful designs and seamless interactions come to life in the form of web pages.
          <br/>
        </p>
        <div class="flex justify-around xl:justify-start">
          <g-link to="/portfolio" class="py-2 px-8 rounded font-bold shadow-lg border-orange-300 text-orange-300 border mr-5">My work</g-link >
          <button class="default-gradient py-2 px-8 text-white font-bold rounded shadow-lg contact-btn" @click="showModal">Let's talk</button>
        </div>
      </div>
      <div class="default-gradient px-2 rounded-2xl my-image flex-shrink-0 flex-grow-0 relative">
        <!-- Learn how to use images here: https://gridsome.org/docs/images -->
        <div class="">
          <g-image alt="osvaldo's face" class="relative " src="~/assets/images/osvaldo-no-bg.png" width="230px"/>
        </div>
      </div>
    </section>

    <section class="mt-20">
      <h2 class="mb-4">What I do</h2>
      <div class="flex flex-col xl:flex-row xl:-mx-3 items-center xl:items-baseline">
        <div class="xl:mx-3 xl:w-1/3">
          <div class="feature-img-container">
            <img data-animator="desktop-img" alt="responsive web app icon" class="max-w-full feature-img" height="100%" width="200px" src="~/assets/svg/undraw_progressive.svg" svg-inline />
          </div>
          <h3 class="text-center xl:text-left">Responsive rich web applications</h3>
          <p>I build progressive web applications that adapt to both desktop and mobile devices.
            I also strive to harness the latest web capabilities such as web bluetooth, offline support and more to bring the power of native apps
            into the web</p>
        </div>
        <div class="xl:mx-3 xl:w-1/3">
          <div class="feature-img-container">
            <img data-animator="rocket-image" alt="responsive web app icon" class="max-w-full feature-img rocket-image" height="100%" src="~/assets/svg/undraw_To_the_stars_qhyy.svg" svg-inline
                 width="200px"/>
          </div>
          <h3 class="text-center xl:text-left">Fast by default</h3>
          <p>
            Most of the applications I have worked on, were targeted at folks with internet speeds slower than average and low-end devices, therefore
            I've developed an empathy and have tried to learn/use every common practise for making web applications fast.
          </p>
        </div>
        <div class="xl:mx-3 xl:w-1/3">
          <div class="feature-img-container">
            <img data-animator="lab-image" alt="responsive web app icon" class="max-w-full feature-img" height="100%" src="~/assets/svg/undraw_science_fqhl.svg" svg-inline width="200px"/>
          </div>
          <h3 class="text-center xl:text-left">Exciting challenges</h3>
          <p>I'm always open to build cool things with cool people.</p>
        </div>
      </div>
    </section>

    <svg height="0" width="0">
      <defs>
        <clipPath id="svgPath" clipPathUnits="objectBoundingBox">
          <path
              d='M0.049,0.69 C0,0.643,0.001,0.545,0.02,0.481 C0.04,0.413,0.074,0.401,0.143,0.316 C0.268,0.165,0.238,0.111,0.319,0.059 C0.41,0,0.528,0.016,0.604,0.051 C0.678,0.086,0.668,0.12,0.781,0.2 C0.898,0.284,0.933,0.264,0.972,0.325 C1,0.425,0.998,0.563,0.99,0.594 C0.976,0.644,0.961,0.701,0.914,0.737 C0.847,0.789,0.793,0.741,0.715,0.787 C0.649,0.826,0.664,0.875,0.6,0.935 C0.507,1,0.339,1,0.273,0.979 C0.211,0.911,0.274,0.792,0.205,0.733 C0.154,0.69,0.099,0.737,0.049,0.69'>
          </path>
        </clipPath>
      </defs>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" height="0" width="0">
      <path id="path2" class="cls-1" d="M 50 100 A 50 50 0 1 1 200 100 A 50 50 0 1 1 50 100 Z"/>
    </svg>
    <contact-form-modal :is-modal-visible.sync="isModalVisible" v-if="isModalVisible">
    </contact-form-modal>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';
import ContactFormModal from "../components/ContactFormModal";

const MAX_ANIMATION_LOOP_COUNT = 5;
const initHeadingSectionAnimation = () => {
  let timeout;
  let animation = anime({
    targets: '#svgPath path',
    d: [
      {value: 'M0.049,0.69 C0,0.643,0.001,0.545,0.02,0.481 C0.04,0.413,0.074,0.401,0.143,0.316 C0.268,0.165,0.238,0.111,0.319,0.059 C0.41,0,0.528,0.016,0.604,0.051 C0.678,0.086,0.668,0.12,0.781,0.2 C0.898,0.284,0.933,0.264,0.972,0.325 C1,0.425,0.998,0.563,0.99,0.594 C0.976,0.644,0.961,0.701,0.914,0.737 C0.847,0.789,0.793,0.741,0.715,0.787 C0.649,0.826,0.664,0.875,0.6,0.935 C0.507,1,0.339,1,0.273,0.979 C0.211,0.911,0.274,0.792,0.205,0.733 C0.154,0.69,0.099,0.737,0.049,0.69'},
      {value: 'M0.129,0.651 C0.102,0.567,0.06,0.57,0.036,0.499 C0,0.396,0.039,0.241,0.129,0.182 C0.217,0.124,0.277,0.208,0.434,0.166 C0.553,0.134,0.552,0.076,0.678,0.045 C0.732,0.032,0.864,0,0.949,0.077 C1,0.154,1,0.302,1,0.35 C1,0.458,0.974,0.471,0.978,0.57 C0.983,0.676,1,0.692,1,0.771 C1,0.855,0.946,0.949,0.869,0.964 C0.77,0.984,0.736,0.858,0.622,0.857 C0.482,0.856,0.438,1,0.314,1 C0.237,1,0.17,0.933,0.147,0.862 C0.12,0.78,0.16,0.744,0.129,0.651'},
      {value: 'M0.049,0.69 C0,0.643,0.001,0.545,0.02,0.481 C0.04,0.413,0.074,0.401,0.143,0.316 C0.268,0.165,0.238,0.111,0.319,0.059 C0.41,0,0.528,0.016,0.604,0.051 C0.678,0.086,0.668,0.12,0.781,0.2 C0.898,0.284,0.933,0.264,0.972,0.325 C1,0.425,0.998,0.563,0.99,0.594 C0.976,0.644,0.961,0.701,0.914,0.737 C0.847,0.789,0.793,0.741,0.715,0.787 C0.649,0.826,0.664,0.875,0.6,0.935 C0.507,1,0.339,1,0.273,0.979 C0.211,0.911,0.274,0.792,0.205,0.733 C0.154,0.69,0.099,0.737,0.049,0.69'}
    ],
    easing: 'linear',
    duration: 1000,
    loop: true,
    autoplay: false,
    direction: 'alternate'
  });
  return event => {
    if(timeout !== undefined){
      clearTimeout(timeout);
      if(!anime.running.length){
        animation.play();
      }
    }
    timeout = setTimeout(function (){
      animation.pause();
    }, 100)
  }
}

const initIntroTextAnimation = () => {
  const textWrapper = document.querySelector('.ml2');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({loop: false})
      .add({
        targets: '.intro-text-1',
        scale: [4,1],
        opacity: [0,1],
        duration: 1000,
        easing: 'easeInExpo'
      })
      .add({
        targets: '.ml2 .letter',
        scale: [1.1,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 450,
        delay: (el, i) => 40*i
      },2000);
}

const initActivitiesSectionAnimation = () => {
  return anime.timeline({
    loop: MAX_ANIMATION_LOOP_COUNT,
    direction: 'alternate',
    autoplay: false,
  })
      .add({
        targets: '.phone-group',
        translateX: -100,
        duration: 1000,
        easing: 'easeInOutSine'
      })
      .add({
        targets: '.computer-group',
        translateX: 100,
        duration: 1000,
        easing: 'easeInOutSine'
      });
}

const initRocketSectionAnimation = () => {
  const path = anime.path("#path2");

  return anime.timeline({
    loop: MAX_ANIMATION_LOOP_COUNT,
    autoplay: false,
  })
      .add({
        targets: '.rocket-image circle',
        translateY: path("y"),
        translateX: path("x"),
        easing: "linear",
        loop: true,
        duration:4000
      });
}

const initLabSectionAnimation = () => {
  let loopCount = 0;
  const labImageCircles = document.querySelectorAll('.lab-circles');

  const animateCircles = (circles) => {
    anime.set(circles, {
      translateY: 100,
      opacity: 0
    });
    return anime.timeline({
      loop: false,
      autoplay: true,
      begin: function(anim) {
          if(loopCount < MAX_ANIMATION_LOOP_COUNT) {
            setTimeout(() => {
              console.log('maan');
              const clones = Array.from(labImageCircles, node => node.cloneNode(true));
              const svg = labImageCircles.item(0).parentNode;
              svg.append(...clones);
              loopCount++;
              animateCircles(clones);
            }, 1500)
          }
      }
    })
        .add({
          targets: circles,
          translateY: -100,
          duration: 3000,
          easing: 'easeInOutSine'
        })
        .add({
          targets: circles,
          opacity: [1,0],
          duration: 500,
          easing: 'easeInOutSine',
        }, 2500);
  }

  return animateCircles(labImageCircles);
}
export default {
  components: {
    ContactFormModal
  },
  metaInfo: {
    title: 'Home'
  },
  data(){
    return {
      isModalVisible: false
    }
  },
  mounted(){
    initIntroTextAnimation();
    document.querySelector('.heading-area').addEventListener('mousemove', initHeadingSectionAnimation());

    const animators = new Map([
        ['desktop-img', initActivitiesSectionAnimation()],
        ['lab-image', initLabSectionAnimation()],
        ['rocket-image', initRocketSectionAnimation()],
    ])
    const activitiesSection = document.querySelectorAll('.feature-img');
    const io = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            let animator = animators.get(entry.target.dataset['animator']);
            if(entry.intersectionRatio == 1 && entry.isIntersecting){
              animator.play();
              console.log('playing', entry.target.dataset['animator'])
            } else {
              console.log('paused', entry.target.dataset['animator'])
              animator.pause();
            }
          });
        },
        {
          threshold: [0, 1.0]
        }
    );
// Start observing an element
    activitiesSection.forEach(section => io.observe(section));
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    addEventListeners() {
      document.querySelector('.send-email-form').addEventListener('submit', initSendEmail());
    }
  }
}
</script>

<style lang="scss">

.ml2 {
  //font-weight: 900;
  //font-size: 3.5em;
}

.ml2 .letter {
  display: inline-block;
  line-height: 1em;
}

.default-gradient {
  @apply bg-gradient-to-r from-rose-400 to-orange-300;
}

.home-links a {
  margin-right: 1rem;
}

.my-image {
  clip-path: url(#svgPath);
  //transition-property: clip-path;
  //transition-duration: 5s;
  //transition-timing-function: ease-in-out;
  //transition-delay: 3s;
}

//.my-image:hover {
//  clip-path: url(#svgPath);
//}
.feature-img-container {
  @apply mb-4;
}

.feature-img {
  @apply mx-auto;
  width: 200px;
  height: auto;
}

.feedback-messages-container {
  top: -80px;
}

.form-feedback.success .success-message,
.form-feedback.success .success-sign {
  display: block;
}
.form-feedback.error .error-message,
.form-feedback.error .error-sign {
  display: block;
}
.success-message-svg {
  fill: white;
}

.envelope-result {
}
</style>
