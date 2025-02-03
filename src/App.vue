<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Darkmode from './components/Darkmode.vue'
</script>

<template>
  <main>
    <Navbar />
    <RouterView />
    <Darkmode />
  </main>
</template>
