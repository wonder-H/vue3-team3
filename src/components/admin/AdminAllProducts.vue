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
            <!-- 제주 강원 서울 - - - [제주] =str1 넣고싶은제목
            =str title = '[str1]' + str2 타이틀 [제주], 태그
            힐링0 항공권1 2 3 4 ... [제주] 흑돼지 먹방 힐링
            str1 tag0 제주 힐링 ㅁ [<- ㅁ ㅁ ㅁ ㅁ ->] 'ㅁ
            [제주] 흑돼지 먹방 설명' -->

            <template v-else>
              {{ product[column.field] }}
            </template>
          </div>
          <div>
            상품의 태그(키워드) : {{ product.tags[0] }}
          </div>
          <img :src="product.thumbnail" alt="대체 이미지" />
          <button
            @click="
              $router.push(`/allproducts/${product.id}`)
            "
          >
            수정하기
          </button>
          <button
            @click="teamStore.deleteProduct(product.id)"
          >
            삭제하기
          </button>
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
  width: 200px;
}
button {
  border: 2px solid black;
}
</style>
