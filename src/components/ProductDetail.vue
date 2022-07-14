<template>
  <div>단일 제품 구매 페이지</div>
  <div>{{ teamStore.thatproduct }}</div>
  <button
    @click="$router.push(`/buypage/${$route.params.id}`)"
  >
    "{{ teamStore.thatproduct.title }}" 제품 구매 페이지로
    이동
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
