<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import { onMounted } from 'vue'
import { interactiveGridEffect } from '../src/utils/gsapAnimations.js'


onMounted(() => {
  interactiveGridEffect()
})
</script>

<template>
  <Navbar />
  <RouterView />
  <div class="bg-grid"></div>
  <footer class="text-white lg:px-6 py-6">
    <div class="text-center">© 2025 Emil Kim Schlichter - All rights reserved.</div>
  </footer>
</template>
