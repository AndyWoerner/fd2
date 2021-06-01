<template>
  <section id="footer" class="container relative py-24 mx-auto overflow-hidden">
    <nuxt-link to="/">
      <img class="w-64 mx-auto" src="~/assets/images/logo_fd_black.png" alt="Frozen Donkey Logo">
    </nuxt-link>
    <ul class="flex max-w-screen-sm mx-auto mt-16 font-bold text-15px justify-evenly">
      <li class="transition duration-200 transform hover:text-secondary hover:scale-110">
        <nuxt-link v-scroll-to="{el: '#about'}" :to="{ path: '/',hash:'#about'}">
          About
        </nuxt-link>
      </li>
      <li class="transition duration-200 transform hover:text-secondary hover:scale-110">
        <nuxt-link v-scroll-to="{el: '#services'}" :to="{ path: '/',hash:'#services'}">
          Services
        </nuxt-link>
      </li>
      <li class="transition duration-200 transform hover:text-secondary hover:scale-110">
        <nuxt-link v-scroll-to="{el: '#projects'}" :to="{ path: '/',hash:'#projects'}">
          Projects
        </nuxt-link>
      </li>
      <li class="transition duration-200 transform hover:text-secondary hover:scale-110">
        <nuxt-link v-scroll-to="{el: '#team'}" :to="{ path: '/',hash:'#team'}">
          Team
        </nuxt-link>
      </li>
      <li class="transition duration-200 transform hover:text-secondary hover:scale-110">
        <nuxt-link v-scroll-to="{el: '#contact'}" :to="{ path: '/',hash:'#contact'}">
          Contact
        </nuxt-link>
      </li>
    </ul>
    <ul class="relative z-10 flex justify-center mt-16">
      <li class="mx-4 transition duration-200 transform hover:text-primary hover:scale-125">
        <a href="http://www.facebook.com/frozendonkey" target="_blank">
          <fa :icon="['fab','facebook-f']" />
        </a>
      </li>
      <li class="mx-4 transition duration-200 transform hover:text-primary hover:scale-125">
        <a href="http://www.twitter.com/frozendonkey" target="_blank">
          <fa :icon="['fab','twitter']" />
        </a>
      </li>
      <li class="mx-4 transition duration-200 transform hover:text-primary hover:scale-125">
        <a href="http://www.instagram.com/frozendonkey" target="_blank">
          <fa :icon="['fab','instagram']" />
        </a>
      </li>
    </ul>
    <ul class="relative z-10 flex justify-center mt-2 text-sm text-center text-lightGray">
      <li class="px-4">
        © 2021 Frozen Donkey
      </li>
      <li class="px-4 hover:text-black">
        <nuxt-link to="/imprint">
          Impressum
        </nuxt-link>
      </li>
      <li class="px-4 hover:text-black">
        <nuxt-link to="/privacy">
          Datenschutz
        </nuxt-link>
      </li>
    </ul>
    <div class="absolute bottom-[-155px] left-0 right-0">
      <h1 class="text-center uppercase text-heading font-Rubik text-gray">
        Donkey
      </h1>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
