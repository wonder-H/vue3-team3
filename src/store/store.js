import { defineStore } from "pinia";
import axios from "axios";

export const useTeamStore = defineStore("team", {
  state: () => ({
    //글자 원본
    products: [
      {
        id: "cFmeC7aY5KjZbBAdJE9y",
        title: "삼성전자 스마트모니터 M7 S43AM700",
        price: 639000,
        description:
          "107.9cm(43인치) / 와이드(16:9) / 평면 / VA / 3840 x 2160(4K UHD) / 픽셀피치: 0.2451mm / 8ms(GTG) / 300cd / 5,00",
        tags: ["가전", "모니터", "컴퓨터"],
        thumbnail:
          "https://storage.googleapis.com/heropy-api/vBAK4MQdH5v195712.png",
        isSoldOut: false,
      },
      {
        id: "nbqtQvEivYwEXTDet7YM",
        title: "MacBook Pro 16",
        price: 3360000,
        description:
          "역대 가장 강력한 MacBook Pro가 등장했습니다. 최초의 프로용 Apple Silicon인 M1 Pro 또는 M1 Max 칩을 탑재해 쏜살같이 빠른 속도는 물론, 획기적인 성",
        tags: ["가전", "노트북", "컴퓨터"],
        thumbnail:
          "https://storage.googleapis.com/heropy-api/vIKMk_jy4Yv195256.png",
        isSoldOut: false,
      },
    ],
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
    async signUp() {
      const res = await axios({
        url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/signup",
        method: "POST",
        headers: {
          "content-type": "application/json",
          apikey: "FcKdtJs202204",
          username: "Team3",
        },
      });
    },
  },
  getters: {},
});
