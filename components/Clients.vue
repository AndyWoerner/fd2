<template>
  <section id="clients" class="container mx-auto pb-32">
    <h2 class="text-center font-Rubik text-70px">
      Our clients  😍
    </h2>
    <div class="grid grid-cols-4 mt-10 gap-10">
      <Client v-for="client in clients" :key="client.id" :client="client" />
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    clients () {
      return this.$store.state.clients
    }
  }
}
</script>

<style scoped>
</style>
