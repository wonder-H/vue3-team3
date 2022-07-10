<template lang="">
  <div>유저 계좌 추가하기</div>
  <ul style="display: flex">
    <li>신한</li>
    <li>농협</li>
    <li>기업</li>
    <li>하나</li>
    <li>국민</li>
  </ul>
  <input placeholder="계좌번호" />
  <input placeholder="사용자 전화번호" />
  <input type="checkbox" /><span
    >약관을 읽었으며 정보제공에 동의합니다</span
  >
  <button>계좌 추가 완료</button>
</template>
<script>
import { mapStores } from "pinia";
import { useTeamStore } from "../../store/store";
export default {
  computed: {
    ...mapStores(useTeamStore),
  },
};
</script>
<style lang=""></style>
