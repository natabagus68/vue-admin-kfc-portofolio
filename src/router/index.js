import { createRouter, createWebHistory } from "vue-router";
import admin from "../layout/Admin.vue";
import auth from "../layout/Auth.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/admin",
      name: "admin-page",
      component: admin,
      beforeEnter: (to, from, next) => {
        let authenticated = localStorage.getItem("access_token");
        if (authenticated) next();
        else next({ path: "/login" });
      },
      children: [
        {
          path: "tables",
          component: () => import("../pages/admin/Table.vue"),
        },
        {
          path: "add",
          component: () => import("../pages/admin/AddProduct.vue"),
        },
        {
          path: "update/:id",
          component: () => import("../pages/admin/UpdateProduct.vue"),
        },
      ],
    },
    {
      path: "/",
      name: "auth",
      component: auth,
      redirect: { path: "/login" },
      beforeEnter: (to, from, next) => {
        let authenticated = localStorage.getItem("access_token");
        if (authenticated) next({ path: "/admin" });
        else next();
      },
      children: [
        {
          path: "login",
          name: "auth-login",
          component: () => import("../pages/auth/Login.vue"),
        },
        {
          path: "register",
          name: "auth-register",
          component: () => import("../pages/auth/Register.vue"),
        },
      ],
    },
  ],
});

export default router;
