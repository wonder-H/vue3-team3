import { createRouter, createWebHistory } from "vue-router";
import Main from "./Main.vue";
import Admin from "./Admin.vue";
import User from "./User.vue";
import Login from "../components/Login.vue";
import SignUp from "../components/SignUp.vue";
// import Notice from "./Notice.vue";
// import Product from "./Product.vue";

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
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/signup",
      component: SignUp,
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
