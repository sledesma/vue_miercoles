<template>
  <div id="detalle">
    <router-link to="/">
      <span class="material-icons">keyboard_arrow_left</span>
    </router-link>
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      post: {}
    };
  },

  created() {
    const id = this.$route.params.id;

    axios
      .get("https://jsonplaceholder.typicode.com/posts/"+id)
      .then(result => this.post = result.data);
  }
};
</script>

<style>
#detalle {
  padding: 50px;
  text-align: center;
}

#detalle h2 {
  font-size: 48px;
}

#detalle p {
  font-size: 28px;
  margin-top: 70px;
}

#detalle a {
  position: absolute;
  top: 10px;
  left: 10px;
  color: black;
}

#detalle a span {
  font-size: 48px;
}
</style>
