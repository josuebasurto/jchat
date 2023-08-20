<template>
  <div class="chat-input">
    <div class="input-container">
      <div class="user-label">{{ username }}</div>
      <input v-model="message" @keyup.enter="sendMessage" placeholder="Escribe un mensaje" />
      <button @click="sendMessage" class="btn-send">Enviar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    username: String,
  },
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
  align-items: center;
  padding: 10px;
  background-color: #f8f9fa;
  border-top: 1px solid #dee2e6;
}

.input-container {
  display: flex;
  align-items: center;
  flex: 1;
}

.user-label {
  padding: 8px;
  font-weight: bold;
}

.chat-input input {
  flex: 1;
  padding: 8px;
  font-size: 16px;
}

.btn-send {
  flex: 0;
  margin-left: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  width: 100%;
}
</style>
