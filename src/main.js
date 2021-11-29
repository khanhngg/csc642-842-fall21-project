import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/global.css";
import VueGoogleMaps from '@fawmi/vue-google-maps'

// Assign app to a variable
let app = createApp(App);

// Google maps
app.use(VueGoogleMaps, {
  load: {
      key: 'AIzaSyC4Dwl-tqT4jJ8F8FxIw0ALr9yxxoXI0MI',
  },
})

// Use router and mount app
app.use(router).mount("#app");
