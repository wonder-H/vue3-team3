<template>
  <div>로그인 페이지</div>
  <input type="text" v-model="email" placeholder="아이디" />
  <input
    type="text"
    v-model="password"
    placeholder="비밀번호"
  />
  <button
    @click="
      teamStore.login(email, password),
        $router.push('/user')
    "
  >
    로그인
  </button>
  <hr />
  <div>
    email: "qkrwlgns@gmail.com" // password: "1234567890"
  </div>
  <hr />
  <TheFooter />
</template>

<script>
import { mapStores } from "pinia";
import { useTeamStore } from "../store/store";
import TheFooter from "./TheFooter.vue";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  computed: {
    ...mapStores(useTeamStore),
  },
  components: {
    TheFooter,
  },
};
</script>
