<template>
  <div>단일 제품 구매 페이지</div>
  <button @click="teamStore.buyProduct">구매하기</button>
</template>

<script>
import { mapStores } from "pinia";
import { useTeamStore } from "../store/store";
export default {
  computed: {
    ...mapStores(useTeamStore),
  },
};
</script>
