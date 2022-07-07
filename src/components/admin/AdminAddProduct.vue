<template>
  <div class="right">
    <div>제품 추가하기</div>
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
    <button>추가</button>
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

<style scoped lang="scss"></style>
