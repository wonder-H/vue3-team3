import { defineStore } from "pinia";
import axios from "axios";

export const useTeamStore = defineStore("team", {
  state: () => ({
    userAllTransactions: [],
    adminAllTransactions: [],
    token: localStorage.getItem("token"),
    displayName: "아직 로그인 안됨",
    code: "",
    banks: [],
    accounts: {},
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

  actions: {
    //////////////////////////////////인증//////////////////////////////////

    // 회원가입
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
    },

    //인증 확인

    //로그아웃

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

    // 제품 추가(관리자)
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

    // 제품 수정(관리자)

    // async updateProduct() {
    //   const res = await axios({
    //     url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/:productId",
    //     method: "PUT",
    //     headers: {
    //       "content-type": "application/json",
    //       apikey: "FcKdtJs202204",
    //       username: "team3",
    //       masterKey: true,
    //     },
    //     data: {
    //       id: "nbqtQvEivYwEXTDet7YM",
    //       title: "MacBook Pro 16",
    //       price: 1500,
    //       description:
    //         "역대 가장 강력한 MacBook Pro가 등장했습니다. 최초의 프로용 Apple Silicon인 M1 Pro 또는 M1 Max 칩을 탑재해 쏜살같이 빠른 속도는 물론, 획기적인 성능과 놀라운 배터리 사용 시간을 자랑하죠. 여기에 시선을 사로잡는 Liquid Retina XDR 디스플레이, Mac 노트북 사상 최고의 카메라 및 오디오 그리고 더할 나위 없이 다양한 포트까지. 기존 그 어떤 카테고리에도 속하지 않는 노트북. 새로운 MacBook Pro는 그야말로 야수입니다.",
    //       tags: ["가전", "노트북", "컴퓨터"],
    //       thumbnail:
    //         "https://storage.googleapis.com/heropy-api/vIKMk_jy4Yv195256.png",
    //       photo:
    //         "https://storage.googleapis.com/heropy-api/voihKb3NLGcv195257.png",
    //       isSoldOut: false,
    //     },
    //   });

    //   console.log(res);
    // },

    // 제품 삭제(관리자)

    /////////////////// 제품(공용 or 사용자) ////////////////////////////

    // 단일 제품 상세 조회(공용)

    // 제품 검색(사용자 전용)

    // 제품 거래(구매) 신청(사용자 전용)      /////////////////////미완성

    async buyProduct() {
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
          productId: "Ngtd1YBkYRPVmkERU6Zd",
          accountId: "5FhpH6zwDXLvwMDKMrSP",
          reservation: {
            start: "2021-11-12T06:00:00.000Z",
            end: "2021-11-12T07:00:00.000Z",
          },
        },
      });

      console.log(res);
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

    // 단일 제품 상세 거래(구매) 내역(사용자 전용)

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
          bankCode: "089",
          accountNumber: "123456789012",
          phoneNumber: "01012345678",
          signature: true,
        },
      });

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
