<template>
  <div>
      <router-link to="/">Atras</router-link> <br />
      Id {{ post.id }}
      <h2>{{ post.title }}</h2>
      <img v-bind:src="post.image">
      <p>{{ post.desc }}</p>
  </div>
</template>

<script>
export default {

    data() {
        return {
            paramId: Number(this.$route.params.id)
        }
    },

    computed: {
        post() {
            const nParamId = Number(this.paramId);
            return this.$store.getters.getPosts(nParamId - 1);
        }
    }

}
</script>

<style>

</style>