<template>
  <div class="flex-container">
    <LeftNav class="left" />
    <!-- <AdminAllProducts
      :products="teamStore.products"
      :columns="teamStore.columns"
    /> -->

    <AdminAllTransactions />
    <AdminAddProduct />
    <AdminEditProduct />
  </div>
</template>

<script>
import LeftNav from "../components/admin/LeftNav.vue";
import AdminAllProducts from "../components/admin/AdminAllProducts.vue";
import AdminAllTransactions from "../components/admin/AdminAllTransactions.vue";
import AdminAddProduct from "../components/admin/AdminAddProduct.vue";
import AdminUpdateProduct from "../components/admin/AdminUpdateProduct.vue";
import { mapStores } from "pinia";
import { useTeamStore } from "../store/store";

export default {
  components: {
    LeftNav,
    AdminAllProducts,
    AdminAllTransactions,
    AdminAddProduct,
    AdminUpdateProduct,
  },

  computed: {
    ...mapStores(useTeamStore),
  },
};
</script>
<style scoped lang="scss">
.flex-container {
  display: flex;
  height: 100vh;
  .left {
    border: 1px solid blue;
  }
  .right {
    border: 1px solid red;
    width: 1500px;
  }
}
</style>
