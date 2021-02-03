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

export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "ea molestias quasi exercitationem repellat qui ipsa sit aut"
        },
        { id: 2, title: "Post2" },
        { id: 1, title: "Post1" },
        { id: 2, title: "Post2" },
        { id: 1, title: "Post1" },
        { id: 2, title: "Post2" },
        { id: 1, title: "Post1" },
        { id: 2, title: "Post2" },
        { id: 1, title: "Post1" },
        { id: 2, title: "Post2" },
        { id: 1, title: "Post1" },
        { id: 2, title: "Post2" },
        { id: 1, title: "Post1" },
        { id: 2, title: "Post2" },
        { id: 1, title: "Post1" },
        { id: 2, title: "Post2" },
        { id: 1, title: "Post1" },
        { id: 2, title: "Post2" },
        { id: 1, title: "Post1" },
        { id: 2, title: "Post2" },
        { id: 1, title: "Post1" },
        { id: 2, title: "Post2" }
      ]
    };
  },

  components: { PostItem }
};
</script>

<style>
#master {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
