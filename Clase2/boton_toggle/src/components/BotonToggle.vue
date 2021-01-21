<template>
	<button v-bind:class="claseBoton" v-on:click="clickBoton">
		{{ name }}
	</button>
</template>

<script>
export default {
	methods: {
		clickBoton() {
			this.claseBoton = `color-${this.color} ${this.sigEstado}`;
			this.sigEstado = this.sigEstado === "enter" ? "leave" : "enter";
		},
	},

	data() {
		return {
			claseBoton: `color-${this.color}`,
			sigEstado: "enter",
		};
    },
    
    props: {
        name: String,
        color: String
    }
};
</script>

<style scoped>
button {
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

.color-red { background: red; }
.color-blue { background: blue; }
.color-green { background: green; }
</style>
