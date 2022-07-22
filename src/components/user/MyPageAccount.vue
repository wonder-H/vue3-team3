<template>
  <router-link to="/addaccount"
    >사용자 계좌 추가</router-link
  >
  |
  <router-link to="/showaccounts"
    >사용자 계좌 조회</router-link
  >
  |
  <router-link to="/updateinfo"
    >사용자 정보 수정</router-link
  >
  |
  <div>사용자 계좌 조회 페이지</div>

  <div v-for="accountInfo in teamStore.accounts.accounts">
    <div>은행명: {{ accountInfo.bankName }}</div>
    <div>은행코드: {{ accountInfo.bankCode }}</div>
    <div>계좌번호: {{ accountInfo.accountNumber }}</div>
    <div>계좌잔액: {{ accountInfo.balance }}</div>
    <div>계좌ID(삭제조회용): {{ accountInfo.id }}</div>
    <button
      @click="teamStore.deleteAccount(accountInfo.id)"
    >
      계좌 삭제하기
    </button>
    <hr />
  </div>
  <div>총 잔액: {{ teamStore.accounts.totalBalance }}</div>
</template>
<script>
import { mapStores } from "pinia";
import { useTeamStore } from "../../store/store";
import TheHeader from "../TheHeader.vue";
export default {
  computed: {
    ...mapStores(useTeamStore),
  },
  components: {
    TheHeader,
  },
  created() {
    this.teamStore.showAccounts();
  },
};
</script>
<style lang="scss" scoped>
button {
  border: 2px solid blue;
}
</style>
