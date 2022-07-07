<template>
  <!-- 섹션영역 = 배너 + 목록 + 안내 -->
  <section>
    <MainBanner />
    <MainLists />
    <MainNotice />
  </section>
</template>

<script>
import MainBanner from "./main/MainBanner.vue";
import MainLists from "./main/MainLists.vue";
import MainNotice from "./main/MainNotice.vue";
export default {
  components: { MainBanner, MainLists, MainNotice },
};
</script>
