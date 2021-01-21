<template>
	<div id="app">
		<div class="frm-agregar-tarea">
      <barra-busqueda 
        v-bind:agregarTarea="agregarTarea"
        v-bind:nuevaTarea="nuevaTarea"></barra-busqueda>
		</div>

		<texto-nuevo v-bind:texto="nuevaTarea"></texto-nuevo>

		<div class="lista-tareas">
			<div
				class="item"
				v-for="itemActual in tareas"
				v-bind:key="itemActual.nombre"
			>
				<h3>{{ itemActual.nombre }}</h3>
				<a
					href="#"
					v-bind:data-tarea="itemActual.nombre"
					v-on:click="borrarTarea"
					>
          Borrar
        </a>
			</div>
		</div>
	</div>
</template>

<script>
import BarraBusqueda from './components/BarraBusqueda';
import TextoNuevo from './components/TextoNuevo';

export default {

  name: "App",
  
  components: {
    TextoNuevo,
    BarraBusqueda
  },

	methods: {
		agregarTarea: function() {
			this.tareas.push({
				nombre: this.nuevaTarea,
			});
			this.nuevaTarea = "";
		},

		borrarTarea: function(e) {
			e.preventDefault();
			const aBorrar = e.target.dataset.tarea;

			const nuevaTareas = this.tareas.filter(function(val) {
				return val.nombre != aBorrar;
			});

			this.tareas = nuevaTareas;
		},
	},

	data() {
    return {
      nuevaTarea: "",
      tareas: [{ nombre: "Ir a comprar" }, { nombre: "Terminar el módulo" }]
    }
	},
};
</script>

<style scoped>
.frm-agregar-tarea {
    text-align: center;
    padding: 50px;
}

.frm-agregar-tarea input {
    width: 50%;
    padding: 15px;
    border-radius: 30px;
    outline: none;
    border: 1px solid #CCC;
}

.lista-tareas {
    padding: 20px;
    text-align: center;
}

.lista-tareas .item {
    border: 1px solid black;
    padding: 30px;
    width: 70%;
    display: inline-block;
    margin: 10px;

    
}

.lista-tareas .item:hover {

    transform: scale(1.1);
   
    cursor: pointer;

    transition: all 0.2s;
}


</style>
