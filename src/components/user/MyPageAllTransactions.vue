<template>
  <div class="right">
    <div>모든 거래내역 조회</div>
    <div
      v-for="transaction in teamStore.userAllTransactions"
    >
      {{ transaction }}
      <button
        @click="
          $router.push(
            `/useralltransactions/${transaction.detailId}`,
          )
        "
      >
        상세내역으로 push
      </button>
      <hr />
    </div>
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
    this.teamStore.showUserAllTransactions();
  },
};
</script>
