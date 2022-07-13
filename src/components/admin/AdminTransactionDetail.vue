<template>
  <div class="right">
    <h1>관리자 거래내역 상세 페이지</h1>
    <hr />
    <div>프로필 이미지: {{}}</div>
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
    this.teamStore.readTransaction(id); // params 따와야함
  },
};
</script>
