<template>
  <div>마이페이지 사용자 정보</div>
  <div>
    <div>회원정보</div>

    <div>연결된 계좌 목록</div>
  </div>
  <div>회원의 닉네임: {{ teamStore.displayName }}</div>

  <div>
    <img src="" alt="img" />
    image.png
  </div>
  <button @click="$router.push('/updateinfo')">
    회원정보 수정
  </button>
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
