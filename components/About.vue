<template>
  <section id="about" class="relative z-20 pb-10 -mt-40">
    <div class="container mx-auto">
      <div class="flex">
        <div class="w-1/2 mt-20">
          <h2 class="font-Rubik text-70px">
            About us
          </h2>
          <p class="mt-8 leading-relaxed font-Inter text-darkGray">
            A different way of thinking; a different way of doing things. Have a
            problem? Awesome! We are a group of cool, calm & composed German
            Engineers & Designers that love to solve problems. Our core
            competencies are design, development, & hardware & software
            prototyping. Get in touch, we can help you with any business need
            you have.
          </p>
          <div class="flex mt-4">
            <div class="flex items-center">
              <span class="font-Rubik text-70px text-primary">
                <ICountUp
                  :delay="200"
                  :endVal="stats.experience"
                />
              </span>
              <span class="ml-2 font-bold">
                Years of <br>
                experience
              </span>
            </div>
            <div class="flex items-center ml-4">
              <span class="font-Rubik text-70px text-secondary">
                <ICountUp
                  :delay="500"
                  :endVal="stats.happyClients"
                  :options="options"
                />
              </span>
              <span class="ml-2 font-bold">
                Happy <br>
                clients
              </span>
            </div>
          </div>
          <nuxt-link :to="{ path: '/',hash:'#contact'}" class="mt-4 text-white btn bg-primary hover:bg-secondary hover:text-black">
            Contact us
          </nuxt-link>
        </div>
        <div class="w-1/2">
          <img
            class="absolute z-0 max-w-xl ml-40 -mt-20"
            src="~/assets/images/donkeys.webp"
            alt=""
          >
          <img
            class="relative z-10 mt-20"
            src="~/assets/images/team.webp"
            alt="Frozen Donkey Team"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ICountUp from 'vue-countup-v2'

export default {
  components: {
    ICountUp
  },
  data () {
    return {
      // CountUp JS
      options: {
        useEasing: true,
        useGrouping: true,
        duration: 2
      }
    }
  },
  computed: {
    stats () {
      return this.$store.state.stats
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
