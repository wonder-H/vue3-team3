import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import { createPinia } from "pinia";
import loadImage from "./loadImage";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./reset.css";
import "./main.css";
import "swiper/scss";

const pinia = createPinia();
pinia.use(({ store }) => {
  // store.$router = markRaw(router);
});

createApp(App)
  .use(pinia)
  .use(loadImage)
  .use(router)
  .mount("#app");
