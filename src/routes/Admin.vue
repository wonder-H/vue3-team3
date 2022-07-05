<template>
  <LeftNav />
  <div class="container">
    <div class="right">
      <div>모든 제품 조회</div>
      <hr />

      <div class="table">
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
      </div>
    </div>
  </div>
</template>

<script>
import LeftNav from "../components/admin/LeftNav.vue";
export default {
  components: {
    LeftNav,
  },

  data() {
    return {
      products: [
        { id: "연결이 잘됐다", str: "string test1" },
        { id: "연결이잘됐다2", str: "stringtest2" },
      ],
      columns: [
        { field: "index", name: "", width: 100 },
        { field: "title", name: "제목", width: 200 },
        { field: "price", name: "가격", width: 200 },
        { field: "description", name: "설명", width: 200 },
        { field: "isSoldOut", name: "매진", width: 100 },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
.container {
  display: flex;

  .left-nav {
    border: 1px solid darkgreen;
    flex-grow: 1;
    height: 800px;
  }
  .right {
    border: 1px solid darkgreen;
    flex-grow: 1;
  }
}
</style>
