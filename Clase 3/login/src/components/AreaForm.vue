<template>
  <div class="area-form">
      <cabecera-form></cabecera-form>
      <formulario-form></formulario-form>
  </div>
</template>

<script>
import CabeceraForm from './CabeceraForm';
import FormularioForm from './FormularioForm.vue';

export default {
    components: {
        CabeceraForm,
        FormularioForm
    }
}
</script>

<style>
.area-form {
    width: 50%;
    height: 100vh;
    float: right;
}
</style>