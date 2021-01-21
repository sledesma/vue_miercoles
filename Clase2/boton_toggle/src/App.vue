<template>
  <div id="app">
    <!-- 3° Usarlo (con snake-case) -->
    <boton-toggle name="Clickeame"></boton-toggle>

    <boton-toggle name="Hola"></boton-toggle>

    <boton-toggle name="Adios"></boton-toggle>

  </div>
</template>

<script>
import BotonToggle from './components/BotonToggle'; // 1° Importarlo

// 2° Registrar
export default {
  name: 'App',
  components: {
    BotonToggle
  }
}
</script>

<style>
#app {
  padding: 10px;
}
</style>
