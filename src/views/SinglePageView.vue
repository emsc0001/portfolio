<script>
import HomeView from './pages/HomeView.vue'
import AboutView from './pages/AboutView.vue'
import ProjectsView from './pages/ProjectsView.vue'
import ContactView from './pages/ContactView.vue'

// GSAP
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

export default {
  components: {
    HomeView,
    AboutView,
    ProjectsView,
    ContactView,
  },
}
</script>

<template>
  <div>
    <section id="home" class="fade-in">
      <HomeView />
    </section>

    <section id="about" class="fade-in">
      <AboutView />
    </section>

    <section id="projects" class="fade-in">
      <ProjectsView />
    </section>

    <section id="contact" class="fade-in">
      <ContactView />
    </section>
  </div>
</template>
