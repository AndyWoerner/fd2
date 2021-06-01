<template>
  <div>
    <div class="group relative overflow-hidden">
      <img class="object-cover" :src="require(`~/assets/images/${member.image}`)">
      <div class="absolute top-0 -right-10 transform transition duration-300 ease-in-out group-hover:-translate-x-10">
        <div class="flex flex-col">
          <SocialMediaBadge v-for="badge in member.socialMedia" :key="badge.index" :badge="badge" />
        </div>
      </div>
    </div>
    <h3 class="mt-6 font-Rubik text-25px">
      {{ member.name }}
    </h3>
    <p class="text-15px text-lightGray">
      {{ member.role }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    member: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  #member{
    background-image: url("~assets/images/team_niko.webp");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
