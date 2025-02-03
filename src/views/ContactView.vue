<template>
  <section class="min-h-screen flex flex-col justify-center items-center px-6 bg-grid text-white">
    <h2 class="text-4xl font-bold mb-6 text-center">Contact Me</h2>

    <div class="flex flex-col space-y-6 text-gray-300">
      <p class="text-lg">
        Feel free to reach out if you’d like to collaborate on a project or just want to say hi!
      </p>
      <div class="flex items-center space-x-4">
        <span class="text-blue-400 text-xl">📧</span>
        <span>emilschlichter@gmail.com</span>
      </div>
      <div class="flex items-center space-x-4">
        <span class="text-blue-400 text-xl">📍</span>
        <span>Copenhagen, Denmark</span>
      </div>
      <a
        href="https://github.com/emsc0001"
        class="text-blue-400 hover:text-blue-500 transition text-lg"
        target="_blank"
      >
        Visit My GitHub →
      </a>
      <a
        href="https://linkedIn.com/emil-schlichter"
        class="text-blue-400 hover:text-blue-500 transition text-lg"
        target="_blank"
      >
        Visit my LinkedIn →
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
    }
  },
  methods: {
    sendMessage() {
      alert(`Message Sent!\nName: ${this.name}\nEmail: ${this.email}\nMessage: ${this.message}`)
      this.name = ''
      this.email = ''
      this.message = ''
    },
  },
}
</script>

<style scoped>
/* Grid Background */
.bg-grid {
  background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
}

/* Input Fields */
.input-field {
  width: 100%;
  padding: 12px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  color: white;
  outline: none;
  transition: border 0.3s ease-in-out;
}

.input-field:focus {
  border-color: #4a90e2;
}

/* Submit Button */
.submit-btn {
  width: 100%;
  background: transparent;
  color: white;
  font-weight: bold;
  padding: 12px;
  border-radius: 6px;
  border: 2px solid #007bff;
  cursor: pointer;
  transition:
    background 0.3s ease-in-out,
    color 0.3s ease-in-out;
}

.submit-btn:hover {
  background: #007bff;
  color: #fff;
}
</style>
