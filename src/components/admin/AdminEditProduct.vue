<template>
  <div class="right">
    <h1>관리자 제품 수정 페이지</h1>
    <hr />
    <NavBtnList />
    <form>
      <input value="상품명" />
      <input value="상품 가격" />
      <input value="상품 설명" />
      <input value="키워드" />
      <input value="썸네일" />
      <input value="제품 상세 사진" />
    </form>
    <button>수정 완료</button>
    <button>수정 취소</button>
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
        <div
          v-for="(product, index) in products"
          :key="product.id"
          class="row"
        >
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
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import NavBtnList from "../NavBtnList.vue";

export default {
  components: {
    NavBtnList,
  },
};
</script>
