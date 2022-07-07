<template>
  <!-- 아이템 1 2 3 ... -->
  <ListItem v-for="num in test" :key="num" />
  <!-- 상태관리 적용유무 확인용 -->

  <div class="tags">제주 + 자유여행</div>
  <div class="tags">제주 + 힐링</div>
  <div class="tags">제주 + 맛집투어</div>
</template>
<script>
import { mapStores } from "pinia";
import { useTeamStore } from "/src/store/store";
export default {
  data() {
    return {
      test: [1, 2, 3, 4, 5],
    };
  },
  computed: {
    ...mapStores(useTeamStore),
  },
};
</script>
<style scoped lang="scss">
div {
  border: 2px solid yellowgreen;
  height: 100px;
}
</style>
