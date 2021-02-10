<template>
  <div>
      Hola
  </div>
</template>

<script>
export default {

    computed: {
        post() {
            return this.$store.getters.getPosts()[this.$route.params.id];
        }
    },
    
    created() {
        console.log(this.post);
    }

}
</script>

<style>

</style>