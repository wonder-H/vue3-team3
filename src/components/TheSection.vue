<template>
  <section>
    섹션영역 = 배너 + 목록 + 안내
    <MainBanner />
    <MainLists />
    <MainNotice />
  </section>
</template>

<script>
import MainBanner from "./MainBanner.vue";
import MainLists from "./MainLists.vue";
import MainNotice from "./MainNotice.vue";
export default {
  components: { MainBanner, MainLists, MainNotice },
};
</script>
