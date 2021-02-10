<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('loadPosts')
  }
}
</script>

<style>
</style>
