<template>
	<button v-bind:class="claseBoton" v-on:click="clickBoton">
		{{ name }}
	</button>
</template>

<script>
export default {
	methods: {
		clickBoton() {
			this.claseBoton = this.sigEstado;
			this.sigEstado = this.sigEstado === "enter" ? "leave" : "enter";
		},
	},

	data() {
		return {
			claseBoton: "",
			sigEstado: "enter",
		};
    },
    
    props: {
        name: String
    }
};
</script>

<style scoped>
button {
	background: red;
	padding: 15px;
	border: 0;
	color: white;
	font-weight: bold;
	font-family: Arial, Helvetica, sans-serif;
	outline: none;
	cursor: pointer;
}

.enter {
	padding: 20px;
	transition: padding 200ms;
}

.leave {
	padding: 15px;
	transition: padding 200ms;
}
</style>
