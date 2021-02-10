<template>
  <h1>{{ texto }}</h1>
</template>

<script>
export default {

    computed: {
        texto() {
            return this.$store.getters.getWord('SALUDO')
        }
    }

}
</script>

<style>

</style>