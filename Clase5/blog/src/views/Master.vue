<template>
	<div>
		<post-tile
			v-for="post in posts"
			v-bind:key="post.id"
			v-bind:post="post"
		/>
	</div>
</template>

<script>
import PostTile from "../components/PostTile.vue";

export default {
	components: { PostTile },
	name: "Home",

	computed: {
		posts() {
			return this.$store.getters.getPosts();
		},
	},
};
</script>
