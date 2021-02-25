<template>
  <div>
    <div class="flex items-start mt-40">
      <div class=" flex-grow-0 mr-48">
        <p class="text-xl mb-2">Hi, my name is Osvaldo, </p>

        <p class="text-2xl font-semibold mb-6">
          I love making beautiful designs and seamless interactions come to life in the form of web pages.
          <br/>
        </p>
        <div>
          <button class="py-2 px-8 rounded font-bold shadow-lg border-orange-300 text-orange-300 border mr-5">My work</button> <button class="default-gradient py-2 px-8 text-white font-bold rounded shadow-lg">Let's talk</button>
        </div>
      </div>
      <div class="default-gradient px-2 rounded-2xl my-image flex-shrink-0 flex-grow-0 relative">
        <!-- Learn how to use images here: https://gridsome.org/docs/images -->
        <div class="">
          <g-image class="relative " alt="Example image" src="~/assets/images/osvaldo-no-bg.png" width="230px"/>
        </div>
      </div>
    </div>
    <h2 class="mb-4">What I do</h2>
    <div class="flex -mx-3 items-baseline">
      <div class="mx-3 w-1/3">
        <div class="img-container">
          <img class="max-w-full" svg-inline src="~/assets/svg/undraw_progressive.svg" alt="responsive web app icon" width="200px" height="100%"/>
        </div>
        <h3 class="h3">Responsive rich web applications</h3>
        <p>I build progressive web applications that adapt to both desktop and mobile devices.
          I also strive to harness the latest web capabilities such as web bluetooth, offline support and more to bring the power of native apps into the web</p>
      </div>
      <div class="mx-3 w-1/3">
        <div class="img-container">
          <img class="max-w-full" svg-inline src="~/assets/svg/undraw_To_the_stars_qhyy.svg" alt="responsive web app icon" width="200px" height="100%" />
        </div>
        <h3 class="h3">Fast by default</h3>
        <p>
            I perform web applications audits to find bottlenecks and opportunities for optimization. These audits take place at both the client/server side.
        </p>
      </div>
      <div class="mx-3 w-1/3">
        <div class="img-container">
          <img class="max-w-full" svg-inline src="~/assets/svg/undraw_To_the_stars_qhyy.svg" alt="responsive web app icon" width="200px" height="100%"/>
        </div>
        <h3 class="h3">Exciting challenges</h3>
        <p>I'm always open to build cool things with cool people.</p>
      </div>

    </div>


    <svg height="0" width="0">
      <defs>
        <clipPath clipPathUnits="objectBoundingBox" id="svgPath">
          <path d='M0.049,0.69 C0,0.643,0.001,0.545,0.02,0.481 C0.04,0.413,0.074,0.401,0.143,0.316 C0.268,0.165,0.238,0.111,0.319,0.059 C0.41,0,0.528,0.016,0.604,0.051 C0.678,0.086,0.668,0.12,0.781,0.2 C0.898,0.284,0.933,0.264,0.972,0.325 C1,0.425,0.998,0.563,0.99,0.594 C0.976,0.644,0.961,0.701,0.914,0.737 C0.847,0.789,0.793,0.741,0.715,0.787 C0.649,0.826,0.664,0.875,0.6,0.935 C0.507,1,0.339,1,0.273,0.979 C0.211,0.911,0.274,0.792,0.205,0.733 C0.154,0.69,0.099,0.737,0.049,0.69'>

          </path>
        </clipPath>
      </defs>
    </svg>
    <svg class="svg">
      <clipPath id="clip-path-2" clipPathUnits="objectBoundingBox">
        <path d="M0.129,0.651 C0.102,0.567,0.06,0.57,0.036,0.499 C0,0.396,0.039,0.241,0.129,0.182 C0.217,0.124,0.277,0.208,0.434,0.166 C0.553,0.134,0.552,0.076,0.678,0.045 C0.732,0.032,0.864,0,0.949,0.077 C1,0.154,1,0.302,1,0.35 C1,0.458,0.974,0.471,0.978,0.57 C0.983,0.676,1,0.692,1,0.771 C1,0.855,0.946,0.949,0.869,0.964 C0.77,0.984,0.736,0.858,0.622,0.857 C0.482,0.856,0.438,1,0.314,1 C0.237,1,0.17,0.933,0.147,0.862 C0.12,0.78,0.16,0.744,0.129,0.651">
        </path>
      </clipPath>
    </svg>

  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
  metaInfo: {
    title: 'Home'
  },
  mounted() {
    anime({
      targets: '#svgPath path',
      d: [
        { value: 'M0.049,0.69 C0,0.643,0.001,0.545,0.02,0.481 C0.04,0.413,0.074,0.401,0.143,0.316 C0.268,0.165,0.238,0.111,0.319,0.059 C0.41,0,0.528,0.016,0.604,0.051 C0.678,0.086,0.668,0.12,0.781,0.2 C0.898,0.284,0.933,0.264,0.972,0.325 C1,0.425,0.998,0.563,0.99,0.594 C0.976,0.644,0.961,0.701,0.914,0.737 C0.847,0.789,0.793,0.741,0.715,0.787 C0.649,0.826,0.664,0.875,0.6,0.935 C0.507,1,0.339,1,0.273,0.979 C0.211,0.911,0.274,0.792,0.205,0.733 C0.154,0.69,0.099,0.737,0.049,0.69' },
        { value: 'M0.129,0.651 C0.102,0.567,0.06,0.57,0.036,0.499 C0,0.396,0.039,0.241,0.129,0.182 C0.217,0.124,0.277,0.208,0.434,0.166 C0.553,0.134,0.552,0.076,0.678,0.045 C0.732,0.032,0.864,0,0.949,0.077 C1,0.154,1,0.302,1,0.35 C1,0.458,0.974,0.471,0.978,0.57 C0.983,0.676,1,0.692,1,0.771 C1,0.855,0.946,0.949,0.869,0.964 C0.77,0.984,0.736,0.858,0.622,0.857 C0.482,0.856,0.438,1,0.314,1 C0.237,1,0.17,0.933,0.147,0.862 C0.12,0.78,0.16,0.744,0.129,0.651' },
        { value: 'M0.049,0.69 C0,0.643,0.001,0.545,0.02,0.481 C0.04,0.413,0.074,0.401,0.143,0.316 C0.268,0.165,0.238,0.111,0.319,0.059 C0.41,0,0.528,0.016,0.604,0.051 C0.678,0.086,0.668,0.12,0.781,0.2 C0.898,0.284,0.933,0.264,0.972,0.325 C1,0.425,0.998,0.563,0.99,0.594 C0.976,0.644,0.961,0.701,0.914,0.737 C0.847,0.789,0.793,0.741,0.715,0.787 C0.649,0.826,0.664,0.875,0.6,0.935 C0.507,1,0.339,1,0.273,0.979 C0.211,0.911,0.274,0.792,0.205,0.733 C0.154,0.69,0.099,0.737,0.049,0.69' }
      ],
      easing: 'easeOutQuad',
      duration: 2000,
      loop: true
    });
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
.img-container {
  @apply mb-4;
}
</style>
