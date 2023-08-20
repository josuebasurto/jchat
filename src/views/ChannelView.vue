<template>
  <div>
    <h2>Chat en Canal {{ $route.params.channelCode }}</h2>
    <chat-box :messages="messages" />
    <div class="bottom-bar">
      <chat-input @new-message="addMessage" />
    </div>
    <user-name-form v-if="!username" @set-username="setUsername" />
  </div>
</template>

<script>
import ChatInput from '@/components/ChatInput.vue';
import ChatBox from '@/components/ChatBox.vue';
import UserNameForm from '@/components/UserNameForm.vue';

export default {
  name: 'ChannelView',
  components: {
    ChatInput,
    ChatBox,
    UserNameForm,
  },
  data() {
    return {
      messages: [],
      username: '', // Nombre de usuario
    };
  },
  methods: {
    addMessage(message) {
      if (this.username) {
        this.messages.push({ username: this.username, text: message });
        //analytics.logEvent('send_message', { username: this.username });
      }
    },
    setUsername(username) {
      this.username = username;
    },
  },
};
</script>

<style>
/* ... (otros estilos) */

/* Estilos para la barra inferior */
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 5px;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.1);
}
</style>