import { createApp } from "vue";
import App from "./App.vue";
import { firestorePlugin } from "vuefire";
import router from "./router";

createApp(App)
  .use(firestorePlugin)
	.use(router)
  .mount("#app");
