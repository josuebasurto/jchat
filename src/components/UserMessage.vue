<template>
  <div class="user-message">
    <strong>{{ username }}:</strong> {{ message }}
  </div>
</template>

<script>
export default {
  props: {
    username: String,
    message: String,
  },
};
</script>

<style scoped>
.user-message {
  margin: 10px 0;
}
</style>
