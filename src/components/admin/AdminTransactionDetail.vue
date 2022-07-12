<template>
  <div class="right">
    <h1>관리자 거래내역 상세 페이지</h1>
    <hr />

    <!-- <div class="table">
      <div class="row head">
        <div
          v-for="column in columns"
          :key="column.field"
          :style="{ width: `${column.width}px` }"
          class="column head"
        >
          {{ column.name }}
        </div>
        <div v-for="(product, index) in products" :key="product.id" class="row">
          <div
            v-for="column in columns"
            :key="column.field"
            :style="{ width: `${column.width}px` }"
            class="column"
          >
            <template v-if="column.field === 'index'">
              {{ index + 1 }}
              {{ product.id }}
              {{ product.str }}
            </template>
            <template v-else-if="column.field === 'isSoldOut'">
              {{ product[column.field] ? "매진됨" : "제품있음" }}
            </template>
            <template v-else>
              {{ product[column.field] }}
            </template>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useTeamStore } from "../../store/store";
export default {
  computed: {
    ...mapStores(useTeamStore),
  },
};
</script>
