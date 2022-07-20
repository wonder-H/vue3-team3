<template>
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

    <input type="file" @change="loadImage" />
    <img v-if="profileImgBase64" :src="profileImgBase64" />
  </form>
  <button
    @click="
      teamStore.signUp(
        email,
        password,
        displayName,
        profileImgBase64.split(',')[1],
      )
    "
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
      profileImgBase64: "",
    };
  },
  computed: {
    ...mapStores(useTeamStore),
  },
  components: {
    TheHeader,
    TheFooter,
  },
  methods: {
    loadImage(e) {
      const files = e.target.files;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener("load", async (e) => {
          this.profileImgBase64 = await e.target.result; // data:image/jpeg;base64, qwhdfskldasjhfklasjdhfkjahdsfkjahsdfkjashdfkjhsdaf
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  input {
    display: block;
  }

  img {
    width: 100px;
  }
}
button {
  border: 2px solid blue;
}
</style>
