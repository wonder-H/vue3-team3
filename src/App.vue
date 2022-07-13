<template>
  <router-link to="/admin">관리자</router-link> |
  <router-link to="/adminalltransactions"
    >관리자 모든거래내역</router-link
  >
  | <router-link to="/user">MAIN</router-link> |
  <router-link to="/login">로그인 작성용</router-link> |
  <router-link to="/signup">회원가입 작성용</router-link> |
  <router-link to="/addproduct">제품 추가</router-link> |
  <router-link to="/allproducts/:asdasdasd"
    >제품 수정</router-link
  >
  |
  <router-link to="/allproducts"
    >모든 제품 조회</router-link
  >
  |
  <router-link to="/addaccount">계좌 추가하기</router-link>
  |
  <router-link to="/showaccounts"
    >계좌 조회하기</router-link
  >
  |
  <router-link to="/updateinfo"
    >사용자 수정하기 페이지</router-link
  >
  |
  <router-link to="/info">사용자 정보</router-link>
  |
  <router-link to="/useralltransactions"
    >사용자 모든 거래내역</router-link
  >
  |
  <router-link to="/buyproduct">물건 구매하기</router-link>
  |
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
