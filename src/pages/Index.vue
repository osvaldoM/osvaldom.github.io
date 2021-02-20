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
    <div class="flex -mx-3">
      <div class="mx-3">
        <div class="img-container">
          <img class="max-w-full" svg-inline src="~/assets/svg/undraw_progressive.svg" alt="responsive web app icon" width="200px" height="100%"/>
        </div>
        <h3 class="h3">Responsive web applications</h3>
        <p>I build progressive web applications that adapt to both desktop and mobile devices.
          I also strive to use the latest web capabilities such as web bluetooth, offline support and more to bring the power of native apps into the web</p>
      </div>
      <div class="mx-3">
        <div class="img-container">
          <img class="max-w-full" svg-inline src="~/assets/svg/undraw_To_the_stars_qhyy.svg" alt="responsive web app icon" width="200px" height="100%" />
        </div>
        <h3 class="h3">Fast by default</h3>
        <p>A build web applications that adapt to both desktop and mobile devices.
          I also strive to use the latest web capabilities such as web bluetooth, offline support and more to bring the power of native apps into the web</p>
      </div>
      <div class="mx-3">
        <div class="img-container">
          <img class="max-w-full" svg-inline src="~/assets/svg/undraw_To_the_stars_qhyy.svg" alt="responsive web app icon" width="200px" height="100%"/>
        </div>
        <h3 class="h3">Responsive web applications</h3>
        <p>A build web applications that adapt to both desktop and mobile devices.
          I also strive to use the latest web capabilities such as web bluetooth, offline support and more to bring the power of native apps into the web</p>
      </div>

    </div>


    <svg height="0" width="0" viewBox="0 0 16 16">
      <defs>
        <clipPath clipPathUnits="objectBoundingBox" id="svgPath" transform="scale(0.0625, 0.0625)">
          <path d='M0,0.8v9c0,0.4,0.3,1,0.8,1.3l6.5,4.4c0.4,0.3,1.1,0.3,1.5,0l6.5-4.4c0.4-0.3,0.8-0.9,0.8-1.3v-9C16,0.3,15.5,0,14.9,0H1.1 C0.5,0,0,0.3,0,0.8L0,0.8z'></path>
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
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
}
</style>
