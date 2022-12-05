import { createRouter, createWebHistory } from "vue-router";

import create from "./components/create.vue";
import customersinfo from "./components/customersinfo.vue";
import editcustomer from "./components/editcustomer.vue";

const routes = [
  { path: "/create", name: "create", component: create },
  { path: "/customersinfo", name: "customersinfo", component: customersinfo },
  { path: "/editcustomer", name: "editcustomer", component: editcustomer },
];

const router = createRouter({
  routes,
  history: createWebHistory("/"),
});

export default router;
