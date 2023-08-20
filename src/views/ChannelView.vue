<template>
    <div>
      <h2>Chat en Canal {{ $route.params.channelCode }}</h2>
      <chat-box :messages="messages" />
      <chat-input @new-message="addMessage" />
    </div>
  </template>
  
  <script>
  import ChatInput from '@/components/ChatInput.vue';
  import ChatBox from '@/components/ChatBox.vue';
  
  export default {
    name: 'ChannelView',
    components: {
      ChatInput,
      ChatBox,
    },
    data() {
      return {
        messages: [],
      };
    },
    methods: {
      addMessage(message) {
        this.messages.push({ username: 'Usuario', text: message });
      },
    },
  };
  </script>
  