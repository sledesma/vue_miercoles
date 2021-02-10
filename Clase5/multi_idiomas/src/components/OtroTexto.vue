<template>
  <h4>{{ text }}</h4>
</template>

<script>
export default {
    computed: {
        text() {
            return this.$store.getters.getWord('OTRO')
        }
    }
}
</script>

<style>

</style>