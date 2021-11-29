import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/global.css";

// 1. Assign app to a variable
let app = createApp(App)

// 2. Assign the global variable before mounting
app.config.globalProperties.GoogleReCaptcha = window.grecaptcha

// 3. Use router and mount app
app.use(router).mount('#app')