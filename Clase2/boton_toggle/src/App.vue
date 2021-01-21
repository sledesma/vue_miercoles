<template>
  <div id="app">
    <!-- 3° Usarlo (con snake-case) -->
    <boton-toggle name="Clickeame" color="red"></boton-toggle>

    <boton-toggle name="Hola" color="green"></boton-toggle>

    <boton-toggle name="Adios" color="blue"></boton-toggle>

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
