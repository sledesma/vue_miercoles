<template>
    <div>
      <h1><router-link v-bind:to="link">{{ post.title }}</router-link> </h1>
      <p>{{ post["short-desc"] }}</p>
    </div>
</template>

<script>
export default {
    props: ['post'],

    data() {
        return {
            link: `/detalle/${this.post.id}`
        }
    }
}
</script>

<style>

</style>