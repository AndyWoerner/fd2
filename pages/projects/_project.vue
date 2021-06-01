<template>
  <div class="">
    <Nav :color="'black'" />
    <div v-if="project" class="py-24 container mx-auto">
      <div class="flex">
        <div class="grid grid-cols-1 gap-8 max-w-2xl">
          <img v-for="image in project.images" :key="image.index" :src="require(`~/assets/images/${image.file}`)" :alt="image.alt">
        </div>
        <div class="ml-24 mt-24 w-1/2 text-15px">
          <h2 class="font-Rubik text-70px">
            {{ project.title }}
          </h2>
          <p class="mt-8 leading-relaxed text-base text-darkGray">
            {{ project.description }}
          </p>
          <p class="mt-4">
            <span class="font-bold">Date:</span> {{ project.date }}
          </p>
          <p class="mt-4">
            <span class="font-bold">Services:</span> {{ project.services.join(', ') }}
          </p>
          <p class="mt-4">
            <span class="font-bold">Client:</span> {{ project.client }}
          </p>
          <p class="mt-4">
            <span class="font-bold">Link:</span> <a :href="project.link" class="hover:underline text-primary" target="_blank">{{ project.link }}</a>
          </p>
        </div>
      </div>
    </div>
    <div v-else>
      Page not found
    </div>
    <FooterDark />
  </div>
</template>

<script>
export default {
  computed: {
    project () {
      return this.$store.getters.getProjectByID(this.$route.params.project)
    }
  }
}
</script>

<style scoped>
</style>
