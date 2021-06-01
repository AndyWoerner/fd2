<template>
  <section id="nav" class="fixed top-0 left-0 right-0 z-50 py-6 transition duration-700 text-15px opacity-95" :class="{'bg-primary': scrolled}">
    <div class="container mx-auto">
      <div class="flex items-center justify-between" :class="color == 'white' ? 'text-white' : ''">
        <nuxt-link v-scroll-to="{ el: '#hero' }" to="/#">
          <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="129"
            height="32"
            fill="none"
            viewBox="0 0 129 32"
          >
            <g clip-path="url(#clip0)">
              <path d="M49.606 17.005c0 4.606-3.156 8.346-8.357 8.346-5.202 0-8.323-3.74-8.323-8.346 0-4.572 3.19-8.347 8.288-8.347 5.098 0 8.392 3.775 8.392 8.347zm-12.71 0c0 2.441 1.457 4.71 4.353 4.71 2.895 0 4.352-2.269 4.352-4.71 0-2.407-1.682-4.745-4.352-4.745-2.861.017-4.352 2.338-4.352 4.745zM66.407 24.987v-8.363c0-2.442-1.335-4.277-3.866-4.277-2.445 0-4.092 2.043-4.092 4.484v8.174h-3.936V8.953h3.537l.26 2.181c1.63-1.593 3.242-2.406 5.271-2.406 3.763 0 6.797 2.822 6.797 7.861v8.416h-3.97v-.018zM79.065.19v15.221l5.392-6.424h4.75v.225l-6.536 7.307 7.438 8.174v.294h-4.785l-6.26-7.238v7.238h-3.97V.19h3.97zM96.022 18.407c.26 1.974 1.976 3.411 4.785 3.411 1.457 0 3.381-.554 4.283-1.49l2.531 2.494c-1.682 1.75-4.456 2.598-6.883 2.598-5.531 0-8.808-3.412-8.808-8.537 0-4.866 3.311-8.381 8.513-8.381 5.358 0 8.704 3.307 8.097 9.905H96.022zm8.721-3.29c-.26-2.078-1.89-3.117-4.161-3.117-2.15 0-3.901 1.039-4.49 3.117h8.651zM129 8.987l-9.779 22.684h-4.352l2.982-6.944-6.398-15.74h4.612l2.445 6.909 1.526 4.52L121.7 16l2.931-7.013H129zM14.894 26.251C7.49 26.372 0 21.871 0 11.62V.14h29.285v11.498c0 10.026-7.143 14.493-14.391 14.614zM5.306 5.611v6.008c0 6.65 4.855 9.282 9.623 9.143 4.56-.121 9.12-2.805 9.12-9.143V5.611H5.306z" />
              <path d="M10.074 24.311H7.04V32h3.034V24.31zM16.16 24.311h-3.035V32h3.035V24.31zM22.246 24.311H19.21V32h3.035V24.31zM25.644 31.723v-3.03h87.283l-1.214 3.03h-86.07zM32.788 6.459V.139h4.56v1.143h-3.364v1.731h3.173v1.108h-3.173V6.46h-1.197zM44.422 6.459H43l-1.855-2.113H40V6.46h-1.196V.12c1.006 0 2.011.017 3.017.017 1.491.018 2.289 1.005 2.289 2.096 0 .865-.4 1.749-1.595 1.991l1.924 2.164v.07h-.017zm-4.404-5.212v2.026h1.82c.763 0 1.093-.503 1.093-1.005 0-.502-.33-1.004-1.093-1.004h-1.82v-.017zM51.79 3.325c-.017 1.645-1.022 3.272-3.259 3.272s-3.26-1.593-3.26-3.272c0-1.68 1.075-3.325 3.26-3.325 2.185 0 3.277 1.68 3.26 3.325zm-5.34.034c.035 1.04.59 2.147 2.081 2.147s2.063-1.125 2.08-2.164c.018-1.074-.571-2.268-2.08-2.268-1.508 0-2.115 1.212-2.08 2.285zM52.814.121h4.872v.572l-3.294 4.64h3.294V6.46h-4.959v-.693l3.208-4.52h-3.139V.122h.018zM63.772 6.459H59.02V.12h4.75v1.16h-3.554v1.455h3.433v1.108h-3.433v1.437h3.555V6.46zM69.684.121h1.197V6.46h-.746v.017L66.806 2.2v4.277H65.61V.121h.97l3.104 3.93V.122z" />
            </g>
            <defs>
              <clipPath id="clip0">
                <path d="M0 0H129V32H0z" />
              </clipPath>
            </defs>
          </svg>
        </nuxt-link>

        <ul
          class="flex font-bold"
        >
          <li
            class="mx-6 transition duration-200 transform hover:text-secondary hover:scale-110"
          >
            <nuxt-link
              v-scroll-to="{ el: '#about' }"
              :to="{ path: '/', hash: '#about' }"
            >
              About
            </nuxt-link>
          </li>
          <li
            class="mx-6 transition duration-200 transform hover:text-secondary hover:scale-110"
          >
            <nuxt-link
              v-scroll-to="{ el: '#services' }"
              :to="{ path: '/', hash: '#services' }"
            >
              Services
            </nuxt-link>
          </li>
          <li
            class="mx-6 transition duration-200 transform hover:text-secondary hover:scale-110"
          >
            <nuxt-link
              v-scroll-to="{ el: '#projects' }"
              :to="{ path: '/', hash: '#projects' }"
            >
              Projects
            </nuxt-link>
          </li>
          <li
            class="mx-6 transition duration-200 transform hover:text-secondary hover:scale-110"
          >
            <nuxt-link
              v-scroll-to="{ el: '#team' }"
              :to="{ path: '/', hash: '#team' }"
            >
              Team
            </nuxt-link>
          </li>
          <li
            class="mx-6 transition duration-200 transform hover:text-secondary hover:scale-110"
          >
            <nuxt-link
              v-scroll-to="{ el: '#contact' }"
              :to="{ path: '/', hash: '#contact' }"
            >
              Contact
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      scrolled: false
    }
  },
  mounted () {
    document.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY > 80
    }
  }
}
</script>

<style scoped>
</style>
