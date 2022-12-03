import create from "./components/create.vue";
import customersinfo from "./components/customersinfo.vue";
import editcustomer from "./components/editcustomer.vue";

const router = [
  { path: "/create", component: create, name: "create" },
  { path: "/customersinfo", component: customersinfo, name: "customersinfo" },
  { path: "/editcustomer", component: editcustomer, name: "editcustomer" }
];

export default router;
