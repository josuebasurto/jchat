<template>
    <div class="chat-input">
      <input v-model="message" @keyup.enter="sendMessage" placeholder="Escribe un mensaje" />
      <button @click="sendMessage">Enviar</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: '',
      };
    },
    methods: {
      sendMessage() {
        if (this.message.trim() !== '') {
          this.$emit('new-message', this.message);
          this.message = '';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .chat-input {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .chat-input input {
    flex: 1;
    padding: 8px;
    font-size: 16px;
  }
  
  .chat-input button {
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  </style>
  