<template>
  <div class="right">
    <div>모든 거래내역 조회</div>
    <div>{{ teamStore.adminAllTransactions }}</div>
    <hr />
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useTeamStore } from "../../store/store";
export default {
  computed: {
    ...mapStores(useTeamStore),
  },
  created() {
    this.teamStore.showAdminAllTransactions();
  },
};
</script>
