<template>
  <!-- 아이템 1 2 3 ... -->
  <ListItem v-for="num in test" :key="num" />
  <!-- 상태관리 적용유무 확인용 -->
  <div class="tags">
    <h2>제주 + 자유여행</h2>
    <MainListSlider />
  </div>
  <!-- <div class="tags">제주 + 힐링</div>
  <div class="tags">제주 + 맛집투어</div> -->
</template>
<script>
import { mapStores } from "pinia";
import { useTeamStore } from "/src/store/store";
import MainListSlider from "../MainListSlider.vue";

export default {
  computed: {
    ...mapStores(useTeamStore),
  },
  components: {
    MainListSlider,
  },
};
</script>
<style scoped lang="scss">
div {
  border: 2px solid yellowgreen;
  height: 100px;
}
</style>
