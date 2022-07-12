import { createRouter, createWebHistory } from "vue-router";
import Main from "./Main.vue";
import Admin from "./Admin.vue";
import User from "./User.vue";
import Login from "../components/Login.vue";
import SignUp from "../components/SignUp.vue";
import AdminAddProduct from "../components/admin/AdminAddProduct.vue";
import AdminAllProducts from "../components/admin/AdminAllProducts.vue";
import AdminAllTransactions from "../components/admin/AdminAllTransactions.vue";
import MyPageAddAccount from "../components/user/MyPageAddAccount.vue";
import MyPageAccount from "../components/user/MyPageAccount.vue";
import MyPageUpdateInfo from "../components/user/MyPageUpdateInfo.vue";
import MyPageAllTransactions from "../components/user/MyPageAllTransactions.vue";
import MyPageInfo from "../components/user/MyPageInfo.vue";
import ProductInfo from "../components/ProductInfo.vue";
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
      path: "/adminalltransactions",
      component: AdminAllTransactions,
    },
    {
      path: "/user",
      component: User,
    },
    {
      path: "/useralltransactions",
      component: MyPageAllTransactions,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/signup",
      component: SignUp,
    },
    {
      path: "/addproduct",
      component: AdminAddProduct,
    },
    {
      path: "/allproducts",
      component: AdminAllProducts,
    },
    {
      path: "/addaccount",
      component: MyPageAddAccount,
    },
    {
      path: "/showaccounts",
      component: MyPageAccount,
    },
    {
      path: "/updateinfo",
      component: MyPageUpdateInfo,
    },
    {
      path: "/info",
      component: MyPageInfo,
    },
    {
      path: "/buyproduct",
      component: ProductInfo,
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
