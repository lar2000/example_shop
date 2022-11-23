
import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";

import Widget from "./components/Widget.vue"

require('./bootstrap');

const app = createApp(App);
app.component('Widget',Widget);
app.use(router);
app.mount("#app-vue");
