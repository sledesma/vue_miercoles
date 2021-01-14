const vm = new Vue({
    el: "#view",
    methods: {
        agregarTarea: function(){
            this.tareas.push({
                nombre: this.nuevaTarea
            })
            this.nuevaTarea = '';
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
