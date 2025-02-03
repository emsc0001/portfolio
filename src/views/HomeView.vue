<template>
  <section class="min-h-screen flex flex-col justify-center items-center bg-grid px-6 text-center">
    <h1 class="text-4xl md:text-6xl font-extrabold text-white mb-4">
      Hello, I’m <span class="text-orange-400">Emil Schlichter</span>
    </h1>
    <p class="text-lg md:text-xl text-gray-400 typing-text">
      testing working yes it is working dingeling
    </p>

    <div class="hidden-text mt-6">
      <p class="text-gray-600 opacity-40">testing working yes it is working dingeling</p>
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
  animation: typing 3s steps(40, end) forwards;
}

.hidden-text {
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
}
</style>
