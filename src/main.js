import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

const pinia = createPinia();
pinia.use(({ store }) => {
  // store.$router = markRaw(router);
});

createApp(App).use(pinia).use(router).mount("#app");
