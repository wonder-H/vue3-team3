<template>
  <!-- 헤더영역 = 로고 + 검색기능 + 회원아이콘  -->
  <header>
    <div class="inner">
      <div class="logo">FASTOUR</div>
      <Regions />
      <div>회원 아이콘</div>
    </div>
  </header>
</template>

<script>
import Regions from "./Regions.vue";
export default {
  components: {
    Regions,
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
