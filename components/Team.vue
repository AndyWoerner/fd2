<template>
  <section id="team" class="pb-52">
    <div class="container mx-auto px-12">
      <h1 class="uppercase text-heading text-center font-Rubik text-gray">
        Our Team
      </h1>
      <div class="flex justify-evenly">
        <div>
          <h3 class="font-Rubik text-70px leading-tight">
            Creative ✌ <br>
            Team
          </h3>
          <img
            class="max-w-md mt-32 xl:mt-10"
            src="@/assets/images/donkeys.webp"
          >
        </div>
        <div class="grid grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-20  max-w-3xl">
          <TeamMember v-for="member in team" :key="member.id" :member="member" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'team'
    ])
  }
}
</script>

<style scoped>
.teamPic{
    width: 200px;
    height: 300px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
#niko{
    background-image: url("~assets/images/team_niko.webp");
    /* background-image: url('~assets/images/proj_tonies.webp'); */
}
#torben{
    background-image: url("~assets/images/team_torben.webp");
}
#figge{
    background-image: url("~assets/images/team_figge.webp");
}
#sonja{
    background-image: url("~assets/images/team_sonja.webp");
}
#janina{
    background-image: url("~assets/images/team_janina.webp");
}
#andy{
    background-image: url("~assets/images/team_niko.webp");
}
</style>
