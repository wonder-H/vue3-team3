<template>
  <router-link to="/admin">관리자</router-link> |
  <router-link to="/">MAIN</router-link> |

  <RouterView />
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss">
/* 적용 테스트 */
// #app {
//   color: #444;

//   &:hover {
//     color: rgb(86, 137, 9);
//   }
// }
</style>
