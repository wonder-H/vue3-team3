<template>
  <!-- 헤더영역 = 로고 + 검색기능 + 회원아이콘  -->
  <header>
    <div class="inner">
      <div class="logo">FASTOUR</div>
      <NavBtnList />
      <div class="gnb-right">
        <ul class="log-in" v-if="teamStore.isLoggedin">
          <li>공지사항</li>
          <li>이용안내</li>
          <li class="my-page">
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
            <ul>
              <li>
                <button @click="teamStore.logout()">
                  로그아웃
                </button>
              </li>
              <li>
                <button @click="teamStore.logout()">
                  로그아웃
                </button>
              </li>
              <li>
                <button @click="teamStore.logout()">
                  로그아웃
                </button>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="log-out" v-if="!teamStore.isLoggedin">
          <li>
            <button @click="$router.push(`/login`)">
              로그인
            </button>
          </li>
          <li>
            <button @click="$router.push(`/signup`)">
              회원가입
            </button>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import NavBtnList from "./NavBtnList.vue";
import { mapStores } from "pinia";
import { useTeamStore } from "../store/store";
export default {
  components: {
    NavBtnList,
  },
  computed: {
    ...mapStores(useTeamStore),
  },
};
</script>

<style scoped lang="scss">
header {
  position: fixed;
  width: 100%;
  .inner {
    height: 68px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1044px;
    margin: 0 auto;
    .logo {
      font-size: 20px;
    }
  }
  .gnb-right {
    ul {
      display: flex;
      align-items: center;
      li {
        margin-right: 12px;
      }
    }
    ul.log-in {
      li.my-page {
        position: relative;
        ul {
          flex-direction: column;
          position: absolute;
          right: 0;
          top: 62px;
          width: 250px;
          padding: 18px 12px;
          li {
            background-color: #d9d9d9;
            width: 100%;
            text-align: center;
            border-radius: 6px;
            margin-bottom: 10px;
          }
          li:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
    ul.log-out {
      li {
        width: 76px;
        height: 28px;
        border-radius: 6px;
        padding: 13px 0;
        background-color: #d9d9d9;
        display: flex;
        justify-content: center;
        align-items: center;
        button {
          color: #fff;
          font-size: 14px;
        }
      }
      li:last-child {
        background-color: #ed234b;
      }
    }
  }
}
</style>
