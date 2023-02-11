import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from "./store"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faShoppingCart, faUser);

createApp(App)
  .use(router)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
