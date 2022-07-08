<template>
  <!-- 헤더영역 = 로고 + 검색기능 + 회원아이콘  -->
  <header>
    <div class="inner">
      <div class="logo">FASTOUR</div>
      <NavBtnList />
      <div>회원 아이콘</div>
    </div>
  </header>
</template>

<script>
import NavBtnList from "./NavBtnList.vue";

export default {
  components: {
    NavBtnList,
  },
};
</script>

<style scoped lang="scss">
.inner {
  display: flex;
  justify-content: space-between;
  .logo {
    font-size: 20px;
  }
}
</style>
