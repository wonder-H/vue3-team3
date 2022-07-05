<template>
  <!-- 섹션영역 = 배너 + 목록 + 안내 -->
  <section>
    <MainBanner />
    <MainLists />
    <MainNotice />
  </section>
</template>

<script>
import MainBanner from "./Main/MainBanner.vue";
import MainLists from "./Main/MainLists.vue";
import MainNotice from "./Main/MainNotice.vue";
export default {
  components: { MainBanner, MainLists, MainNotice },
};
</script>
