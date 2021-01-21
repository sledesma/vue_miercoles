const vm = new Vue({
    el: "#view",
    methods: {
        agregarTarea: function(){
            this.tareas.push({
                nombre: this.nuevaTarea
            })
            this.nuevaTarea = '';
        },

        borrarTarea: function(e) {
            e.preventDefault();
            const aBorrar = e.target.dataset.tarea;

            const nuevaTareas = this.tareas.filter(function(val){
                return val.nombre != aBorrar
            });

            this.tareas = nuevaTareas;
        }
    },

	data: {
        nuevaTarea: '',
		tareas: [
            { nombre: "Ir a comprar" }, 
            { nombre: "Terminar el módulo" }
        ],
	},
});
