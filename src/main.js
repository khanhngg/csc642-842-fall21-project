import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/global.css";
import VueRecaptcha from "vue3-recaptcha-v2";

// 1. Assign app to a variable
let app = createApp(App)

// 2. Use captcha
app.use(VueRecaptcha, { siteKey: "6LeqNGYdAAAAAI_amzuLJYS6-Eb9NdtNXdpibR6l" })

// 3. Use router and mount app
app.use(router).mount('#app')