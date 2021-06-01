<template>
  <a :href="badge.link" class="flex items-center justify-center w-10 h-9 bg-white hover:bg-black hover:text-white transition" target="_blank">
    <fa v-if="badge.type == 'INSTAGRAM'" :icon="['fab','instagram']" />
    <fa v-else-if="badge.type == 'FACEBOOK'" :icon="['fab','facebook-f']" />
    <fa v-else-if="badge.type == 'TWITTER'" :icon="['fab','twitter']" />
  </a>
</template>

<script>
export default {
  props: {
    badge: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
