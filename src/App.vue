<template>
  <main-layout>
  <transition name="fade">
  <router-view />
  </transition>
  </main-layout>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>

import MainLayout from '~/layouts/Default.vue'

export default {
  components: {
    MainLayout
  },
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription,
        }
      ]
    }
  }
}
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease-in-out;
  }
  .fade-enter-active,
  .fade-leave-active {
    opacity: 0;
  }
</style>
