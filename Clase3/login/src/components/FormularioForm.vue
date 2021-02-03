<template>
	<form class="formulario" v-on:submit="enviarFormulario">
		<div class="campo">
			<span class="campo-nombre">Usuario</span>
			<input type="text" class="campo-input" v-model="usuario.val" />
            <div v-if="usuario.mensajes.required">
                El campo usuario debe tener algún valor
            </div>
            <div v-if="usuario.mensajes.minLength">
                El campo usuario debe tener 3 caracteres como mínimo
            </div>
		</div>

		<div class="campo">
			<span class="campo-nombre">Contraseña</span>
			<input type="password" class="campo-input" v-model="pass.val" />
            <div v-if="pass.mensajes.required">
                El campo contraseña debe tener algún valor
            </div>
		</div>

        <div class="boton">
            <button>Enviar</button>
        </div>
	</form>
</template>

<script>
export default {

    data() {
        return {
            usuario: {
                val: '',
                mensajes: {
                    required: false,
                    minLength: false
                }
            },
            pass: {
                val: '',
                mensajes: {
                    required: false
                }
            }
        }
    },

    methods: {
        enviarFormulario(e) {
            e.preventDefault();

            this.usuario.mensajes.required = this.usuario.val === '';
            this.usuario.mensajes.minLength = this.usuario.val.length < 3;

            this.pass.mensajes.required = this.pass.val === '';

            if(
                !this.usuario.mensajes.required &&
                !this.usuario.mensajes.minLength &&
                !this.pass.mensajes.required
            ) {
                // e.target.submit();

                const data = new FormData();
                data.append('usuario', this.usuario.val);
                data.append('pass', this.pass.val);

                fetch('/registrarFormulario', {
                    method: 'POST',
                    body: data
                }).then(() => alert('Correcto'));
            }
        }
    }

};
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

.boton {
    padding: 10px;
}

.boton button {
    background: #997952;
    border: 0;
    padding: 35px 70px;
    cursor: pointer;
    margin-top: 50px;
}
</style>
