<script setup>
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

function scrollTo(target) {
  gsap.to(window, {
    duration: 1,
    scrollTo: target,
    ease: 'power2.inOut',
  })
}
</script>

<template>
  <nav class="w-full flex justify-between items-center p-6 bg-transparent fixed top-0 left-0 z-50">
    <div class="text-orange-400 font-bold text-lg bg-gray-800 p-2 rounded">ES</div>
    <nav class="flex max-md flex-grow fixed left-20 container mx-auto px-6">
      <button @click="() => scrollTo('#home')" class="mr-4 hover:text-orange-400">Home</button>
      <button @click="() => scrollTo('#about')" class="mr-4 hover:text-orange-400">About</button>
      <button @click="() => scrollTo('#projects')" class="mr-4 hover:text-orange-400">
        Projects
      </button>
      <button @click="() => scrollTo('#contact')" class="hover:text-orange-400">Contact</button>
    </nav>
  </nav>
</template>
