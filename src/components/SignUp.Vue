<template>
  <TheHeader />
  <div>회원가입 페이지</div>
  <form>
    <input
      type="text"
      v-model="email"
      placeholder="이메일 주소"
    />
    <input
      type="text"
      v-model="displayName"
      placeholder="닉네임"
    />
    <input
      type="text"
      v-model="password"
      placeholder="비밀번호"
    />
    <input
      type="text"
      v-model="password2"
      placeholder="비밀번호 확인"
    />
    <input type="text" placeholder="이미지 삽입: img.png" />
  </form>
  <button
    @click="teamStore.signUp(email, password, displayName)"
  >
    회원가입
  </button>
  <TheFooter />
</template>

<script>
import { mapStores } from "pinia";
import { useTeamStore } from "../store/store";
import TheHeader from "./TheHeader.vue";
import TheFooter from "./TheFooter.vue";
export default {
  data() {
    return {
      email: "",
      displayName: "",
      password: "",
      password2: "",
    };
  },
  computed: {
    ...mapStores(useTeamStore),
  },
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss">
form {
  border: 2px solid blue;

  input {
    display: block;
  }
}
</style>
