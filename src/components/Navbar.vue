<template>
  <nav class="w-full flex justify-between items-center p-6 bg-transparent fixed top-0 left-0 z-50">
    <div class="text-orange-400 font-bold text-lg bg-gray-800 p-2 rounded">ES</div>
    <nav class="flex max-md:hidden flex-grow fixed left-20 container mx-auto px-6">
      <RouterLink to="#home" class="mr-4 hover:text-orange-400">Home</RouterLink>
      <RouterLink to="#about" class="mr-4 hover:text-orange-400">About</RouterLink>
      <RouterLink to="#projects" class="mr-4 hover:text-orange-400">Projects</RouterLink>
      <RouterLink to="#contact" class="hover:text-orange-400">Contact</RouterLink>
    </nav>
    <p class="text-white md:hidden fixed right-2">burger</p>
  </nav>
</template>
