<template>
  <!-- 푸터영역 = 회사 SNS 아이콘 몇 개, 사업자 관련 정보 등 -->
  <div class="footer">
    <div class="wrapper">
      <div class="three">
        <div>로그인</div>
        <div>공지사항</div>
        <div>고객센터</div>
      </div>
      <div class="skyblue">
        <div class="logo">FASTOUR</div>
        <div>
          ※ 부득이한 사정에 의해 여행일정이 변경되는 경우
          사전 동의를 받습니다.<br />
          ※ 하나투어는 개별 항공권, 단품 및 일부 여행상품에
          대하여 통신판매중개자로서<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;통신판매의
          당사자가 아니며 해당상품의 거래정보 및 거래등에
          대해 책임을 지지 않습니다.
        </div>
        <div>COPYRIGHT ⓒ HANATOUR SERVICE INC.</div>
      </div>
      <div class="agree">
        <div>이용약관</div>
        <div>여행약관</div>
        <div>개인정보처리방침</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="scss">
.footer {
  background-color: #ed234b;
  .wrapper {
    width: 1044px;
    margin: 0 auto;
    .three {
      display: flex;
      div {
        border: 3px solid green;
        flex-grow: 1;
      }
    }
    .skyblue {
      .logo {
        font-size: 38px;
      }
    }
    .agree {
      display: flex;
    }
  }
}
</style>
