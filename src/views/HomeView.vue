<template>

</template>

<script>
export default {
  name: 'HomeView',
  mounted() {
    this.redirectToRandomChannel();
  },
  methods: {
    redirectToRandomChannel() {
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
  
  <style>
</style>