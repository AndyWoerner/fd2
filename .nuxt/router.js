import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b3e625fc = () => interopDefault(import('../pages/imprint.vue' /* webpackChunkName: "pages/imprint" */))
const _55b1fd01 = () => interopDefault(import('../pages/privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _7d601c88 = () => interopDefault(import('../pages/projects/_project.vue' /* webpackChunkName: "pages/projects/_project" */))
const _43a964c0 = () => interopDefault(import('../pages/services/_service.vue' /* webpackChunkName: "pages/services/_service" */))
const _9858dcea = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/imprint",
    component: _b3e625fc,
    name: "imprint"
  }, {
    path: "/privacy",
    component: _55b1fd01,
    name: "privacy"
  }, {
    path: "/projects/:project?",
    component: _7d601c88,
    name: "projects-project"
  }, {
    path: "/services/:service?",
    component: _43a964c0,
    name: "services-service"
  }, {
    path: "/",
    component: _9858dcea,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
