import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./components/Home.vue";
import Todos from "./components/Todos.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/todos",
      component: Todos,
    },
  ],
});
