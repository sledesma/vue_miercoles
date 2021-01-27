<template>
  <div>
    <area-foto></area-foto>
    <area-form></area-form>
  </div>
</template>

<script>
import AreaForm from './components/AreaForm.vue'
import AreaFoto from './components/AreaFoto.vue'

export default {
  components: { AreaFoto, AreaForm },
}
</script>

<style>
html, body { margin: 0; padding: 0; }
</style>
