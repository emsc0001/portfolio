<script>
import HomeView from './HomeView.vue'
import AboutView from './AboutView.vue'
import ProjectsView from './ProjectsView.vue'
import ContactView from './ContactView.vue'

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
    <section id="home" class="">
      <HomeView />
    </section>

    <section id="about" class="">
      <AboutView />
    </section>

    <section id="projects" class="">
      <ProjectsView />
    </section>

    <section id="contact" class="">
      <ContactView />
    </section>
  </div>
</template>
