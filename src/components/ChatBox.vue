<template>
  <div class="chat-box">
    <user-message v-for="(message, index) in messages" :key="index" :username="message.username" :message="message.text" />
  </div>
</template>

<script>
import UserMessage from './UserMessage.vue';

export default {
  components: {
    UserMessage,
  },
  props: {
    messages: Array,
  },
};
</script>

<style scoped>
.chat-box {
  margin-top: 20px;
}
</style>
