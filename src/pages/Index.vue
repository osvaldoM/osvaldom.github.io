<template>
  <div>
    <section class="heading-area flex items-start mt-40">
      <div class=" flex-grow-0 mr-48">
        <p class="text-xl mb-2">Hi, my name is Osvaldo, </p>

        <p class="text-2xl font-semibold mb-6">
          I love making beautiful designs and seamless interactions come to life in the form of web pages.
          <br/>
        </p>
        <div>
          <button class="py-2 px-8 rounded font-bold shadow-lg border-orange-300 text-orange-300 border mr-5">My work</button>
          <button class="default-gradient py-2 px-8 text-white font-bold rounded shadow-lg" @click="showModal">Let's talk</button>
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
      <div class="flex -mx-3 items-baseline">
        <div class="mx-3 w-1/3">
          <div class="feature-img-container">
            <img alt="responsive web app icon" class="max-w-full feature-img" height="100%" width="200px" src="~/assets/svg/undraw_progressive.svg" svg-inline />
          </div>
          <h3 class="h3">Responsive rich web applications</h3>
          <p>I build progressive web applications that adapt to both desktop and mobile devices.
            I also strive to harness the latest web capabilities such as web bluetooth, offline support and more to bring the power of native apps
            into the web</p>
        </div>
        <div class="mx-3 w-1/3">
          <div class="feature-img-container">
            <img alt="responsive web app icon" class="max-w-full feature-img" height="100%" src="~/assets/svg/undraw_To_the_stars_qhyy.svg" svg-inline
                 width="200px"/>
          </div>
          <h3 class="h3">Fast by default</h3>
          <p>
            Most of the applications I have worked on, were targeted at folks with internet speeds slower than average and low-end devices, therefore
            I've developed an empathy and have tried to learn/use every common practise for making web applications fast.
          </p>
        </div>
        <div class="mx-3 w-1/3">
          <div class="feature-img-container">
            <img alt="responsive web app icon" class="max-w-full feature-img" height="100%" src="~/assets/svg/undraw_science_fqhl.svg" svg-inline width="200px"/>
          </div>
          <h3 class="h3">Exciting challenges</h3>
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
    <modal v-if="isModalVisible" @close="hideModal()" v-bind:on-mounted="addEventListeners">

      <section slot="body" class="">
        <div class="flex items-center">
          <div class="mr-20 flex flex-col self-stretch form-feedback">
            <img alt="responsive web app icon" class="max-w-full z-10 bg-white relative success-message-svg" height="100%"
                 src="~/assets/svg/undraw_Mail_sent_re_0ofv4.svg" svg-inline
                 width="300px"/>

            <div class="relative h-20 w-full feedback-messages-container">
              <p class="success-message absolute w-full text-green-600 font-bold text-center mb-0 py-2 rounded-lg top-0 hidden"> Message sent! </p>
              <p class="error-message absolute w-full text-red-600 font-bold text-center mb-0 py-2 rounded-lg top-0 hidden">
                Unable to send your message: <span class="error-message-details text-sm"></span>
              </p>
            </div>
          </div>
          <form class="send-email-form" method="post" style="max-width: 400px" v-on:submit="sendEmail">
            <h2 class="">Get in touch</h2>
            <div style="position: absolute; left: -5000px;">
              <input autocomplete="no" name="grandpas_beige_spotted_dishwasher" tabindex="-1" type="checkbox" value="1">
            </div>
            <input required autocomplete="name" class="w-full rounded-2xl bg-gray-200 px-4 py-2 mb-2" name="name" placeholder="Your name" type="text"/>
            <input required autocomplete="email" class="w-full rounded-2xl bg-gray-200 px-4 py-2 mb-2" name="email" placeholder="Your email address"
                   type="email">
            <textarea required class="w-full rounded-2xl bg-gray-200 px-4 py-2 mb-2" cols="5" name="message" rows="6">
            </textarea>
            <button class="text-center text-white font-bold w-full bg-rose-400 py-1.5 rounded-2xl" type="submit">Send</button>
          </form>
        </div>
      </section>
    </modal>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';
import modal from '~/components/Modal.vue'
import {checkFetchResponseStatus} from "../util/Util";

const initSendEmail = () => {
  const $feedbackMessagesContainer = document.querySelector('.feedback-messages-container');

  const tl = anime.timeline({
    autoplay: false,
    // easing: 'easeOutBounce',
    duration: 3000,
  })
  tl.add({
    targets: $feedbackMessagesContainer,
    translateY: 80,
  });
  tl.add({
    targets: '.envelope-result',
    translateY: -200,
  }, 0);
  return (event) => {
    tl.seek(0);
    event.preventDefault();
    event.stopImmediatePropagation();
    const $form = event.target;
    const $formFeedback = document.querySelector('.form-feedback');
    const formData = new FormData(event.target);

    fetch('https://app.99inbound.com/api/e/Jnn_X4c-', {
      // fetch('https://app.99inbound.com/api/e/dummytestcode', {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'omit',
      redirect: 'manual',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    }).then(checkFetchResponseStatus)
        .then(response => {
          $form.reset();
          $formFeedback.classList.add('success');
          $formFeedback.classList.remove('error');
          tl.play();
        }).catch(err => {
      $form.reset();
      $formFeedback.classList.add('error');
      $formFeedback.classList.remove('success');
      $formFeedback.querySelector('.error-message-details').textContent = err;
      tl.play();
    });
  }
}

export default {
  components: {
    modal
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
    const initHeadingAreaAnimation = () => {
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
            console.log('started mouse movement');
            animation.play();
          }
        }
        timeout = setTimeout(function (){
          animation.pause();
          console.log('ended mouse movement');
        }, 100)
      }
    }
    document.querySelector('.heading-area').addEventListener('mousemove', initHeadingAreaAnimation());
  },
  methods: {
    sendEmail(){},
    showModal() {
      this.isModalVisible = true;
    },
    hideModal() {
      this.isModalVisible = false;
    },
    addEventListeners() {
      document.querySelector('.send-email-form').addEventListener('submit', initSendEmail());
    }
  }
}
</script>

<style lang="scss">

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
