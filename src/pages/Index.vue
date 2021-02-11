<template>
  <Layout>

    <div class="flex items-start">
      <div>
        <p class="text-xl mb-2">Hi, my name is Osvaldo</p>

        <p class="text-2xl font-semibold">
          I'm a software developer with focus on everything that runs on a browser, from CSS to web workers. I love making beatiful designs and
          seasmless interactions come to life in the form of web pages.
          <br/>
          I obsess over writing clean JavaScript that works.

          I'm also enthusiastic about cloud computing, open source and developer communities.
        </p>
        <p>If you'd like to connect with me or see some of the work I've been doing, please feel free to do so at the links below:</p>

        <p class="home-links">
          <a href="https://github.com/osvaldoM" target="_blank" rel="noopener">GitHub</a>
          <a href="https://twitter.com/impurefunction" target="_blank" rel="noopener">Twitter</a>
          <a href="https://stackoverflow.com/users/story/4043487" target="_blank" rel="noopener">Stackoverflow</a>
        </p>
      </div>
      <div class="bg-gradient-to-r from-rose-400 to-orange-300 px-2 rounded-2xl">
        <!-- Learn how to use images here: https://gridsome.org/docs/images -->
        <div class="">
          <g-image class="my-image" alt="Example image" src="~/favicon.png"/>
        </div>
      </div>
    </div>
    <svg height="0" width="0">
      <defs>
        <clipPath clipPathUnits="objectBoundingBox" id="svgPath">
          <path d='M0,0.8v9c0,0.4,0.3,1,0.8,1.3l6.5,4.4c0.4,0.3,1.1,0.3,1.5,0l6.5-4.4c0.4-0.3,0.8-0.9,0.8-1.3v-9C16,0.3,15.5,0,14.9,0H1.1 C0.5,0,0,0.3,0,0.8L0,0.8z'></path>
        </clipPath>
      </defs>
    </svg>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style lang="scss">
.home-links a {
  margin-right: 1rem;
}

.my-image {
  clip-path: url(#svgPath);
}
</style>
