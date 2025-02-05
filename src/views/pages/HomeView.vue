<script setup>
import { onMounted } from 'vue'
import { glitchEffect } from '../../utils/gsapAnimations.js'

onMounted(() => {
  glitchEffect('.hero-title')
})
</script>

<template>
  <section
    id="test"
    class="min-h-screen flex flex-col justify-center items-center bg-grid px-6 text-center"
  >
    <h1 class="hero-title text-4xl md:text-6xl font-extrabold text-white mb-4">
      Hello, I’m <span class="hero-highlight glitch">Emil Schlichter</span>
    </h1>
    <p class="text-lg md:text-xl text-gray-400 typing-text">
      I’m a Full Stack Developer based in Copenhagen, Denmark.
    </p>

    <div class="hidden-text mt-6">
      <p class="text-gray-600 opacity-40">
        pssst.. just kidding. I'm still a computer science student at KEA.
      </p>
    </div>
  </section>
</template>

<style>
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.typing-text {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid #ffffff;
  width: 0;
  animation: typing 5s steps(40, end) infinite;
}

.hidden-text {
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
}
</style>
