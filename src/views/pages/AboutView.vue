<script>
import { onMounted } from 'vue'
import { glitchEffect } from '../../utils/gsapAnimations.js'

onMounted(() => {
  glitchEffect('.hero-title')
})
</script>

<template>
  <section class="py-40 px-8 place-items-center bg-grid text-white">
    <div class="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 class="hero-title text-4xl font-bold text-white mb-4">About Me</h1>
        <p class="text-gray-300 leading-relaxed">
          Hi, I’m Emil Schlichter, I've previously worked as a professional esport athlete in games
          like CS2 & Valorant. Now I am a passionate Computer Science student with a love for
          building modern, high-performance websites and applications.
        </p>
      </div>

      <div class="flex flex-col items-center">
        <img
          src="../../assets/pictures/image.png"
          class="w-48 h-48 md:w-56 md:h-56 rounded-full shadow-lg border-4 border-white"
        />
        <a
          href="https://github.com/emsc0001"
          class="mt-4 text-blue-400 hover:text-blue-500 transition text-lg"
          target="_blank"
        >
          Visit My GITHUB
        </a>
      </div>
    </div>
  </section>

  <section id="skills" class="py-10 px-6 bg-grid text-white relative">
    <h2 class="hero-title text-4xl font-bold text-center mb-6">Skills</h2>

    <ul
      class="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-300 text-lg text-center max-w-4xl mx-auto"
    >
      <li class="skill-box">HTML/CSS</li>
      <li class="skill-box">JavaScript</li>
      <li class="skill-box">React</li>
      <li class="skill-box">Vue.js</li>
      <li class="skill-box">MySQL</li>
      <li class="skill-box">Node.js</li>
      <li class="skill-box">Java</li>
      <li class="skill-box">Spring Boot</li>
    </ul>
  </section>
</template>

<style scoped>
.bg-grid {
  background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
}

.skill-box {
  background: #1e1e1e;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1);
  transition: transform 0.2s ease-in-out;
}

.skill-box:hover {
  transform: scale(1.05);
}
</style>
