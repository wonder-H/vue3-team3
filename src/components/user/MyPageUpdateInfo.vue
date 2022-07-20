<template>
  <div>마이페이지 사용자 정보 수정</div>
  <div>
    <div>회원정보</div>
    <div>연결된 계좌 목록</div>
  </div>
  <form>
    <input ref="nickName" :value="teamStore.displayName" />
    <button>수정</button>
  </form>
  <form>
    <input
      ref="password1"
      placeholder="기존 비밀번호"
      value=""
    />
  </form>
  <form>
    <input
      ref="password2"
      placeholder="새로운 비밀번호"
      value=""
    />
  </form>
  <div>
    <img alt="img" />
    image.png
    <button>파일선택</button>
  </div>
  <button
    @click="teamStore.updateInfo(this.$refs.nickName.value)"
  >
    수정완료
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

<style lang="scss" scoped>
button {
  border: 1px solid blue;
}
</style>
