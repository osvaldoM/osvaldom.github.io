<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hi, I'm Osvaldo</h1>

    <p>
      A software developer with focus on everything that runs on a browser, from CSS to web workers. I love making beatiful designs and seasmless interactions come to life in the form of web pages.
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

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
