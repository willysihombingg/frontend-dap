import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "dashboard",
    redirect: "activities",
    beforeEnter: (to, from, next) => {
      const authenticated = localStorage.getItem("token") != undefined;
      if (!authenticated) next({ name: "login" });
      else next();
    },
    component: () => import("@/views/Dashboard.vue"),
    children: [
      {
        path: "users",
        name: "users",
        component: () => import("@/views/dashboard/admin/User.vue"),
      },
      {
        path: "activities",
        name: "activities",
        component: () => import("@/views/dashboard/activities/Activities.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  routes,
});

export default router;
