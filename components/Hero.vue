<template>
  <section id="hero" class="bg-cover bg-hero">
    <div class="container pb-4 mx-auto pt-36">
      <h1
        class="font-bold leading-none text-center text-white uppercase font-Rubik text-hero"
      >
        hello! we are <br>
        FROZEN DONKEY
      </h1>
      <div class="flex justify-center mt-10">
        <nuxt-link :to="{ path: '/',hash:'#contact'}" class="mr-10 text-white bg-primary hover:bg-secondary hover:text-black btn">
          Contact us
        </nuxt-link>
        <nuxt-link :to="{ path: '/',hash:'services'}" class="bg-white btn hover:bg-secondary hover:text-black">
          Our Services
        </nuxt-link>
      </div>
    </div>
    <img class="relative w-full top-10" src="~assets/images/bg-element-white.png" alt="">
    <!-- Scroll to Top Button -->
    <nuxt-link
      v-scroll-to="{ el: '#hero' }"
      class="fixed z-50 w-16 h-16 transition duration-300 shadow-md bottom-10 right-10 bg-primary hover:opacity-95"
      to="/#"
      :class="[showToTop ? 'opacity-70' : 'opacity-0']"
    >
      <div class="flex items-center justify-center w-full h-full">
        <fa class="text-white fa-3x" :icon="['fas','arrow-up']" />
      </div>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  data () {
    return {
      showToTop: false
    }
  },
  mounted () {
    document.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      this.showToTop = window.scrollY > 900
    }
  }
}
</script>

<style scoped>
</style>
