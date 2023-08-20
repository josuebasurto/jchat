<template>
    <div>
      <h2>Home View</h2>
      <form @submit="redirectToRandomChannel">
        <label for="name">Nombre:</label>
        <input v-model="name" id="name" />
        <button type="submit">OK</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeView',
    data() {
      return {
        name: '',
      };
    },
    methods: {
      redirectToRandomChannel(event) {
        event.preventDefault();
        const randomCode = this.generateRandomCode();
        this.$router.push(`/channel/${randomCode}`);
      },
      generateRandomCode() {
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let code = '';
        for (let i = 0; i < 6; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          code += characters[randomIndex];
        }
        return code;
      },
    },
  };
  </script>
  