import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import { createPinia } from "pinia";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./reset.css";
import "./main.css";

// import Swiper, { Navigation, Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

import Swiper from "swiper";
// import "swiper/css/bundle";

const pinia = createPinia();
pinia.use(({ store }) => {
  // store.$router = markRaw(router);
});

import { Navigation, Pagination, Scrollbar } from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const swiper = new Swiper(".swiper", {
  // direction: "vertical",
  // loop: true,
  // pagination: {
  //   el: ".swiper-pagination",
  // },
  // // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
  speed: 400,
  // spaceBetween: 100,
  modules: [Navigation, Pagination, Scrollbar],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

createApp(App)
  .use(swiper)
  .use(pinia)
  .use(router)
  .mount("#app");
