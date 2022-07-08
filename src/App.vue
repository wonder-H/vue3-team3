<template>
  <router-link to="/admin">admin</router-link> |
  <router-link to="/user">user</router-link> |
  <router-link to="/login">로그인 작성용</router-link> |
  <router-link to="/signup">회원가입 작성용</router-link> |
  <RouterView />
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss">
/* 적용 테스트 */
#app {
  color: #444;

  &:hover {
    color: rgb(86, 137, 9);
  }
}
</style>
