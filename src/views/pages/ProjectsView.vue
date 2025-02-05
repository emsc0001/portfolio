<template>
  <section class="min-h-screen grid place-items-center px-6 bg-grid text-white">
    <div class="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div class="text-left">
        <h2 class="hero-title text-4xl font-bold mb-4">Projects</h2>
        <p class="text-gray-300 leading-relaxed">
          Here are some of the projects I’ve worked on. Each project reflects my passion for clean,
          high-performance development.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6">
        <div v-for="project in projects" :key="project.id" class="project-card">
          <img
            :src="project.image"
            alt="Project Image"
            class="w-full h-40 object-cover rounded-t-lg"
          />
          <div class="p-4">
            <h3 class="text-xl font-semibold">{{ project.name }}</h3>
            <p class="text-gray-400 text-sm">{{ project.description }}</p>
            <a
              :href="project.link"
              target="_blank"
              class="text-orange-400 hover:text-orange-500 mt-2 inline-block"
            >
              View Project →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted } from 'vue'
import { glitchEffect } from '../../utils/gsapAnimations.js'

onMounted(() => {
  glitchEffect('.hero-title')
})

export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          name: 'Bombsweeper Game',
          description:
            'A small exam project for the DSA course, where we created Minesweeper in JavaScript.',
          image: 'src/assets/pictures/Screenshot 2025-02-03 at 17.51.31.png',
          link: 'https://github.com/tora0001/DSA-eksamensprojekt',
        },
      ],
    }
  },
}
</script>

<style scoped>
.project-card {
  background: #1e1e1e;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1);
  transition: transform 0.2s ease-in-out;
}

.project-card:hover {
  transform: scale(1.05);
}
</style>
