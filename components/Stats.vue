<template>
  <section id="stats" class="py-16 mb-40 bg-black">
    <div class="container flex justify-between px-10 mx-auto">
      <div class="relative flex items-center">
        <img
          class="absolute max-w-xs -top-80 left-36"
          src="~/assets/images/donkeys.webp"
          alt=""
        >
        <span
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-delay="100"
          data-aos-once="true"
          class="font-Rubik text-60px text-secondary"
        >
          {{ stats.experience }}
        </span>
        <span
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-delay="100"
          data-aos-once="true"
          class="ml-2 font-bold text-white"
        >
          Years of <br>
          experience
        </span>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-delay="300"
        data-aos-once="true"
        class="flex items-center"
      >
        <span class="font-Rubik text-60px text-secondary">{{ stats.happyClients }}</span>
        <span class="ml-2 font-bold text-white">
          Happy <br>
          customers
        </span>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-delay="500"
        data-aos-once="true"
        class="flex items-center"
      >
        <span class="font-Rubik text-60px text-secondary">{{ stats.projectsCompleted }}</span>
        <span class="ml-2 font-bold text-white">
          Projects <br>
          completed
        </span>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-delay="700"
        data-aos-once="true"
        class="flex items-center"
      >
        <span class="font-Rubik text-60px text-secondary">{{ stats.locations }}</span>
        <span class="ml-2 font-bold text-white">
          Company <br>
          Locations
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    stats () {
      return this.$store.state.stats
    }
  }
}
</script>

<style scoped>
</style>
