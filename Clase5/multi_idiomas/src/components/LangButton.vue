<template>
  <button v-on:click="cambiarIdioma()">{{ langText }}</button>
</template>

<script>
export default {
    props: {
        lang: String
    },

    data() {
        return {
            langText: this.lang.toUpperCase()
        }
    },

    methods: {
        cambiarIdioma() {
            this.$store.commit('cambiarIdiomaActual', this.lang);
        }
    }
}
</script>

<style>

</style>