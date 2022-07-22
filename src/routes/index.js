import { createRouter, createWebHistory } from "vue-router";

import Admin from "./Admin.vue";
import Main from "./Main.vue";
import Login from "../components/Login.vue";
import SignUp from "../components/SignUp.vue";
import AdminAddProduct from "../components/admin/AdminAddProduct.vue";
import AdminAllProducts from "../components/admin/AdminAllProducts.vue";
import AdminUpdateProduct from "../components/admin/AdminUpdateProduct.vue";
import AdminAllTransactions from "../components/admin/AdminAllTransactions.vue";
import AdminTransactionDetail from "../components/admin/AdminTransactionDetail.vue";
import MyPageAddAccount from "../components/user/MyPageAddAccount.vue";
import MyPageAccount from "../components/user/MyPageAccount.vue";

import MyPageUpdateInfo from "../components/user/MyPageUpdateInfo.vue";
import MyPageAllTransactions from "../components/user/MyPageAllTransactions.vue";
import MyPageTransactionDetail from "../components/user/MyPageTransactionDetail.vue";
import MyPageInfo from "../components/user/MyPageInfo.vue";
import ProductDetail from "../components/ProductDetail.vue";
import BuyPage from "../components/BuyPage.vue";
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

      children: [
        {
          path: "alltransactions",
          component: AdminAllTransactions,
        },
        {
          path: "alltransactions/:id",
          component: AdminTransactionDetail,
        },
        {
          path: "addproduct",
          component: AdminAddProduct,
        },
        {
          path: "allproducts",
          component: AdminAllProducts,
        },
        {
          path: "allproducts/:id",
          component: AdminUpdateProduct,
        },
      ],
    },

    {
      path: "/useralltransactions/:id",
      component: MyPageTransactionDetail,
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
      path: "/allproducts/:id",
      component: AdminUpdateProduct,
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
      path: "/mypage",
      component: MyPageInfo,
    },
    {
      path: "/productdetail/:id",
      component: ProductDetail,
    },
    {
      path: "/buypage/:id",
      component: BuyPage,
    },

    //
    // https://router.vuejs.org/guide/essentials/named-views.html
    //

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
