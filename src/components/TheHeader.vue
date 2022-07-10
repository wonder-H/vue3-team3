<template>
  <!-- 헤더영역 = 로고 + 검색기능 + 회원아이콘  -->
  <header>
    <div class="inner">
      <div class="logo">FASTOUR</div>
      <NavBtnList />
      <ul class="gnb-right">
        <li>공지사항</li>
        <li>이용안내</li>
        <li>
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 0.333496C7.80004 0.333496 0.333374 7.80016 0.333374 17.0002C0.333374 26.2002 7.80004 33.6668 17 33.6668C26.2 33.6668 33.6667 26.2002 33.6667 17.0002C33.6667 7.80016 26.2 0.333496 17 0.333496ZM17 7.00016C20.2167 7.00016 22.8334 9.61683 22.8334 12.8335C22.8334 16.0502 20.2167 18.6668 17 18.6668C13.7834 18.6668 11.1667 16.0502 11.1667 12.8335C11.1667 9.61683 13.7834 7.00016 17 7.00016ZM17 30.3335C13.6167 30.3335 9.61671 28.9668 6.76671 25.5335C9.58337 23.3335 13.1334 22.0002 17 22.0002C20.8667 22.0002 24.4167 23.3335 27.2334 25.5335C24.3834 28.9668 20.3834 30.3335 17 30.3335Z"
              fill="#555555"
            />
          </svg>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import NavBtnList from "./NavBtnList.vue";

export default {
  components: {
    NavBtnList,
  },
};
</script>

<style scoped lang="scss">
.inner {
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    font-size: 20px;
  }
}
.gnb-right {
  display: flex;
  align-items: center;
  li {
    margin-right: 12px;
  }
  li:last-child {
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
