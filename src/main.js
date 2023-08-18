import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "@/router";
import "./assets/css/tailwind.css";
import "./assets/css/styles.css";
import { SetupCalendar, Calendar, DatePicker } from "v-calendar";

const app = createApp(App);

// Use the components
app.component("Calendar", Calendar);
app.component("DatePicker", DatePicker);

app.use(SetupCalendar, {});
app.use(router);
app.use(createPinia());

app.mount("#app");
