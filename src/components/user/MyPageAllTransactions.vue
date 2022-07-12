<template>
  <div>사용자 모든 거래 내역</div>
  <div>{{ teamStore.userAllTransactions }}</div>
</template>
<script>
import { mapStores } from "pinia";
import { useTeamStore } from "../../store/store";
export default {
  computed: {
    ...mapStores(useTeamStore),
  },
  created() {
    this.teamStore.showUserAllTransactions();
  },
};
</script>
