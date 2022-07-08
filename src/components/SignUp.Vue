<template>
  <TheHeader />
  <div>회원가입 페이지</div>
  <form>
    <input placeholder="이메일 주소" />
    <input placeholder="닉네임" />
    <input placeholder="비밀번호" />
    <input placeholder="비밀번호 확인" />
    <input placeholder="이미지 삽입: img.png" />
  </form>
  <button>회원가입</button>
  <TheFooter />
</template>

<script>
import TheHeader from "./TheHeader.vue";
import TheFooter from "./TheFooter.vue";
export default {
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
