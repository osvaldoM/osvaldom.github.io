<template>
  <div class="bg-gradient-to-r from-rose-400 to-orange-300 py-10">
  <div class="container mx-auto bg-white rounded-3xl px-24 py-5 shadow-2xl">
    <header class="header flex justify-between items-center mb-6">
      <strong>
        <g-link to="/">
<!--          {{ $static.metadata.siteName }}-->
          <g-image src="~/assets/images/osvaldo.png" width="50"/>
        </g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link font-semibold" to="/">Home</g-link>
        <g-link class="nav__link font-semibold" to="/portfolio/">Portfolio</g-link>
        <g-link class="nav__link font-semibold" to="/blog/">Blog</g-link>
      </nav>
    </header>

    <main>
      <slot/>
    </main>

    <footer class="mt-80">
      <ul class="home-links flex">
        <li><a href="https://github.com/osvaldoM" target="_blank" rel="noopener">GitHub</a></li>
        <li><a href="https://twitter.com/impurefunction" target="_blank" rel="noopener">Twitter</a></li>
        <li><a href="https://stackoverflow.com/users/story/4043487" target="_blank" rel="noopener">Stackoverflow</a></li>
        <li><a href="https://docs.google.com/document/d/1F8QXk3HaH0zGRcebRWAYwowFziFeIJcy7rnZuvNBXp8/edit?usp=sharing" target="_blank" rel="noopener">Resume</a></li>
        <li class="ml-auto"><span class=""> copyright@2021</span></li>
      </ul>
    </footer>

  </div>
  </div>
</template>

<static-query>
query {
metadata {
siteName
}
}
</static-query>

<style lang="scss">
/*@font-face {*/
/*  font-family: Northwell;*/
/*  src: url('../assets/Northwell.otf');*/
/*  font-weight: normal;*/
/*}*/
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.header {
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
.nav__link.active--exact {
  @apply rounded-2xl bg-rose-400 py-2 px-4 text-white
}
</style>
