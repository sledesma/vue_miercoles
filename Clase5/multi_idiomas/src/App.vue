<template>
  <div>
    <texto></texto>
    <otro-texto></otro-texto>
    <lang-button lang="es" />
    <lang-button lang="en" />
  </div>
</template>

<script>
import LangButton from './components/LangButton.vue';
import OtroTexto from './components/OtroTexto.vue';
import Texto from './components/Texto.vue';

export default {
  name: "App",
  components: {
    Texto,
    LangButton,
    OtroTexto
  }
};
</script>

<style>
</style>
