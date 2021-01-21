<template>
  <div class="nueva-tarea-desc">La nueva tarea es: {{ texto }}</div>
</template>

<script>
export default {
    props: {
        texto: String
    }
}
</script>

<style scoped>
.nueva-tarea-desc {
    text-align: center;
}
</style>