<template>
  <div>마이페이지 사용자 정보 수정</div>
  <div>
    <div>회원정보</div>
    <div>연결된 계좌 목록</div>
  </div>
  <form>
    <input ref="nickName" :value="nickName" />
    <input
      ref="password1"
      placeholder="기존 비밀번호"
      value=""
    />
    <input
      ref="password2"
      placeholder="새로운 비밀번호"
      value=""
    />
  </form>

  <button
    @click="
      teamStore.updateInfo(
        this.$refs.nickName.value,
        this.$refs.password1.value,
        this.$refs.password2.value,
      )
    "
  >
    수정완료
  </button>
</template>

<script>
import { mapStores } from "pinia";
import { useTeamStore } from "../../store/store";
export default {
  data() {
    return {
      nickName: "",
    };
  },
  computed: {
    ...mapStores(useTeamStore),
  },

  created() {
    this.nickName = localStorage.getItem("nickName");
  },
};
</script>

<style lang="scss" scoped>
button {
  border: 1px solid blue;
}
</style>
