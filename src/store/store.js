import { defineStore } from "pinia";
import axios from "axios";

export const useTeamStore = defineStore("team", {
  state: () => ({
    //글자 원본
    products: [],
    columns: [
      {
        field: "index",
        name: "상품번호",
        width: 100,
      },
      { field: "title", name: "제목", width: 200 },
      { field: "price", name: "가격", width: 200 },
      { field: "description", name: "설명", width: 200 },
      { field: "isSoldOut", name: "매진", width: 100 },
    ],
    //글자 원본
    message:
      "이 메시지가 보인다면 스토어의 데이터를 잘 받아온 것입니다",
  }),

  actions: {
    async signUp(email, password, displayName) {
      const res = await axios({
        url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/signup",
        method: "POST",
        headers: {
          "content-type": "application/json",
          apikey: "FcKdtJs202204",
          username: "team3",
        },
        data: {
          email,
          password,
          displayName,
        },
      });
      console.log("회원가입 결과 및 토큰", res);
      localStorage.setItem("token", res.data.accessToken);
    },

    // 아이디 기억 email: "qkrwlgns@gmail.com"
    // password: "1234567890"

    async login(email, password) {
      const res = await axios({
        url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/login",
        method: "POST",
        headers: {
          "content-type": "application/json",
          apikey: "FcKdtJs202204",
          username: "team3",
        },
        data: {
          email,
          password,
        },
      });

      console.log("로그인 결과 및 토큰", res);

      localStorage.setItem("token", res.data.accessToken);
    },

    async addProduct(title, price, description) {
      const res = await axios({
        url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/products",
        method: "POST",
        headers: {
          "content-type": "application/json",
          apikey: "FcKdtJs202204",
          username: "team3",
          masterKey: true,
        },
        data: {
          title,
          price,
          description,
        },
      });

      console.log(res);
    },

    async allProducts() {
      const res = await axios({
        url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/products",
        method: "GET",
        headers: {
          "content-type": "application/json",
          apikey: "FcKdtJs202204",
          username: "team3",
          masterKey: true,
        },
      });

      this.products = res.data;

      console.log(res.data);
    },

    // async addAccount() {
    //   const res = await axios({
    //     url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/account",
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //       apikey: "FcKdtJs202204",
    //       username: "team3",
    //       masterKey: true,
    //     },
    //   });

    //   this.products = res.data;

    //   console.log(res.data);
    // },
  },
  getters: {},
});
