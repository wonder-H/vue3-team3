import { createRouter, createWebHistory } from "vue-router";
import Home from "./Home.vue";
import Product from "./Product.vue";
import Notice from "./Notice.vue";

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/products/:id",
      component: Product,
    },
    {
      path: "/notice",
      component: Notice,
    },
  ],
});
