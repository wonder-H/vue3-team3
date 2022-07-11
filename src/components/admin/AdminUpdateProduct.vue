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
