<template>
  <a :href="client.link" target="_blank">
    <img :src="require(`~/assets/images/${client.logo}`)" alt="Company Logo" class="transition duration-200 transform hover:scale-110 filter grayscale hover:grayscale-0">
  </a>
</template>

<script>
export default {
  props: {
    client: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
