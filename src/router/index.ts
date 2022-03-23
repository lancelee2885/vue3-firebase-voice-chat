import { createWebHistory, createRouter } from "vue-router";
import AppHome from "../components/AppHome.vue";

const routes = [
  {
    path: "/",
    name: "AppHome",
    component: AppHome,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;