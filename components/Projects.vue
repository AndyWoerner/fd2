<template>
  <section id="projects" class="container px-20 pb-40 mx-auto">
    <h2 class="text-center font-Rubik text-70px">
      Latest Projects
    </h2>
    <div class="flex justify-center">
      <div class="grid grid-flow-col grid-rows-2 gap-10 mt-16 min-w-max">
        <div id="tonies" class="col-span-1 h-72 kachel">
          <nuxt-link to="/projects/1">
            <div
              class="flex flex-col items-center justify-center w-full h-full transition duration-200 ease-in-out opacity-0 bg-primary hover:opacity-90"
            >
              <h3 class="text-2xl text-white uppercase font-Rubik">
                {{ projects[0].client }}
              </h3>
              <p class="mt-2 text-white text-15px">
                {{ projects[0].services.join(', ') }}
              </p>
            </div>
          </nuxt-link>
        </div>
        <div id="schmidt" class="col-span-1 kachel">
          <nuxt-link to="/projects/2">
            <div
              class="flex flex-col items-center justify-center w-full h-full transition duration-200 ease-in-out opacity-0 bg-primary hover:opacity-90"
            >
              <h3 class="text-2xl text-white uppercase font-Rubik">
                {{ projects[1].client }}
              </h3>
              <p class="mt-2 text-white text-15px">
                {{ projects[1].services.join(', ') }}
              </p>
            </div>
          </nuxt-link>
        </div>
        <div id="ubisoft" class="row-span-2 kachel">
          <nuxt-link to="/projects/3">
            <div
              class="flex flex-col items-center justify-center w-full h-full transition duration-200 ease-in-out opacity-0 bg-primary hover:opacity-90"
            >
              <h3 class="text-2xl text-white uppercase font-Rubik">
                {{ projects[2].client }}
              </h3>
              <p class="mt-2 text-white text-15px">
                {{ projects[2].services.join(', ') }}
              </p>
            </div>
          </nuxt-link>
        </div>
        <div id="drift" class="col-span-1 kachel">
          <nuxt-link to="/projects/4">
            <div
              class="flex flex-col items-center justify-center w-full h-full transition duration-200 ease-in-out opacity-0 bg-primary hover:opacity-90"
            >
              <h3 class="text-2xl text-white uppercase font-Rubik">
                {{ projects[3].client }}
              </h3>
              <p class="mt-2 text-white text-15px">
                {{ projects[3].services.join(', ') }}
              </p>
            </div>
          </nuxt-link>
        </div>
        <div id="kurts" class="col-span-1 kachel">
          <nuxt-link to="/projects/5">
            <div
              class="flex flex-col items-center justify-center w-full h-full transition duration-200 ease-in-out opacity-0 bg-primary hover:opacity-90"
            >
              <h3 class="text-2xl text-white uppercase font-Rubik">
                {{ projects[4].client }}
              </h3>
              <p class="mt-2 text-white text-15px">
                {{ projects[4].services.join(', ') }}
              </p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    projects () {
      return this.$store.state.projects
    }
  }
}
</script>

<style scoped>
.kachel {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 370px;
  /* height: 285px; */
}
#tonies {
  background-image: url("~assets/images/proj_tonies.jpg");
}
#schmidt {
  background-image: url("~assets/images/proj_schmidt.jpg");
}
#ubisoft {
  background-image: url("~assets/images/proj_ubisoft.jpg");
}
#drift {
  background-image: url("~assets/images/proj_drift.jpg");
}
#kurts {
  background-image: url("~assets/images/proj_kurts.jpg");
}
</style>
