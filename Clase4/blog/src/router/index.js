import Vue from "vue";
import VueRouter from "vue-router";
import Master from "../views/Master.vue";
import Details from "../views/Details.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Maestro",
    component: Master
  },
  {
    path: "/detalle/:id",
    component: Details
  }
];

const router = new VueRouter({
  routes: routes
});

export default router;
