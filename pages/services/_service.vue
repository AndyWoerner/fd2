<template>
  <div class="">
    <Nav :color="'black'" />
    <div v-if="service" class="container py-24 mx-auto">
      <div class="flex">
        <div class="grid w-1/4 max-w-2xl grid-cols-1 gap-8">
          <img v-for="image in service.images" :key="image.index" :src="require(`~/assets/images/${image.file}`)" :alt="image.alt">
        </div>
        <div class="w-3/4 ml-24 text-15px">
          <h2 class="max-w-3xl leading-tight font-Rubik text-70px">
            {{ service.title }}
          </h2>
          <p class="mt-8 text-base leading-relaxed format text-darkGray" v-html="service.description" />
          <nuxt-link :to="{ path: '/',hash:'#contact'}" class="mt-10 text-white btn bg-primary hover:bg-secondary hover:text-black">
            Contact
          </nuxt-link>
        </div>
      </div>
    </div>
    <div v-else class="min-h-full">
      Page not found
    </div>
    <FooterDark />
  </div>
</template>

<script>
export default {
  computed: {
    service () {
      return this.$store.getters.getServiceByID(this.$route.params.service)
    }
  }
}
</script>

<style>
.format p {
  margin-bottom: 20px;
}
</style>
