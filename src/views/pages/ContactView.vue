<script>
import { onMounted } from 'vue'
import { glitchEffect } from '../../utils/gsapAnimations.js'

onMounted(() => {
  glitchEffect('.hero-title')
})
</script>

<template>
  <section class="min-h-screen flex flex-col justify-center items-center px-6 bg-grid text-white">
    <h2 class="hero-title text-4xl font-bold mb-2 text-center">Contact Me</h2>

    <div class="flex flex-col space-y-6 text-gray-300">
      <p class="text-lg">
        Feel free to reach out if you’d like to hire me. Please hire me as I need a job
      </p>
      <div class="flex items-center space-x-4">
        <span class="text-blue-400 text-xl">📧</span>
        <span>emilschlichter@gmail.com / eks@dwarf.dk</span>
      </div>
      <div class="flex items-center space-x-4">
        <span class="text-blue-400 text-xl">📍</span>
        <span>Copenhagen, Denmark</span>
      </div>
      <a
        href="https://github.com/emsc0001"
        class="text-orange-400 hover:text-orange-600 transition text-lg mx-auto"
        target="_blank"
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/ßin/emilschlichter/"
        class="text-orange-400 hover:text-orange-600 transition text-lg mx-auto"
        target="_blank"
      >
        LinkedIn
      </a>
    </div>
  </section>
</template>
