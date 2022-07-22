<template>
  <div class="right">
    <div>사용자 거래내역 상세 페이지</div>

    {{ transactionDetail }}

    <hr />
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useTeamStore } from "../../store/store";
export default {
  data() {
    return {
      transactionDetail: {},
    };
  },

  computed: {
    ...mapStores(useTeamStore),
  },
  async created() {
    await this.teamStore.readTransaction(
      this.$route.params.id,
    );
    this.transactionDetail = this.teamStore.userTransaction;
  },
};
</script>
