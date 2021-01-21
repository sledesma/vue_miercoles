<template>
	<input
		v-model="nuevaTarea"
		v-on:keyup.enter="agregarTarea"
		type="text"
		placeholder="Introduzca la nueva tarea y presione <Enter>"
	/>
</template>

<script>
export default {
    props: ['agregarTarea', 'nuevaTarea']
};
</script>

<style></style>
