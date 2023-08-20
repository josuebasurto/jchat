<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">JChat</a>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/* Estilo para la barra */
.navbar {
  margin-bottom: 20px;
}

.navbar-brand {
  font-size: 28px;
  font-weight: bold;
}

/* Estilo para dispositivos móviles */
@media (max-width: 768px) {
  .navbar-brand {
    font-size: 24px;
  }
}
</style>
