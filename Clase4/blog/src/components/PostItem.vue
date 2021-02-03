<template>
  <router-link v-bind:to="url">
    <h2>{{ post.title }}</h2>
  </router-link>
</template>

<script>
export default {
  props: ["post"],
  data() {
    return {
      url: `/detalle/${this.post.id}`
    };
  }
};
</script>

<style scoped>
a {
  display: block;
  border: 1px solid black;
  padding: 10px;
  box-sizing: border-box;
  width: 30%;
  margin: 1%;
  text-align: center;
  transition: all 0.2s;
  color: black;
  text-decoration: none;
}

a:hover {
  cursor: pointer;
  transform: scale(1.05);
}
</style>
