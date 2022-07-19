<template>
  <div class="right">
    <div>모든 제품 조회</div>

    <hr />

    <div class="table">
      <div class="row head">
        <div
          v-for="column in teamStore.columns"
          :key="column.field"
          :style="{ width: `${column.width}px` }"
          class="column head"
        >
          {{ column.name }}
        </div>
        <div
          v-for="(product, index) in teamStore.products"
          :key="product.id"
          class="row"
        >
          <div
            v-for="column in teamStore.columns"
            :key="column.field"
            :style="{ width: `${column.width}px` }"
            class="column"
          >
            <template v-if="column.field === 'index'">
              {{ product.id }}
              {{ product.str }}
            </template>
            <template
              v-else-if="column.field === 'isSoldOut'"
            >
              {{
                product[column.field]
                  ? "매진됨"
                  : "제품있음"
              }}
            </template>

            <template v-else>
              {{ product[column.field] }}
            </template>
          </div>

          <button
            @click="
              $router.push(`/allproducts/${product.id}`)
            "
          >
            상품 {{ product.id }} 수정하기
          </button>
          <img :src="product.thumbnail" alt="대체 이미지" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useTeamStore } from "../../store/store";
export default {
  computed: {
    ...mapStores(useTeamStore),
  },

  props: {
    products: {},
    columns: {},
  },

  created() {
    this.teamStore.allProducts();
  },
};
</script>

<style scoped lang="scss">
img {
  width: 300px;
}
</style>
