import { defineStore } from "pinia";
import axios from "axios";

export const useTeamStore = defineStore("team", {
  state: () => ({
    selectedRegion: "서울",
    isLoggedin: false,
    searchResults: [],
    userAllTransactions: [],
    adminAllTransactions: [],
    token: localStorage.getItem("token"),
    displayName: "아직 로그인 안됨",
    code: "",
    banks: [],
    accounts: {},
    thatproduct: {},
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
  }),

  // getters: {
  //   getTheToken(state) => state.token ,  /////// 토큰 getItem 문제 처리
  // },

  actions: {
    //////////////////////////////////인증//////////////////////////////////

    // 회원가입
    async signUp(
      email,
      password,
      displayName,
      profileImgBase64,
    ) {
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
          profileImgBase64,
        },
      });
      console.log("회원가입 결과 및 토큰", res);
      localStorage.setItem("token", res.data.accessToken);
      localStorage.setItem(
        "nickName",
        res.data.user.displayName,
      );
    },

    //로그인
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

      localStorage.setItem("token", res.data.accessToken);
      console.log("로그인 결과 및 토큰", res);
      localStorage.setItem(
        "nickName",
        res.data.user.displayName,
      );
      this.isLoggedin = true;
    },

    //인증 확인

    //로그아웃

    async logout() {
      const res = await axios({
        url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/logout",
        method: "POST",
        headers: {
          "content-type": "application/json",
          apikey: "FcKdtJs202204",
          username: "team3",
          Authorization: `Bearer ${this.token}`,
        },
      });
      console.log(res.data);
      localStorage.removeItem("token");
      this.isLoggedin = false;
    },

    //사용자 정보 수정

    async updateInfo(
      displayName,
      oldPassword,
      newPassword,
    ) {
      const res = await axios({
        url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/user",
        method: "PUT",
        headers: {
          "content-type": "application/json",
          apikey: "FcKdtJs202204",
          username: "team3",
          Authorization: `Bearer ${this.token}`,
        },
        data: {
          displayName,

          oldPassword,
          newPassword,
        },
      });
      console.log(res.data);
      localStorage.setItem(
        "nickName",
        res.data.displayName,
      );
    },

    /////////////////////////////////제품(관리자)////////////////////////////////

    // 모든 제품 조회
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

    //전체 거래(판매) 내역(관리자)

    async showAdminAllTransactions() {
      const res = await axios({
        url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/transactions/all",
        method: "GET",
        headers: {
          "content-type": "application/json",
          apikey: "FcKdtJs202204",
          username: "team3",
          masterKey: true,
        },
      });

      console.log(res.data);
      this.adminAllTransactions = res.data;
    },

    //거래(판매) 내역 완료/취소 및 해제(관리자)

    async transactionCompleteAndCancel(
      id,
      isCanceled,
      done,
    ) {
      const res = await axios({
        url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/transactions/${id}`,
        method: "PUT",
        headers: {
          "content-type": "application/json",
          apikey: "FcKdtJs202204",
          username: "team3",
          masterKey: true,
        },
        data: {
          isCanceled,
          done,
        },
      });

      console.log(res);
    },

    // 제품 추가(관리자)
    async addProduct(
      title,
      price,
      description,
      tags,
      thumbnailBase64,
      photoBase64,
    ) {
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
          tags,
          thumbnailBase64,
          photoBase64,
        },
      });

      console.log(res.data);
    },

    // 제품 수정(관리자)

    async updateProduct(
      id,
      title,
      price,
      description,
      tags,
      thumbnail,
      photo,
      isSoldOut,
    ) {
      const res = await axios({
        url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/${id}`,
        method: "PUT",
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
          tags,
          thumbnail,
          photo,
          isSoldOut,
        },
      });

      console.log(res);
    },

    // 제품 삭제(관리자)

    async deleteProduct(id) {
      const res = await axios({
        url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/${id}`,
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          apikey: "FcKdtJs202204",
          username: "team3",
          masterKey: true,
        },
      });

      console.log(res);
      console.log("단일제품의 ID:", id);

      this.thatproduct = res.data;
      this.allProducts();
    },

    //////////////////////////////////// 제품(공용 or 사용자) ///////////////////////////////

    // 단일 제품 상세 조회(공용)

    async readProduct(id) {
      const res = await axios({
        url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/${id}`,
        method: "GET",
        headers: {
          "content-type": "application/json",
          apikey: "FcKdtJs202204",
          username: "team3",
        },
      });

      console.log(res.data);
      console.log("단일제품의 ID:", id);

      this.thatproduct = res.data;
    },

    // 제품 검색(사용자 전용 ) // 메인리스트 슬라이더 및 사용자가 상품을 조회하는 용도

    async searchProducts(searchText, searchTags) {
      const res = await axios({
        url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/search",
        method: "POST",
        headers: {
          "content-type": "application/json",
          apikey: "FcKdtJs202204",
          username: "team3",
        },
        data: {
          searchText,
          searchTags,
        },
      });

      console.log(res.data);

      this.searchResults = res.data;
    },

    // 제품 거래(구매) 신청(사용자 전용)      /////////////////////미완성

    async buyProduct(productId, accountId) {
      const res = await axios({
        url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/buy",
        method: "POST",
        headers: {
          "content-type": "application/json",
          apikey: "FcKdtJs202204",
          username: "team3",
          Authorization: `Bearer ${this.token}`,
        },
        data: {
          productId,
          accountId,
          reservation: {
            start: "2021-11-12T06:00:00.000Z",
            end: "2021-11-12T07:00:00.000Z",
          },
        },
      });

      console.log(res.data);
    },

    // 제품 거래(구매) 취소(사용자 전용)

    // 제품 거래(구매) 확정(사용자 전용)

    // 제품 전체 거래(구매) 내역(사용자 전용)

    async showUserAllTransactions() {
      const res = await axios({
        url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/transactions/details",
        method: "GET",
        headers: {
          "content-type": "application/json",
          apikey: "FcKdtJs202204",
          username: "team3",
          Authorization: `Bearer ${this.token}`,
        },
      });

      this.userAllTransactions = res.data;
      console.log(res.data);
    },

    // 단일 제품 상세 거래(구매) 내역(사용자 전용임)

    async readTransaction(id) {
      const res = await axios({
        url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/transactions/detail",
        method: "POST",
        headers: {
          "content-type": "application/json",
          apikey: "FcKdtJs202204",
          username: "team3",
          Authorization: `Bearer ${this.token}`,
        },
        data: {
          detailId: id,
        },
      });

      console.log(res.data);
    },

    /////////////////////////////////// 계좌 /////////////////////////////////

    // 선택 가능한 은행 목록 조회
    async showBanks() {
      const res = await axios({
        url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/account/banks",
        method: "GET",
        headers: {
          "content-type": "application/json",
          apikey: "FcKdtJs202204",
          username: "team3",
          Authorization: `Bearer ${this.token}`,
        },
      });

      console.log(res.data);
      this.banks = [...res.data];
      console.log("스토어의 banks", this.banks);
    },

    //계좌 목록 및 잔액 조회

    async showAccounts() {
      const res = await axios({
        url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/account",
        method: "GET",
        headers: {
          "content-type": "application/json",
          apikey: "FcKdtJs202204",
          username: "team3",
          Authorization: `Bearer ${this.token}`,
        },
      });

      console.log(res.data);
      this.accounts = { ...res.data };
    },

    // 계좌 연결
    async addAccount(
      bankCode,
      accountNumber,
      phoneNumber,
      signature,
    ) {
      const res = await axios({
        url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/account",
        method: "POST",
        headers: {
          "content-type": "application/json",
          apikey: "FcKdtJs202204",
          username: "team3",
          Authorization: `Bearer ${this.token}`,
        },
        data: {
          bankCode,
          accountNumber,
          phoneNumber,
          signature,
        },
      });
      this.showBanks();
      console.log(res.data);
    },

    // 계좌 해지

    async deleteAccount(id) {
      const res = await axios({
        url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/account ",
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          apikey: "FcKdtJs202204",
          username: "team3",
          Authorization: `Bearer ${this.token}`,
        },
        data: {
          accountId: id,
          signature: true,
        },
      });

      this.showAccounts();

      console.log("삭제 여부", res.data);
    },
  },
  getters: {},
});
