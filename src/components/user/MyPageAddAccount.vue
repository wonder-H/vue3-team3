<template lang="">
  <div>유저 계좌 추가하기</div>
  <ul style="display: flex">
    <li v-for="bank in teamStore.banks">
      {{ bank.name }}
    </li>
  </ul>
  <input placeholder="계좌번호" />
  <input placeholder="사용자 전화번호" />
  <input type="checkbox" /><span
    >약관을 읽었으며 정보제공에 동의합니다</span
  >

  <button @click="teamStore.addAccount">
    계좌 추가하기
  </button>
</template>
<script>
import { mapStores } from "pinia";
import { useTeamStore } from "../../store/store";
export default {
  computed: {
    ...mapStores(useTeamStore),
  },
  watch: {
    ["teamStore.banks"]() {},
  },
  created() {
    this.teamStore.showBanks();
  },
};
</script>
<style lang=""></style>
