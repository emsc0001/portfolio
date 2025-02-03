<template>
  <button
    @click="toggleDarkMode"
    class="fixed top-4 right-6 p-2 rounded-full bg-gray-700 text-white"
  >
    {{ isDark ? '🌞' : '🌙' }}
  </button>
</template>

<script>
export default {
  data() {
    return {
      isDark: localStorage.getItem('theme') === 'dark',
    }
  },
  methods: {
    toggleDarkMode() {
      this.isDark = !this.isDaark
      document.documentElement.classList.toggle('dark', this.isDark)
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light')
    },
  },
  mounted() {
    if (this.isDark) document.documentElement.classList.add('dark')
  },
}
</script>
