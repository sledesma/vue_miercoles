<template>
	<div class="formulario">
		<div class="campo">
			<span class="campo-nombre">Usuario</span>
			<input type="text" class="campo-input" />
		</div>

		<div class="campo">
			<span class="campo-nombre">Contraseña</span>
			<input type="text" class="campo-input" />
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style>
.formulario {
	width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.formulario .campo {
    margin: 30px;
    display: flex;
    flex-direction: column;
    width: 70%;
}

.formulario .campo .campo-nombre {
    color: #50401B;
    font-family: Arial;
}

.formulario .campo .campo-input {
    color: black;
    outline: none;
    margin-top: 10px;
    padding: 10px;
    width: 100%;
    height: 40px;
    background: #D5CEC8;
    border: 0;
}
</style>
