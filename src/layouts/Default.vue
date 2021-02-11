<template>
  <div class="bg-gradient-to-r from-rose-400 to-orange-300 py-10">
  <div class="container mx-auto bg-white rounded-3xl px-24 py-5">
    <header class="header flex justify-between items-center mb-6">
      <strong>
        <g-link to="/">
<!--          {{ $static.metadata.siteName }}-->
          <g-image src="~/assets/images/osvaldo.png" width="50"/>
        </g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/portfolio/">Portfolio</g-link>
        <g-link class="nav__link" to="/blog/">Blog</g-link>
      </nav>
    </header>

    <main>
      <slot/>
    </main>

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

<style>
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
</style>
