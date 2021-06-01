import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  About: () => import('../../components/About.vue' /* webpackChunkName: "components/about" */).then(c => wrapFunctional(c.default || c)),
  Client: () => import('../../components/Client.vue' /* webpackChunkName: "components/client" */).then(c => wrapFunctional(c.default || c)),
  Clients: () => import('../../components/Clients.vue' /* webpackChunkName: "components/clients" */).then(c => wrapFunctional(c.default || c)),
  Contact: () => import('../../components/Contact.vue' /* webpackChunkName: "components/contact" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  FooterDark: () => import('../../components/FooterDark.vue' /* webpackChunkName: "components/footer-dark" */).then(c => wrapFunctional(c.default || c)),
  Hero: () => import('../../components/Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c)),
  Nav: () => import('../../components/Nav.vue' /* webpackChunkName: "components/nav" */).then(c => wrapFunctional(c.default || c)),
  Projects: () => import('../../components/Projects.vue' /* webpackChunkName: "components/projects" */).then(c => wrapFunctional(c.default || c)),
  Services: () => import('../../components/Services.vue' /* webpackChunkName: "components/services" */).then(c => wrapFunctional(c.default || c)),
  SocialMediaBadge: () => import('../../components/SocialMediaBadge.vue' /* webpackChunkName: "components/social-media-badge" */).then(c => wrapFunctional(c.default || c)),
  Stats: () => import('../../components/Stats.vue' /* webpackChunkName: "components/stats" */).then(c => wrapFunctional(c.default || c)),
  Team: () => import('../../components/Team.vue' /* webpackChunkName: "components/team" */).then(c => wrapFunctional(c.default || c)),
  TeamMember: () => import('../../components/TeamMember.vue' /* webpackChunkName: "components/team-member" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
