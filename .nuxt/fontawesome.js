import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeLayers,
  FontAwesomeLayersText,
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  faArrowUp as freeFasFaArrowUp
} from '@fortawesome/free-solid-svg-icons'

import {
  faInstagram as freeFabFaInstagram,
  faFacebookF as freeFabFaFacebookF,
  faTwitter as freeFabFaTwitter
} from '@fortawesome/free-brands-svg-icons'

import {
  faInstagram as fortawesomefreebrandssvgicons_faInstagram,
  faFacebookF as fortawesomefreebrandssvgicons_faFacebookF,
  faTwitter as fortawesomefreebrandssvgicons_faTwitter
} from '@fortawesome/free-brands-svg-icons'

import {
  faArrowUp as fortawesomefreesolidsvgicons_faArrowUp
} from '@fortawesome/free-solid-svg-icons'

library.add(
  freeFasFaArrowUp,
  freeFabFaInstagram,
  freeFabFaFacebookF,
  freeFabFaTwitter,
  fortawesomefreebrandssvgicons_faInstagram,
  fortawesomefreebrandssvgicons_faFacebookF,
  fortawesomefreebrandssvgicons_faTwitter,
  fortawesomefreesolidsvgicons_faArrowUp
)

config.autoAddCss = false

Vue.component('fa', FontAwesomeIcon)
Vue.component('faLayers', FontAwesomeLayers)
Vue.component('faLayersText', FontAwesomeLayersText)
