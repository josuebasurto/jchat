<template>
    <div class="user-name-form">
      <form @submit.prevent="setUsername">
        <label for="username">Ingresa tu nombre:</label>
        <input v-model="tempUsername" id="username" />
        <button type="submit">OK</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tempUsername: '',
      };
    },
    methods: {
      setUsername() {
        if (this.tempUsername.trim() !== '') {
          this.$emit('set-username', this.tempUsername);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .user-name-form {
    margin-top: 20px;
  }
  </style>
  