import { createRouter, createWebHistory } from "vue-router";
import Main from "./Main.vue";
import Product from "./Product.vue";
import Notice from "./Notice.vue";
import Admin from "./Admin.vue";
import User from "./User.vue";

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: "/",
      component: Main,
    },
    {
      path: "/admin",
      component: Admin,
    },
    {
      path: "/user",
      component: User,
    },

    // {
    //   path: "/products/:id",
    //   component: Product,
    // },
    // {
    //   path: "/notice",
    //   component: Notice,
    // },
  ],
});
