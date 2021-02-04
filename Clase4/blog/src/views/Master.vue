<template>
  <div id="master">
    <post-item
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:post="post"
    ></post-item>
  </div>
</template>

<script>
import PostItem from "../components/PostItem.vue";
import axios from "axios";

export default {
  data() {
    return {
      posts: []
    };
  },

  components: { PostItem },

  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(result => this.posts = result.data);
  }
};
</script>

<style>
#master {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
