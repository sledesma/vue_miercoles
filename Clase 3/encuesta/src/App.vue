<template>
	<div>
		<form action="#" v-on:submit="submit">
			<div class="campo">
				<span class="campo-nombre"
					>Experiencia técnica del instructor con respecto a los temas
					del curso</span
				>
				<input
					type="number"
					class="campo-number-input"
					v-model="vals.expTecnica"
				/>
			</div>

			<div class="campo">
				<span class="campo-nombre"
					>Manejo del ambiente de entrenamiento del instructor</span
				>
				<input
					type="number"
					class="campo-number-input"
					v-model="vals.ambiente"
				/>
			</div>

			<div class="campo">
				<span class="campo-nombre"
					>Nivel de detalle de respuestas del instructor a las
					preguntas</span
				>
				<select
					class="campo-select-input"
					v-model="vals.detalleRespuestas"
				>
					<option value="-1">Bajo</option>
					<option value="0">Medio</option>
					<option value="1">Alto</option>
				</select>
			</div>

			<div class="campo">
				<span class="campo-nombre"
					>Capacidad del instructor para proporcionar experiencias
					reales y ejemplos</span
				>
				<select class="campo-select-input" v-model="vals.expReales">
					<option value="-1">Baja</option>
					<option value="0">Media</option>
					<option value="1">Alta</option>
				</select>
			</div>

			<div class="campo">
				<span class="campo-nombre"
					>Capacidades del instructor para las presentaciones</span
				>
			</div>

			<div class="campo" style="font-size: 14px">
				<div>
					Trae el tema preparado de antemano
					<input
						type="checkbox"
						v-model="vals.presentaciones.temaPreparado"
					/>
				</div>
				<div>
					Usa ejemplos cercanos y reales
					<input
						type="checkbox"
						v-model="vals.presentaciones.ejemplosCercanos"
					/>
				</div>
				<div>
					Se copa con los pi
					<input
						type="checkbox"
						v-model="vals.presentaciones.seCopa"
					/>
				</div>
			</div>

			<div class="campo">
				<span class="campo-nombre"
					>Rendimiento general del instructor</span
				>
				<input type="text" v-model="vals.rendimiento" />
			</div>

			<div class="campo">
				<span class="campo-nombre"
					>Puntualidad del docente al comienzo de cada clase</span
				>
			</div>
			<div class="campo">
				<div>
					Es puntual
					<input
						type="radio"
						name="puntualidad"
						value="0"
						v-model="vals.puntualidad"
					/>
				</div>
				<div>
					15 mins de retraso
					<input
						type="radio"
						name="puntualidad"
						value="15"
						v-model="vals.puntualidad"
					/>
				</div>
				<div>
					30 mins de retraso
					<input
						type="radio"
						name="puntualidad"
						value="30"
						v-model="vals.puntualidad"
					/>
				</div>
				<div>
					60 mins de retraso
					<input
						type="radio"
						name="puntualidad"
						value="60"
						v-model="vals.puntualidad"
					/>
				</div>
			</div>

			<div class="campo">
				<span class="campo-nombre">
					Profesor respeta la duración máxima del cofee-break de 15
					minutos</span
				>
				<input
					type="checkbox"
					class="campo-check-input"
					v-model="vals.duracionBreak"
				/>
			</div>

			<div class="campo">
				<span class="campo-nombre"
					>Comentarios sobre el instructor</span
				>
				<textarea
					class="campo-input"
					v-model="vals.comentarios"
				></textarea>
			</div>

			<button>Enviar</button>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			vals: {
				expTecnica: "",
				ambiente: "",
				detalleRespuestas: "-1",
				expReales: "0",
				presentaciones: {
					temaPreparado: false,
					ejemplosCercanos: false,
					seCopa: false,
				},
				rendimiento: "",
				puntualidad: "",
				duracionBreak: false,
				comentarios: "",
			},
		};
	},

	methods: {
		submit(e) {
			e.preventDefault();
			console.log(this.vals);
		},
	},
};
</script>

<style>
form {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.campo {
	text-align: start;
	width: 50%;
	display: flex;
	justify-content: space-between;
	margin: 10px;
}

.campo-nombre {
	font-family: Arial, Helvetica, sans-serif;
}

.campo-number-input {
	width: 32px;
}

.campo-select-input {
	width: 100px;
}

.campo-check-input {
}

button {
	border: 0;
	padding: 25px 70px;
	cursor: pointer;
}
</style>
