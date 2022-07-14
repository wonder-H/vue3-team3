<template>
  <div>구매 하려는 제품의 정보</div>
  <div>{{ teamStore.thatproduct }}</div>
  <div>구매페이지</div>
  <div>계좌 선택창</div>
  <button
    @click="
      teamStore.buyProduct(
        this.$route.params.id,
        'FgT6lLxl7YdunixVakWV',
      )
    "
  >
    제품 구매하기
  </button>
</template>
<script>
import { mapStores } from "pinia";
import { useTeamStore } from "../store/store";
export default {
  computed: {
    ...mapStores(useTeamStore),
  },
  created() {
    this.teamStore.readProduct(this.$route.params.id);
  },
};
</script>
<style lang=""></style>
