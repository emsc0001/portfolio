<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <main>
    <Navbar />
    <RouterView />
    <footer class="text-white lg:px-6 py-6">
      <div class="text-center">© 2025 Emil Kim Schlichter - All rights reserved.</div>
    </footer>
  </main>
</template>
