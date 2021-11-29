import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/global.css";

// Assign app to a variable
let app = createApp(App);

// Use router and mount app
app.use(router).mount("#app");
