<script setup>
import { onMounted } from 'vue'
import { scrollTo } from '../utils/gsapAnimations.js'
import { fadeInPage } from '../utils/gsapAnimations.js'
import { magneticHoverEffect } from '../utils/gsapAnimations.js'
import { interactiveGridEffect } from '../utils/gsapAnimations.js'
import { glitchEffect } from '../utils/gsapAnimations.js'

onMounted(() => {
  glitchEffect('.hero-title-es')
})

onMounted(() => {
  magneticHoverEffect('.nav-links button')
})

onMounted(() => {
  fadeInPage()
})

onMounted(() => {
  interactiveGridEffect()
})
</script>

<template>
  <section class="parallax">
    <nav
      class="nav-container w-full flex justify-between items-center p-6 bg-transparent fixed top-0 left-0 z-50"
    >
      <div class="hero-title text-orange-400 font-bold text-lg bg-gray-800 p-2 rounded">ES</div>
      <nav class="nav-links">
        <button @click="scrollTo('#home')" class="mr-4 hover:text-orange-400">Home</button>
        <button @click="scrollTo('#about')" class="mr-4 hover:text-orange-400">About</button>
        <button @click="scrollTo('#projects')" class="mr-4 hover:text-orange-400">Projects</button>
        <button @click="scrollTo('#contact')" class="hover:text-orange-400">Contact</button>
      </nav>
    </nav>
  </section>
</template>
