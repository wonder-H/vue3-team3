<template>
  <div class="right">
    <div>제품 추가하기</div>
    <hr />
    <NavBtnList />
    <form>
      <input v-model="title" placeholder="상품명" />
      <input v-model="price" placeholder="상품 가격" />
      <input
        v-model="description"
        placeholder="상품 설명"
      />
      <input v-model="tags" placeholder="키워드" />
      <input
        v-model="thumbnailBase64"
        placeholder="썸네일"
      />
      <input
        v-model="photoBase64"
        placeholder="제품 상세 사진"
      />
    </form>
    <button
      @click="
        teamStore.addProduct(title, price, description)
      "
    >
      제품 추가
    </button>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useTeamStore } from "../../store/store";
import NavBtnList from "../NavBtnList.vue";

export default {
  data() {
    return {
      title: "",
      price: "",
      description: "",
      tags: [],
      thumbnailBase64: "",
      photoBase64: "",
    };
  },
  computed: {
    ...mapStores(useTeamStore),
  },

  components: {
    NavBtnList,
  },
};
</script>

<style scoped lang="scss"></style>
