import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/catalog",
      name: "catalog",
      component: () => import("../views/HomeView.vue"),
    },
  ],
});

export default router;
