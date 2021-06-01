<template>
  <section id="services" class="pb-52">
    <div class="container px-12 mx-auto">
      <h1 class="text-center uppercase text-heading font-Rubik text-gray">
        Services
      </h1>
      <div class="grid grid-cols-3 gap-10">
        <div class="relative transition duration-300 transform bg-black hover:rotate-3 hover:scale-105">
          <nuxt-link to="/services/1">
            <img src="~/assets/images/illustration-3.webp" alt="" class="absolute z-0 ml-4 w-36">
            <div class="relative z-10 py-10 pl-16 pr-10 text-white">
              <h3 class="font-Rubik text-30px">
                WEB & APP <br>DEVELOPMENT 🔥
              </h3>
              <p class="mt-2 leading-relaxed text-15px">
                The web is our bread and butter. From small websites to auto-scaling
                server pools in the cloud; anything that runs with PHP, MySQL,
                HTML5, CSS or JavaScript, we can build.
              </p>
            </div>
          </nuxt-link>
        </div>
        <div class="relative transition duration-300 transform bg-secondary hover:-rotate-3 hover:scale-105">
          <nuxt-link to="/services/2">
            <img src="~/assets/images/illustration-1.webp" alt="" class="absolute right-0 z-0 w-56">
            <div class="relative z-10 py-10 pl-16 pr-10">
              <h3 class="font-Rubik text-30px">
                UI/UX DESIGN 🦄
              </h3>
              <p class="mt-2 leading-relaxed text-15px">
                We believe good design requires detailed craftsmanship – that’s why
                we put in the work until you think it’s perfect. Need an awesome
                design for your app, website or game? Drop us a line and we will
                work with you to figure it out.
              </p>
            </div>
          </nuxt-link>
        </div>
        <div class="relative transition duration-300 transform bg-primary hover:rotate-3 hover:scale-105">
          <nuxt-link to="/services/3">
            <img src="~/assets/images/illustration-2.webp" alt="" class="absolute right-0 z-0 w-36">
            <div class="relative z-10 py-10 pl-16 pr-10 text-white">
              <h3 class="font-Rubik text-30px">
                ENGINEERING 🥑
              </h3>
              <p class="mt-2 leading-relaxed text-15px">
                Do you have a cool idea for a gadget? Let’s build it together! With
                just the specs, we will create a hardware development plan and work
                with you to build it. With enough time, we can ^ Rocket Ships, so
                talk to us about your idea!
              </p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
</style>
