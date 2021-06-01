import { wrapFunctional } from './utils'

export { default as About } from '../../components/About.vue'
export { default as Client } from '../../components/Client.vue'
export { default as Clients } from '../../components/Clients.vue'
export { default as Contact } from '../../components/Contact.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as FooterDark } from '../../components/FooterDark.vue'
export { default as Hero } from '../../components/Hero.vue'
export { default as Nav } from '../../components/Nav.vue'
export { default as Projects } from '../../components/Projects.vue'
export { default as Services } from '../../components/Services.vue'
export { default as SocialMediaBadge } from '../../components/SocialMediaBadge.vue'
export { default as Stats } from '../../components/Stats.vue'
export { default as Team } from '../../components/Team.vue'
export { default as TeamMember } from '../../components/TeamMember.vue'

export const LazyAbout = import('../../components/About.vue' /* webpackChunkName: "components/about" */).then(c => wrapFunctional(c.default || c))
export const LazyClient = import('../../components/Client.vue' /* webpackChunkName: "components/client" */).then(c => wrapFunctional(c.default || c))
export const LazyClients = import('../../components/Clients.vue' /* webpackChunkName: "components/clients" */).then(c => wrapFunctional(c.default || c))
export const LazyContact = import('../../components/Contact.vue' /* webpackChunkName: "components/contact" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyFooterDark = import('../../components/FooterDark.vue' /* webpackChunkName: "components/footer-dark" */).then(c => wrapFunctional(c.default || c))
export const LazyHero = import('../../components/Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c))
export const LazyNav = import('../../components/Nav.vue' /* webpackChunkName: "components/nav" */).then(c => wrapFunctional(c.default || c))
export const LazyProjects = import('../../components/Projects.vue' /* webpackChunkName: "components/projects" */).then(c => wrapFunctional(c.default || c))
export const LazyServices = import('../../components/Services.vue' /* webpackChunkName: "components/services" */).then(c => wrapFunctional(c.default || c))
export const LazySocialMediaBadge = import('../../components/SocialMediaBadge.vue' /* webpackChunkName: "components/social-media-badge" */).then(c => wrapFunctional(c.default || c))
export const LazyStats = import('../../components/Stats.vue' /* webpackChunkName: "components/stats" */).then(c => wrapFunctional(c.default || c))
export const LazyTeam = import('../../components/Team.vue' /* webpackChunkName: "components/team" */).then(c => wrapFunctional(c.default || c))
export const LazyTeamMember = import('../../components/TeamMember.vue' /* webpackChunkName: "components/team-member" */).then(c => wrapFunctional(c.default || c))
